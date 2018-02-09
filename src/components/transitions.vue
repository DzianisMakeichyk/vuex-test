<template>
    <transition
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
            appear
    >

                <slot></slot>

    </transition>
</template>

<script>
    import { TweenMax, TimelineLite } from 'gsap'
    let tl = new TimelineLite({delay: 1})
    let firstBg = document.querySelectorAll('.text__first-bg')
    let word  = document.querySelectorAll('.text__word')

    export default {
        name: 'transitionTM',

        methods: {
            enter: function enter(el, done) {
                console.log(el.childNodes[0].childNodes[2])
                TweenMax.fromTo(el.childNodes[0].childNodes[2], 0.8, {scaleX:1}, {scaleX:0})
                TweenMax.fromTo(el.childNodes[0].childNodes[0], 0.8, {opacity:0}, {opacity:1})
//                TweenMax.fromTo(firstBg, 0.2, {scaleX:1}, {scaleX:0}, 'rrr')
                TweenMax.fromTo(el, 1, {
                    autoAlpha: 1
                }, {
                    autoAlpha: 1,
//                    transformOrigin: '50% 50%',
//                    ease: Power4.easeOut,
                    onComplete: done
                });
            },
            leave: function leave(el, done) {
                TweenMax.fromTo(el.childNodes[0].childNodes[2], 0.8, {
                    scaleX:1
                }, {
                    scaleX:0
                });
                TweenMax.fromTo(el.childNodes[0].childNodes[0], 0.8, {
                    opacity:1
                }, {
                    opacity:0
                })

                TweenMax.fromTo(el, 1, {
                    autoAlpha: 1,
//                    scale: 1
                }, {
                    autoAlpha: 0,
//                    scale: 0.8,
//                    ease: Power4.easeOut,
                    onComplete: done
                });
            }
        }
    }
</script>

<style lang="scss">
    .text{
        display: inline-block;
        font-size: 15vmin;
        line-height: 1.205;
    }

    .text__first,
    .text__second{
        position: relative;
    }

    .text__word{
        /*opacity: 0;*/
    }

    .text__first-bg,
    .text__second-bg{
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

    .text__first-bg{
        background-color: #5fbff9;
    }

    .text__second-bg{
        background-color: #f06543;
    }

    .text__second{
        margin-left: 15vmin;
    }

    .restart{
        position: absolute;
        font-size: 12px;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        border: none;
        border-bottom: 1px dotted grey;
        padding: 0;
        margin: 0 auto 2%;
        cursor: pointer;
        color: grey;
    }
</style>