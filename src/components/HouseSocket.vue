<template>
  <div class="about">
    <!-- <h1>About Us</h1>
    <p>We like You</p>-->
    <!-- <h2>Lets Chat About {{topic}}</h2> -->
    <!-- <label> -->
    <!-- <input type="radio" value="Politics" v-model="topic" @change="changeTopic" />  -->
    <!-- Politics
    </label>
    <label>-->
    <!-- <input type="radio" value="Love" v-model="topic" @change="changeTopic" />  -->
    <!-- Love
    </label>
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        {{msg.txt}}
      </li>
    </ul>-->
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

    <!-- <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" />
    <button>Send</button>-->
    <!-- </form> -->
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
  created() {
    
    // SocketService.emit('order details', this.orderData)
    // SocketService.on("get order details", order => {
    //   this.orders.push(order);
    // });
  },
  methods: {
    approveOrder() {
      SocketService.emit("approve order", this.order);
    },
    rejectOrder() {
      SocketService.emit("reject order", this.order);
    },
    // receiveOrder() {
    //   if (this.$store.getters.loggedinUser !== null) {
    //     let userId = this.$store.getters.loggedinUser._id;
    //     SocketService.on("get order details", order => {
    //       if (userId === order.hostId) {
    //         this.orders.push(order);
    //         const msg = {
    //                 txt: "Order Added check your profile",
    //                 type: 'error'
    //             }
    //             eventBus.$emit('show-msg', msg)
    //       }
    //     });
    //   }
    // }
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
  }
};
</script>
