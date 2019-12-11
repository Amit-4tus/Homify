<template name="reviewForm">
  <form class="reviewForm">
    <h3>Add A Review</h3>
    <h4>Review</h4>
    <textarea class="desc" rows="10" v-model="review.txt"></textarea>
    <h4>Rating</h4>
    <select class="rating" v-model="review.rating">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </select>
    <input class="submit" type="submit" value="ADD REVIEW" @click.prevent="doReview" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      review: {
        rating: NaN,
        txt: "",
        user: {}
      }
    };
  },

  methods: {
    doReview() {
      this.$emit("review", this.review);
      setTimeout(window.scrollTo(0, document.body.scrollHeight + 500000), 300);
      document.querySelector(".rating").value = NaN;
      document.querySelector(".desc").value = "";
    }
  }
};
</script>
