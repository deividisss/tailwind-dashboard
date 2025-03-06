<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useFetchProducts } from '@/composables/useFetchProducts'
import type { Product } from '@/types/types'

const route = useRoute()
const { fetchProduct, isLoading, error } = useFetchProducts()

const product = ref<Product | null>(null)

onMounted(async () => {
  const productId = route.params.id as string
  product.value = await fetchProduct(productId)
})
</script>

<template>
  <AppSpinner v-if="isLoading" />
  <div v-if="!isLoading && product" class="mx-auto rounded-lg bg-white p-6 shadow-md">
    <h1 class="mb-4 text-3xl text-gray-800">{{ product.title }}</h1>
    <p class="mb-2 text-lg text-gray-600">
      Category: <span class="text-gray-800">{{ product.category }}</span>
    </p>
    <p class="mb-2 text-lg text-gray-600">
      Brand: <span class="text-gray-800">{{ product.brand }}</span>
    </p>
    <p class="mb-2 text-lg text-gray-600">
      Price: <span class="font-semibold text-orange-600">${{ product.price }}</span>
    </p>
    <p class="mb-2 text-lg text-gray-600">
      Stock: <span class="text-blue-600">{{ product.stock }}</span>
    </p>
    <p class="mb-2 text-lg text-gray-600">
      Rating: <span class="text-yellow-500">{{ product.rating }}</span>
    </p>
  </div>

  <div v-if="error" class="flex h-screen items-center justify-center text-xl text-red-600">
    Product not found
  </div>
</template>
