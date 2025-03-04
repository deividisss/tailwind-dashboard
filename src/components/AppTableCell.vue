<template>
  <component
    :is="type === 'header' ? 'th' : 'td'"
    class="px-4 py-2 text-left"
    :class="{ 'font-bold': type === 'header', 'flex items-center justify-center': center }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'body',
  },
  center: {
    type: Boolean,
    default: false,
  },
})
</script>
