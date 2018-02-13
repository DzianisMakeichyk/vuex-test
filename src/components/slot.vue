<template>
    <div class="text container-reveal">
          <span class="text__first">
            <span class="text__word">
              <slot></slot>
            </span>
            <span class="text__first-bg"></span>
          </span>

        <div style="height: 1000px"></div>

        <span class="text__first animate" :class="{inview: checkView(0)}" ref="reveal_el">
            <span class="text__word">
              wow
            </span>
            <span class="text__first-bg"></span>
          </span>

        <div style="height: 1000px"></div>

        <span class="text__first" ref="reveal_el">
            <span class="text__word">
              wow
            </span>
            <span class="text__first-bg"></span>
          </span>
    </div>
</template>

<script>
    import _ from 'lodash'

    export default {
        name: 'slotTM',

        data: () => ({
            hi: 'hi',
            scrollTop: '',
            scrollBottom: '',
            animate: ''
        }),

        methods: {
            checkView: function checkView(e) {
                if (this.animate) {

                    var element = this.animate[e];
                    var elTop = element.offsetTop;
                    var elBottom = element.offsetTop + element.scrollHeight;

                    if (this.scrollBottom > elTop + 200 && elBottom - 100 > this.scrollTop) {

                        return true;

                    } else {

                        return false;

                    }
                }
            },

            scrollHandler: function scrollHandler() {

                this.scrollBottom = window.scrollY + window.innerHeight;
                this.scrollTop = window.scrollY;

            }
        },
        mounted: function mounted() {

            this.scrollTop = window.scrollY;
            this.scrollBottom = window.scrollY + window.innerHeight;

            window.addEventListener('scroll', _.throttle(this.scrollHandler, 300));

            this.animate = document.querySelectorAll(".animate");

        }
    }

</script>

<style lang="scss">
    .text{
        display: inline-block;
        font-size: 15vmin;
        line-height: 1.205;

        &__first {
            position: relative;
        }

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