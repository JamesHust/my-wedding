<template>
  <audio controls ref="audio" hidden loop>
    <source src="@/assets/music/ido.mp3" type="audio/mpeg">
  </audio>
  <!--Audio-->
  <div class="p-10 audio-bar spaceBetweenX">
    <div class="spaceBetweenX">
      <div class="audio-cd" @click="playOrPauseAudio">
        <img :class="[isPlayAudio ? 'spin-animation' : '']" src="@/assets/image/ido.jpg" alt="img_song">
        <div class="inner-circle"></div>
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
    <div class="centerY">
      <img class="icon-playlist" src="@/assets/image/playlist/back-playlist.svg" alt="icon_prev_playlist">
      <img v-if="isPlayAudio" class="icon-playlist" src="@/assets/image/playlist/pause.svg" alt="icon_play_or_pause"
           @click="playOrPauseAudio">
      <img v-else class="icon-playlist" src="@/assets/image/playlist/play.svg" alt="icon_play_or_pause"
           @click="playOrPauseAudio">
      <img class="icon-playlist" src="@/assets/image/playlist/next-playlist.svg" alt="icon_next_playlist">
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
  //background: #ffffff61;
  background: #FFFFFF91;

  .audio-cd {
    height: 50px;
    width: 50px;
    position: relative;

    img {
      height: 50px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    .inner-circle {
      position: absolute;
      background: white;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      top: calc(50% - 4px);
      right: calc(50% - 4px);
    }
  }

  .info-song {
    font-family: 'Be Vietnam Pro', sans-serif;
    margin-left: 10px;
    font-size: 14px;

    .title {
      font-size: 11px;
    }

    .name-song {
      font-weight: bold;
    }
  }

  .icon-playlist {
    width: 26px;

    &:nth-child(2) {
      margin: 0 16px;
    }

    &:last-child {
      margin-right: 10px;
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