<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>google map</h2>
    <g-map v-if="coords" :coords="coords" class="flex align-center flex-column"></g-map>
    <h1>Search address</h1>
    <input v-model="str" type="text" />
    <button @click="search">search</button>
    <span>{{coords}}</span>
    <calendar />
    <house-edit />
  </div>
</template>

<script>
import gMap from "@/components/GMap";
import calendar from "@/components/CalendarDate";
import houseEdit from "@/components/HouseEdit";
import { geoService } from "../services/GeoService.js";
import userService from "../services/UserService.js";

export default {
  name: "About",

  data() {
    return {
      coords: null,
      str: "",
      items: []
    };
  },

  methods: {
    async search() {
      var res = await geoService.query(this.str);
      return (this.coords = res[0].geometry.location);
    }
  },

  created() {},

  components: {
    gMap,
    calendar,
    houseEdit
  }
};
</script>