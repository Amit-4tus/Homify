<template>
  <div class="houses">
    <house-list></house-list>

   
        <g-map v-if="showMap"  :coords="coords" class="listMap"></g-map>

  </div>
</template>

<script>
import houseList from "../components/HouseList.vue";
import gMap from "@/components/GMap";

export default {
  data() {
    return {
      // coords: { lat: 48.856614, lng: 2.3522219 }
      coords:null,
    
      showMap:false,
    
    };
  },
  async mounted() {
    let filter = this.$route.params.q;
    await this.$store.dispatch("loadItems", filter);
    await this.$store.dispatch("loadCoords");
    this.coords=await this.$store.getters.coords[1]
    this.marker= this.$store.getters.coords
    
    
    this.showMap=true
    var elMyHeader = document.querySelector(".my-header");
    if (!elMyHeader) {
      var elMyHeader = document.querySelector(".my-header");
    }
    elMyHeader.classList.add("fixed");
  },
  created() {
   
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