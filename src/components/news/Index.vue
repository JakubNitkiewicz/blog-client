<template>
  <v-row>
    <v-col lg="8" md="12" sm="12" col="12">
      <app-news-list></app-news-list>
    </v-col>
    <v-col lg="4" md="12" sm="12" col="12">
      <app-sidebar></app-sidebar>
    </v-col>
  </v-row>
</template>


<script>
  import NewsList from './NewsList.vue'
  import Sidebar from './Sidebar.vue'
  import axiosApi from '../../axios-api'
  export default {
    components: {
      appNewsList: NewsList,
      appSidebar: Sidebar
    }
  }
</script>