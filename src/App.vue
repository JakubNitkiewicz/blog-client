<template>
  <v-app app>
    <app-header></app-header>

    <v-content id="home">
      <v-container mx-auto pt-4 pb-0>
        <router-view />
      </v-container>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
    components: {
      appHeader: Header,
      appFooter: Footer
    },
    name: "App",
    // props: {
    //   source: String
    // },
    // data: () => ({
    //   drawer: null
    // }),
    created() {
      this.$vuetify.theme.dark = true
    }
  };
</script>
