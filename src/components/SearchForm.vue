<template name="searchForm">
  <form class="searchForm">
    <slot></slot>

    <div class="where">
      <span>Country / State:</span>
      <input class="input" type="text" placeholder="e.g. Berlin" v-model="filterBy.txt" />
    </div>
    <div class="when">
      <span>From:</span>
      <input class="input" :min="dateMin" v-model="filterBy.from" type="date" />
      <span>To:</span>
      <input class="input" :min="dateMin" v-model="filterBy.to" type="date" />
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
    <div class="submit">
      <input type="submit" @click.prevent="doSearch" value="TRAVEL" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      res: "",
      filterBy: {
        txt: "",
        from: new Date().toDateString(),
        to: new Date().toDateString()
      },
      disableDate: new Date(Date.now() - 8640000)
    };
  },
  methods: {
    async doSearch(ev) {
      // console.log(this.filterBy);
      // const fullDate = this.filterBy.from + " " + this.filterBy.to;
      await this.$store.dispatch("setFilter", this.filterBy);
      this.$router.push(`/house/${this.filterBy.txt}`);

      // this.$router.push(`/house/${this.filterBy.txt}/${fullDate}`);
    }
  },
  computed: {
    dateMin() {
      var d = new Date(new Date()),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    }
  }
};
</script>