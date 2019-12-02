<template>
    <section> 
      <div class="order-details-page-container">
      
      <section class="order-details-txts-left-container">

      <div class="order-details-image-container">
      <div>The best position in the area!</div>
      <div>Entire apartment</div>
      <img v-if="orderData.imgs" class="order-details-img" :src="orderData.imgs[0]" />
      </div>

      <div >Check-in: {{orderData.dates.from}}</div>
        <div>Check-out: {{orderData.dates.to}}</div>
        <div>Adults joining: {{orderData.guests.adults}}</div>
        <div>Children joining: {{orderData.guests.children}}</div>
        <div>Status: {{orderData.status}}</div>
      </section>

      <section class="order-details-txts-right-container">
        <div class="order-details-house-rules-txt bold">Review house rules</div>

        <section class="order-details-diamond-box flex flex-row align-center">
          <img class="diamond-img" src="../assets/imgs/diamond.jpg"/>
          <div class="diamond-text"> <span class="bold">This is a rare find.</span> It is usually booked.</div>
        </section>

        <div class="order-details-in-mind-txt bold"> Things to keep in mind </div>
        
        <section class="children-comment-container flex flex-row align-center">
          <img class="children-comment-img" src="../assets/imgs/child.png"/>
          <div class="child-txt">Suitable for children and infants</div>
        </section>

        <section class="animals-comment-container flex flex-row align-center">
          <img class="animals-comment-img" src="../assets/imgs/dog.png"/>
          <div class="animal-txt"> Animals are not allowed</div>
        </section>
        
        <form @submit.prevent="sendOrderData">
        <div hidden>Order number: {{orderData._id}}</div>
        <button class="agree-btn">Agree and continue</button>
        </form>
        

        <div hidden> {{orderData.name}}</div>
        <div hidden>Order created at: {{orderData.createdAt}}</div>
        <div hidden>Host id: {{orderData.hostId}} </div> 
        <div>{{isApproved}}</div>
      </section>

        </div>
   
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

