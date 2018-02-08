<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <p>
      <router-link :to="{name: 'Count'}">Count</router-link>
      <router-link :to="{name: 'Animation'}">Animation</router-link>
    </p>
    <router-view>

    </router-view>
    <!--<Count/>-->
    <!--<Animation/>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Count from './components/Count.vue'
import Animation from './components/animation.vue'
import store from './store'
import router from './router/index'

export default {
    name: 'app',
    store,
    router,
    components: {
      HelloWorld,
      Count,
      Animation
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
