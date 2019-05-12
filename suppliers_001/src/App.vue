<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/Blockchain_Logo_250_250_001.png">
      <HelloWorld msg="Welcome to GEO Loc suppliers"/>
    </div>
    <div>
      <h3>Suppliers Options</h3>
      <ul>
        <li><a @click="onSuppliersListClick">Suppliers list</a></li>
        <li><a @click="onMapClick">Suppliers map</a></li>
      </ul>
    </div>
    <div>
      <SuppliersList msg="Liste des fournisseurs"/>
      <img alt="Vue logo" src="./assets/CryptoDox_Blockchain_400_226_001.png">
    </div>
    <div>
      <SuppliersMap msg="Carte des fournisseurs"/>
      <img alt="Vue logo" src="./assets/Terre_500_01.jpg">
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import SuppliersList from './components/SuppliersList.vue';
import SuppliersMap from './components/SuppliersMap.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    SuppliersList,
    SuppliersMap,
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
