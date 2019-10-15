<template>
  <div>
    <router-link to="/news/add">Dodaj newsa</router-link>
    <h1>This is news index</h1>

    <div v-for="news in news" :key="news.id">
      <p>{{ news.id }} {{ news.username }}</p>
      <p>{{ news.title }}</p>
      <p>{{ news.introductionText }}</p>
      <p>{{ news.expandText }}</p>
    </div>
  </div>
</template>


<script>
  import axiosApi from '../../axios-api'
  export default {
    data() {
      return {
        news: []
      }
    },
    methods: {

    },
    mounted() {
      const url = 'news'
      axiosApi.get(url).then(response => {
        const newsData = response.data
        newsData.forEach((news) => {
          console.log(news)
          this.news.push(news)
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>