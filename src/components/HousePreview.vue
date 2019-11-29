<template>
  <section class="housePreview">
    <img :src="itemData.imgs[0]" class="housePreviewImg" />
    <div class="housePreviewInfo">
      <p class="houseCountry">
        <span class="country">{{itemData.location.address.country}}</span>
      </p>
      <p class="houseName">{{itemData.name}}</p>
      <p class="housePrice">
        <span class="price">{{itemData.price}}$</span> /per night
      </p>
    </div>
    <div v-if="itemData.reviews" class="houseRating"><i class="fas fa-star"></i>{{itemData.reviews.avgRating}}</div>
  </section>
</template>

<script>
export default {
  props: ["itemData"],
  methods: {}
};
</script>