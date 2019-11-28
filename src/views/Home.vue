<template>
  <div class="home">
    <home-page-top-fold></home-page-top-fold>
    <!-- <houseList class=""></houseList> -->
  </div>
</template>

<script>
import homePageTopFold from '../components/HomePageTopFold'
import houseList from '../components/HouseList'
export default {
  name: "home",
  components: {
    homePageTopFold,
    houseList
  }
};
</script>
