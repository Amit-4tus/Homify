<template>
  <div class="item-details">
    <item-list></item-list>
  </div>
</template>

<script>
import itemList from '../components/item-list.vue'
export default {
  created() {
    this.$store.dispatch('loadItems')
  },
  components: {
    itemList
  }
};
</script>