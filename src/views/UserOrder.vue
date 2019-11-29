'use strict'

<template>
    <section>
      <p hidden>{{host}} </p>
      
        <div v-if="houseData.name" class="houseGeneralInfo">
        <h1 class="houseTitle">{{houseData.name}} </h1>
        <h2> Your host: {{hostName}}</h2>
        </div>

      <section class="order-house-imgs-container grid">
        <img v-if="houseData.imgs" class="house-reserve-image"
         :src="houseData.imgs[0]" />
         <img v-if="houseData.imgs" class="house-reserve-image"
         :src="houseData.imgs[1]" />
         <img v-if="houseData.imgs" class="house-reserve-image"
         :src="houseData.imgs[2]" />
         <img v-if="houseData.imgs" class="house-reserve-image"
         :src="houseData.imgs[3]" />
      </section>

        <section class="reserve-form"> 

          <div class="reserve-form-container">

            <p class="reserve-form-price"><span class="price">{{houseData.price}}$</span> /per night</p>
            <p class="reviews-data"> <span class="bold">*4.89</span> (299 reviews) </p>
            <hr class="reserve-form-hr">

            <p class="reviews-data-bold">Dates</p>
            <div class="reserve-form-boxes-container flex space-between align-center">
              <div class="reserve-form-boxes"><span class="text-margin">Check-in</span></div>
              <div class="reserve-form-boxes"><span class="text-margin">Check-out</span></div>
            </div>

            <p class="reviews-data-bold">Guests</p>
            <div class="reserve-form-boxes-container flex space-between align-center guests">
              <div class="reserve-form-boxes"><span class="text-margin">1 Guest</span>
              </div>
            </div>

            <button class="reserve-btn"><span class="reserve-btn-text">Reserve</span></button>

            <div class="non-charge-box">
            <p class="reviews-data-bold ">You won't be charged yet</p>
            </div>

            <div class="reserve-box-bottom-container flex space-between align-center justify-center">
            <p class="reserve-box-bottom-text">This place is getting a lot of attention.
                It’s been viewed 500+ times in the past week.</p>
                <img class="bulb-img" src="../assets/imgs/bulb.png"/>
            </div>


          </div>
        </section>
        
    </section>
</template>

<script>

export default {
  data() {
    return {
      // host: {}
  
    };
  },
  created() {
    this.$store.dispatch("loadHouseById", this._id);
    
  },
  computed: {
    _id() {
      return this.$route.params._id;
    },
    houseData() {
      let currHouse = this.$store.getters.currHouse;
      if (!currHouse) return null;
      return currHouse;
    },
    host() {
      return this.$store.dispatch("getUserById", this.houseData.hostId)
    },
    hostName() {
      let currUser = this.$store.getters.currUser;
      let generalName = 'Alon'
      if (!currUser[0]) return generalName;
      let host = currUser[0].name;
      return host;
    }
  },
  
};
</script>

