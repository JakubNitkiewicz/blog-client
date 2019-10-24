<template>
  <v-row>
    <v-col cols="12" md="8" lg="6" class="mx-auto">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Stwórz nową aktualność</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field id="title" v-model="title" label="Tytuł" required></v-text-field>
            <v-textarea
              id="introductionText"
              v-model="introductionText"
              label="Wstępna treść"
              required
              rows="12"
            ></v-textarea>
            <v-textarea id="expandedText" v-model="expandedText" label="Część po rozwinięciu" rows="12"></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" @click="submit()">Dodaj</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
  #introductionText {
    white-space: pre-line;
  }
</style>

<script>
  export default {
    data() {
      return {
        title: 'Lorem testum Nitkum',
        introductionText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, id nemo. Voluptate aliquam est, quasi architecto laboriosam odit commodi accusamus.',
        expandedText: ''
      }
    },
    methods: {
      submit() {
        console.log('dasdasda')
        this.$store.dispatch('addNews', { title: this.title, introductionText: this.introductionText, expandedText: this.expandedText })
      }
    }
  }
</script>