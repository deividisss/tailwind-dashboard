import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFetchProducts } from '@/composables/useFetchProducts'
import { LINK_TYPES } from '@/constants'

global.fetch = vi.fn()

describe('useFetchProducts', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should fetch products and update tableRows and tableHeader', async () => {
    const mockProducts = [
      {
        id: 1,
        title: 'Product 1',
        category: 'Category 1',
        brand: 'Brand 1',
        price: 100,
        stock: 10,
        rating: 4.5,
      },
    ]

    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue({ products: mockProducts }),
    }
    vi.mocked(fetch).mockResolvedValue(mockResponse as unknown as Response)

    const { tableRows, tableHeader, fetchProducts } = useFetchProducts()

    await fetchProducts()

    expect(fetch).toHaveBeenCalledWith(
      'https://dummyjson.com/products?limit=10&select=title,category,brand,price,stock,rating,id',
    )

    expect(tableRows.value).toEqual([
      {
        title: {
          text: 'Product 1',
          link: { type: LINK_TYPES.ROUTER, value: '/product/1' },
        },
        category: 'Category 1',
        brand: 'Brand 1',
        price: 100,
        stock: 10,
        rating: 4.5,
      },
    ])

    expect(tableHeader.value).toEqual([
      { key: 'title', label: 'Title', sortable: true, isVisibleOnMobile: true, isLink: true },
      { key: 'category', label: 'Category' },
      { key: 'brand', label: 'Brand', sortable: true },
      { key: 'price', label: 'Price' },
      { key: 'rating', label: 'Rating' },
    ])
  })

  it('should handle fetch error and update error state', async () => {
    const mockResponse = {
      ok: false,
      statusText: 'Not Found',
    }
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response)

    const { error, fetchProducts } = useFetchProducts()

    await fetchProducts()

    expect(fetch).toHaveBeenCalledWith(
      'https://dummyjson.com/products?limit=10&select=title,category,brand,price,stock,rating,id',
    )

    expect(error.value).toBe('Error fetching products: Error: Not Found')
  })

  it('should search products and update tableRows', async () => {
    const mockProducts = [
      {
        id: 2,
        title: 'Product 2',
        category: 'Category 2',
        brand: 'Brand 2',
        price: 200,
        stock: 20,
        rating: 4.0,
      },
    ]

    // Mock the fetch response
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue({ products: mockProducts }),
    }
    vi.mocked(fetch).mockResolvedValue(mockResponse as unknown as Response)

    const { tableRows, searchProducts } = useFetchProducts()

    await searchProducts('Product 2')

    expect(fetch).toHaveBeenCalledWith(
      'https://dummyjson.com/products/search?q=Product 2&select=title,category,brand,price,stock,rating,id',
    )

    expect(tableRows.value).toEqual([
      {
        title: {
          text: 'Product 2',
          link: { type: LINK_TYPES.ROUTER, value: '/product/2' },
        },
        category: 'Category 2',
        brand: 'Brand 2',
        price: 200,
        stock: 20,
        rating: 4.0,
      },
    ])
  })

  it('should fetch a single product and return it', async () => {
    const mockProduct = {
      id: 3,
      title: 'Product 3',
      category: 'Category 3',
      brand: 'Brand 3',
      price: 300,
      stock: 30,
      rating: 3.5,
    }

    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockProduct),
    }
    vi.mocked(fetch).mockResolvedValue(mockResponse as unknown as Response)

    const { fetchProduct } = useFetchProducts()

    const product = await fetchProduct('3')

    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products/3')

    expect(product).toEqual(mockProduct)
  })

  it('should handle fetch error when searching products and update error state', async () => {
    const mockResponse = {
      ok: false,
      statusText: 'Not Found',
    }
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response)

    const { error, searchProducts } = useFetchProducts()

    await searchProducts('Unknown Product')

    expect(fetch).toHaveBeenCalledWith(
      'https://dummyjson.com/products/search?q=Unknown Product&select=title,category,brand,price,stock,rating,id',
    )

    expect(error.value).toBe('Error searching products: Error: Not Found')
  })

  it('should handle fetch error when fetching a single product and update error state', async () => {
    const mockResponse = {
      ok: false,
      statusText: 'Not Found',
    }
    vi.mocked(fetch).mockResolvedValue(mockResponse as Response)

    const { error, fetchProduct } = useFetchProducts()

    await fetchProduct('999')

    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products/999')

    expect(error.value).toBe('Error fetching product: Error: Not Found')
  })
})
