<template>
  <div>
    <div v-for="(order, idx) in orders" :key="idx" >
      <order-preview :orderData="order"></order-preview>
    </div>
  </div>
</template>

// <script>
import orderPreview from "./OrderPreview";
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.orderToSHow;
    }
  },
  methods: {},
  components: {
    orderPreview
  }
};
</script>