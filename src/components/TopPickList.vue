<template name="topPickList">
  <section>
    <router-link :to="`/house/${home._id}`" v-for="(home, idx) in homes" :key="idx" class="housePreviewLink">
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
      return this.$store.getters.itemsToShow.slice(0, 4);
    }
  },
  methods: {},
  components: {
    HousePreview
  }
};
</script>