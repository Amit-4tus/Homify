<template>
  <div class="houseDetails">
    <section class="houseImgs">
      <div v-if="!houseData" class="loading">Loading</div>
      <img v-if="houseData.imgs" class="houseImg1" :src="houseData.imgs[0]" />
      <img v-if="houseData.imgs" class="houseImg2" :src="houseData.imgs[1]" />
      <img v-if="houseData.imgs" class="houseImg3" :src="houseData.imgs[2]" />
      <img v-if="houseData.imgs" class="houseImg4" :src="houseData.imgs[3]" />
    </section>
    <div class="bottomFold">
    <div v-if="houseData.name" class="houseInfo">
      <h1 class="houseTitle">{{houseData.name}}</h1>
      <h3 class="houseLocation">{{houseData.location.address.country}}</h3>
      <p class="houseCapacity">{{houseData.capacity}}</p>
      <div class="amenitiesIcons">
        <div class="amenity wifi">
          <img src="http://simpleicon.com/wp-content/uploads/signal.png" />
          <span>This House Has Wifi Access</span>
        </div>
        <div class="amenity shower">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Shower_icon_-_Noun_Project_4336.svg/1024px-Shower_icon_-_Noun_Project_4336.svg.png"
          />
          <span>This House Has A Shower</span>
        </div>
        <div class="amenity kitchen">
          <img src="https://icon-library.net/images/kitchen-icon-png/kitchen-icon-png-21.jpg" />
          <span>This House Has A Kitchen</span>
        </div>
        <div class="amenity garden">
          <img src="https://image.flaticon.com/icons/png/512/93/93701.png" />
          <span>This House Has A Garden</span>
        </div>
        <div class="amenity parking">
          <img src="https://carlisletheacarlisletheatre.org/images/parking-icon-lot-7.png" />
          <span>This House Comes With Parking</span>
        </div>
      </div>
      <p v-if="houseData.desc" class="houseDesc">{{houseData.desc}}</p>
    </div>
    <section class="hostInfo">
      <img v-if="houseData.hostImg" :src="houseData.hostImg">
      <p  v-if="houseData.hostName" class="name">{{houseData.hostName}}</p>
    </section>
    </div>
    <section class="reserve">
      <div class="info">
        <div><span class="price">{{houseData.price}}$</span> / per night</div>
      </div>
      <button
        v-if="loggedinUser===null || loggedinUser._id!==houseData.hostId"
        class="reserveBtn"
        @click="doReserve"
      >Reserve</button>
    </section>
    <button
    class="houseEditBtn"
      v-if="isOwner"
      @click="doEdit"
    >Edit here</button>
    <g-map
      v-if="showMap"
      :coords="houseData.location.coords"
      class="gmap flex align-center flex-column"
    ></g-map>
    <review-form v-if="loggedinUser!==null" class="addReview" v-on:review="addReview"></review-form>
    <review-list></review-list>
    <div class="placeholder"></div>
  </div>
</template>

<script>
import myFooter from "../components/MyFooter";
import reviewForm from "@/components/ReviewForm";

import reviewList from "@/components/ReviewList";
import gMap from "@/components/GMap";
export default {
  data() {
    return { review: {}, showMap: false,msg:'' };
  },
  async created() {
    this.scrollToTop();
    this.$store.dispatch("loadHouseById", this._id);
    const reviews = await this.$store.dispatch("loadReviews", this._id);
    this.showMap = true;
  },
  computed: {
    isOwner() {
      if (this.loggedinUser !== null && this.loggedinUser._id === this.houseData.hostId)
        return true
    },
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
      if (!this.loggedinUser) return this.$router.push(`/login/${this.houseData._id}`);
      this.$router.push(`/order/house/${this.houseData._id}`);
      // this.$router.push("/order");
    },
    doEdit() {
      this.$router.push(`/host/${this._id}`);
    },
    addReview(review) {
      review.houseId = this.houseData._id;
      review.user.userName = this.loggedinUser.username;
      review.user.userId = this.loggedinUser._id;
      this.$store.dispatch("addReview", review);
    },
     scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  components: {
    gMap,
    reviewList,
    myFooter,
    reviewForm
  }
};
</script>

<style scoped>
.gmap {
  position: unset;
  margin: 0 auto;
}
</style>