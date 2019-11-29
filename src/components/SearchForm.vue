<template name="searchForm">
  <form class="searchForm">
      <slot></slot>
    <div class="where">
      Country / State:
      <input type="text" />
    </div>
    <div class="when">
      From:
      <input type="date" />
      To:
      <input type="date" />
    </div>
    <div class="howMany">
      How Many Visitors:
      <select>
          <option value="few">1-3</option>
          <option value="middle">4-7</option>
          <option value="many">8+</option>
      </select>
    </div>
    <input type="submit" class="submit" value="TRAVEL" @click.prevent="doSearch">
  </form>
</template>

<script>
export default {
    methods: {
        doSearch(ev) {
            const where = ev.target.parentElement.children[1].children[0].value
            const when = {}
            when.from = ev.target.parentElement.children[2].children[0].value
            when.until = ev.target.parentElement.children[2].children[1].value
            const who = ev.target.parentElement.children[3].children[0].value
            const searchBy = {when, where, who}
            this.$router.push('/house')
        }
    }
};
</script>