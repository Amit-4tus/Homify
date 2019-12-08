
<template>
  <section class="user-msg" v-if="msg" :class="msg.type">
    <button @click="close">x</button>
    <p>{{msg.txt}}</p>
  </section>
</template>

<script>
import { eventBus } from "../services/eventBusService.js";
export default {
  data() {
    return {
      msg: null
    };
  },
  created() {
    eventBus.$on("show-msg", msg => {
      this.msg = msg;
    });
  },
  methods: {
    close() {
      this.msg = null;
    }
  }
};
</script>






















