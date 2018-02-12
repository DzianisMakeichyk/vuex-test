<template>
        <p class="text container-reveal">
          <span class="text__first">
            <span class="text__word">
              <slot></slot>
            </span>
            <span class="text__first-bg"></span>
          </span>
        </p>
</template>

<script>
    import Waypoint from 'waypoints/lib/noframework.waypoints.min'

    export default {
        name: 'slotTM',
    }

</script>

<style lang="scss">
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