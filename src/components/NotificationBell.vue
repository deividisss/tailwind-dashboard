<script setup lang="ts">
import IconNotificationBing from '@/components/icons/IconNotificationBing.vue'

defineProps<{ hasNotification?: boolean }>()
</script>

<template>
  <div class="relative inline-block">
    <button
      class="group relative p-3.5 rounded bg-white hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
    >
      <IconNotificationBing
        class="w-6 h-6 text-gray-400 group-hover:text-gray-500 transition-colors duration-200"
      />
    </button>

    <span
      v-if="hasNotification"
      class="absolute top-[-4px] right-[-4px] w-2.5 h-2.5 bg-yellow-500 rounded-full"
    ></span>
  </div>
</template>
