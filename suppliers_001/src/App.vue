<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <div>
      <h3>Suppliers Vue.js</h3>
      <ul>
        <li><a @click="onSuppliersListClick">Suppliers list</a></li>
        <li><a @click="onMapClick">Suppliers map</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
        onSuppliersListClick: function() {
        window.alert('UserClikerList !')
    },
        onMapClick: function(){
        window.alert('UserClikerMap !')
    }
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
