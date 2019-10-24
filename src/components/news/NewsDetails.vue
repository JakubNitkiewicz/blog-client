<template>
  <v-row>
    <v-col lg="8" offset-lg="2" >
      <v-container>
        <div>
          <v-card class="my-3">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>
                {{ news.title }}
                <div class="news__author">
                  <span>{{ news.createdAt | formatDate }} | {{news.username}}</span>
                </div>
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text v-html="news.introductionText"></v-card-text>
            <v-card-text v-html="news.expandedText"></v-card-text>
          </v-card>
        </div>

        <app-comments></app-comments>
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped>
  .news__author {
    font-size: 0.875rem;
  }
</style>

<script>
  import axiosApi from '../../axios-api'
  import Comments from './Comments.vue'
  export default {
    components: {
      appComments: Comments
    },
    data() {
      return {
        news: {}
      }
    },
    methods: {

    },
    mounted() {
      const url = `news/${this.$route.params.id}`
      axiosApi.get(url).then((response) => {
        this.news = response.data
      })
    }
  }
</script>