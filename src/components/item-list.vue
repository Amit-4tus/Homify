<template>
  <div class="item-details">
    <router-link
      :to="`/house/${item._id}`"
      v-for="(item, idx) in items"
      :key="idx"
      @click.native="emitData(item)"
    >
      <item-preview :itemData="item"></item-preview>
    </router-link>
  </div>
</template>

<script>
import itemPreview from "./item-preview";
import { eventBus } from "../services/eventBusService";
export default {
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$store.getters.itemsToShow;
    }
  },
  methods: {},
  components: {
    itemPreview
  }
};
</script>