<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  hasBorderBottom: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <tr
    class="transition-colors duration-200"
    :class="{
      'bg-gray-200': isActive,
      'bg-white': !isActive,
      'border-b border-gray-200': hasBorderBottom,
    }"
  >
    <slot />
  </tr>
</template>
