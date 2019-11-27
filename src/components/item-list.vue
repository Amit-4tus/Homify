<template>
  <div class="item-details">
   <router-link :to="`/house/${item._id}`" v-for="(item, idx) in items" :key="idx">
    <item-preview :itemData="item" ></item-preview>
    </router-link>
  </div>
</template>

<script>
import itemPreview from "./item-preview";
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
    itemPreview
  }
};
</script>