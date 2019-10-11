<template>
  <div>
    <v-toolbar>
      <!-- <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" /> -->
      <v-container mx-auto py-0>
        <v-layout>
          <v-img
            :src="require('@/assets/logo.png')"
            class="mr-5"
            contain
            height="48"
            width="48"
            max-width="48"
          />
          <v-btn
            text
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="ml-0 my-auto hidden-sm-and-down"
            @click="onClick($event, item)"
          >{{ link.text }}</v-btn>
          <v-spacer />
          <!-- <v-text-field
            append-icon="mdi-magnify"
            flat
            hide-details
            solo-inverted
            style="max-width: 300px;"
          />-->
          <v-btn
            text
            v-for="(link) in authLinks"
            :key="link.to"
            :to="link.to"
            class="ml-0 my-auto hidden-sm-and-down"
            @click="onClick($event, item)"
          >{{ link.text }}</v-btn>
        </v-layout>
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {
            text: 'Aktualności',
            to: '/'
          },
          {
            text: 'Baza Danych',
            to: '/database'
          },
          {
            text: 'Mapy',
            to: '/maps'
          },
          {
            text: 'Artykuły',
            to: '/articles'
          },
          {
            text: 'Poradniki',
            to: '/guides'
          },
          {
            text: 'Użytkownicy',
            to: '/user'
          }
        ]
      }
    },
    methods: {

    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated
      },
      authLinks() {
        if (!this.$store.getters.isAuthenticated) {
          return [{
            text: 'Zaloguj się',
            to: '/login'
          },
          {
            text: 'Rejestracja',
            to: '/signup'
          }]
        } else {
          return [{
            text: `Witaj ${this.$store.getters.username}`,
            to: `/user/${this.$store.getters.userId}`
          },
          {
            text: 'Wyloguj się',
            to: '/logout'
          }]
        }
      }
    },
    mounted() {
      console.log(this.$store.getters.isAuthenticated)
    }
  }
</script>