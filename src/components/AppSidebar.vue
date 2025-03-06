<template>
  <aside class="flex h-screen flex-col justify-between">
    <div>
      <div class="text-l p-11 pb-10 text-2xl font-medium text-blue-700">{{ title }}</div>
      <ul>
        <li v-for="(item, index) in dashbooardItems" :key="index + item.name">
          <AppButton
            :isActive="item.isActive"
            :isTransparent="item.isTransparent"
            @click="handleClick(item)"
            isFullWidth
            class="justify-start px-12"
          >
            <component :is="getIconComponent(item.icon)" />
            {{ item.name }}
          </AppButton>
        </li>
      </ul>
    </div>

    <div class="my-8">
      <AppButton
        :isActive="helpButton.isActive"
        :isTransparent="helpButton.isTransparent"
        @click="handleClick(helpButton)"
        isFullWidth
        class="justify-start px-12"
      >
        <component :is="getIconComponent(helpButton.icon)" />
        {{ helpButton.name }}
      </AppButton>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, defineAsyncComponent } from 'vue'
import AppButton from './AppButton.vue'
import type { DashboardButton } from '@/types/types'

function getIconComponent(icon: string) {
  return defineAsyncComponent(() => import(`@/components/icons/${icon}.vue`))
}

defineProps<{
  title: string
  dashbooardItems: DashboardButton[]
  helpButton: DashboardButton
}>()

const emit = defineEmits(['itemClick'])

function handleClick(item: DashboardButton) {
  emit('itemClick', item)
}
</script>
