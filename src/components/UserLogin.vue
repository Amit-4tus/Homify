<template>
  <div class="signInCmp">
    <div v-if="loggedinUser">
      <h3>
        Loggedin User:
        {{loggedinUser.username}}
        <form @submit.prevent="updateUser"></form>
        <button class="logOutBtn" @click="doLogout">Logout</button>
      </h3>
    </div>
    <div v-else>
      <h2>One Small Step To Your Dream Vacation</h2>
      <form @submit.prevent="doLogin">
        <input type="text" v-model="loginCred.email" placeholder="Email" />
        <br />
        <input type="text" v-model="loginCred.password" placeholder="Password" />
        <br />
        <button class="submit">Log-In</button>
      </form>
      <br />

      <form @submit.prevent="doSignup">
        <input type="text" v-model="signupCred.email" placeholder="Email" />
        <br />
        <input type="text" v-model="signupCred.password" placeholder="Password" />
        <br />
        <input type="text" v-model="signupCred.username" placeholder="Username" />
        <br />
        <el-upload
          action
          submit="submit"
          :auto-upload="false"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :show-file-list="true"
          :before-remove="beforeRemove"
          multiple
          :limit="4"
          :on-exceed="handleExceed"
          :on-change="onChange"
        >
          <el-button size="x-large" type="primary">Upload image</el-button>
          <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
        <el-button size="small" type="success" @click="submitUpload">Add image</el-button>
        <button class="submit">Sign-Up</button>
      </form>
    </div>
    <p v-if="msg" class="error">{{msg}}</p>
  </div>
</template>

<script>
import SocketService from "../services/SocketService.js";
import { uploadImg } from "../services/CloudinaryService.js";

export default {
  name: "test",
  data() {
    return {
      fileList: [],
      loginCred: {},
      signupCred: { img: [] },
      msg: ""
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
  },
  methods: {
    async receiveOrder() {
      if (this.$store.getters.loggedinUser !== null) {
        let userId = this.$store.getters.loggedinUser._id;
        SocketService.on("get order details", hostId => {
          if (userId === hostId) {
            const msg = {
              txt: "Order Added check your profile",
              type: "error"
            };
            eventBus.$emit("show-msg", msg);
          }
        });

        SocketService.on("response order", result => {
          if (userId === result.userId) {
            var txtRes = "";
            if (result.res === "approved") txtRes = "Your order has been approved";
            if (result.res === "rejected") txtRes = "Your order has been rejected";

            const msg = {
              txt: txtRes,
              type: "error"
            };
            eventBus.$emit("show-msg", msg);
          }
        });
      }
    },
    async doLogin() {
      const cred = this.loginCred;
      if (!cred.email || !cred.password)
        return (this.msg = "Please enter user / password");
      await this.$store.dispatch({ type: "login", userCred: cred });
      this.receiveOrder();
      this.loginCred = {};
    },
    async doLogout() {
      await this.$store.dispatch({ type: "logout" });
      window.location.reload();
    },
    doSignup() {
      const cred = this.signupCred;
      console.log(cred);
      if (!cred.email || !cred.password || !cred.username)
        return (this.msg = "Please fill up the form");
      this.$store.dispatch({ type: "signup", userCred: cred });
      this.receiveOrder();
    },
    async submitUpload() {
      var imgUrls = await Promise.all(
        this.fileList.map(function(img) {
          return uploadImg(img);
        })
      );
      await imgUrls.forEach(img => {
        this.signupCred.img.push(img.url);
      });
      // this.doneUpload = true;
      console.log(this.signupCred);
      return imgUrls;
    },
    handleRemove(file, fileList) {
      var filterd = this.fileList.filter(img => img.uid !== file.uid);
      this.fileList = filterd;
    },
    handlePreview(file) {},
    onChange(file, fileList) {
      this.fileList.push(file.raw);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 3, you selected ${
          files.length
        } files this time, add up to ${files.length + fileList.length} totally`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`);
    }
  }
};
</script>