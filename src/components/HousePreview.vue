<template>
  <section class="housePreview">
    <img :src="itemData.imgs[0]" class="housePreviewImg" />
    <div class="housePreviewInfo">
      <div class="withoutRating">
        <span class="houseCountry">{{itemData.location.address.country}}</span>
        <p class="houseName">{{itemData.name}}</p>
        <p class="housePrice">
          <span class="price">{{itemData.price}}$</span> /per night
        </p>
      </div>
      <div v-if="itemData.reviews && itemData.reviews.avgRating !== 'NaN'" class="houseRating">
        <img class="ratingIcon" src="../assets/imgs/coloredStar.png" />
        {{itemData.reviews.avgRating}}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["itemData"],
  methods: {}
};
</script>