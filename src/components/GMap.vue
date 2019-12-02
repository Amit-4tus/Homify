<template>
  <section v-if="showMap" class="listMap">
    <!-- {{isFixed}} -->
    <GmapMap
      v-if="center"
      ref="mapRef"
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 100%"
    >
      <GmapMarker v-for="(m, index) in markers"
       @click="zoomIn"
        :key="index" :position="m" :visible="m.visibility" />
    </GmapMap>
  </section>
</template>

<script>
export default {
  props: {
    coords: Object,
    marker: Array
  },
  data() {
    return {
      // markers: [{ lat: 32.0852999, lng: 34.78176759999999 }],
      // center: { lat: 32.0852999, lng: 34.78176759999999 },
      markers: [],
      center: null,
      showMap: false,
      zoom:7
    };
  },
  methods: {},
  created() {
    this.center = this.coords;
    this.markers=this.marker;

    // console.log(document.querySelector('.listMap')).offsetTop
  },
  methods:{
zoomIn(){
  this.zoom=13
}
  },
  async mounted() {
    if (!this.marker) {
      let temp = [];
      temp.push(this.coords);
      this.markers = temp;
      this.showMap = true;
    }
    this.showMap = true;
  },
  computed: {
    isFixed() {
      // return document.querySelector('.listMap').offsetTop
      // if ()
    }
  },
  watch: {}
};
</script>