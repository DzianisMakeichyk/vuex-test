<template>
    <transition
            v-on:enter="enter"
            v-on:leave="leave"
            v-on:after-enter="afterEnter"
            v-bind:css="false"
            mode="out-in"

            appear
    >
        <slot></slot>

    </transition>
</template>

<script>
    import TweenMax from 'gsap'
    import ScrollMagic from 'scrollmagic'
    import setTween from 'scrollmagic'
    import addTo from 'scrollmagic'

    let firstEnter = false;
    let scrollMagicController = new ScrollMagic.Controller();

    export default {
        name: 'transitionTM',

        methods: {
            enter: function enter(el, done) {
                let firstBg = el.childNodes[0].childNodes[2]

                if(!firstEnter){
                    TweenMax.fromTo(firstBg, .4, {
                        scaleX:0,
                    }, {
                        scaleX:1,
                        ease: Power1.easeOut,
                        onComplete: done
                    });
                    firstEnter = true
                } else {
                    TweenMax.to(firstBg, .04, {
                        ease: Power1.easeOut,
                        onComplete: done
                    });
                }
            },
            leave: function leave(el, done) {
                let firstBg = el.childNodes[0].childNodes[2]

                TweenMax.fromTo(firstBg, .4, {
                    scaleX:0,
                }, {
                    scaleX:1,
                    ease: Power1.easeOut,
                    onComplete: done
                });
            },
            afterEnter: function leave(el, done) {
                let firstBg = el.childNodes[0].childNodes[2]
                let word  = el.childNodes[0].childNodes[0]

                TweenMax.fromTo(firstBg, .4, {
                    scaleX:1,
                }, {
                    scaleX:0,
                    ease: Power1.easeOut,
                    onComplete: done
                });
                TweenMax.fromTo(word, .4, {
                    opacity: 0
                }, {
                    opacity: 1,
                })
            }
        },
        mounted() {
            let scrollStart = this.$refs.scroll_start;

            console.log(this)

            new ScrollMagic.Scene({
                triggerElement: scrollStart,
                offset: 0 /* offset the trigger Npx below scene's top */
            })
                .setPin(scrollStart) // pins the element for the the scene's duration
                .addTo(scrollMagicController); // assign the scene to the controller

        }
    }
</script>
