<template>
  <div class="title-page">
    <div class="mb-6">Mã QR</div>
    <div class="tabs">
      <div
          v-for="item in listQR"
          :key="item.id"
          class="tab-title"
          :class="tabActive.id === item.id ? 'tab-active' : ''"
          @click="tabActive = item"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
  <div class="p-20">
    <div class="card-qr">
      <div class="title-qr">QUÉT MÃ QR</div>
      <div class="content-notification mb-10">Để "lì xì" chúng mình nhé!</div>
      <img
          :src="srcImg(`/img/qr/${tabActive.imgQR}.jpg`)"
          :alt="`img_${tabActive.id}`"
      >
      <div class="name mt-10">{{tabActive.name}}</div>
      <div class="bank">{{tabActive.bank}}</div>
      <div class="account-number">{{tabActive.accountNumber}}</div>
    </div>
  </div>
</template>

<script setup>
import {getCurrentInstance, ref, onMounted} from "vue";

const listQR = [
  {
    id: 'qr-groom',
    title: "Chú rể",
    name: "MAI THE HUNG",
    accountNumber: "02389384801",
    bank: "TPBank",
    imgQR: "qr-groom"
  },
  {
    id: 'qr-bride',
    title: "Cô dâu",
    name: "LE THAO VAN",
    accountNumber: "29703347",
    bank: "ACB",
    imgQR: "qr-bride"
  }
]
const tabActive = ref({})
onMounted(() => {
  tabActive.value = {
    id: 'qr-groom',
    title: "Chú rể",
    name: "MAI THE HUNG",
    accountNumber: "02389384801",
    bank: "TPBank",
    imgQR: "qr-groom"
  }
})
/* ----------------------------------------- */
const { proxy } = getCurrentInstance()
const srcImg = proxy.$image
</script>

<style lang="scss" scoped>
.title-page {
  height: 90px;
}

.tab-title {
  padding: 0 40px;
}

.card-qr {
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  img {
    width: 70%;
  }

  .title-qr {
    color: #ff597b;
    font-weight: 500;
  }

  .content-notification {
    font-style: italic;
  }

  .name, .account-number {
    font-size: 18px;
    font-weight: bold;
  }

  .bank, .account-number {
    font-size: 15px;
  }

  .account-number {
    color: #525252;
  }
}
</style>
