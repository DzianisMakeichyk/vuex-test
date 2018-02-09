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

    .text__word {
        opacity: 1;
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

    .text__first-bg {
        background-color: #5fbff9;
    }

</style>
