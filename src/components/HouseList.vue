<template>
  <div class="item-details">
   <router-link :to="`/house/${item._id}`" v-for="(item, idx) in items" :key="idx">
    <house-preview :itemData="item" ></house-preview>
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
  methods: {
    goToHouseDetails(_id) {
      console.log(_id);
      // this.$router.push({path:'/house', query: {_id}})
      }
  },
  components: {
    HousePreview
  }
};
</script>