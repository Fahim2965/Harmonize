<template>
    <v-list-item>
      <v-list-item-title>
        <v-text-field v-model="query" label="Search" @keydown.enter="search" />
      </v-list-item-title>
    </v-list-item>
    <v-list-item v-for="result in results" :key="result.id" link @click="downloadSound(result.id)">
      <v-list-item-title>{{ result.name }}</v-list-item-title>
    </v-list-item>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: '',
        results: []
      };
    },
    methods: {
      search() {
        fetch(`https://freesound.org/apiv2/search/text/?query=${this.query}&token=mza7IVFXUJIu9hexCX0P0PgGiwrFZT6VO0oESxvM`)
          .then(response => response.json())
          .then(data => {
            this.results = data.results;
          })
          .catch(error => {
            console.error(error);
          });
      },
      downloadSound(soundId) {
        const downloadUrl = `https://freesound.org/apiv2/sounds/${soundId}/download/`;
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = `sound-${soundId}.mp3`;
        a.target = '_blank';
        a.click();
      }
    }
  };
  </script>
  
  <style scoped>
  </style>