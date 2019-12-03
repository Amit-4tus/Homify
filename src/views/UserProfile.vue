<template>
  <section>
    <house-socket></house-socket>
    {{msg}}
    <button @click="orderReq">Switch to orders request</button>
    <order-list :isHost="isHost"></order-list>
  </section>
</template>

<script>
import houseSocket from "../components/HouseSocket";
import orderList from "../components/OrderList";

export default {
  data() {
    return {
      criteria: {
        id: "",
        query: ""
      },
      msg: "",
      isHost: false
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
  },

  components: {
    houseSocket,
    orderList
  }
};
</script>