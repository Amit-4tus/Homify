<template>
  <div class="houses">
    <g-map v-if="coords" :coords="coords" class="gmap flex align-center flex-column"></g-map>
    <house-list></house-list>
  </div>
</template>
<style  scoped>
.gmap {
  position: fixed;
  right: 0;
}
</style>
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