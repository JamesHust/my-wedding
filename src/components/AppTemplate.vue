<template>
  <div class="main-container">
    <v-main>
      <router-view></router-view>
    </v-main>
    <BottomTabNavigation></BottomTabNavigation>
  </div>
</template>
<script setup>
import BottomTabNavigation from "@/components/BottomTabNavigation";
</script>
<style lang="scss" scoped>
.main-container {
  background: #ffffff;
  min-height: 100%;
}
</style>