<template>
  <div id="app" class="container">
    <div>
      <img alt="Vue logo" src="./assets/Blockchain_Logo_250_250_001.png">
      <HelloWorld msg="Welcome to GEO Loc suppliers"/>
          <br />
    <p>
      <b-btn v-b-toggle.collapse1 variant="warning">Menu</b-btn>
    </p>
        <b-collapse id="collapse1">
      <b-card>
        <router-view></router-view>
        <h3>Suppliers Options</h3>
        <b-btn v-b-toggle.collapse2 size="sm">Afficher les options</b-btn>
        <b-collapse id=collapse2 class="mt-2">
          <b-card><a @click="onListClick">Suppliers list</a></b-card>
          <b-card><a @click="onMapClick">Suppliers map</a></b-card>
        </b-collapse>
      </b-card>
    </b-collapse>
    </div>
    <div>
      <!-- <SuppliersList msg="Liste des fournisseurs"/> -->
      <!-- <router-link to="/Liste">List</router-link> -->
      <!-- <img alt="Vue logo" src="./assets/CryptoDox_Blockchain_400_226_001.png"> -->
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
