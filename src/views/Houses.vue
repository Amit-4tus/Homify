<template>
  <div class="houses">
    <house-list></house-list>

    <g-map v-if="showMap" :marker="marker" :coords="coords" class="listMap"></g-map>
  </div>
</template>

<script>
import houseList from "../components/HouseList.vue";
import gMap from "@/components/GMap";

export default {
  data() {
    return {
      // coords: { lat: 48.856614, lng: 2.3522219 }
      coords: null,
      marker: null,
      showMap: false
    };
  },
  async mounted() {
    let filter = this.$route.params.q;
    await this.$store.dispatch("loadItems", filter);
    await this.$store.dispatch("loadCoords");
    this.coords = await this.$store.getters.coords[0];
    this.marker = this.$store.getters.coords;
    console.log(this.marker);

    this.showMap = true;
    var elMyHeader = document.querySelector(".my-header");
    if (!elMyHeader) {
      var elMyHeader = document.querySelector(".my-header");
    }
  },
  created() {},
  computed: {},
  components: {
    houseList,
    gMap
  },
  destroyed() {
    document.querySelector(".my-header").classList.remove("fixed");
    this.$store.dispatch("resetCoords");
  }
};
</script>