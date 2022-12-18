<template>
  <div class="bottom-tab-nav ">
    <div class="centerY tab-nav">
      <div class="tab-item" @click="redirectTo(tabsMap['home'], 'home')">
        <IconHome :is-active="tabActive === 0" :size="25"></IconHome>
        <div :class="[tabActive === 0 ? 'tab-active' : '']" class="title-tab">Trang chủ</div>
      </div>
      <div class="tab-item" @click="redirectTo(tabsMap['gallery'], 'gallery')">
        <IconGallery :is-active="tabActive === 1" :size="23"></IconGallery>
        <div :class="[tabActive === 1 ? 'tab-active' : '']" class="title-tab" style="margin-top: 1px">Ảnh cưới</div>
      </div>
      <div class="tab-item icon-qr" @click="redirectTo(tabsMap['qr'], 'qr')">
        <IconQR :class="[tabActive === 2 ? 'tab-active' : '']" :is-active="tabActive === 2" :size="30"></IconQR>
      </div>
      <div class="tab-item" @click="redirectTo(tabsMap['map-directions'], 'map-directions')">
        <IconMap :is-active="tabActive === 3" :size="23"></IconMap>
        <div :class="[tabActive === 3 ? 'tab-active' : '']" class="title-tab" style="margin-top: 1px">Địa điểm</div>
      </div>
      <div class="tab-item" @click="redirectTo(tabsMap['event-time'], 'event-time')">
        <IconTime :is-active="tabActive === 4"></IconTime>
        <div :class="[tabActive === 4 ? 'tab-active' : '']" class="title-tab">Thời gian</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconHome from "@/components/icons/IconHome";
import IconGallery from "@/components/icons/IconGallery";
import IconQR from "@/components/icons/IconQR";
import IconTime from "@/components/icons/IconTime";
import IconMap from "@/components/icons/IconMap";
import {ref, onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";

const tabsMap = ref({
  home: 0,
  gallery: 1,
  qr: 2,
  'map-directions': 3,
  'event-time': 4
})
/*--------------------------------------------------------*/
const router = useRouter()
const route = useRoute()

onMounted(() => {
  let pathName = route.path.replaceAll("/", "")
  tabActive.value = tabsMap.value[pathName]
})
/*--------------------------------------------------------*/
const tabActive = ref(0)

function redirectTo(tabIndex, key) {
  tabActive.value = tabIndex
  router.push(`/${key}/`)
}

/*--------------------------------------------------------*/

</script>

<style lang="scss" scoped>
.bottom-tab-nav {
  background: #fff;
  height: 64px;
  width: 500px;
  border-radius: 32px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.tab-nav {
  height: 100%;
  padding: 0 12px;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  flex: 1;
}

.title-tab {
  color: rgb(var(--v-theme-grey));
  font-size: 11px;
}

.tab-active {
  color: rgb(var(--v-theme-pink-red));
}

/*For mobiles*/
@media (min-width: 320px) and (max-width: 768px) {
  .bottom-tab-nav {
    height: 52px;
    width: 100vw;
    border-radius: 0;
  }
}
</style>