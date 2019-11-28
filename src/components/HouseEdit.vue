<template>
  <div>
    <h2>Name</h2>
    <input v-model="newHouse.name" type="text" />
    <h2>Price</h2>
    <input v-model="newHouse.price" type="number" />
    <h2>Address</h2>
    <input @change="getCoords" v-model="newHouse.location.address" type="text" />
    <h2>description</h2>
    <textarea v-model="newHouse.desc"></textarea>
    <h2>Amenities</h2>
    <el-select v-model="newHouse.amentities" multiple placeholder="Select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <h2>upload images</h2>
    <el-upload
      class="upload-demo"
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
      <el-button size="small" type="primary">Click to upload</el-button>
      <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </el-upload>
    <el-button
      style="margin-left: 10px;"
      size="small"
      type="success"
      @click="submitUpload"
    >upload to server</el-button>
    <pre>{{newHouse}}</pre>
  </div>
</template>

<script>
import { uploadImg } from "../services/CloudinaryService.js";
import { geoService } from "../services/GeoService.js";
// import { async } from "q";

export default {
  data() {
    return {
      newHouse: {
        imgs: [],
        location: {
          coords: "",
          address: ""
        }
      },
      options: [
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
      ],
      value1: [],
      value2: [],
      fileList: []
    };
  },
  computed: {},
  methods: {
    handleRemove(file, fileList) {
      var filterd = this.fileList.filter(img => img.uid !== file.uid);
      this.fileList = filterd;
    },
    handlePreview(file) {
      // console.log(file);
    },
    onChange(file, fileList) {
      this.fileList.push(file.raw);
      // console.log(fileList);
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
      imgUrls.forEach(img => {
        this.newHouse.imgs.push(img.url);
      });
      return imgUrls;
    },
    async getCoords() {
      var address=this.newHouse.location.address;
      var res = await geoService.query(address);

      this.newHouse.location.coords = res[0].geometry.location;
      // return (this.coords = res[0].geometry.location);
    }
  }
};
</script>