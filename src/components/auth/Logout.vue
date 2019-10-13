<template>
  <v-layout text-center wrap>
    <v-flex>
      <h3 class="my-12">Zostałeś wylogowany! Przenosimy Cię...</h3>
      <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    mounted() {
      this.$store.dispatch('logout', { router: this.$router })
    }
  }
</script>