<template>
  <section>
    <house-socket></house-socket>
    <ul v-for="user in users" :key="user._id">
      <li>Hello, {{user.name}}</li>
    </ul>
  </section>
</template>

<script>
import houseSocket from "../components/HouseSocket";

export default {
  computed: {
    users() {
      console.log(this.$store.getters.users);
      return this.$store.getters.users;
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
  },
  created() {
    if (!this.$store.getters.users) {
      this.$store.dispatch({ type: "loadUsers" });
    }
    // return this.$store.getters.users
    // const id = this.$route.params.id;
    // let users = this.$store.getters.users
  },

  components: {
    houseSocket
  }
};
</script>