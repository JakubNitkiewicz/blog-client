<template>
  <div>
    <h1>This is news index</h1>
    <h2>{{ connected }}</h2>
    <h3>{{ res }}</h3>
  </div>
</template>


<script>
  import axiosApi from '../../axios-api'
  export default {
    data() {
      return {
        connected: false,
        res: ''
      }
    },
    methods: {

    },
    mounted() {
      const url = 'test'
      axiosApi.get(url).then(response => {
        // this.res = response.data.posts
        this.res = response
        this.connected = true
      }).catch(err => {
        this.res = err
      })
    }
  }
</script>