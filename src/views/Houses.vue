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
      coords: null,
      marker: null,
      showMap: false
    };
  },

  async mounted() {
    let query = this.$route.params.q;
    let date = this.$route.params.d;
    const filterBy = {
      txt: query,
      date: date
    };
    await this.$store.dispatch("loadItems", filterBy);
    await this.$store.dispatch("loadCoords");
    this.coords = await this.$store.getters.coords[0];
    this.marker = this.$store.getters.coords;
    this.showMap = true;
    var elMyHeader = document.querySelector(".my-header");
    elMyHeader.classList.add("fixed");
  },

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