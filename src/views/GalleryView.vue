<template>
  <div class="gallery">
    <div class="list-img">
      <div :class="nameImg%2 === 0 ? 'img-item-0' : 'img-item-1'" v-for="nameImg in 17" :key="nameImg">
        <img
            :src="`/src/assets/image/gallery/${nameImg}.jpg`"
            :alt="`img_${nameImg}`"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.gallery {
  height: 100%;
  overflow-y: auto;
}

.list-img {
  max-width: calc(100vw - 20px);
  margin: 10px auto;
  display: grid;
  grid-gap: 10px;
  /* fit as many columns as possible, 300px wide each: */
  grid-template-columns: repeat(auto-fill, 300px);
  /* each row is 10px high -- we always span 2+ */
  grid-auto-rows: minmax(10px, auto);
  justify-content: center;

  .list-img > * {
    width: 300px;
    float: left;
  }

  .img-item-0 {
    grid-row-end: span 2;
  }

  .img-item-0 {
    grid-row-end: span 3;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    //height: 100%;
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
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, calc((100vw - 25px) / 2));

    .img-item-0, .img-item-1 {
      width: calc((100vw - 25px) / 2);
    }
  }
}
</style>

