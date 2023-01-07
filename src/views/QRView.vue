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
      <div class="content-qr">
        <div class="title-qr">QUÉT MÃ QR</div>
        <div class="content-notification mb-10">Để "lì xì" chúng mình nhé!</div>
        <img
            :src="srcImg(`/img/qr/${tabActive.imgQR}.jpg`)"
            :alt="`img_${tabActive.id}`"
        >
        <div class="name mt-10">{{ tabActive.name }}</div>
        <div class="bank">{{ tabActive.bank }}</div>
        <div class="account-number">{{ tabActive.accountNumber }}</div>
      </div>
      <div class="centerY list-actions">
        <div class="btn-outline-normal" @click="copyAccountNumber">
          <IconCopy :size="20" class="mr-1"></IconCopy>
          Sao chép STK
        </div>
        <div class="btn-outline-normal" @click="downloadQRCode">
          <IconDownload :size="19" class="mr-1"></IconDownload>
          Tải xuống QR
        </div>
      </div>
    </div>
  </div>
  <v-snackbar
      v-model="showNotification"
      color="#bae7d2"
      :timeout="timeoutNotification"
  >
    <div class="centerY">
      <img src="@/assets/image/success.svg" alt="icon-notice-success" class="mr-6" style="transform: scale(1.1)">
      {{ notification }}
    </div>
  </v-snackbar>
</template>

<script setup>
import {getCurrentInstance, ref, onMounted} from "vue";
import axios from 'axios';
import IconCopy from "@/components/icons/IconCopy";
import IconDownload from "@/components/icons/IconDownload";

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
const {proxy} = getCurrentInstance()
const srcImg = proxy.$image
/* ----------------------------------------- */
const showNotification = ref(false)
const notification = ref("")
const timeoutNotification = ref(1000)
const copyAccountNumber = () => {
  navigator.clipboard.writeText(tabActive.value["accountNumber"]).then(() => {
    notification.value = "Sao chép số tài khoản thành công!"
    showNotification.value = true
  })
}
/* ----------------------------------------- */
const downloadQRCode = async () => {
  let url = srcImg(`/img/qr/${tabActive.value["imgQR"]}.jpg`)
  axios({
    method: 'get',
    url,
    responseType: 'arraybuffer'
  }).then((response) => {
    let fileURL = window.URL.createObjectURL(new Blob([response.data]))
    let fileLink = document.createElement('a')
    fileLink.href = fileURL
    fileLink.setAttribute('download', `${tabActive.value["imgQR"]}.jpg`)
    document.body.appendChild(fileLink)
    fileLink.click()
  }).catch(() => console.log('Error download QR Code'))
}
</script>

<style lang="scss" scoped>
.title-page {
  height: 98px;
}

.tab-title {
  padding: 0 40px;
}

.card-qr {
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #eee;

  .list-actions {
    border-top: 1px dashed #f0f0f0;

    .btn-outline-normal {
      width: 50%;

      &:first-child {
        border-right: 1px solid #f0f0f0;
      }
    }
  }
}

.content-qr {
  display: flex;
  flex-direction: column;
  align-items: center;
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

:deep(.v-snackbar__content) {
  font-size: 14px !important;
  border-radius: 50px !important;
  padding: 0 20px !important;
  color: #009347 !important;
}

:deep(.v-snackbar__wrapper) {
  border-radius: 50px !important;
}

:deep(.v-snackbar--variant-elevated) {
  box-shadow: none !important;
}
</style>
