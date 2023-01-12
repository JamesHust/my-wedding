<template>
  <div class="title-page">Dòng sự kiện</div>
  <img src="@/assets/image/eventtime/DSC_8344.jpg" alt="image-timeline" style="width: 100%">
  <div class="timeline">
    <v-timeline side="end" align="start">
      <v-timeline-item
          dot-color="pink"
          size="small"
      >
        <strong class="mr-4">04/02/2023 (14/01 ÂL)</strong>
        <div>
          <strong>Lễ Nạp Tài</strong>
        </div>
      </v-timeline-item>
      <v-timeline-item
          dot-color="teal-lighten-3"
          size="small"
      >
        <strong class="mr-4">05/02/2023 (15/01 ÂL)</strong>
        <div>
          <strong>Mời Bữa Cơm Thân Mật</strong>
        </div>
      </v-timeline-item>
      <v-timeline-item
          dot-color="pink"
          size="small"
      >
        <strong class="mr-4">06/02/2023 (16/01 ÂL)</strong>
        <div>
          <strong>Ngày Cưới</strong>
          <div class="item-event centerY mt-2">
            <img src="@/assets/image/eventtime/le-vu-quy.png" alt="img-le-vu-quy">
            <div class="ml-10">09:30 Lễ Vu Quy</div>
          </div>
          <div class="item-event centerY">
            <img src="@/assets/image/eventtime/le-thanh-hon.png" alt="img-le-thanh-hon">
            <div class="ml-10">10:15 Lễ Thành Hôn</div>
          </div>
          <div class="item-event centerY">
            <img src="@/assets/image/eventtime/khai-tiec.png" alt="img-khai-tiec">
            <div class="ml-10">11:00 Khai Tiệc</div>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.timeline {
  height: calc(100vh - 362px);
}

.item-event {
  padding: 10px 0;
  img {
    width: 30px;
  }
}
</style>
