<template>
  <div class="main-search-form">
    <form @submit="(e) => teste(e)">
      <label>Search for a github user Account:</label>
      <input type="text" placeholder="User Id" required />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  props: {},
  methods: {
    teste(event) {
      event.preventDefault();
      // setNameRepositorie(event.target.inputSearchText.value); //Recebe o retorno do input de texto do form e seta no state
      alert(" = 5555");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
