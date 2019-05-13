<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <h1>{{ message }}</h1>
    <div>
      <img alt="Vue logo" src=".././assets/Terre_500_01.jpg">
    </div>
    <p>
      Pour une liste complete de nos tarifs,<br>
      consultez
      <a href="https://cryptodox.net" target="_blank" rel="noopener">ma fausse liste des tarifs</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Carte',
  props: {
    msg: String
  },
  data(){
    return{
      message: 'Carte des fournisseurs',
      // img: '.././assets/Blockchain_Logo_250_250_001.png'
    }
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