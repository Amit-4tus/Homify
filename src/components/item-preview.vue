<template>
  <section class="item-preview">
    <img :src="itemData.images[0].url" class="item-preview-image">
  </section>
</template>

<script>
export default {
  // props: ['itemData'],
  data() {
    return {
      itemData: {
        name: "Hut In The Woods",
        Id: "1234",
        HostId: "2345",
        location: {
          address: {
            continent: "Asia",
            country: "Israel",
            Street: "Habonim",
            streetNo: 4
          },
          coords: {
            lon: 12,
            lat: 21
          }
        },
        images: [
          {
            type: "surroundings",
            url:
              "https://blenderartists.org/uploads/default/original/3X/6/1/61f16a294be7a9adb48900e1a542511e166aa79f.jpg"
          },
          {
            type: "nature",
            url: "https://static.puzzlefactory.pl/puzzle/182/314/original.jpg"
          }
        ],
        reviewsIds: [],
        type: ["nature", "woods"],
        availableDates: []
      }
    };
  }
};
</script>