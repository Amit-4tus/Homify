<template name="MyFooter">
  <section class="myFooter">
    <img class="portrait" src="../assets/imgs/Amit Fortus.jpeg" />
    <img class="portrait" src="../assets/imgs/Hosam Faour.jpeg" />
    <img class="portrait" src="../assets/imgs/Shachal Ami-Ad.jpeg" />
    <h3>
      Made by -
      <a href="https://www.facebook.com/amit.fortus">Amit Fortus</a>,
      <a href="https://www.linkedin.com/in/hosam-faour-38b430161">Hosam Faour</a> &amp;
      <a href="https://www.linkedin.com/in/shachal-ami-ad-8332a0103/">Shachal Ami-Ad</a>
    </h3>
    <img class="logo" src="../assets/logo.png" @click="doScroll" />
  </section>
</template>

<script>
export default {
    methods: {
        doScroll() {
            window.scrollTo(0, 0)
        }
    }
};
</script>