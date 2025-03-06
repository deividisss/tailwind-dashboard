export const LINK_TYPES = {
  ROUTER: 'router',
  EXTERNAL: 'external',
} as const

export type LinkType = (typeof LINK_TYPES)[keyof typeof LINK_TYPES]
