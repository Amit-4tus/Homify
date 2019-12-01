<template>
    <section> I am an order {{orderData}}
        </section>
</template>

<script>
export default {
   async created() {
       await this.$store.dispatch("loadOrders", this._id); 
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

}
</script>









//     host() {
//       return this.$store.dispatch("getUserById", this.houseData.hostId)
//     },
//     hostName() {
//       let currUser = this.$store.getters.currUser;
//       let generalName = 'Alon'
//       if (!currUser[0]) return generalName;
//       let host = currUser[0].name;
//       return host;
//     }