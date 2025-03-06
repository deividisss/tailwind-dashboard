<template>
  <router-link
    v-if="link.type === LINK_TYPES.ROUTER"
    :to="link.value"
    class="text-blue-600 hover:underline"
  >
    {{ text }}
  </router-link>
  <a
    v-else-if="link.type === LINK_TYPES.EXTERNAL"
    :href="link.value"
    class="text-blue-600 hover:underline"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ text }}
  </a>
</template>

<script setup lang="ts">
import { LINK_TYPES } from '@/constants'
import type { LinkableText } from '@/types/types'

defineProps<{
  text: string
  link: LinkableText['link']
}>()
</script>
