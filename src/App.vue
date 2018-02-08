<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

      <div>
        <router-link :to="{name: 'Count'}" >
          Count
        </router-link>
        <br/>
        <router-link :to="{name: 'Animation'}" >
          Animation
        </router-link>
      </div>




      <div
        class="company"
      >
        <transition name="company">
          <router-view></router-view>
        </transition>
      </div>

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
   },
    computed: {
        show () {
            return this.$store.state.show
        }
    },
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

/* base */
.company {
  backface-visibility: hidden;
  z-index: 1;
}

/* moving */
.company-move {
  transition: all 600ms ease-in-out 50ms;
}

/* appearing */
.company-enter-active {
  transition: all 400ms ease-out;
}

/* disappearing */
.company-leave-active {
  transition: all 200ms ease-in;
  position: absolute;
  z-index: 0;
}

/* appear at / disappear to */
.company-enter,
.company-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  /*transition: opacity .5s;*/
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /*opacity: 0;*/
}

</style>
