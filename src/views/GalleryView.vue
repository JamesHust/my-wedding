<template>
  <VueEasyLightbox
      :visible="visibleRef"
      :imgs="imgsRef"
      :index="indexRef"
      :loop="true"
      @hide="onHide"
  />
  <div class="title-page">Album</div>
  <div class="gallery">
    <div id="list" class="list-img">
      <div class="img-item" v-for="nameImg in countImg" :key="nameImg">
        <img
            :src="srcImg(`/img/gallery/${nameImg}.jpg`)"
            :alt="`img_${nameImg}`"
            @click="show(nameImg - 1)"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import VueEasyLightbox, {useEasyLightbox} from 'vue-easy-lightbox'
import {getCurrentInstance, ref} from "vue";

const { proxy } = getCurrentInstance()
const srcImg = proxy.$image
const countImg = ref(22)
/* ----------------------------------------- */
const getImages = () => {
  let images = []
  for(let i = 0; i < countImg.value; i++){
    images.push(srcImg(`/img/gallery/${i + 1}.jpg`))
  }
  return images
}

const {
  show, onHide,
  visibleRef, indexRef, imgsRef
} = useEasyLightbox({
  imgs: getImages(),
  initIndex: 0
})
</script>

<style lang="scss" scoped>
.gallery {
  height: 100%;
  overflow-y: auto;
  padding: 10px 10px 58px 10px;
}

.list-img {
  width: 100%;
  overflow: hidden;
  margin-bottom: -10px;
  column-count: 4;
  column-gap: 10px;
  column-fill: auto;
}

.img-item {
  margin-bottom: 5px !important;
  column-break-inside: avoid;

  img {
    width: 100%;
    border-radius: 8px;
  }
}

@supports (display: grid) {
  .list-img > * {
    margin: 0 auto;
  }
}

/*For mobiles*/
@media (min-width: 320px) and (max-width: 768px) {
  .list-img {
    column-count: 2 !important;
    margin-bottom: -5px;
    column-count: 3;
    column-gap: 5px;
  }

  .img-item {
    margin-bottom: 0 !important;
  }
}
</style>

