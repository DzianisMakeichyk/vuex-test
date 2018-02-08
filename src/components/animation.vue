<template>
    <div>
        <p class="text">
          <span class="text__first">
            <span class="text__word">
              Hello
            </span>
            <span class="text__first-bg"></span>
          </span>
        </p>
    </div>
</template>

<script>
    import TimelineLite from 'gsap'

    export default {
        name: 'Animation',
        mounted() {
            var tl = new TimelineLite({delay: 1}),
                firstBg = document.querySelectorAll('.text__first-bg'),
                word  = document.querySelectorAll('.text__word');

            console.log(firstBg)
            console.log('Hello')

            TimelineLite.to([firstBg], 0.3, {scaleX:1});
            TimelineLite.to([word], 0.1, {opacity:1}, "-=0.1");
            TimelineLite.to([firstBg], 0.3, {scaleX:0});
        }
    }
</script>

<style>

    .text{
        display: inline-block;
        font-size: 15vmin;
        line-height: 1.205;
    }

    .text__first {
        position: relative;
    }

    .text__word{
        opacity: 0;
    }

    .text__first-bg {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 100;
        transform-origin: left;
        transform: scaleX(0);
    }

</style>
