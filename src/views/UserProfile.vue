<template>
  <section>
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