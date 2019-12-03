<template>
  <div  v-if="orders">
    <div v-for="(order, idx) in orders" :key="idx" >
      <order-preview :isHost="isHost" :orderData="order"></order-preview>
    </div>
  </div>
</template>

 <script>
import orderPreview from "./OrderPreview";
export default {
   props: ["isHost"],
  data() {
    return {};
  },
  computed: {
    orders() {
      return this.$store.getters.orders;
    }
  },
  methods: {},
  components: {
    orderPreview
  }
};
</script>