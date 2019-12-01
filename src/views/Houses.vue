<template>
  <div class="houses">
    <house-list></house-list>
    <g-map v-if="coords" :coords="coords" class="listMap"></g-map>
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
  mounted() {
    let filter = this.$route.params.q;
    this.$store.dispatch("loadItems",filter);
    var elMyHeader = document.querySelector(".my-header");
    if (!elMyHeader) {
      var elMyHeader = document.querySelector(".my-header");
    }
    elMyHeader.classList.add("fixed");
  },
  components: {
    houseList,
    gMap
  },
  destroyed() {
    document.querySelector(".my-header").classList.remove("fixed");
  }
};
</script>