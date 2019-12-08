<template>
  <section v-if="showPage">
    <div class="order-details-page-container">
      <section class="order-details-txts-left-container">
        <section class="order-details-txts-left-inner">
          <div class="order-details-image-container flex flex-row space-between">
            <div class="img-inner-text flex flex-column">
              <div class="img-inner-upper-txt">The best position in the area!</div>
              <div class="img-inner-lower-txt">Entire apartment</div>
              <div class="img-inner-lower-txt-2">★★★★★ 377 reviews</div>
            </div>
            <!-- <img v-if="orderData.imgs" class="order-details-img" :src="orderData.imgs[0]" />
            <div hidden>{{currHouse}}</div>
            <img class="order-details-img" :src="currHouse.imgs[0]" />-->
          </div>
          <hr class="order-details-hr" />
          <section class="guests-container flex flex-row align-center">
            <img class="guests-img" src="../assets/imgs/guests.jpg" />
            <div v-if="guests" class="order-details-txts guests">{{guests}}</div>
          </section>
          <section class="calendar-container flex flex-row align-center">
            <img class="calendar-img" src="../assets/imgs/calendar.png" />
            <div class="order-details-txts calendar">{{dates.from}} → {{dates.to}}</div>
          </section>
          <hr class="order-details-hr" />
          <div class="order-details-txts margin flex flex-row space-between">
            <div class="order-details-precost-container">
              {{orderData.price}}
              × {{calcDate()}} nights
            </div>
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
          <img class="diamond-img" src="../assets/imgs/diamond.jpg" />
          <div class="diamond-text">
            <span class="bold">This is a rare find.</span> It is usually booked.
          </div>
        </section>

        <div class="order-details-in-mind-txt bold">Things to keep in mind</div>

        <section class="children-comment-container flex flex-row align-center">
          <img class="children-comment-img" src="../assets/imgs/child.png" />
          <div class="child-txt">Suitable for children and infants</div>
        </section>

        <section class="animals-comment-container flex flex-row align-center">
          <img class="animals-comment-img" src="../assets/imgs/dog.png" />
          <div class="animal-txt">Animals are not allowed</div>
        </section>

        <form @submit.prevent="sendOrderData">
          <div hidden>Order number: {{orderData._id}}</div>
          <button class="agree-btn">Agree and continue</button>
        </form>

        <div hidden>{{orderData.name}}</div>
        <div hidden>Order created at: {{orderData.createdAt}}</div>
        <div hidden>Host id: {{orderData.hostId}}</div>
        <div hidden>{{isApproved}}</div>
      </section>
    </div>
  </section>

  <!-- </div> -->
</template>

<script>
import SocketService from "../services/SocketService.js";

export default {
  data() {
    return {
      showPage: false,
      isApproved: "",
      dates: {
        from: "",
        to: ""
      }
    };
  },
  async created() {
    await this.$store.dispatch("loadOrder", this._id);
    SocketService.on("approve order", () => {
      this.isApproved = "Your order has been approved! Enjoy your stay.";
    });
    SocketService.on("reject order", () => {
      this.isApproved =
        "We apologize, your order has been rejected. Other places are available to you on our site.";
    });
    this.dates.from = await this.$store.getters.filter.from;
    this.dates.to = await this.$store.getters.filter.to;
    this.showPage = true;
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
    guests() {
      let adults = Number(this.orderData.guests.adults);
      let children = Number(this.orderData.guests.children);
      let guests = adults + children;
      if (!children) {
        if (!adults) return `please indicate guests number`;
        else if (adults === 1) {
          return `${adults} guest`;
        } else {
          return `${adults} guests`;
        }
      } else {
        return `${guests} guests`;
      }
    },
    preCost() {
      let price = Number(this.orderData.price);
      let days = this.calcDate();
      if (!price) return;
      let preCost = price * days;
      return preCost.toLocaleString();
    },

    serviceFee() {
      let days = this.calcDate();
      let price = Number(this.orderData.price);
      let preCost = price * days;
      let serviceFee = (preCost * 0.17).toFixed(0);
      return serviceFee;
    },

    totalFee() {
      let days = this.calcDate();
      let price = Number(this.orderData.price);
      let preCost = price * days;
      let totalFee = price + preCost;
      return totalFee.toLocaleString();
    }
  },
  methods: {
    async sendOrderData() {
      await this.$store.dispatch("sendMsg", this.orderData.hostId);
      this.$router.push(`/`);
    },
    calcDate() {
      const date1 = new Date(this.dates.from);
      const date2 = new Date(this.dates.to);
      const diffTime = Math.abs(date2 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
  }
};
</script>

