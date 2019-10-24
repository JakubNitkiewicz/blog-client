<template>
  <div>
    <v-row>
      <h2 class="ma-3">Komenarze ({{ comments.length }}):</h2>
    </v-row>
    <div class="mb-3" v-if="isAuthenticated">
      <div v-if="commentPending === false">
        <v-textarea
          solo
          id="commentText"
          v-model="commentText"
          label="Twój komentarz"
          required
          auto-grow
          rows="3"
          hide-details
        ></v-textarea>
      </div>
      <v-card class="mb-3" v-else>
        <v-container text-center>
          <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </v-container>
      </v-card>
      <div class="d-flex pt-2">
        <div class="flex-grow-1"></div>
        <v-btn class="mr-0" color="primary" @click="submit()">Dodaj</v-btn>
      </div>
    </div>
    <v-card class="mb-3" v-else>
      <v-container>
        <span class="headline">Zaloguj się, aby dodać komentarz</span>
      </v-container>
    </v-card>
    <v-card class="mb-3" v-if="areThereAnyComments">
      <v-container fill-height fluid>
        <span class="headline">Nie ma jeszcze żadnych komentarzy</span>
      </v-container>
    </v-card>
    <div v-else>
      <v-card class="mb-3" v-for="comment in comments" :key="comment.id">
        <div>
          <!-- <v-container fill-height fluid>
            <span class="headline px-auto">{{ comment.authorId }}</span>
            <span>{{ comment.content }}</span>
          </v-container>-->
          <v-container fill-height fluid>
            <span class="px-0">{{ comment.username }} | {{ comment.createdAt | formatDate }}</span>
          </v-container>
          <v-card-text class="pt-0">{{ comment.content }}</v-card-text>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
  import axiosApi from '../../axios-api'
  export default {
    data() {
      return {
        commentText: '',
        commentPending: false,
        comments: [],
        url: ''
      }
    },
    methods: {
      submit() {
        if (this.commentPending === false) {
          this.commentPending = true
          axiosApi
            .post(this.url, {
              commentText: this.commentText,
              newsId: this.$route.params.id
            })
            .then((response) => {
              console.log('response data', response.data)
              this.comments.unshift(response.data)
              this.commentPending = false
            })
          this.commentText = ''
        }
      }
    },
    computed: {
      isAuthenticated() {
        return this.$store.getters.isAuthenticated
      },
      areThereAnyComments() {
        if (this.comments) {
          return this.comments.length <= 0
        } else {
          return true
        }
      }
    },
    mounted() {
      this.url = `news/${this.$route.params.id}/comments`
      axiosApi.get(this.url).then((response) => {
        this.comments = response.data
      })
    }
  }
</script>