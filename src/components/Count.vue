<template>
    <div>
        <p>
            {{ count }}
        </p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
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
                store.commit('increment')
            },
            decrement () {
                store.commit('decrement')
            }
        }
    }
</script>

<style>

</style>
