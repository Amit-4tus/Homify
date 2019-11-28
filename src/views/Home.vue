<template>
  <div class="home">
    <home-page-top-fold></home-page-top-fold>
    <h2 class="specialPicksHeader">Special Top Picks:</h2>
    <houseList class="specialPicks" isTopPicList="true"></houseList>
    <searchForm>Book A Unique Place To Stay:</searchForm>
  </div>
</template>

<script>
import homePageTopFold from '../components/HomePageTopFold'
import houseList from '../components/HouseList'
import searchForm from '../components/SearchForm'
export default {
  name: "home",
  created() {
    this.$store.dispatch("loadItems");
  },
  components: {
    homePageTopFold,
    houseList,
    searchForm
  }
};
</script>
