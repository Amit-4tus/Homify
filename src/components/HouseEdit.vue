<template >
  <section class="add-house-page flex flex-row space-between">
    <form class="add-house-page-left" prevent>
      <div class="add-house-welcome-text-1">Add A House To Rent</div>

      <p class="add-house-step bold">step 1</p>

      <p class="add-house-name-of-house-text">How would you like to name your place?</p>
      <input
        class="add-house-name-input"
        v-model="newHouse.name"
        type="text"
        maxlength="50"
        placeholder="e.g. My Amazing House"
      />

      <p class="add-house-address-text">Where is your place located?</p>
      <input
        class="add-house-address-input"
        @change="getCoords"
        v-model="newHouse.location.address.country"
        type="text"
        placeholder="Country"
      />
      <input
        class="add-house-address-input"
        @change="getCoords"
        v-model="newHouse.location.address.city"
        type="text"
        placeholder="City"
      />

      <input
        class="add-house-address-input"
        @change="getCoords"
        v-model="newHouse.location.address.street"
        type="text"
        placeholder="Street"
      />

      <p class="add-house-step bold">step 2</p>
      <p class="add-house-charge-per-night-text">What will be the Dollar cost per night?</p>

      <input
        class="add-house-price-input"
        v-model="newHouse.price"
        type="number"
        placeholder="e.g. 234"
      />

      <p class="add-house-amenities-text">What amenities do you offer?</p>
      <el-select
        class="add-house-amenities-input"
        v-model="newHouse.amentities"
        multiple
        placeholder="Please select from the list"
        
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          
        ></el-option>
      </el-select>

      <p class="add-house-step bold">step 3</p>
      <div class="check-in">
        <p class="check-txt">Check-in</p>
        <input class="check-input" :min="dateMin" v-model="newHouse.dates.from" type="date" />
      </div>
      <div class="check-out">
        <p class="check-txt">Check-out</p>
        <input class="check-input" :min="dateMin" v-model="newHouse.dates.to" type="date" />
      </div>

      <p class="add-house-step bold">step 4</p>
      <p class="add-house-Upload-image-text">Show us how does your place look like?</p>
      <section class="upload-btns-container">
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
          <button class="upload-imgs-btn">Add images</button>
          <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </el-upload>
        <!-- <button v-if="fileList.length" class="upload-imgs-btn" @click.prevent="submitUpload">Upload images</button> -->
      </section>
      <section class="add-house-imgs-container flex flex-row justify-center space-between wrap">
        <div v-for="img in newHouse.imgs" :key="img.id">
          <img class="img-present" v-if="newHouse.imgs" :src="img" />
        </div>
      </section>

      <button class="add-house-btn" v-if="!isEditing" @click.prevent="addHouse">Add House</button>
      <button class="add-house-btn" v-if="isEditing" @click.prevent="updateHouse">Update</button>
      <button class="add-house-btn" v-if="isEditing" @click.prevent="deleteHouse">Delete</button>
    </form>

    <img
      class="bgi"
      src="https://img.archiexpo.com/images_ae/projects/images-g/nice-house-minarc-9996-9281453.jpg"
    />

    <!-- <h2>description</h2>
    <textarea v-model="newHouse.desc"></textarea>-->
  </section>
</template>

<script>
import { uploadImg } from "../services/CloudinaryService.js";
import { geoService } from "../services/GeoService.js";

export default {
  data() {
    return {
      doneUpload: false,
      imgUploaded: false,
      isEditing: false,
      newHouse: this.emptyHouse(),
      options: this.amenitiesOps(),
      value1: [],
      value2: [],
      fileList: []
    };
  },
  async created() {
    if (this.$route.params._id) {
      let id = this.$route.params._id;
      this.isEditing = true;
      const currHouse = await this.$store.dispatch("loadHouseById", id);
      // this.newHouse = JSON.parse(JSON.stringify(currHouse[0]));
      //server
      this.newHouse = JSON.parse(JSON.stringify(currHouse));
    }
  },
  computed: {},
  methods: {
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
    },
    async submitUpload() {
      var imgUrls = await Promise.all(
        this.fileList.map(function(img) {
          return uploadImg(img);
        })
      );
      await imgUrls.forEach(img => {
        this.newHouse.imgs.push(img.url);
        // console.log(this.newHouse.imgs[0])
      });
      this.doneUpload = true;
      return imgUrls;
    },
    async getCoords() {
      var res;
      var country = this.newHouse.location.address.country;
      var city = this.newHouse.location.address.city;
      var street = this.newHouse.location.address.street;
      var address = `${country} ${city} ${street}`;

      res = await geoService.query(address);
      this.newHouse.location.coords = res[0].geometry.location;
    },
    async addHouse() {
      await this.submitUpload();
      this.newHouse.hostId = this.$store.getters.loggedinUser._id;
      this.newHouse.hostImg = this.$store.getters.loggedinUser.img[0];
       this.newHouse.hostName = this.$store.getters.loggedinUser.username;
      const house = await this.$store.dispatch({
        type: "addHouse",
        newHouse: this.newHouse
      });
      this.$router.push(`/house/details/${house._id}`);
    },
    async updateHouse() {
      await this.$store.dispatch({ type: "updateHouse", house: this.newHouse });
      this.$router.push(`/house/details/${this.newHouse._id}`);
    },
    async deleteHouse() {
      await this.$store.dispatch({
        type: "deleteHouse",
        //server
        id: this.newHouse._id

        // id: this.newHouse.id
      });
      this.$router.push(`/`);
    },
    emptyHouse() {
      return {
        dates: {
          from: new Date().toDateString(),
          to: new Date().toDateString()
        },
        imgs: [],
        hostId: "",
        location: {
          coords: "",
          address: {
            street: "",
            city: "",
            country: ""
          }
        },
        reviews: {
          avgRating: 4.8,
          reviewsIds: []
        }
      };
    },
    amenitiesOps() {
      return [
        {
          value: "wifi",
          label: "Wifi"
        },
        {
          value: "kitchen",
          label: "Kitchen"
        },
        {
          value: "shower",
          label: "Shower"
        },
        {
          value: "parking",
          label: "Parking"
        },
        {
          value: "garden",
          label: "Garden"
        }
      ];
    }
  },

  computed: {
    dateMin() {
      var d = new Date(new Date()),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
  },
  watch: {
    $route() {
      location.reload();
    }
  }
};
</script>