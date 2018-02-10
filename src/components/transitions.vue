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
    import { TweenMax, TimelineLite } from 'gsap'
    let tl = new TimelineLite({delay: 1})
    let firstEnter = false

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
        }
    }
</script>
