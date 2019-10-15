<template>
  <div>
    <h1>{{ news.title }}</h1>
    <p>Autor: {{ news.username }}</p>
    <p>{{ news.introductionText }}</p>
    <p>{{ news.expandedText }}</p>
  </div>
</template>

<script>
  import axiosApi from '../../axios-api'
  export default {
    data() {
      return {
        news: {}
      }
    },
    methods: {

    },
    mounted() {
      const url = `news/${this.$route.params.id}`
      console.log(url)
      axiosApi.get(url).then((response) => {
        console.log(response)
        this.news = response.data
      })
    }
  }
</script>