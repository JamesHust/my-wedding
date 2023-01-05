<template>
  <div class="main-container">
    <div class="content-page">
      <RouterView></RouterView>
    </div>
    <div class="audio-bar-top" :class="route.name === 'Home' ? 'audio-visible' : 'audio-hidden'">
      <AudioBarTop></AudioBarTop>
    </div>
    <div class="centerX bottom-nav">
      <BottomTabNavigation></BottomTabNavigation>
    </div>
  </div>
</template>

<script setup>
import BottomTabNavigation from "@/components/BottomTabNavigation";
import AudioBarTop from "@/components/AudioBarTop";
import {RouterView, useRoute} from 'vue-router'

const route = useRoute()
</script>

<style lang="scss" scoped>
.main-container {
  //background-image: linear-gradient(to top, #fad0c4 0%, #FFD1F0FF 100%);
  background: #fafafa;
  min-height: 100%;
  position: relative;
}

.audio-bar-top {
  position: absolute;
  top: 0;
}

.audio-visible {
  visibility: visible;
  z-index: 3;
}

.audio-hidden {
  visibility: hidden;
  z-index: -99;
}

.content-page {
  height: 100vh;
  z-index: 2;
}

.bottom-nav {
  position: absolute;
  bottom: 12px;
  width: 100%;
  z-index: 3;
}

/*For mobiles*/
@media (min-width: 320px) and (max-width: 768px) {
  .audio-bar-top {
    left: 0;
    width: 100%;
  }

  .content-page {
    height: calc(100vh - 52px);
  }

  .bottom-nav {
    bottom: 0;
  }
}
</style>