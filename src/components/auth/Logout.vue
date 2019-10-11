<script>
  export default {
    mounted() {
      this.$store.dispatch('logout', { router: this.$router })
    }
  }
</script>