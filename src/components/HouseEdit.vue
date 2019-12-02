<template>
  <div>
    <section class="add-house-page">

    <section class="add-house-page-left">
    <section class="add-house-step-container">

    <div class="add-house-welcome-text-1">Hi, __________! Let's get started</div>
    <div class="add-house-welcome-text-2">listing your space</div>

    <p class="add-house-step bold">step 1</p>

    <p class="add-house-name-of-house-text">How would you like to name your place?</p>
     <input class="add-house-name-input" v-model="newHouse.name" 
            type="text" maxlength="50"/>
     <div class="when">
      From:
      <input :min="dateMin" v-model="newHouse.dates.from" type="date" />
      To:
      <input :min="dateMin" v-model="newHouse.dates.to" type="date" />
    </div>

    <p class="add-house-address-text">Where is your place located?</p>
    <div class="add-house-location-container">
          <input class="add-house-address-input" @change="getCoords" 
                v-model="newHouse.location.address.country" type="text" placeholder="Country"/>
      
          <input class="add-house-address-input" @change="getCoords" 
                v-model="newHouse.location.address.city" type="text" placeholder="City"/>
     
          <input class="add-house-address-input" @change="getCoords" 
                v-model="newHouse.location.address.street" type="text" placeholder="Street"/>
    </div>
    </section>
    
    <section class="add-house-step-container flex-column">

      <p class="add-house-step bold">step 2</p>
      <p class="add-house-charge-per-night-text">What will be the Dollar cost per night?</p>

      <input class="add-house-price-input" v-model="newHouse.price" type="number"/>

      <p class="add-house-amenities-text">What amenities do you offer?</p>
        <el-select class="add-house-amenities-input" v-model="newHouse.amentities" multiple placeholder="Please select">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>

      <p class="add-house-step bold">step 3</p>

      <p class="add-house-Upload-image-text">Show us how does your place looks like?</p>
      <el-upload
    
      action
      submit="submit"
      :auto-upload="false"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :show-file-list="true"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :on-change="onChange"
    >
      <el-button size="x-large" type="primary">Upload images</el-button>
      <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </el-upload>
    <el-button
     
      size="small"
      type="success"
      @click="submitUpload"
    >Add images</el-button>
    <!-- <pre>{{newHouse}}</pre> -->
    <button @click="addHouse">Add house</button>
    <button v-if="isEditing" @click="updateHouse">Update</button>
    <button v-if="isEditing" @click="deleteHouse">Delete</button>
    </section>
    </section>
    <!-- <img class="flowers-img" src="../assets/imgs/vase.png"/> -->

    <!-- <section class="add-house-step-container-right"> -->
  
      <!-- </section> -->

    </section>


    <!-- <h2>description</h2>
    <textarea v-model="newHouse.desc"></textarea> -->
    
    
    
    
    
    
  </div>
</template>

<script>
import { uploadImg } from "../services/CloudinaryService.js";
import { geoService } from "../services/GeoService.js";

export default {
  data() {
    return {
      doneUpload: false,
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
      if (!this.doneUpload) return console.log("imgs is required");
      this.newHouse.hostId = this.$store.getters.loggedinUser._id;

      const house = await this.$store.dispatch({
        type: "addHouse",
        newHouse: this.newHouse
      });
      this.$router.push(`/house/deatils/${house._id}`);
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
          },
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
          value: "Wifi",
          label: "Wifi"
        },
        {
          value: "Kitchen",
          label: "Kitchen"
        },
        {
          value: "Shower",
          label: "Shower"
        },
        {
          value: "Parking",
          label: "Parking"
        },
        {
          value: "Elevator",
          label: "Elevator"
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