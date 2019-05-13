<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/Blockchain_Logo_250_250_001.png">
      <HelloWorld msg="Welcome to GEO Loc suppliers"/>
    </div>
    <div>
      <h3>Suppliers Options</h3>
      <ul>
        <li><a @click="onListClick">Suppliers list</a></li>
        <li><a @click="onMapClick">Suppliers map</a></li>
      </ul>
    </div>
    <div>
      <!-- <SuppliersList msg="Liste des fournisseurs"/> -->
      <!-- <router-link to="/Liste">List</router-link> -->
      <!-- <img alt="Vue logo" src="./assets/CryptoDox_Blockchain_400_226_001.png"> -->
      <router-view></router-view>
    </div>
    <div>
      <!-- <SuppliersMap msg="Carte des fournisseurs"/> -->
      <!-- <router-link to="/Carte">Map</router-link> -->
      <!-- <img alt="Vue logo" src="./assets/Terre_500_01.jpg"> -->
    </div>
    <div>
    <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
// import Liste from './components/SuppliersList.vue';
// import Carte from './components/SuppliersMap.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    // Liste,
    // Carte,
  },
    computed: {
    username () {
      // Nous verrons ce que représente `params` dans un instant.
      return this.$route.params.username
    }
  },
  methods: {
        onListClick: function() {
        window.alert('UserClikerList !')
    },
        onMapClick: function(){
        window.alert('UserClikerMap !')
    },
        goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
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
