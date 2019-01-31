<template>
  <div id="app">
    <header>
      <h1>Movies catalog</h1>
    </header>
    <main>
      <aside class="sidebar">
        <router-link
          v-for="movie in movies"
          active-class="is-active"
          class="link"
          :to="{ name: 'post', params: { id: movie.id } }">
          {{movie.title}}
        </router-link>
      </aside>
      <div class="content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        movies: null,
        endpoint: 'https://api.themoviedb.org/3/movie/popular?api_key=1ae6bf73ea58a58290edad6afca876a9',
      }
    },

    created() {
      this.getAllMovies();
    },

    methods: {
      getAllMovies() {
        axios.get(this.endpoint)
          .then(response => {
            this.movies = response.data.results;
          })
          .catch(error => {
            // console.log(error);
          })
      }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }
  #app {
    color: #2c3e50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  header {
    background: #2b3147;
    border-bottom: 1px solid #42b983;
    color: #48c6ae;
    min-height: 90px;
    position: fixed;
    text-align: center;
    top: 0;
    width: 100%;
  }
  main {
    display: flex;
    height: calc(100vh - 90px);
    margin-top: 90px;
    overflow: hidden;
  }
  aside {
    background: #48c6ae;
    border-right: 1px solid #42b983;
    box-sizing: border-box;
    color: #3c4765 !important;
    flex: 1 0 40%;
    height: 100%;
    overflow-y: auto;
    padding: 50px 30px;
    width: 30%;
  }
  .content {
    align-items: center;
    background: #3c4765;
    color: #50e4cc;
    display: flex;
    flex: 1 1 70%;
    justify-content: center;
  }
  .link {
    color: #2c3e50;
    display: block;
    margin-bottom: 10px;
    text-decoration: none;
    &--home {
      margin-bottom: 30px;
      text-transform: uppercase;
    }
    &.is-active {
      color: #fff;
    }
  }
</style>
