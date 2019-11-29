<template>
    <section>
        
        <ul v-for="user in users" :key="user._id">
            <li >
            Hello, {{user.name}}
            </li>
        </ul>
         <button @click="getAllUsers">Get All Users</button>
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
    
    methods: {

    getAllUsers() {
        this.$store.dispatch({type: 'loadUsers'})
        },
    },
    
    created() {
       
        // return this.$store.getters.users
        // const id = this.$route.params.id;
    
        // let users = this.$store.getters.users
      
    }
}
</script>