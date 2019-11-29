<template>
  <section>
    <house-edit />
  </section>
</template>

<script>
import { uploadImg } from "../services/CloudinaryService.js";
import houseEdit from "@/components/HouseEdit";

export default {
  data() {
    return {};
  },
  created() {},
  computed: {},

  methods: {
    async handleFileChange() {
      const f = this.$refs.file.files[0];
      console.log(f);
      const resp = await uploadImg(f);
      console.log(resp);
      // const  allImages = await store.addImageToThisHouse(houseId, resp.url);
    }
  },
  components: {
    houseEdit
  }
};
</script>