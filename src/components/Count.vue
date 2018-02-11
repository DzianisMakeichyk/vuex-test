<template>
    <slotTm>
        Hello
    </slotTm>
</template>

<script>
    import TimelineLite from 'gsap'
    import slotTm from './slot'

    export default {
        name: 'Count',
        //
        components: {
          slotTm
        },
        computed: {
            count () {
                return this.$store.state.count
            }
        },
        // действия
        methods: {
            increment () {
                this.$store.commit('increment', 10)
            },
            decrement () {
                this.$store.commit('decrement')
            }
        }
    }
</script>

<style>
</style>
