<template>
  <section class="item-preview">
    <img :src="itemData.imgs[0]" class="item-preview-image" />
    <div class="housePreviewInfo">
      <p class="houseCountry"><span class="country">{{itemData.location.address.country}}</span></p>
      <div v-if="itemData.reviews" class="houseRating">{{itemData.reviews.avgRating}}</div>
      <p class="houseName">{{itemData.name}}</p>
      <p class="housePrice"><span class="price">{{itemData.price}}$</span> /per night</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['itemData'],
  methods:{
   
  }
};
</script>