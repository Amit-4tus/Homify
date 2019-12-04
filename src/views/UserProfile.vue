<template>
  <section class="user-profile-page">
    <div class="user-profile-page-left">
      <section class="user-profile-box">
        <section class="user-profile-box-container">
          <div class="user-img"></div>
          <hr class="reserve-form-hr" />
          <div class="reviews-number-container flex flex-row align-center">
            <img src="../assets/imgs/reviewsstar.png" />
            <div class="reviews-number-txt">509 reviews</div>
          </div>
          <div class="verified flex flex-row align-center">
            <img class="verified-img" src="../assets/imgs/vi.jpg" />
            <div class="reviews-verified-txt">Verified</div>
          </div>
          <hr class="reserve-form-hr" />
          <div class="checked flex flex-row align-center">
            <img class="checked-img" src="../assets/imgs/checkedtouse.png" />
            <div class="reviews-checked-txt">Government ID</div>
          </div>
          <div class="checked flex flex-row align-center">
            <img class="checked-img" src="../assets/imgs/checkedtouse.png" />
            <div class="reviews-checked-txt">Selfie</div>
          </div>
          <div class="checked flex flex-row align-center">
            <img class="checked-img" src="../assets/imgs/checkedtouse.png" />
            <div class="reviews-checked-txt">Email address</div>
          </div>
          <div class="checked flex flex-row align-center">
            <img class="checked-img" src="../assets/imgs/checkedtouse.png" />
            <div class="reviews-checked-txt">Phone number</div>
          </div>
        </section>
      </section>
    </div>

    <div class="user-profile-page-right"></div>

    {{msg}}
    <h2>User details</h2>

    <button @click="orderReq">Switch to orders request</button>
    <order-list :isHost="isHost"></order-list>
    <review-list></review-list>
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
      this.criteria.query = await "ordersReq";
      this.isHost = true;
      await this.$store.dispatch("loadOrders", this.criteria);
      this.msg = "orders request";
    }
  },

  async created() {
    this.criteria.id = await this.$store.getters.loggedinUser._id;
    this.criteria.query = await "ordersList";
    this.msg = "your orders ";
    this.$store.dispatch("loadOrders", this.criteria);
    this.userDetails = await this.$store.getters.loggedinUser;
    console.log(this.userDetails)
  },

  components: {
    orderList,
    reviewList
  }
};
</script>