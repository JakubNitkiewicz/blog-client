<template>
  <div>
    <v-toolbar>
      <!-- <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" /> -->
      <v-container mx-auto py-0>
        <!-- <span >sdasda</span> -->
        <v-layout>
          <v-img
            :src="require('@/assets/logo.png')"
            class="mr-5"
            contain
            height="48"
            width="48"
            max-width="48"
          />
          <router-link
            class="v-btn v-btn--flat v-btn--flat v-size--large theme--dark my-auto"
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
          >{{ link.text }}</router-link>
          <!-- <v-btn
            text
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="ml-0 my-auto hidden-sm-and-down"
            @click="onClick($event, item)"
          >{{ link.text }}</v-btn>-->
          <v-spacer />
          <!-- <v-text-field
            append-icon="mdi-magnify"
            flat
            hide-details
            solo-inverted
            style="max-width: 300px;"
          />-->

          <!-- <v-btn
            text
            v-for="(link) in authLinks"
            :key="link.to"
            :to="link.to"
            class="ml-0 my-auto hidden-sm-and-down"
            @click="onClick($event, item)"
          >{{ link.text }}</v-btn> -->
          <router-link
            class="v-btn v-btn--flat v-btn--flat v-size--large theme--dark my-auto"
            v-for="link in authLinks"
            :key="link.to"
            :to="link.to"
          >{{ link.text }}</router-link>
        </v-layout>
      </v-container>

      <!-- <v-toolbar-items>
        <router-link class="v-btn v-btn--flat v-btn--flat v-size--small theme--dark" to="/">Aktualności</router-link>
        <router-link class="v-btn v-btn--flat v-btn--text v-size--default theme--dark" to="/">Baza Danych</router-link>
        <router-link class="v-btn v-btn--flat v-btn--text v-size--default theme--dark" to="/">Artykuły</router-link>
        <router-link class="v-btn v-btn--flat v-btn--text v-size--default theme--dark" to="/">Poradniki</router-link>
        <router-link class="v-btn v-btn--flat v-btn--text v-size--default theme--dark" to="/user">Użytkownicy</router-link>
      </v-toolbar-items>-->

      <!-- <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <router-link class="v-btn v-btn--flat v-btn--text v-size--default theme--dark" to="/login">Zaloguj się</router-link>
        <router-link class="v-btn v-btn--flat v-btn--text v-size--default theme--dark" to="/signup">Rejestracja</router-link>
      </v-toolbar-items>-->
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
    }
  }
</script>