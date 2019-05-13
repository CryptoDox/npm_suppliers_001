import Vue from 'vue'
import App from './App.vue'
import router from './components/AppRoutes'
// import VueRouter from 'vue-router'

Vue.config.productionTip = false
// Vue.use(VueRouter)

// const Liste = { template: '<div>SuppliersList</div>' }
// const Carte = { template: '<div>SuppliersMap</div>' }

// const routes = [
//   { path: './components/SuppliersList.vue', component: Liste },
//   { path: './components/SuppliersMap.vue', component: Carte }
// ]

// const router = new VueRouter({
//   routes // raccourci pour `routes: routes`
// })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
