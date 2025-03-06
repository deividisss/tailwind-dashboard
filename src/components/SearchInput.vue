<script setup lang="ts">
import { ref } from 'vue'
import IconSearch from '@/components/icons/IconSearch.vue'

defineProps({
  placeholder: {
    type: String,
    default: 'Search...',
  },
})

const emit = defineEmits(['search'])

const searchQuery = ref('')

const handleInput = () => {
  emit('search', searchQuery.value)
}
</script>

<template>
  <div
    class="flex w-full items-center gap-4 rounded-[3px] border border-gray-300 bg-white px-3 py-[13px] transition-colors duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500"
  >
    <IconSearch :size="20" class="min-w-[20px] text-gray-400" />

    <input
      type="text"
      :placeholder="placeholder"
      v-model="searchQuery"
      @input="handleInput"
      class="w-full bg-transparent focus:outline-none"
    />
  </div>
</template>
