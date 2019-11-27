<template>
  <div class="item-details">
    <h1>This is the item details page</h1>
    <h2>id: {{_id}}</h2>
  </div>
</template>

<script>
export default {
  created() {
    console.log('params:', URL.searchParams)
  },
  // computed: {
  //   _id() {
  //     log
  //     return this.$route
  //   }
  // }
}
</script>