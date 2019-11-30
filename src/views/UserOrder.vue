'use strict'

<template>
    <section>

    <section class="reservation-page flex space-between 
                    justify-center align-center wrap">
      <div class="reservation-page-general-data flex-column">
      <section>

        <section class="order-house-imgs-container">
        <img v-if="houseData.imgs" class="house-reserve-image"
         :src="houseData.imgs[0]" />
         <img v-if="houseData.imgs" class="house-reserve-image"
         :src="houseData.imgs[1]" />
          <img v-if="houseData.imgs" class="house-reserve-image"
         :src="houseData.imgs[2]" />
        </section>

      <section class="reserve-form-host-data">
        <div v-if="houseData.name">
            <div>
            <p>{{houseData.name}} </p>
            <p>{{houseData.desc}} </p>
            <p>Per night price: {{houseData.price}} </p>
            <p>Number of reviews: {{houseData.reviews.reviewsIds.length}} </p>
            <p v-if="houseData.amentities[0]"> Amenities:</p>
            <p v-if="houseData.amentities[0]"> {{houseData.amentities[0]}} </p>
            <p v-if="houseData.amentities[1]">{{houseData.amentities[1]}} </p>
            <img class="host-img" src="">
            </div>
          <p> Your host: {{host}}</p>
        </div>
      </section>

      <hr class="reserve-form-hr">

        
      </section>
        
        <section>
          <p hidden>{{host}} </p>
          <p>{{order}} </p>

        </section>
      
      </div>
        

        <div>
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
               
                <select class="reserve-form-select-input" v-model="order.guests.adults">
                  <option selected value="adults" >Adults</option>
                  <option>1-2</option>
                  <option>3-5</option>
                  <option>6+</option>
                </select>

                
                <select class="reserve-form-select-input" 
                      placeholder="children" id="children" name="children" v-model="order.guests.children" >
                  <option selected value="children">Children</option>
                  <option >1-2</option>
                  <option >3-5</option>
                  <option>6+</option>
                </select>       
            
            </div>
            <button class="reserve-btn" @click="doOrder"><span class="reserve-btn-text">Reserve</span></button>

            <div class="non-charge-box">
            <p class="reviews-data-bold-center">You won't be charged yet</p>
            </div>

            <div class="reserve-box-bottom-container flex space-between align-center justify-center">
            <p class="reserve-box-bottom-text">This place is getting a lot of attention.
                It’s been viewed 500+ times in the past week.</p>
                <img class="bulb-img" src="../assets/imgs/bulb.png"/>
            </div>
          </div>

        </section>

        
           </div>

            </section>
        </section>

      
   
</template>

<script>

export default {
  data() {
    return {
   
      order: 
        {
          name: null,
          _id: null,
          // houseId: this.$route.params._id,
              dates: {
                from: "3.12.2019",
                to: "5.12.2019"
            },
          user: {
            userId: "123",
            userName: "name"
          },
          status: "pending",
              guests: {
                adults: "adults",
                children: "children",
            },
          }
    };
  },
  created() {
    this.$store.dispatch("loadHouseById", this._id); 
  },

methods: {
    doOrder() {
      this.$store.dispatch("addOrder", this.order);
      // this.$router.push(`/order/${this.order._id}`);
    },
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
    host() {
      let currUser = this.$store.getters.currUser;
      // let generalName = 'Alon'
      // if (!currUser[0]) return generalName;
      // let host = currUser[0].name;
      return currUser;
    }
  },
  
};
</script>

