<template>
  <section v-if="center">
    <GmapMap
      ref="mapRef"
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :position="markers"
        :clickable="true"
      
        @click="center=m.position"
      />
    </GmapMap>
  </section>
</template>
<style  scoped>

</style>
<script>

export default {
  props: {
    coords: Object
  },

  data() {
    return {
      // markers: { lat: 32.0852999, lng: 34.78176759999999 },
      // center: { lat: 32.0852999, lng: 34.78176759999999 },
      markers: null,
      center: null
      // center:this.coords
    };
  },
  methods: {
    panTo(coords) {
      let lat = coords.lat;
      let lng = coords.lng;
      this.$refs.mapRef.$mapPromise.then(map => {
        map.panTo({ lat: lat, lng: lng });
      });
    }
  },
  created() {
    console.log("got:", this.coords);
    this.center = this.coords;
    this.markers = this.coords;
  },
  watch: {
    coords() {
      this.center = this.coords;
      this.markers = this.coords;
    }
  }
};
</script>
