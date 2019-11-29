<template>
  <div class="houseDetails">
    <section class="detailstopFold">
      <div v-if="!houseData" class="loading">Loading</div>
      <div v-if="houseData.name" class="houseGeneralInfo">
        <h1 class="houseTitle">{{houseData.name}}</h1>
      </div>
      <img v-if="houseData.imgs" class="houseMainImage" :src="houseData.imgs[0]" />
    </section>
    <p>{{houseData.desc}}</p>
    <button class="reserveBtn" @click="doReserve">Reserve</button>
    <h2>if you are the owner press the button</h2>
    <button @click="doEdit">Edit here</button>
    <g-map
      v-if="houseData.location.coords"
      :coords="houseData.location.coords"
      class="gmap flex align-center flex-column"
    ></g-map>
  </div>
</template>

<script>
import gMap from "@/components/GMap";

export default {
  data() {
    return {
      
    };
  },
  created() {
    this.$store.dispatch("loadHouseById", this._id);
  },
  computed: {
    _id() {
      return this.$route.params._id;
    },
    houseData() {
      let currHouse = this.$store.getters.currHouse;
      if (!currHouse) return null;
      return currHouse;
    }
  },
  methods: {
    doReserve() {
      this.$router.push("/order");
    },
    doEdit(){
       this.$router.push(`/host/${this._id}`); 
    }
  },
  components: {
    gMap
  }
};
</script>