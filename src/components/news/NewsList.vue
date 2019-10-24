<template>
  <div>
    <!-- <div v-for="news in news" :key="news.id">
      <p>{{ news.id }} {{ news.username }}</p>
      <p>{{ news.title }}</p>
      <p>{{ news.introductionText }}</p>
      <p>{{ news.expandText }}</p>
    </div>-->

    <v-container>
      <v-row>
        <v-col>
          <h1>Aktualności</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" align-self="center">
          <router-link to="/news/add">
            <v-btn small replace color="info">Dodaj</v-btn>
          </router-link>
        </v-col>
      </v-row>
      <router-link v-for="news in news" :key="news.id" :to="`/news/${news.id}`">
        <v-card class="mt-3 mb-12" hover>
          <v-container fill-height fluid>
            <span class="headline px-0">{{ news.title }}</span>
          </v-container>
          <v-card-text v-html="news.introductionText"></v-card-text>
          <v-card-actions>
            <span class="mx-2">{{ news.createdAt | formatDate }} | {{news.username}}</span>

            <v-spacer></v-spacer>
            <span class="mx-2">Komentarze: {{ news.comments }}</span>

            <!-- <router-link class="btn" :to="`/news/${news.id}`">
              <v-btn small replace color="info">Czytaj więcej</v-btn>
            </router-link> -->
          </v-card-actions>
        </v-card>
      </router-link>
      <!-- </div> -->
    </v-container>
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
  }
  .v-image {
    border-radius: 4px;
  }

  .news__title {
    font-size: 1.7rem;
  }

  .news__introduction-text {
    color: #ccc;
  }
</style>

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
          this.news.push(news)
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>