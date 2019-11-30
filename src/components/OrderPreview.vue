<template>
  <section>
    <h2>House Id: {{orderData.houseId}}</h2>
    <h3>Order From: {{orderData.dates.from}}</h3>
    <h3>Order Until: {{orderData.dates.to}}</h3>
    <h4>CreatedAt: {{orderData.user.userName}}</h4>
  </section>
</template>

<script>
export default {
  props: ["orderData"],
  methods: {}
};
</script>