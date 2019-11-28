<template name="searchForm">
  <form class="searchForm">
      <slot class="formHeader"></slot>
    <div class="where">
      Country/State:
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
    <input type="submit" class="submit">
  </form>
</template>

<script>
export default {};
</script>