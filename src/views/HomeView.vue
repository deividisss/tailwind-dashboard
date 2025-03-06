<script setup lang="ts">
import AppTextInput from './AppTextInput.vue'
import AppTable from '@/components/AppTable.vue'
import { useFetchProducts } from '@/composables/useFetchProducts'
import AppSpinner from '@/components/AppSpinner.vue'

const { tableRows, tableHeader, isLoading } = useFetchProducts(10)
</script>

<template>
  <h1 class="text-2xl">Products Information</h1>

  <div class="flex gap-4 pt-8">
    <AppTextInput label="Full Name" placeholder="Enter your full name..." />
    <AppTextInput label="Brand" placeholder="Enter your brand..." />
  </div>

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
