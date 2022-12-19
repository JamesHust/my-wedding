<template>
  <audio controls ref="audio" hidden loop>
    <source src="@/assets/music/ido.mp3" type="audio/mpeg">
  </audio>
  <!--Audio-->
  <div class="p-10 audio-bar centerY">
    <div class="audio-cd" @click="playOrPauseAudio">
      <img :class="[isPlayAudio ? 'spin-animation' : '']" src="@/assets/image/ido.jpg" alt="img_song">
    </div>
    <div class="info-song">
      <div class="title">Bài hát</div>
      <div class="centerY">
        <div class="name-song">I Do</div>
        <div class="px-1">-</div>
        <div class="singer">911 Band</div>
      </div>
    </div>
  </div>
  <div class="content-page centerXY">
    <img src="@/assets/image/anh-nen.jpg" alt="banner-background" class="banner-background">
    <div class="title-content">
      <div>Thế Hưng & Thảo Vân</div>
      <div class="child-title">
        06.02.2023
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {ref} from "vue";
/*--------------------------------------------------------*/
const audio = ref<HTMLAudioElement>(null)
const isPlayAudio = ref(false)

function playOrPauseAudio() {
  if (audio.value.paused) {
    isPlayAudio.value = true
    audio.value.play()
  } else {
    isPlayAudio.value = false
    audio.value.pause()
    // audio.value.currentTime = 0
  }
}

/*--------------------------------------------------------*/
</script>

<style lang="scss" scoped>
.audio-bar {
  background: #e8dbcb;
  img {
    height: 52px;
    border-radius: 50%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .audio-cd {
    height: 52px;
    width: 52px;
  }

  .info-song {
    font-family: 'Be Vietnam Pro', sans-serif;
    margin-left: 8px;
    font-size: 13px;

    .title {
      font-size: 11px;
    }

    .name-song {
      font-weight: bold;
    }
  }
}

.content-page {
  height: calc(100% - 72px);
  width: 100vw;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
  }

  .title-content {
    position: absolute;
    top: 50px;
    font-family: 'Alex Brush', cursive;
    color: #ffffff;
    font-weight: 400;
    font-size: 36px;
    text-align: center;

    .child-title {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 18px;
    }
  }
}

.spin-animation {
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
