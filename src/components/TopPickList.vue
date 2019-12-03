<template name="topPickList">
  <section>
    <router-link :to="`/house/details/${home._id}`" v-for="(home, idx) in homes" :key="idx" class="housePreviewLink">
      <house-preview :itemData="home"></house-preview>
    </router-link>
  </section>
</template>


<script>
import HousePreview from "./HousePreview";
export default {
  props: ["isTopPicList"],
  data() {
    return {};
  },
  computed: {
    homes() {
      return this.$store.getters.itemsToShow;
    }
  },
  methods: {},
  components: {
    HousePreview
  }
};
</script>