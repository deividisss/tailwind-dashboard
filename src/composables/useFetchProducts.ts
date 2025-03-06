import { ref, onMounted } from 'vue'
import type { Product, Header } from '@/types/types'
import { LINK_TYPES } from '@/constants'

const fields = ['title', 'category', 'brand', 'price', 'stock', 'rating', 'id'].join(',')

export function useFetchProducts(limit = 10) {
  const tableRows = ref<Product[]>([])
  const tableHeader = ref<Header[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchProducts = async () => {
    isLoading.value = true
    error.value = null
    try {
      const url = `https://dummyjson.com/products?limit=${limit}&select=${fields}`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }

      const data = await response.json()
      tableRows.value = data.products.map((product: Product) => ({
        title: {
          text: product.title,
          link: { type: LINK_TYPES.ROUTER, value: `/product/${product.id}` },
        },
        category: product.category,
        brand: product.brand,
        price: product.price,
        stock: product.stock,
        rating: product.rating,
      }))

      tableHeader.value = [
        { key: 'title', label: 'Title', sortable: true, isVisibleOnMobile: true, isLink: true },
        { key: 'category', label: 'Category' },
        { key: 'brand', label: 'Brand', sortable: true },
        { key: 'price', label: 'Price' },
        { key: 'rating', label: 'Rating' },
      ]
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = `Error fetching products: ${err.message}`
      } else {
        error.value = 'An unknown error occurred'
      }
      console.error('Error fetching products:', err)
    } finally {
      isLoading.value = false
    }
  }

  const fetchProduct = async (id: string) => {
    isLoading.value = true
    error.value = null
    try {
      const url = `https://dummyjson.com/products/${id}`
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }

      const product = await response.json()
      return product
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = `Error fetching product: ${err.message}`
      } else {
        error.value = 'An unknown error occurred'
      }
      console.error('Error fetching product:', err)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchProducts)

  return { tableRows, tableHeader, isLoading, error, fetchProducts, fetchProduct }
}
