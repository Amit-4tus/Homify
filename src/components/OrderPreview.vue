<template>
  <section>
    <ul class="order-preview-container">
      <li class="order-preview-item">{{orderData.name}}</li>
      <li v-if="isHost" class="order-preview-item">{{orderData.user.userName}}</li>
      <li class="order-preview-item">{{orderData.dates.from}}</li>
      <li class="order-preview-item">{{orderData.dates.to}}</li>
      <li class="order-preview-item">
        <p>{{orderData.status}}</p>
        <section class="app-rej-btns-container flex flex-row space-between">
          <button class="app-btn" @click="res('approve')" v-if="host">Approve</button>
          <button class="rej-btn" @click="res('reject')" v-if="host">Reject</button>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
import SocketService from "../services/SocketService.js";
export default {
  props: ["orderData", "isHost"],

  data() {
    return {
      isPending: false
    };
  },

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

  computed: {
    host() {
      if (this.orderData.status === "pending") this.isPending = true;
      return this.isHost && this.orderData.status === "pending";
    }
  }
};
</script>