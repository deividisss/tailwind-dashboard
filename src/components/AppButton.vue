<template>
  <button
    type="button"
    :class="[
      'relative flex cursor-pointer flex-wrap items-center justify-center gap-4 rounded-md px-5 py-4 transition-colors',
      isFullWidth ? 'w-full' : 'w-fit',
      isActive ? 'text-blue-500 hover:text-blue-600' : 'text-gray-400 hover:text-gray-500',
      !isActive && 'hover:bg-gray-200',
      isTransparent ? 'border-transparent bg-transparent' : 'bg-white',
      'break-words',
      'whitespace-normal',
    ]"
  >
    <span
      v-if="isActive"
      class="absolute top-0 left-0 h-full w-[3px] flex-shrink-0 bg-blue-500"
    ></span>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  isActive: Boolean,
  isFullWidth: { type: Boolean, default: false },
  isTransparent: { type: Boolean, default: false },
})
</script>
