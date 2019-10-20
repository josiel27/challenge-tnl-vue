<template>
  <div v-if="projectsList != ''" class="main-git-projects">
    <table class="table is-striped is-primary">
      <thead>
        <th
          v-for="column in tableColumns"
          v-bind:key="column"
          v-bind:style="filterSelect.filter === column ? styleTheadBorder : null"
          @click="() => changeFilterOrderBy(column)"
        >
          {{column === 'name' ? 'Project' : null}}
          {{column === 'private' ? 'Private' : null}}
          {{column === 'html_url' ? 'URL' : null}}
          {{column === 'description' ? 'Description' : null}}
          {{column === 'language' ? 'Language' : null}}
          <font-awesome-icon icon="arrow-up" v-if="filterSelect.order == 'ASC'" />
          <font-awesome-icon icon="arrow-down" v-if="filterSelect.order == 'DESC'" />
        </th>
      </thead>
      <tbody>
        <tr v-for="projectItem in projectsList" v-bind:key="projectItem.id">
          <td
            v-for="column in tableColumns"
            v-bind:key="column"
            v-bind:id="column"
          >{{projectItem[column]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "GitProjects",
  props: {
    textUserId: String
  },
  data: function() {
    return {
      projectsList: [],
      tableColumns: ["name", "private", "html_url", "description", "language"],
      filterSelect: { filter: "name", order: "ASC" },
      styleTheadBorder: {
        borderBottom: " 2px solid #7b7b7d" //styled border bottom da thead seleciona
      }
    };
  },
  watch: {
    //qualquer alteracao(input text de pesquisa) ele chama funcao para carregar o projeto
    textUserId: function() {
      return this.loadProjects();
    }
  },
  methods: {
    // show/hide loading
    loading(boolLoading) {
      this.$emit("loading", boolLoading);
    },

    // show alert message
    showAlertMessage(color, msg) {
      this.$emit("alert-message", { color, msg });
    },

    //Metodo para carregar o json da api do github
    async loadProjects() {
      this.loading(true); //show loading

      let url_fetch = `https://api.github.com/users/${this.textUserId}/repos`; //url para pegar o projeto na api
      let response = await fetch(url_fetch)
        .then(res => {
          return res.json();
        })
        .catch(error => {
          alert(`Erro: ${error}`);
        });

      //verifica se existe o usuario ou a conta nao tem projetos
      response.message == "Not Found" //verifica se existe o usuario
        ? this.showAlertMessage("is-warning", "Conta do github não encontrada!")
        : response == "" //verifica se o usuario tem projetos
        ? this.showAlertMessage("is-info", "Conta não possui nenhum projeto!")
        : ((this.projectsList = response),
          this.showAlertMessage(
            "is-primary",
            "Todos os projetos do usuários estão listados!"
          )); //adiciona os projetos na lista

      this.loading(false); //dismiss loading
    },

    //Primeiro converte para string para o null evitar o toUpperCase funcionar e depois retorna a lista em ordem crescente
    filterOrderBy(elements) {
      const filterName = this.filterSelect.filter;
      let numb = 1;
      this.filterSelect.order == "ASC" ? (numb = 1) : (numb = -1);
      return elements.sort((a, b) =>
        String(a[filterName]).toUpperCase() >
        String(b[filterName]).toUpperCase()
          ? numb
          : numb * -1
      );
    },

    //troca o icone de ordenacao ASC ou DESC
    changeSpanOrder() {
      this.filterSelect.order == "ASC"
        ? (this.filterSelect.order = "DESC")
        : (this.filterSelect.order = "ASC");
    },

    //escolhe qual a coluna será filtrada
    changeFilterOrderBy(theadChange) {
      this.changeSpanOrder(); //chama a funcao para trocar o icone de ordenacao
      this.filterSelect.filter = theadChange; //diz quem é coluna de ordenacao selecionada
      this.projectsList = this.filterOrderBy(this.projectsList); //troca a ordenação do filtro; ASC / DESC
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-git-projects {
  height: 75vh;
  width: fit-content;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
}

/* correcao scroll */
.table {
  margin-bottom: 100px;
  font-size: 1rem;
}

/* Nao permite que o titulo da coluna (th) quebre de linha */
table thead th {
  white-space: nowrap;
}

/* Permite a quebra de palavras*/
tbody tr td {
  word-break: break-all;
}

/* Ajustes na responsividade para telas com menos de 800px de largura */
@media (max-width: 800px) {
  .table {
    font-size: 2vw;
  }
  .table td,
  .table th {
    padding: 0.25rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
}
</style>
