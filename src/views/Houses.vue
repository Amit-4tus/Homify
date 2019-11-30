<template>
  <div class="houses">
    <house-list></house-list>
    <g-map v-if="coords" :coords="coords" class="listMap gmap flex align-center flex-column"></g-map>
  </div>
</template>

<script>
import houseList from "../components/HouseList.vue";
import gMap from "@/components/GMap";

export default {
  data() {
    return {
      coords: { lat: 48.856614, lng: 2.3522219 }
    };
  },
  created() {
    this.$store.dispatch("loadItems");
  },
  components: {
    houseList,
    gMap
  }
};
</script>