<template>
  <div class="houseDetails">
    <section class="detailstopFold">
      <div v-if="!houseData" class="loading">Loading</div>
      <div v-if="houseData.name" class="houseGeneralInfo">
        <h1 class="houseTitle">{{houseData.name}}</h1>
      </div>

      <img v-if="houseData.imgs" class="houseMainImage" :src="houseData.imgs[0]" />
    </section>
    <p class="houseDesc">{{houseData.desc}}</p>
    <button
      v-if="loggedinUser!==null && loggedinUser._id!==houseData.hostId"
      class="reserveBtn"
      @click="doReserve"
    >Reserve</button>

    <h2>if you are the owner press the button</h2>
    <button
      v-if="loggedinUser!==null && loggedinUser._id===houseData.hostId"
      @click="doEdit"
    >Edit here</button>
    <g-map
      v-if="showMap"
      :coords="houseData.location.coords"
      class="gmap flex align-center flex-column"
    ></g-map>
    <review-edit v-on:review="addReview"></review-edit>
    <review-list></review-list>
    <my-footer></my-footer>
  </div>
</template>

<script>
import myFooter from "../components/MyFooter";
import reviewEdit from "@/components/ReviewEdit";

import reviewList from "@/components/ReviewList";
import gMap from "@/components/GMap";
export default {
  data() {
    return { review: {}, showMap: false };
  },
  async created() {
    this.$store.dispatch("loadHouseById", this._id);
    const reviews = await this.$store.dispatch("loadReviews", this._id);
    this.showMap = true;
    console.log("review got", reviews);
  },
  computed: {
    _id() {
      return this.$route.params._id;
    },
    houseData() {
      let currHouse = this.$store.getters.currHouse;
      if (!currHouse) return null;
      return currHouse;
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
  },
  methods: {
    doReserve() {
      this.$router.push(`/order/house/${this.houseData._id}`);
      // this.$router.push("/order");
    },
    doEdit() {
      this.$router.push(`/host/${this._id}`);
    },
    addReview(review) {
      review.houseId = this.houseData._id;
      review.user.userName = this.loggedinUser.username;
      review.user.userId =this. loggedinUser._id;
      console.log(review);
      this.$store.dispatch("addReview", review);
    }
  },
  components: {
    gMap,
    reviewList,
    myFooter,
    reviewEdit
  }
};
</script>