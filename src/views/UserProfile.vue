<template>
  <section class="user-profile-page">
    <div class="user-profile-page-left">
      <section class="user-profile-box-container">
        <section class="user-profile-box">
          <div v-if="userDetails" class="userImgContiner">
            <img v-if="userDetails.img" class="user-img" :src="userDetails.img" />
            <img
              v-if="!userDetails.img"
              class="user-img"
              src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
            />
          </div>
          <div class="profileSect">
            <img class="profileIcon" src="../assets/imgs/star.png" />
            <div class="reviews-number-txt">509 reviews</div>
          </div>
          <div class="profileSect">
            <img class="profileIcon" src="../assets/imgs/v.png" />
            <div class="reviews-verified-txt">Verified</div>
          </div>
          <div class="profileSect">
            <img class="profileIcon" src="../assets/imgs/governmentId.png" />
            <div class="reviews-checked-txt">Government ID</div>
          </div>
          <div class="profileSect">
            <img class="profileIcon" src="../assets/imgs/selfie.png" />
            <div class="reviews-checked-txt">Selfie</div>
          </div>
          <div class="profileSect">
            <img class="profileIcon" src="../assets/imgs/email.jpg" />
            <div class="reviews-checked-txt">Email address</div>
          </div>
          <div class="profileSect">
            <img class="profileIcon" src="../assets/imgs/phone.png" />
            <div class="reviews-checked-txt">Phone number</div>
          </div>
        </section>
      </section>
    </div>
    
    <div class="user-profile-page-right flex flex-column align-center">
      <section class="page-right-box">
        <div v-if="userDetails" class="welcome-txt">Hi, I'm {{userDetails.username}}</div>
        <div class="joined-year">Joined in 2018</div>
        <div class="apostrophes">“</div>
        <div class="description-txt">
          Well I'll be very happy if you stop searching any further and stay
          with me for a safe and care free vacation !
          30 year old programmer and musician.
          I'm passionate about hosting and making your trip here enjoyable,
          using my own experience and knowledge of the never-sleeping city!
          Please, feel free to look at any of the listings on my profile or at my
          partner's profile.
        </div>
        {{msg}}
        <button @click="orderReq">Switch to orders request</button>
        <order-list :isHost="isHost"></order-list>
      </section>
    </div>

    <button @click="orderReq">Switch to orders request</button>
    <order-list :isHost="isHost"></order-list>
    <img
      src="https://www.arch2o.com/wp-content/uploads/2017/08/Arch2O-Coolhousesdesigns-undergroundhome5.jpg"
      class="bgi"
    />
  </section>
</template>

<script>
import orderList from "../components/OrderList";
import reviewList from "../components/ReviewList";

export default {
  data() {
    return {
      criteria: {
        id: "",
        query: ""
      },
      msg: "",
      isHost: false,
      userDetails: null
    };
  },
  computed: {},

  methods: {
    async orderReq() {
      this.criteria.query = "ordersReq";
      this.isHost = true;
      await this.$store.dispatch("loadOrders", this.criteria);
      this.msg = "orders request";
    }
  },

  async created() {
    this.criteria.id = await this.$store.getters.loggedinUser._id;
    this.criteria.query = "ordersList";
    this.msg = "your orders ";
    await this.$store.dispatch("loadOrders", this.criteria);
    this.userDetails = await this.$store.getters.loggedinUser;
    console.log(this.userDetails);
  },

  components: {
    orderList,
    reviewList
  }
};
</script>