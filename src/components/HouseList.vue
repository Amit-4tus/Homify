<template>
  <div>
    <div class="houseList" v-if="items">
      <router-link
        :to="`/house/details/${item._id}`"
        v-for="(item, idx) in items"
        :key="idx"
        class="housePreviewLink"
      >
        <house-preview :itemData="item"></house-preview>
      </router-link>
    </div>
    <h4 v-if="items.length === 0">No Results Found</h4>
  </div>
</template>

<script>
import HousePreview from "./HousePreview";
export default {
  props: ["isTopPicList"],
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