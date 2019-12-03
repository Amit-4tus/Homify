'use strict'

<template>
  <section>
    <section class="reservation-page">
      <div>
        <section class="reserve-form">
          <div class="reserve-form-container">
            <p class="reserve-form-price">
              <span class="price">{{houseData.price}}$</span> /per night
            </p>
            <p class="reviews-data">
              <span class="bold">*4.89</span> (299 reviews)
            </p>
            <hr class="reserve-form-hr" />

            <p class="reviews-data-bold">Dates</p>
            <div class="reserve-form-boxes-container flex space-between align-center">
              <div class="reserve-form-boxes">
                <span class="text-margin">Check-in</span>
                <!-- <input v-model="order.dates.from" :min="minDate" :max="maxDate" type="date" /> -->
              </div>
              <div class="reserve-form-boxes">
                <span class="text-margin">Check-out</span>
                <!-- <input v-model="order.dates.to" :min="minDate" :max="maxDate" type="date" /> -->
              </div>
            </div>

            <p class="reviews-data-bold">Guests</p>

            <div class="reserve-form-boxes-container flex space-between align-center guests">
              <select class="reserve-form-select-input" v-model="order.guests.adults">
                <option selected value="adults">Adults</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>

              <select
                class="reserve-form-select-input"
                placeholder="children"
                id="children"
                name="children"
                v-model="order.guests.children"
              >
                <option selected value="children">Children</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <section v-if="!isOrdered">
              <button class="reserve-btn" @click="doOrder">
                <span class="reserve-btn-text">Reserve</span>
              </button>

              <div class="non-charge-box">
                <p class="reviews-data-bold-center">You won't be charged yet</p>
              </div>
            </section>

            <div
              class="reserve-box-bottom-container flex space-between align-center justify-center"
            >
              <p class="reserve-box-bottom-text">
                This place is getting a lot of attention.
                It’s been viewed 500+ times in the past week.
              </p>
              <img class="bulb-img" src="../assets/imgs/bulb.png" />
            </div>
          </div>
        </section>
      </div>

      <div class="reservation-page-general-data flex-column">
        <section class="order-house-order-details flex flex-column wrap">
          <section class="order-house-imgs-container">
            <img v-if="houseData.imgs" class="house-reserve-image img-1" :src="houseData.imgs[0]" />
            <img v-if="houseData.imgs" class="house-reserve-image img-2" :src="houseData.imgs[1]" />
            <img v-if="houseData.imgs" class="house-reserve-image img-3" :src="houseData.imgs[2]" />
          </section>

          <section v-if="!isOrdered" class="reserve-form-host-data">
            <div v-if="houseData.name">
              <div>
                <p class="house-name">{{houseData.name}}</p>
                <p>{{houseData.desc}}</p>
                <p class="house-price">$ {{houseData.price}} / night</p>
                <p>Number of reviews: {{houseData.reviews.reviewsIds.length}}</p>
                <p
                  v-if="houseData.amentities[0]"
                >Amenities: {{houseData.amentities[0]}}, {{houseData.amentities[1]}}</p>
                <img class="host-img" src />
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isOrdered: false,
      minDate: "",
      maxDate: "",
      order: {
        name: null,
        dates: {
          from: "",
          to: ""
        },
        user: {
          userId: this.loggedinUser()._id,
          userName: this.loggedinUser().username
        },
        status: "pending",
        imgs: [],
        guests: {
          adults: "adults",
          children: "children"
        }
      }
    };
  },
  async created() {
    await this.$store.dispatch("loadHouseById", this._id);
    // this.minDate = this.houseData.dates.from;
    // this.maxDate = this.houseData.dates.to;
  },

  methods: {
    
  async doOrder() {
      this.order.hostId=this.houseData.hostId;
      this.order.imgs = this.houseData.imgs;
      this.order.name= this.houseData.name;
      this.order.price = this.houseData.price;
      const order=await this.$store.dispatch("addOrder", this.order);
      this.isOrdered = true;
      await this.$router.push(`/order/${order._id}`);
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
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
      return this.$store.dispatch("getUserById", this.houseData.hostId);
    },
    hostData() {
      let currUser = this.$store.getters.currUser;
      let generalName = "Dianna Maxwell";
      if (!currUser[0]) return generalName;
      let host = currUser[0].name;
      return currUser;
    }
  }
};
</script>

