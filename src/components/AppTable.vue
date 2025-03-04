<template>
  <table class="w-full bg-white">
    <thead>
      <AppTableRow>
        <!-- Checkbox column -->
        <AppTableCell type="header" class="w-4">
          <input type="checkbox" class="w-4" v-model="isAllChecked" @change="toggleSelectAll" />
        </AppTableCell>
        <!-- Dynamic headers -->
        <AppTableCell v-for="header in headers" :key="header.key" type="header">
          <!-- Use a button for sortable headers -->
          <button
            v-if="header.sortable"
            @click="sortBy(header.key)"
            class="focus:ring-black-500 flex items-center gap-1 focus:ring-2 focus:ring-offset-2 focus:outline-none"
          >
            <span>{{ header.label }}</span>
            <!-- Sort icon -->
            <span class="w-4">
              <span v-if="sortKey === header.key && sortDirection === 'asc'">↑</span>
              <span v-else-if="sortKey === header.key && sortDirection === 'desc'">↓</span>
            </span>
          </button>
          <!-- Non-sortable headers -->
          <span v-else>
            {{ header.label }}
          </span>
        </AppTableCell>
      </AppTableRow>
    </thead>
    <tbody>
      <AppTableRow v-for="(row, index) in rows" :key="index" :is-active="!!row.isActive">
        <AppTableCell class="w-6">
          <input type="checkbox" class="w-4" v-model="row.isActive" />
        </AppTableCell>
        <AppTableCell v-for="header in headers" :key="header.key">
          {{ row[header.key] }}
        </AppTableCell>
      </AppTableRow>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AppTableRow from '@/components/AppTableRow.vue'
import AppTableCell from '@/components/AppTableCell.vue'

const props = defineProps({
  headers: {
    type: Array as () => { key: string; label: string; sortable?: boolean }[],
    required: true,
  },
  rows: {
    type: Array as () => { [key: string]: string | number | boolean }[],
    required: true,
  },
})

const rows = ref(props.rows)
const isAllChecked = ref(false)

function toggleSelectAll() {
  rows.value.forEach((row) => {
    row.isActive = isAllChecked.value
  })
}

// Sorting logic
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
    if (a[key] < b[key]) return sortDirection.value === 'asc' ? -1 : 1
    if (a[key] > b[key]) return sortDirection.value === 'asc' ? 1 : -1
    return 0
  })
}
</script>
