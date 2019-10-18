<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <SearchForm />
    <GitProjects msg="REPOSITORIOS"/>
  </div>
</template>

<script>
import GitProjects from './components/GitProjects.vue'
import SearchForm from './components/SearchForm.vue'

export default {
  name: 'app',
  components: {
    GitProjects,
    SearchForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
