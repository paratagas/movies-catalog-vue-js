<template lang="html">
  <div class="post" v-if="post">
    <h1 class="post__title">{{ post.title }}</h1>
    <p class="post__body">{{ post.overview }}</p>
    <p class="post__id">Rating: {{ post.vote_average }}</p>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    props: ['id'],
    data() {
      return {
        post: null,
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
            this.post = response.data
          })
          .catch( error => {
            console.log(error)
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
    position: relative;
    max-width: 500px;
    margin: 0 auto;
    padding: 50px 20px 70px;
    &__title {
      position: relative;
      text-transform: uppercase;
      z-index: 1;
      margin-left: 50px;
    }
    &__body {
      position: relative;
      z-index: 1;
    }
    &__id {
      position: absolute;
      font-size: 20px;
      bottom: -50px;
      margin: 0;
      color: #eeeeee;
      right: -20px;
      line-height: 1;
      font-weight: 900;
      z-index: 0;
    }
  }
</style>
