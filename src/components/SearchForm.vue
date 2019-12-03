<template name="searchForm">
  <form class="searchForm">
    <slot></slot>

    <div class="where">
      <span>Country / State:</span>
      <input type="text" placeholder="e.g. Berlin" v-model="filterBy.txt" />
    </div>
    <div class="when">
      <span>From:</span>
      <input :min="disableDate" v-model="filterBy.from" type="date" />
      <span>To:</span>
      <input v-model="filterBy.to" type="date" />
    </div>

    <div class="howMany">
      <span>How Many Visitors:</span>
      <select>
        <option value="few">1-3</option>
        <option value="middle">4-7</option>
        <option value="many">8+</option>
      </select>
    </div>
    <!-- <button @click.prevent="calcDateRange">check Results</button> -->
    <button class="submit" @click.prevent="doSearch">TRAVEL</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      res: "",
      filterBy: { txt: "", from: "", to: "" },
      disableDate: new Date(Date.now() - 8640000)
    };
  },
  methods: {
    async doSearch(ev) {
      this.filterBy.from = new Date(this.filterBy.from).toLocaleDateString();
      this.filterBy.to = new Date(this.filterBy.to).toLocaleDateString();
      await this.$store.dispatch("setFilter", this.filterBy);
      this.$router.push(`/house/${this.filterBy.txt}`);
    },
    calcDateRange() {
      var startdate = new Date("2019/12/15").toLocaleDateString();
      var enddate = new Date("2019/12/20").toLocaleDateString();
      var startD = new Date(this.from).toLocaleDateString();
      var endD = new Date(this.to).toLocaleDateString();
      if (startD > endD) return (this.res = "enter valid date ");
      if (startD >= startdate && endD <= enddate) {
        this.res = "Yes sure!!";
      } else {
        this.res = "No place!!";
      }
    }
  }
};
</script>