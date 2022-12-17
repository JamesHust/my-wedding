<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="props.size" :height="props.size">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path
        v-if="props.isActive"
        d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        class="pink-red"
    />
    <path
        v-else
        d="M12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zm4.95-7.778a7 7 0 1 0-9.9 0L12 20.9l4.95-4.95zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        class="grey"
    />
  </svg>

</template>

<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    required: true
  },
  size: {
    type: Number,
    default: 24
  }
})
</script>

<style lang="scss" scoped>
.grey {
  fill: rgb(var(--v-theme-grey));
}

.pink-red {
  fill: rgb(var(--v-theme-pink-red));
}
</style>
