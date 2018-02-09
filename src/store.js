import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 100,
        show: true,
        isActive: false,
        transitionName: ''
    },
    mutations: {
        increment: (state, n) => state.count += n,
        decrement: state => state.count--,
    }
})