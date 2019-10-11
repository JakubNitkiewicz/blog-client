<template>
  <div>
    <v-toolbar app>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />
      <v-container mx-auto py-0>
        <v-layout>
          <v-img
            :src="require('@/assets/logo.png')"
            class="mr-5"
            contain
            height="48"
            width="48"
            max-width="48"
            @click="$vuetify.goTo(0)"
          />
          <v-btn
            text
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="ml-0 my-auto hidden-sm-and-down"
            flat
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
            v-for="(link, i) in authLinks"
            :key="i"
            :to="link.to"
            class="ml-0 my-auto hidden-sm-and-down"
            flat
            @click="onClick($event, item)"
          >{{ link.text }}</v-btn>
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
        ],
        authLinks: [
          {
            text: 'Zaloguj się',
            to: '/login'
          },
          {
            text: 'Rejestracja',
            to: '/signup'
          },
        ]
      }
    }
  }
</script>