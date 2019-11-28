<template>
  <div>
    <h2>Name</h2>
    <input type="text" />
    <h2>Price</h2>
    <input type="number" />
    <h2>description</h2>
    <textarea></textarea>
    <h2>Amenities</h2>
    <el-select v-model="value1" multiple placeholder="Select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    {{value1}}
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
      :file-list="fileList"
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
  </div>
</template>

<script>
import { uploadImg } from "../services/CloudinaryService.js";
import { async } from "q";

export default {
  data() {
    return {
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
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onChange(file) {
      this.fileList.push(file.raw);
      console.log(this.fileList);
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
      // const resp = uploadImg(img);
   
    var responseArray = await Promise.all(this.fileList.map(function(img) {
        return uploadImg(img);
    }));
    console.log(responseArray)
    return responseArray;
 
    }
  }
};
</script>