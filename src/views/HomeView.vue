<script setup lang="ts">
import AppTextInput from './AppTextInput.vue'
import AppTable from '@/components/AppTable.vue'
import { useFetchProducts } from '@/composables/useFetchProducts'
import AppSpinner from '@/components/AppSpinner.vue'
import { ref, watch } from 'vue'

const { tableRows, tableHeader, isLoading, error, fetchProducts, searchProducts } =
  useFetchProducts(10)

// Search query
const searchQuery = ref('')

// Watch for changes in searchQuery and trigger search
watch(searchQuery, (newQuery) => {
  if (newQuery) {
    searchProducts(newQuery)
  } else {
    fetchProducts() // Fetch all products if search query is empty
  }
})
</script>

<template>
  <h1 class="text-2xl">Products Information</h1>
  <div class="flex gap-4 pt-8">
    <AppTextInput label="Full Name" placeholder="Enter your full name..." />
    <AppTextInput label="Brand" placeholder="Enter your brand..." />
  </div>

  <!-- Search Input -->
  <div class="flex gap-4 pt-8">
    <AppTextInput
      label="Search Products"
      placeholder="Search by title or brand..."
      v-model="searchQuery"
    />
  </div>

  <!-- Error Message -->
  <div v-if="error" class="text-red-500">{{ error }}</div>

  <div class="pt-8">
    <AppSpinner v-if="isLoading" />

    <AppTable
      v-else-if="tableRows.length"
      :headers="tableHeader"
      :rows="tableRows"
      isSelectable
      hasBorderBottom
    />

    <!-- Show message if no data -->
    <p v-else class="text-center text-gray-500">No products available.</p>
  </div>
</template>
