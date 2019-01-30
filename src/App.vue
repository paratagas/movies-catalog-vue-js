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
        <router-view></router-view>
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
            console.log('-----error-------');
            console.log(error);
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
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
    position: fixed;
    color: #48c6ae;
    top: 0;
    width: 100%;
    min-height: 90px;
    border-bottom: 1px solid #42b983;
    text-align: center;
    background: #2b3147;
  }
  main {
    display: flex;
    height: calc(100vh - 90px);
    margin-top: 90px;
    overflow: hidden;
  }
  aside {
    background: #48c6ae;
    flex: 1 0 40%;
    height: 100%;
    overflow-y: auto;
    width: 30%;
    padding: 50px 30px;
    box-sizing: border-box;
    border-right: 1px solid #42b983;
    color: #3c4765 !important;
  }
  .content {
    flex: 1 1 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3c4765;
    color: #50e4cc;
  }
  .link {
    display: block;
    text-decoration: none;
    margin-bottom: 10px;
    color: #2c3e50;
    &--home {
      text-transform: uppercase;
      margin-bottom: 30px;
    }
    &.is-active {
      color: #fff;
    }
  }
</style>
