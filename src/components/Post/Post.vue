<template lang="html">
  <div class="post" v-if="post">
    <h1 class="post__title">{{ post.title }}</h1>
    <p class="post__body">{{ post.overview }}</p>
    <p class="post__id">Rating: {{ post.vote_average }}</p>
  </div>
</template>

<script>
  import axios from 'axios';
  import { DEFAULT_MOVIE_ID } from './constants';
  export default {
    props: ['id'],
    data() {
      return {
        post: DEFAULT_MOVIE_ID,
        endpoint: 'https://api.themoviedb.org/3/movie/',
      }
    },

    created() {
      this.getMovies(this.id);
    },

    methods: {
      getMovies(id) {
        axios(this.endpoint + id + '?api_key=1ae6bf73ea58a58290edad6afca876a9')
          .then(response => {
            this.post = response.data;
          })
          .catch( error => {
            // console.log(error);
          })
      }
    },

    watch: {
      '$route'() {
        this.getMovies(this.id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .post {
    margin: 0 auto;
    max-width: 500px;
    padding: 50px 20px 70px;
    position: relative;
    &__title {
      margin-left: 50px;
      position: relative;
      text-transform: uppercase;
      z-index: 1;
    }
    &__body {
      position: relative;
      z-index: 1;
    }
    &__id {
      bottom: -50px;
      color: #eeeeee;
      font-size: 20px;
      font-weight: 900;
      line-height: 1;
      margin: 0;
      position: absolute;
      right: -20px;
      z-index: 0;
    }
  }
</style>
