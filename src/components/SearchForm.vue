<template name="searchForm">
  <form class="searchForm">
    <slot></slot>

    <div class="where">
      <span>Country / State:</span>
      <br />
      <input v-model="filterBy.txt" type="text" placeholder="e.g." />
    </div>
    <div class="when">
      <span>From:</span>
      <br />
      <input v-model="from" type="date" />
      <br />
      <span>To:</span>
      <br />
      <input v-model="to" type="date" />
    </div>

    <div class="howMany">
      <span>How Many Visitors:</span>
      <br />
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
      from: "",
      to: "",
      res: "",
      filterBy: { txt: "" }
    };
  },
  methods: {
    doSearch(ev) {
      console.log(this.filterBy);
      if (this.filterBy.txt === "") return;
      // const where = ev.target.parentElement.children[1].children[0].value;
      // const when = {};
      // when.from = ev.target.parentElement.children[2].children[0].value;
      // when.until = ev.target.parentElement.children[2].children[1].value;
      // const who = ev.target.parentElement.children[3].children[0].value;
      // const searchBy = { when, where, who };
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