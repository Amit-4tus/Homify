<template>
  <div class="item-details">
    <h2>id: {{_id}}</h2>
    <h2>house details: {{houseData}}</h2>
  </div>
</template>

<script>
// import { eventBus } from '../services/eventBusService'
export default {
  data() {
    return {
      houseData: null
    };
  },
  created() {
    this.$store.dispatch('loadHouseBy_id', this._id)
  },
  computed: {
    _id() {
      return this.$route.params._id;
    }
  }
};
</script>