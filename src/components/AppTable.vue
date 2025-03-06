<template>
  <table class="w-full bg-white">
    <thead>
      <AppTableRow :has-border-bottom="hasBorderBottom">
        <AppTableCell v-if="isSelectable" type="header" class="w-4">
          <input
            type="checkbox"
            class="w-4"
            v-model="isAllChecked"
            @change="toggleSelectAll"
            :aria-label="`Select all rows`"
          />
        </AppTableCell>

        <AppTableCell
          v-for="header in headers"
          :key="header.key"
          type="header"
          :class="{ 'hidden md:table-cell': !header.isVisibleOnMobile }"
        >
          <button
            v-if="header.sortable"
            @click="sortBy(header.key)"
            class="focus:ring-black-500 flex items-center gap-1 focus:ring-2 focus:ring-offset-2 focus:outline-none"
            :aria-label="`Sort by ${header.label}`"
          >
            <span>{{ header.label }}</span>
            <span class="w-4">
              <span v-if="sortKey === header.key && sortDirection === 'asc'">↑</span>
              <span v-else-if="sortKey === header.key && sortDirection === 'desc'">↓</span>
              <span v-else-if="header.sortable">↕</span>
            </span>
          </button>

          <span v-else>
            {{ header.label }}
          </span>
        </AppTableCell>
      </AppTableRow>
    </thead>
    <tbody>
      <AppTableRow
        v-for="(row, index) in rows"
        :key="index"
        :is-active="isSelectable && !!row.isActive"
        :has-border-bottom="hasBorderBottom"
      >
        <AppTableCell v-if="isSelectable" class="w-6">
          <input
            type="checkbox"
            class="w-4"
            v-model="row.isActive"
            :aria-label="`Select row ${index + 1}`"
          />
        </AppTableCell>

        <AppTableCell
          v-for="header in headers"
          :key="header.key"
          :class="{ 'hidden md:table-cell': !header.isVisibleOnMobile }"
        >
          <template v-if="header.isLink">
            <AppLink
              v-if="isLinkable(row[header.key])"
              :text="(row[header.key] as LinkableText).text"
              :link="{
                type: (row[header.key] as LinkableText).link.type,
                value: (row[header.key] as LinkableText).link.value,
              }"
            />
            <template v-else>
              {{ row[header.key] }}
            </template>
          </template>

          <template v-else>
            {{ row[header.key] }}
          </template>
        </AppTableCell>
      </AppTableRow>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppTableRow from '@/components/AppTableRow.vue'
import AppTableCell from '@/components/AppTableCell.vue'
import AppLink from '@/components/AppLink.vue'
import type { Header, RowData, LinkableText } from '@/types/types'

const props = defineProps<{
  headers: Header[]
  rows: RowData[]
  isSelectable?: boolean
  hasBorderBottom?: boolean
}>()

const rows = ref(props.rows)
const isAllChecked = ref(false)

function toggleSelectAll() {
  rows.value.forEach((row) => {
    row.isActive = isAllChecked.value
  })
}

const sortKey = ref<string | null>(null)
const sortDirection = ref<'asc' | 'desc' | null>(null)

function sortBy(key: string) {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDirection.value = 'asc'
  }

  rows.value.sort((a, b) => {
    const aValue = isLinkable(a[key]) ? (a[key] as LinkableText).text : a[key]
    const bValue = isLinkable(b[key]) ? (b[key] as LinkableText).text : b[key]

    if (aValue < bValue) return sortDirection.value === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection.value === 'asc' ? 1 : -1
    return 0
  })
}

function isLinkable(value: unknown): value is LinkableText {
  return typeof value === 'object' && value !== null && 'link' in value && 'text' in value
}
</script>
