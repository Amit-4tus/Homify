<template>
    <section>
        <h1>Hello {{loggedinUser}}!</h1>

        <ul>
            <li v-for="user in users" :key="user._id">
            <pre>{{user}}</pre>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    computed: {
    users() {
      return this.$store.getters.users
    },
    loggedinUser() {
      return this.$store.getters.loggedinUser
    }
    },


    created() {
        // console.log('hi')
        // return this.$store.getters.users
        // const id = this.$route.params.id;
        // console.log(this.$store.getters.users)
        // let users = this.$store.getters.users
        // this.users = users
    }
}
</script>