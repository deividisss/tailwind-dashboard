import type { LinkType } from '@/constants'

export interface LinkableText {
  text: string
  link: {
    type: LinkType
    value: string
  }
}
export type RowData = {
  [key: string]: string | boolean | LinkableText
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
