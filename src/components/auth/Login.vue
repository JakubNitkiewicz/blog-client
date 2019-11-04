<template>
  <v-row>
    <v-col cols="12" md="6" class="mx-auto">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Zaloguj się</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field id="email" v-model="email" label="Email" required></v-text-field>

            <v-text-field
              id="password"
              v-model="password"
              label="Hasło"
              type="password"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" @click="login()">Zaloguj</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        email: 'nitek@example.com',
        password: '12345678'
      }
    },
    methods: {
      login() {
        const formData = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('login', { email: this.email, password: this.password, router: this.$router })
      }
    }
  }
</script>