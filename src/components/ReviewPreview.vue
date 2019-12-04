<template>
  <section class="reviewPreview">
    <h3>By: {{itemData.user.userName}}</h3>
    <h3>Review: {{itemData.txt}}</h3>
    <h3>star{{itemData.rating}}</h3>
    <h3>Written On: {{itemData.createdAt}}</h3>
  </section>
</template>

<script>
export default {
  props: ["itemData"]
};
</script>