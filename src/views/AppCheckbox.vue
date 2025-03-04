<template>
  <label class="inline-flex cursor-pointer items-center leading-none">
    <!-- Hidden but accessible checkbox -->
    <input type="checkbox" v-model="isChecked" class="peer sr-only" />
    <!-- Custom checkbox -->
    <div
      class="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 transition-colors duration-200 peer-checked:border-blue-500 peer-checked:bg-blue-500"
    >
      <!-- Checkmark icon -->
      <svg
        v-show="isChecked"
        class="h-4 w-4 text-white"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M5 12l4 4L19 7" />
      </svg>
    </div>
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// State for checked/unchecked
const isChecked = ref(false)
</script>
