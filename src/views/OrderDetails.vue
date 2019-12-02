<template>
    <section> 
      
      <section>
        <div>Hi, {{orderData.user.userName}}</div>
        <div>Please review your order details:</div>
        <div>Check-in: {{orderData.dates.from}}</div>
        <div>Check-out: {{orderData.dates.to}}</div>
        <div>Adults joining: {{orderData.guests.adults}}</div>
        <div>Children joining: {{orderData.guests.children}}</div>
        <div>Status: {{orderData.status}}</div>
        <div>Order created at: {{orderData.createdAt}}</div>
        <div>Host id: {{orderData.hostId}} </div>
         <form @submit.prevent="sendOrderData">
        <div>Order number: {{orderData._id}}</div>
        <button>I agree</button>
        </form>
        <div>{{isApproved}}</div>
      </section>


          <!-- <div class="about"> -->
    <!-- <h1>About Us</h1>
    <p>We like You</p> -->
    <!-- <h2>Lets Chat About {{topic}}</h2> -->
    <!-- <label> -->
      <!-- <input type="radio" value="Politics" v-model="topic" @change="changeTopic" />  -->
      <!-- Politics
    </label>
    <label> -->
      <!-- <input type="radio" value="Love" v-model="topic" @change="changeTopic" />  -->
      <!-- Love
    </label> -->
    <!-- <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        {{msg.txt}}
      </li>
    </ul> -->
    <!-- <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" />
      <button>Send</button>
    </form> -->

    
  <!-- </div> -->
        </section>


</template>

<script>

import SocketService from '../services/SocketService.js'

export default {

    data() {
        return {
          // msg: {from: 'Me', txt: ''},
          // msgs: [],
          isApproved: '',
    }
  },
   async created() {
      await this.$store.dispatch("loadOrders", this._id);
      // SocketService.emit('order details', this.orderData); 
      SocketService.on('approve order', ()=>{
      this.isApproved = 'Your order has been approved! Enjoy your stay.'}) 
      SocketService.on('reject order', ()=>{
      this.isApproved = 'We apologize, your order has been rejected. Other places are available to you on our site.'}) 
      // SocketService.emit('chat topic', this.topic)
    
  },
    computed: {
    _id() {
      return this.$route.params._id;
    },
    orderData() {
      let currOrder = this.$store.getters.orderToShow;
      if (!currOrder) return null;
      return currOrder;
    },
    
    },
    methods: {
    //   sendMsg() {
    //     console.log('Sending', this.msg);
    //     SocketService.emit('chat newMsg', this.msg)
    // },
    sendOrderData() {
        console.log('Sending', this.orderData);
        
        SocketService.emit('order details', this.orderData)
    },
    //   changeTopic() {
    //     SocketService.emit('chat topic', this.topic)
    // }
  },
  
    
 

}
</script>

