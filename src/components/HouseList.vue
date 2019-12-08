<template>
  <div>
    <div class="houseList" v-if="items">
      <router-link
        :to="`/house/details/house/${item._id}`"
        v-for="(item, idx) in items"
        :key="idx"
        class="housePreviewLink"
      >
        <house-preview :itemData="item"></house-preview>
      </router-link>
      <img class="logo" src="../assets/logo.png" @click="scrollToTop" />
    </div>
    <h4 v-if="items.length === 0">No Results Found</h4>
  </div>
</template>

<script>
import HousePreview from "./HousePreview";
export default {
  props: ["isTopPicList"],
  created() {
    this.scrollToTop();
  },
  computed: {
    items() {
      return this.$store.getters.itemsToShow;
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  components: {
    HousePreview
  }
};
</script>