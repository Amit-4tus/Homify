<template>
  <div class="item-details">
    <item-preview v-for="(item, idx) in items" :key="idx" :itemData="item"></item-preview>
  </div>
</template>

<script>
import itemPreview from "./item-preview";
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.itemsToShow;
    }
  },
  components: {
    itemPreview
  }
};
</script>