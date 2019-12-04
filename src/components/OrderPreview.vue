<template>
  <section>
    <h2>House Name: {{orderData.name}}</h2>
    <h3 v-if="isHost">Order From: {{orderData.user.userName}}</h3>

    <h3>Check In: {{orderData.dates.from}}</h3>
    <h3>Check Out: {{orderData.dates.to}}</h3>
    <h4>CreatedAt: {{orderData.createdAt}}</h4>
    <h4>Order Status: {{orderData.status}}</h4>
    <button @click="res('approve')" v-if="host">Approve</button>
    <button @click="res('reject')" v-if="host">Reject</button>
  </section>
</template>

<script>
import SocketService from "../services/SocketService.js";
export default {
  props: ["orderData", "isHost"],
  methods: {
    async res(res) {
      const updatedOrder = JSON.parse(JSON.stringify(this.orderData));
      let resOrder = {
        userId: this.orderData.user.userId
      };
      if (res === "approve") {
        this.orderData.status = "approved";
        updatedOrder.status = "approved";
        resOrder.res = "approved";
      } else {
        updatedOrder.status = "rejected";
        this.orderData.status = "rejected";

        resOrder.res = "rejected";
      }
      SocketService.emit("response", resOrder);
      await this.$store.dispatch({
        type: "updateOrder",
        order: updatedOrder
      });
    }
  },
  created() {},
  computed: {
    host() {
      return this.isHost && this.orderData.status === "pending";
    }
  }
};
</script>