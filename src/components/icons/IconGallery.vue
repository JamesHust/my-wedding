<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="props.size" :height="props.size">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path
        v-if="props.isActive"
        d="M17.409 19c-.776-2.399-2.277-3.885-4.266-5.602A10.954 10.954 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v7c5.22 0 9.662 2.462 11.313 7h2.096zM18 1v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
        class="pink-red"
    />
    <path
        v-else
        d="M20 13c-1.678 0-3.249.46-4.593 1.259A14.984 14.984 0 0 1 18.147 19H20v-6zm-3.996 6C14.044 14.302 9.408 11 4 11v8h12.004zM4 9c3.83 0 7.323 1.435 9.974 3.796A10.949 10.949 0 0 1 20 11V3h1.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3H6V1h2v4H4v4zm14-8v4h-8V3h6V1h2zm-1.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
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
