<template>
  <div class="reviewList container">
    <div v-for="(item, idx) in items" :key="idx">
      <review-preview :itemData="item"></review-preview>
    </div>
  </div>
</template>

<script>
import reviewPreview from "./ReviewPreview";
export default {
  computed: {
    items() {
      return this.$store.getters.reviewToSHow;
    }
  },

  components: {
    reviewPreview
  }
};
</script>