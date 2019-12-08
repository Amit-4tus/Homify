<template>
  <div class="about">
    <ul>
      <div v-for="(order, idx) in orders" :key="idx">
        <p>Hello ________, you have a pending order</p>
        <p>Please review the order details:</p>
        <p>Created by {{order.user.userName}}</p>
        <p>Check-in: {{order.dates.from}}</p>
        <p>Check-out: {{order.dates.to}}</p>
        <div>Adults joining: {{order.guests.adults}}</div>
        <div>Children joining: {{order.guests.children}}</div>
        <div>Order created at: {{order.createdAt}}</div>

        <button @click="approveOrder">Approve</button>
        <button @click="rejectOrder">Reject</button>
      </div>
    </ul>
  </div>
</template>

<script>
import SocketService from "../services/SocketService.js";

export default {
  data() {
    return {
      orders: []
    };
  },
  created() {},
  methods: {
    approveOrder() {
      SocketService.emit("approve order", this.order);
    },
    rejectOrder() {
      SocketService.emit("reject order", this.order);
    }
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
  }
};
</script>
