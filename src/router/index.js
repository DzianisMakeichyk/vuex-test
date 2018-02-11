import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/App'
import Count from '@/components/Count'
import Animation from '@/components/animation'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/count',
            name: 'Count',
            component: Count
        },
        {
            path: '/animation',
            name: 'Animation',
            component: Animation
        }
    ]
})
