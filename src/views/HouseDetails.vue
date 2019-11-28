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
  </div>
 
</template>

<script>
export default {
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
  }
};
</script>