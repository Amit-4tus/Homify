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
  },
  methods: {
    doReserve() {
      this.$router.push('/order')
    }
  }
};
</script>