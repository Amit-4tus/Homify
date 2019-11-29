<template>
  <section>
    <input v-model="review.txt" type="text" placeholder="Add your review!" />
    <button @click="addReview">Add Review</button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      review: {
        txt: "",
        user:{},
      }
    };
  },
  methods: {
 async   addReview() {
    await  this.$emit("review", this.review);
    this.review.txt=''
    }
  }
};
</script>