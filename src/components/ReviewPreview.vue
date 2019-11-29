<template>
  <section>
    <h2>From: {{itemData.user.userName}}</h2>
    <h3>Review: {{itemData.txt}}</h3>
    <h4>Rating: {{itemData.rating}}</h4>
    <h4>CreatedAt: {{itemData.createdAt}}</h4>
  </section>
</template>

<script>
export default {
  props: ["itemData"],
  methods: {}
};
</script>