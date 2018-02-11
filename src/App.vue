<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->

      <div
              v-on:click="menuToggle"
      >
        <router-link
                :to="{name: 'Count'}"
        >
          Count
        </router-link>
        <br/>
        <router-link
                :to="{name: 'Animation'}"
                v-on:click="menuToggle"
        >
          Animation
        </router-link>
      </div>

    <Transitions>

          <router-view></router-view>

    </Transitions>

    <!--<Count/>-->
    <!--<Animation/>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Count from './components/Count.vue'
import Transitions from './components/transitions.vue'
import store from './store'
import router from './router/index'


export default {
    name: 'app',
    store,
    router,
    components: {
      HelloWorld,
      Count,
      Transitions
   },
    computed: {
        show () {
            return this.$store.state.show
        }
    },
    methods: {
        menuToggle: function(){
            this.$store.state.isActive = !this.$store.state.isActive;
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

/* base */
.company {
  backface-visibility: hidden;
  z-index: 1;
}

.active-animation {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
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
