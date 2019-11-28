<template>
  <section class="item-preview">
    <img :src="itemData.imgs[0]" class="item-preview-image" />
    <div class="itemPreviewInfo">
      <p class="item-country">{{itemData.location.address.country}}</p>
      <div class="item-rating">{{itemData.reviews.avgRating}}</div>
      <p class="item-name">{{itemData.name}}</p>
      <p class="item-price">{{itemData.price}}/per night</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['itemData'],
};
</script>