<template>
  <section  class="listMap">
    <!-- {{isFixed}} -->
    <GmapMap v-if="center"  ref="mapRef" :center="center" :zoom="10" map-type-id="terrain" style="width: 100%; height: 100%">
    <GmapMarker
   :position="markers" :clickable="true" @click="center=m.position"
  />
    </GmapMap>
  </section>
</template>

<script>
export default {
  props: {
    coords: Object,
    marker:Array
  },
  data() {
    return {
      // markers: { lat: 32.0852999, lng: 34.78176759999999 },
      // center: { lat: 32.0852999, lng: 34.78176759999999 },
      markers: null,
      center: null,
      showMap:false
      // center:this.coords
    };
  },
  methods: {
    
  },
  created() {
    this.center = this.coords;
    this.markers = this.coords;
   
    // console.log(document.querySelector('.listMap')).offsetTop
  },
 async mounted() {
    // if(await this.marker.length>0){
    //   console.log(this.marker)
    //   this.showMap=true;
    // }
  },
  computed: {
    isFixed() {
      // return document.querySelector('.listMap').offsetTop
      // if ()
    }
  },
  watch: {
    coords() {
      this.center = this.coords;
      this.markers = this.coords;
    }
  }
};
</script>