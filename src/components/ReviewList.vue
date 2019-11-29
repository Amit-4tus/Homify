<template>
  <div>
    <div v-for="(item, idx) in items" :key="idx" >
      <review-preview :itemData="item"></review-preview>
    </div>
  </div>
</template>

<script>
import reviewPreview from "./ReviewPreview";
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.reviewToSHow;
    }
  },
  methods: {},
  components: {
    reviewPreview
  }
};
</script>