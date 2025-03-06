import type { LinkType } from '@/constants'

export interface LinkableText {
  text: string
  link: {
    type: LinkType
    value: string
  }
}
export type RowData = {
  [key: string]: string | boolean | number | LinkableText
}

export interface Header {
  key: string
  label: string
  sortable?: boolean
  isVisibleOnMobile?: boolean
  isLink?: boolean
}

export interface TableData {
  headers: Header[]
  rows: RowData[]
  isSelectable?: boolean
  hasBorderBottom?: boolean
}

export interface DashboardButton {
  isTransparent: boolean | undefined
  isActive?: boolean
  name: string
  icon: string
  isFullWidth?: boolean
}

export interface Product {
  id: string
  title: string
  category: string
  brand: string
  price: number
  stock: number
  rating: number
}
