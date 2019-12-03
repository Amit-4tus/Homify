<template>
  <section>
    <h2>House Name: {{orderData.name}}</h2>
    <h3>Order From: {{orderData.dates.from}}</h3>
    <h3>Order Until: {{orderData.dates.to}}</h3>
    <h4>CreatedAt: {{orderData.createdAt}}</h4>
    <h4>Order Status: {{orderData.status}}</h4>
    <button @click="res('approve')" v-if="isHost">Approve</button>
    <button @click="res('reject')" v-if="isHost">Reject</button>
  </section>
</template>

<script>
import SocketService from "../services/SocketService.js";
export default {
  props: ["orderData", "isHost"],
  methods: {
    async res(res) {
      if (res === "approve") {
        this.orderData.status = "approved";
        const updatedOrder = JSON.parse(JSON.stringify(this.orderData));
        SocketService.emit("approve order", this.orderData.user.userId);
        await this.$store.dispatch({
          type: "updateOrder",
          order: updatedOrder
        });
      } else {
        SocketService.emit("reject order", this.orderData.user.userId);
      }
    }
  },
  created() {
    console.log(this.orderData);
  }
};
</script>