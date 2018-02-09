<template>
    <div class="page " v-bind:class="{ slide: this.$store.state.isActive }">
        <div class="center">
            <p class="text">
              <span class="text__first">
                <span class="text__word">
                  <slot></slot>
                </span>
                <span class="text__first-bg"></span>
              </span>
            </p>
        </div>
    </div>
</template>