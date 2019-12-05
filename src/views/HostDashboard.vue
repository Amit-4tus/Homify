<template>
  <section>
    <house-edit></house-edit>
  </section>
</template>

<script>
import { uploadImg } from "../services/CloudinaryService.js";
import houseEdit from "@/components/HouseEdit";

export default {
  data() {
    return {
      img: null
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  components: {
    houseEdit
  }
};
</script>