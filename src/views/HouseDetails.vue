<template>
  <div class="item-details">
    <div class="houseInfo"></div>
    <img  class="houseImage" :src="houseData.imgs[0]">
   
  </div>
 
</template>

<script>
// import { eventBus } from '../services/eventBusService'
export default {
  created() {
    this.$store.dispatch("loadHouseById", this._id);
  },
  computed: {
    _id() {
      return this.$route.params._id;
    },
    houseData() {
      return this.$store.getters.currHouse;

    }
  }
};
</script>