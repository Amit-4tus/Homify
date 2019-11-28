<template>
  <div class="home">
    <home-page-top-fold></home-page-top-fold>
    <h2 class="specialPicksHeader">Special Top Picks:</h2>
    <houseList class="specialPicks" isTopPicList="true"></houseList>
  </div>
</template>

<script>
import homePageTopFold from '../components/HomePageTopFold'
import houseList from '../components/HouseList'
export default {
  name: "home",
  created() {
    this.$store.dispatch("loadItems");
  },
  components: {
    homePageTopFold,
    houseList
  }
};
</script>
