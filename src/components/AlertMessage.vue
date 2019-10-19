<template>
  <div v-show="showAlert" class="main-alert-message">
    <div class="notification" v-bind:class="propAlert.color">
      <button class="delete" @click="closeAlert"></button>
      {{propAlert.msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertMessage",
  data: function() {
    return {
      showAlert: false
    };
  },
  props: {
    propAlert: { msg: "", color: "" }
  },
  watch: { //qualquer alteracao nas propiedades do alerta, ele chama funcao
    propAlert: function() {
      return this.showAlertMessage();
    }
  },
  methods: {
    // Mostra o alert durante de 2,5seg
    showAlertMessage() {
      this.showAlert = true;
      setTimeout(
        function() {
          this.showAlert = false;
        }.bind(this),
        2500
      );
    },

    // funcao para esconder o alerta
    closeAlert() {
      this.showAlert = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-alert-message {
  position: fixed;
  width: 100vw;
  text-align: center;
  top: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  z-index: 3;
}
.notification{
    width: 35vw;
    min-width: 260px;
    margin-top: 1rem;
}
</style>
