<template>
  <div class="home">
    <home-page-top-fold></home-page-top-fold>
    <h2 class="specialPicksHeader">Special Top Picks:</h2>
    <topPickList class="topPicks"></topPickList>
    <!-- <inspSect></inspSect> -->
    <myFooter></myFooter>
  </div>
</template>

<script>
import homePageTopFold from "../components/HomePageTopFold";
import topPickList from "../components/TopPickList";
import searchForm from "../components/SearchForm";
import myFooter from "../components/MyFooter";
import inspSect from "../components/InspirationalSection";
export default {
  name: "home",
  data() {
    return {filter:{txt:''}
    
    
    };
  },
  created() {
    this.$store.dispatch("loadItems",this.filter);
  },
  mounted() {
    var elMyHeader = document.querySelector(".my-header");
    elMyHeader.classList.add("absolute");
  },
  components: {
    homePageTopFold,
    topPickList,
    searchForm,
    myFooter,
    inspSect
  },
  destroyed() {
    document.querySelector(".my-header").classList.remove("absolute");
  }
};
</script>
