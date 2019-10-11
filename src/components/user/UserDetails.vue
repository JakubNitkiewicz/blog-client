<template>
  <div>
    <router-link to="/user">Back to users</router-link>
    <h1>{{ user.username }}</h1>
    <p>{{ user.id }} {{ user.email }}</p>
  </div>
</template>

<script>
  import axiosApi from '../../axios-api'
  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {

    },
    mounted() {
      const url = `user/${this.$route.params.id}`
      axiosApi.get(url).then((response) => {
        const userData = response.data
        this.user = userData
      })
    }
  }
</script>