<template>

    <div class="page " v-bind:class="{ slide: this.$store.state.isActive }">
        <div class="center">
            <p class="text">
              <span class="text__first">
                <span class="text__word">
                  100
                </span>
                <span class="text__first-bg"></span>
              </span>
            </p>
        </div>
    </div>

</template>

<script>
    import TimelineLite from 'gsap'

    export default {
        name: 'Count',
        //
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
