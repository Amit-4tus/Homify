<template>
  <section>
    <!-- test -->
    <h1>Calendar</h1>
    <h3>test: available dates from 27.11 30-11</h3>
    <h2>from</h2>
    <datepicker
      :disabled-dates="disabledDates"
      :clear-button="true"
      :highlighted="highlighted"
      name="calendar"
    ></datepicker>
    <h2>to</h2>
     <datepicker
      :disabled-dates="disabledDates"
      :clear-button="true"
      :highlighted="highlighted"
      name="calendar"
    ></datepicker>
  </section>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  props: {},

  data() {
    return {
      date: new Date(),
      highlighted: {
        // to: new Date(2019, 11, 16),
        // from: new Date(2019, 10, 27),
       dates: [ // Highlight an array of dates
      new Date(2019, 10, 28),
      new Date(2019, 10, 29),
      new Date(2019, 10, 30),
       new Date(2019, 11, 5),
      new Date(2019, 11, 6),
      new Date(2019, 1, 8),

    ],
     
      },
      disabledDates: {
        to: new Date(Date.now() - 8640000)
      }
    };
  },
  methods: {},
  created() {},
  components: {
    Datepicker
  }
};
</script>


