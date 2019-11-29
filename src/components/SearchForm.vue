<template name="searchForm">
  <form class="searchForm">
    testing dates!!
    available dates example: 15/12/2019 - 20/12/2019
    <div>user from : {{from}}</div>
    user to : {{to}}
    <div> Res:{{res}}</div>
    <slot></slot>
    
    <div class="where">
      Country / State:
      <input type="text" />
    </div>
    <div class="when">
      From:
      <input v-model="from" type="date" />
      To:
      <input v-model="to" type="date" />
    </div>
   
    <div class="howMany">
      How Many Visitors:
      <select>
        <option value="few">1-3</option>
        <option value="middle">4-7</option>
        <option value="many">8+</option>
      </select>
    </div>
    <button @click.prevent="calcDateRange">check Results</button>
    <input type="submit" class="submit" value="TRAVEL" @click.prevent="doSearch" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      from: "",
      to: "",
      res: ""
    };
  },
  methods: {
    doSearch(ev) {
      const where = ev.target.parentElement.children[1].children[0].value;
      const when = {};
      when.from = ev.target.parentElement.children[2].children[0].value;
      when.until = ev.target.parentElement.children[2].children[1].value;
      const who = ev.target.parentElement.children[3].children[0].value;
      const searchBy = { when, where, who };
      this.$router.push("/house");
    },
    calcDateRange() {
      var startdate = new Date("2019/12/15").toLocaleDateString();
      var enddate = new Date("2019/12/20").toLocaleDateString();
      var startD = new Date(this.from).toLocaleDateString();
      var endD = new Date(this.to).toLocaleDateString();
      if (startD > endD) return this.res='enter valid date ';
      if (startD >= startdate && endD <= enddate) {
        this.res="Yes sure!!"
      } else {
        this.res="No place!!"
      }
    }
  }
};
</script>