<template>
  <div id="app">
    <AlertMessage v-bind:propAlert="alertMessage" />
    <Loading v-if="loading" />
    <div class="container-div">
      <SearchForm @text-user-id="getTextUserId" />
      <GitProjects @loading="getLoadingStatus" @alert-message="getAlertMsg" v-bind:textUserId="textUserId" />
    </div>
  </div>
</template>

<script>
import GitProjects from "./components/GitProjects.vue";
import SearchForm from "./components/SearchForm.vue";
import Loading from "./components/Loading.vue";
import AlertMessage from "./components/AlertMessage.vue";

export default {
  name: "app",
  components: {
    Loading,
    GitProjects,
    SearchForm,
    AlertMessage
  },
  data: function() {
    return {
      textUserId: "",
      loading: false,
      alertMessage: {},
      colorMessage: 'is-primary'
    };
  },
  methods: {
    // recebe o texto do input de pesquisa do componente filho
    getTextUserId(param) {
      this.textUserId = param;
    },

    // recebe o status de um componente filho
    getLoadingStatus(param) {
      this.loading = param;
    },

    // recebe a mensagem de um componente filho
    getAlertMsg(param) {
      this.alertMessage = param;
    }
  }
};
</script>

<style>
.container-div {
  width: fit-content;
  margin: 0px 10vw auto 10vw;
  margin-top: 3rem;
}

/* Ajustes na responsividade para telas com menos de 800px de largura */
@media (max-width: 800px) {
  .container-div {
    margin: auto;
    margin-top: 0.5rem;
    padding: 0.25rem; 
  }
}
</style>
