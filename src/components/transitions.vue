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
    import TweenMax from 'gsap'


    export default {
        name: 'transitionTM',

        methods: {
            enter: function enter(el, done) {
                TweenMax.fromTo(el, 1, {
                    autoAlpha: 0,
                    scale: 1.5
                }, {
                    autoAlpha: 1,
                    scale: 1,
                    transformOrigin: '50% 50%',
                    ease: Power4.easeOut,
                    onComplete: done
                });
            },
            leave: function leave(el, done) {
                TweenMax.fromTo(el, 1, {
                    autoAlpha: 1,
                    scale: 1
                }, {
                    autoAlpha: 0,
                    scale: 0.8,
                    ease: Power4.easeOut,
                    onComplete: done
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .page {
        /*position: absolute;*/
        /*left: 0;*/
        /*top: 0;*/
        margin: 0 auto;
        width: 500px;
        height: 200px;
        background: #c0c0c0;
        position: relative;


        &.slide {
            background: #ffba57;
        }

    .center {
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        font-size: 3rem;
        text-align: center;
    }
}
</style>