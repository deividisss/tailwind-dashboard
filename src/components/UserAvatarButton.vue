<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="mr-3 overflow-hidden rounded-[10px] h-13 w-13 cursor-pointer">
    <img :src="props.src" :alt="props.alt" />
  </button>
</template>
