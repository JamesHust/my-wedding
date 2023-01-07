<template>
  <div class="title-page">Địa điểm sự kiện</div>
  <div class="address-tab">
    <!--Map for groom-->
    <div class="card-map mb-10">
      <div class="img-group">
        <img src="@/assets/image/map/map-groom.png" alt="img-map-groom" class="img-map">
        <img src="@/assets/image/map/groom.png" alt="img-groom" class="img-character">
      </div>
      <div class="content-card">
        <div class="centerY justify-space-between mb-10">
          <div class="label">Nhà Trai</div>
          <div class="centerY">
            <div class="btn-map mr-6">Địa chỉ</div>
            <div class="btn-map">Chỉ đường</div>
          </div>
        </div>
        <div class="d-flex align-start mb-1">
          <img src="@/assets/image/address.svg" alt="icon-address">
          <div>Nhà Chung Lương, Khu phố Đồi Dẻ, Thị trấn Bến Sung, Như Thanh, Thanh Hóa</div>
        </div>
        <div class="centerY">
          <img src="@/assets/image/phone.svg" alt="icon-phone">
          <div style="padding-top: 1px">0866079203</div>
          <IconCopy class="ml-1" :size="18"></IconCopy>
        </div>
      </div>
    </div>
    <!--Map for bride-->
    <div class="card-map">
      <div class="img-group">
        <img src="@/assets/image/map/map-bride.png" alt="img-map-bride" class="img-map">
        <img src="@/assets/image/map/bride.png" alt="img-bride" class="img-character">
      </div>
      <div class="content-card">
        <div class="centerY justify-space-between mb-10">
          <div class="label">Nhà Gái</div>
          <div class="centerY">
            <div class="btn-map mr-6">Địa chỉ</div>
            <div class="btn-map">Chỉ đường</div>
          </div>
        </div>
        <div class="d-flex align-start mb-1">
          <img src="@/assets/image/address.svg" alt="icon-address">
          <div>09/421 Khu phố 3, Thị trấn Bến Sung, Như Thanh, Thanh Hóa</div>
        </div>
        <div class="centerY">
          <img src="@/assets/image/phone.svg" alt="icon-phone">
          <div style="padding-top: 1px">0778231199</div>
          <IconCopy class="ml-1" :size="18"></IconCopy>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconCopy from "@/components/icons/IconCopy";
</script>

<style lang="scss" scoped>
.address-tab {
  padding: 10px;

  img {
    width: auto;
  }
}

.card-map {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  background: #FFFFFF;

  img {
    width: 100%;
  }

  .btn-map {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px 10px;
    font-size: 14px;
    font-weight: 500;
    color: #FF597B;
    background: #ffedf0;
    border-radius: 5px;
  }

  .img-group {
    position: relative;

    .img-map {
      border-radius: 10px;
    }

    .img-character {
      position: absolute;
      bottom: 10px;
      right: 0;
      width: 80px;
    }
  }
}

.content-card {
  color: #a5a5a5;
  padding: 3px 0 0 3px;

  .label {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
  }

  img {
    width: 22px;
    margin-right: 10px;
  }
}
</style>
