import { LINK_TYPES } from '@/constants'
import type { DashboardButton } from '@/types/types'

export const headers = [
  { key: 'title', label: 'Title', sortable: true, isVisibleOnMobile: true },
  { key: 'category', label: 'Category', sortable: true },
  { key: 'brand', label: 'Brand', sortable: true },
  { key: 'price', label: 'Price', sortable: true },
  { key: 'stock', label: 'Stock', sortable: false },
  { key: 'rating', label: 'Rating', sortable: false },
]

export const headersMobileCheck = [
  { key: 'title', label: 'Title', sortable: false, isVisibleOnMobile: true, isLink: true },
  { key: 'category', label: 'Category', sortable: true, isVisibleOnMobile: true, isLink: true },
  { key: 'brand', label: 'Brand', sortable: false, isLink: true },
  { key: 'price', label: 'Price', sortable: false },
  { key: 'stock', label: 'Stock', sortable: false },
  { key: 'rating', label: 'Rating', sortable: false },
]

export const rows = [
  {
    title: 'Product 1',
    category: 'Electronics',
    brand: 'Brand A',
    price: '$100',
    stock: '20',
    rating: '4',
    isActive: false,
  },
  {
    title: 'Product 2',
    category: 'Clothing',
    brand: 'Brand B',
    price: '$50',
    stock: '50',
    rating: '5',
    isActive: true,
  },
  {
    title: 'Product 3',
    category: 'Books',
    brand: 'Brand C',
    price: '$10',
    stock: '100',
    rating: '3',
    isActive: false,
  },
]

export const rowsMobileCheck = [
  {
    title: { text: 'Product 1', link: { type: LINK_TYPES.ROUTER, value: '/product/1' } },
    category: {
      text: 'Electronics',
      link: { type: LINK_TYPES.ROUTER, value: '/category/electronics' },
    },
    brand: { text: 'Brand A', link: { type: LINK_TYPES.EXTERNAL, value: 'https://brand-a.com' } },
    price: '$100',
    stock: '20',
    rating: '4',
    isActive: false,
  },
  {
    title: { text: 'Product 2', link: { type: LINK_TYPES.EXTERNAL, value: 'https://example.com' } },
    category: {
      text: 'Clothing',
      link: { type: LINK_TYPES.EXTERNAL, value: 'https://example.com/clothing' },
    },
    brand: { text: 'Brand B', link: { type: LINK_TYPES.EXTERNAL, value: 'https://brand-b.com' } },
    price: '$50',
    stock: '50',
    rating: '5',
    isActive: true,
  },
  {
    title: { text: 'Product 3', link: { type: LINK_TYPES.ROUTER, value: '/product/3' } },
    category: { text: 'Books', link: { type: LINK_TYPES.ROUTER, value: '/books/3' } },
    brand: { text: 'Brand C', link: { type: LINK_TYPES.ROUTER, value: '/brand/3' } },
    price: '$10',
    stock: '100',
    rating: '3',
    isActive: false,
  },
]

export const dashbooardItems: DashboardButton[] = [
  {
    isActive: true,
    name: 'Dashboard',
    icon: 'IconDash',
    isTransparent: false,
  },
  {
    isActive: false,
    name: 'Lab Test',
    icon: 'IconSearch',
    isTransparent: true,
  },
  {
    isActive: false,
    name: 'Appontment',
    icon: 'IconSearch',
    isTransparent: true,
  },
  {
    isActive: false,
    name: 'Medicine order',
    icon: 'IconSearch',
    isTransparent: true,
  },
  {
    isActive: false,
    name: 'Message',
    icon: 'IconSearch',
    isTransparent: true,
  },
  {
    isActive: false,
    name: 'Payment',
    icon: 'IconSearch',
    isTransparent: true,
  },
  {
    isActive: false,
    name: 'Settings',
    icon: 'IconSearch',
    isTransparent: true,
  },
]

export const dashBoardHelpButton: DashboardButton = {
  isActive: false,
  name: 'Help',
  icon: 'IconSearch',
  isTransparent: true,
}
