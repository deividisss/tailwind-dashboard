<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Enter text...',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="flex flex-col space-y-3">
    <label v-if="label" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      class="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 transition-colors duration-200 focus:border-blue-500 focus:outline-none"
    />
  </div>
</template>
