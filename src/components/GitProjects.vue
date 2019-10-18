<template>
  <div class="main-git-projects">
    <div class="table-container">
      <table class="table">
        <thead>
          <th>col1</th>
          <th>col2</th>
          <th>col3</th>
        </thead>
        <tbody>
          <td>td1</td>
          <td>td2</td>
          <td>td3</td>
        </tbody>
      </table>
    </div>
    <button type="button" @click="loadRepositories"></button>
  </div>
</template>

<script>
const url_fetch = `https://api.github.com/users/josiel27/repos`; //url para pegar o projeto na api

export default {
  name: "GitProjects",
  props: {
    msg: String
  },
  methods: {
    async loadRepositories() {
      // let a = 'ok';
      console.log("Hello world!");
       await fetch(url_fetch)
        .then(res => {
           console.log(res.json);
          return res.json();
        })
        .catch(error => {
          alert(`Erro: ${error}`);
        });

     
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
