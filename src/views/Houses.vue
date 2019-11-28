<template>
  <div class="item-details">
    <house-list></house-list>
  </div>
</template>

<script>
import houseList from '../components/HouseList.vue'
export default {
  created() {
    this.$store.dispatch('loadItems')
  },
  components: {
    houseList
  }
};
</script>