<template>
  <div class="main-loading">
    <div>
      <!-- LOADER -->
    </div>
  </div>
</template>

<script>
export default { name: "Loading" };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-loading {
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 2;
  background: #00000010;
  color: white;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-loading div {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #2a3733;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
