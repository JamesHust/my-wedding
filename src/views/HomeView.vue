<template>
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
</script>

<style lang="scss" scoped>
.content-page {
  background: #fefdf9;
  height: 100%;
  width: 100vw;
  position: relative;
  overflow: hidden;
  img {
    height: 100%;
    //width: 100%;
  }

  .title-content {
    position: absolute;
    top: 100px;
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
</style>
