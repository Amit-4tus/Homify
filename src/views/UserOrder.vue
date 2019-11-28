'use strict'

<template>
    <section>
      <p>Hello, this is your order: </p>
        <div v-if="houseData.name" class="houseGeneralInfo">
        <h1 class="houseTitle">{{houseData.name}} </h1>
        <h2> Your host: {{houseData.hostId}}</h2>
  
        </div>
    </section>
</template>

<script>

export default {
  data() {
    return {
  
    };
  },
  created() {
    this.$store.dispatch("loadHouseById", this._id);
    // console.log(this.houseData.hostId)
    // this.$store.dispatch("getUserById", this.houseData.hostId);
  },
  computed: {
    _id() {
      return this.$route.params._id;
    },
    houseData() {
      let currHouse = this.$store.getters.currHouse;
      if (!currHouse) return null;
      return currHouse;
    },
    // hostData() {
    //   let host = this.$store.getters.currHouse;
    //   console.log(host)
    //     // console.log(this.houseData.hostId)
    //     // this.$store.dispatch({type: 'getUserById', userId: this.houseData.hostId})
    // }
    
  },
  
};
</script>

