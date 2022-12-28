<template>
  <!--  <div class="gallery">-->
  <!--    <div class="list-img">-->
  <!--      <div class="img-item" v-for="nameImg in 17" :key="nameImg">-->
  <!--        <img-->
  <!--            :src="`/src/assets/image/gallery/${nameImg}.jpg`"-->
  <!--            :alt="`img_${nameImg}`"-->
  <!--        >-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
<!--  <img src="@/assets/image/test.png" alt="" style="width: 100%">-->
  <div class="gallery">
    <div id="list" class="list-img">
      <div class="img-item" v-for="nameImg in 3" :key="nameImg">
        <img
            :src="`@/src/assets/img_${nameImg}.jpg`"
            :alt="`img_${nameImg}`"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
// const a = ["a", "b", "c"]
</script>

<style lang="scss" scoped>
.gallery {
  height: 100%;
  overflow-y: auto;
  padding: 10px;
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

