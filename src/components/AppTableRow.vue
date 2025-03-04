<script setup lang="ts">
defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <tr
    class="border-b border-gray-200 transition-colors duration-200"
    :class="{ 'bg-gray-100': isActive, 'bg-white': !isActive }"
  >
    <slot />
  </tr>
</template>
