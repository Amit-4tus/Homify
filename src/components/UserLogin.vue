<template>
  <div class="about">
    {{msg}}
    <div v-if="loggedinUser">
      <h3>
        Loggedin User:
        {{loggedinUser.username}}
        <form @submit.prevent="updateUser"></form>
        <button @click="doLogout">Logout</button>
      </h3>
    </div>
    <div v-else>
      <form @submit.prevent="doLogin">
        <input type="text" v-model="loginCred.email" placeholder="Email" />
        <br />
        <input type="text" v-model="loginCred.password" placeholder="Password" />
        <br />
        <button>Login</button>
      </form>

      <form @submit.prevent="doSignup">
        <input type="text" v-model="signupCred.email" placeholder="Email" />
        <br />
        <input type="text" v-model="signupCred.password" placeholder="Password" />
        <br />
        <input type="text" v-model="signupCred.username" placeholder="Username" />
        <br />
        <button>Signup</button>
      </form>
    </div>
    <hr />
  </div>
</template>

<script>
import SocketService from "../services/SocketService.js";

export default {
  name: "test",
  data() {
    return {
      loginCred: {},
      signupCred: {},
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
  created() {
    console.log("this.loggedinUser", this.loggedinUser);
  },
  methods: {
    receiveOrder() {
      if (this.$store.getters.loggedinUser !== null) {
        let userId = this.$store.getters.loggedinUser._id;
        SocketService.on("get order details", order => {
          if (userId === order.hostId) {
            const msg = {
              txt: "Order Added check your profile",
              type: "error"
            };
            eventBus.$emit("show-msg", msg);
          }
        });
        SocketService.on("approve order", order => {
          console.log(order)
          if (userId === order) {
            const msg = {
              txt: "Your order has been approved",
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
        return (this.msg = "Please enter user/password");
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
      if (!cred.email || !cred.password || !cred.username)
        return (this.msg = "Please fill up the form");
      this.$store.dispatch({ type: "signup", userCred: cred });
        this.receiveOrder();
    }
  },
  watch: {}
};
</script>