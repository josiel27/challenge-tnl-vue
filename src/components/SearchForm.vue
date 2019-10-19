<template>
  <div class="main-search-form">
    <form @submit.stop.prevent="() => emitTextUserId()">
      <label class="column is-full">Search for a github user Account:</label>
      <div class="column is-full is-flex">
        <input class="column is-3 input" v-model="textUserId" type="text" placeholder="User Id" required />
        <button type="column is-4 submit" class="button is-info">Search</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data: function() {
    return {
      textUserId: "josiel27"
    };
  },
  methods: {
    emitTextUserId() {
      // event.preventDefault(); //alterado por @submit.stop.prevent
      this.$emit("text-user-id", this.textUserId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button{
    margin-left: 1rem;
  }
</style>
