<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>google map</h2>
    <g-map :coords="coords" class="flex align-center flex-column"></g-map>

    <h1>Search address</h1>
    <input v-model="str" type="text" />
    <button @click="search">search</button>
    <span>{{coords}}</span>
    <button @click="panTo">map it!</button>
  </div>
</template>

<script>
import gMap from "@/components/gMap";
import { geoService } from "../services/geoService.js";

export default {
  name: "About",
  data() {
    return {
      coords: null,
      str: ""
    };
  },
  methods: {
    async search() {
      var res = await geoService.query(this.str);
      return (this.coords = res[0].geometry.location);

      console.log(res[0].geometry.location);
    },
    panTo(){
      
    }
  },

  components: {
    gMap
  }
};
</script>