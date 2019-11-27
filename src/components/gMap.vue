<template>
  <section>
    <GmapMap
      ref="mapRef"
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
    <button @click="panTo('tlv')">Tel Aviv</button>
    <button @click="panTo('haifa')">Haifa</button>
    <button @click="panTo('omer')">Omer</button>
  </section>
</template>
<style  scoped>
button {
  margin-left: 5px;
  margin-top: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      markers: [
        { position: { lat: 32.0839684, lng: 34.8004981 } },
        { position: { lat: 32.7997472, lng: 35.0868174 } },
        { position: { lat: 31.2745166, lng: 34.894079 } }
      ],
      center: { lat: 32.7997472, lng: 35.0868174 }
    };
  },
  methods: {
    panTo(place) {
      let lat, lng;
      if (place === "tlv") (lat = 32.0839684), (lng = 34.8004981);
      if (place === "haifa") (lat = 32.7997472), (lng = 35.0868174);
      if (place === "omer") (lat = 31.2745166), (lng = 34.894079);

      this.$refs.mapRef.$mapPromise.then(map => {
        map.panTo({ lat: lat, lng: lng });
      });
    }
  }
};
</script>