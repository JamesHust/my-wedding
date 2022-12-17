<template>
  <div class="main-container">
    <div class="content-page">
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
    <div class="centerX bottom-nav">
      <BottomTabNavigation></BottomTabNavigation>
    </div>
  </div>
</template>
<script setup>
import BottomTabNavigation from "@/components/BottomTabNavigation";
</script>
<style lang="scss" scoped>
.main-container {
  background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);
  min-height: 100%;
  position: relative;
}

.content-page {
  height: 100vh;
}

.bottom-nav {
  position: absolute;
  bottom: 12px;
  width: 100%;
}

/*For mobiles*/
@media (min-width: 320px) and (max-width: 768px) {
  .content-page {
    height: calc(100vh - 52px);
  }

  .bottom-nav {
    bottom: 0;
  }
}
</style>