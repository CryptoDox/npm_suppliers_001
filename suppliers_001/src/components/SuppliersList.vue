<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <!-- <img alt="Vue logo" src="./assets/Blockchain_Logo_250_250_001.png"> -->
    </div>
    <p>
      Notice d'utilisation,<br>
      visitez
      <a href="https://elduke3d.com" target="_blank" rel="noopener">mon site bidon</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'SuppliersList',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>