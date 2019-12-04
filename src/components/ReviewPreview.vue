<template>
  <section class="reviewPreview">
    <h2>By: {{itemData.user.userName}}</h2>
    <h3>Review: {{itemData.txt}}</h3>
    <h3>star{{itemData.rating}}</h3>
    <h4>Written On: {{itemData.createdAt}}</h4>
  </section>
</template>

<script>
export default {
  props: ["itemData"]
};
</script>