<template>
        <p class="text container-reveal">
          <span class="text__first"  ref="scroll_start">
            <span class="text__word">
              <slot></slot>
            </span>
            <span class="text__first-bg"></span>
          </span>
          <span class="text__first"  ref="scroll_start">
            <span class="text__word">
            </span>
            <span class="text__first-bg"></span>
          </span>
        </p>
</template>

<script>
    import ScrollMagic from 'scrollmagic'
    import setTween from 'scrollmagic'
    import addTo from 'scrollmagic'

    let scrollMagicController = new ScrollMagic.Controller();

    export default {
        name: 'slotTM',

        mounted() {
            let scrollStart = this.$refs.scroll_start;

            console.log(setTween)

        setTween(scrollStart);
        addTo(scrollMagicController);

        }
    }
</script>

<style lang="scss">
    .container-reveal {
        width: 100%;
        max-width: 1000px;
        position: relative;
        margin: 750px auto 0;
    }
    .text{
        display: inline-block;
        font-size: 15vmin;
        line-height: 1.205;

        &__word {
            opacity: 0;
        }

        &__first-bg {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 100;
            transform-origin: left;
            background-color: #5fbff9;
        }
    }
</style>