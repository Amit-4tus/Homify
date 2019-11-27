<template>
  <div class="item-details">
    <item-list></item-list>
  </div>
</template>

<script>
import itemList from '../components/item-list.vue'
export default {
  created() {
    console.log('ss')
    this.$store.dispatch('loadItems')
  },
  components: {
    itemList
  }
};
</script>