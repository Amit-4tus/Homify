<template>
    <section> 
      <div class="order-details-page-container">
      
      <section class="order-details-txts-left-container">
        <section class="order-details-txts-left-inner">
        <div class="order-details-image-container flex flex-row space-between">
          <div class="img-inner-text flex flex-column ">
            <div class="img-inner-upper-txt">The best position in the area!</div>
            <div class="img-inner-lower-txt">Entire apartment</div>
            <div class="img-inner-lower-txt-2"> ★★★★★ 377 reviews</div>
          </div>
        <img v-if="orderData.imgs" class="order-details-img" :src="orderData.imgs[0]" />
        </div>
         <hr class="order-details-hr"/>
        <section class="guests-container flex flex-row align-center">
           <img class="guests-img" src="../assets/imgs/guests.jpg"/>
            <div class="order-details-txts guests">{{guests}}</div>
        </section>
        <section class="calendar-container flex flex-row align-center">
           <img class="calendar-img" src="../assets/imgs/calendar.png"/>
          <div class="order-details-txts calendar">January 5, 2020 → January 9, 2020</div>
        </section>
        <hr class="order-details-hr"/>

        <div class="order-details-txts margin flex flex-row space-between">
          <div class="order-details-precost-container">{{orderData.price}} 
                × 4 nights</div>
          <div>${{preCost}}</div>
        </div>

        <div class="order-details-txts margin flex flex-row space-between">
          <div class="order-details-service-fee">Service fee</div>
        <div>{{serviceFee}}</div>
        </div>

        <div class="order-details-txts margin flex flex-row space-between">
          <div class="order-details-total-fee">Total(USD)</div>
          <div>${{totalFee}}</div>
        </div>

        </section>
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
        <div hidden>{{isApproved}}</div>
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
      await this.$store.dispatch("loadOrder", this._id);
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
    guests () {
      let adults = Number(this.orderData.guests.adults) 
      let children = Number(this.orderData.guests.children)
      let guests = adults + children
      if (!children) {
        if (!adults) return `please indicate guests number`
        else if (adults === 1) {return `${adults} guest`}
        else {return `${adults} guests`}
      } else {return `${guests} guests`}
    },
    //Change to actual number of nights
    preCost () {
      let price = Number(this.orderData.price);
      if (!price) return;
      let preCost = price * 4;
      return preCost.toLocaleString()
    },
     //Change to actual number of nights
    serviceFee () {
      let price = Number(this.orderData.price);
      let preCost = price * 4;
      let serviceFee = (preCost * 0.17).toFixed(0)
      return serviceFee;
    },
     //Change to actual number of nights
    totalFee () {
      let price = Number(this.orderData.price);
      let preCost = price * 4;
      let totalFee = price + preCost
      return totalFee.toLocaleString()
    }
    
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

