<template>
  <div class="itemList">
    <router-link :to="`/house/${item._id}`" v-for="(item, idx) in items" :key="idx" class="housePreviewLink">
      <house-preview :itemData="item"></house-preview>
    </router-link>
  </div>
</template>

<script>
import HousePreview from "./HousePreview";
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.itemsToShow;
    }
  },
  methods: {},
  components: {
    HousePreview
  }
};
</script>