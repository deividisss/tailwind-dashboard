<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppSidebar from '@/components/AppSidebar.vue'
import { dashBoardHelpButton, dashbooardItems } from '@/data/mockData'
import TopHeader from './components/TopHeader.vue'

const isSidebarOpen = ref(false)
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 1024
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 1024
  })
})
</script>

<template>
  <div class="flex min-h-screen">
    <AppSidebar
      v-show="isSidebarOpen || !isMobile"
      title="Sales."
      :helpButton="dashBoardHelpButton"
      :dashbooardItems="dashbooardItems"
      :class="[
        'h-full min-w-[230px] bg-white text-white',
        isMobile ? 'fixed z-20 pt-2' : 'relative',
      ]"
    />

    <div class="flex flex-1 flex-col bg-gray-100">
      <header :class="isMobile ? 'sticky z-30 bg-white p-6 shadow-sm' : 'px-8 pt-10'">
        <TopHeader>
          <button
            v-if="isMobile"
            @click="isSidebarOpen = !isSidebarOpen"
            class="rounded-md bg-white p-3 text-gray-600 lg:hidden"
          >
            <div class="mb-1 h-0.5 w-6 bg-gray-600"></div>
            <div class="mb-1 h-0.5 w-6 bg-gray-600"></div>
            <div class="mb-1 h-0.5 w-6 bg-gray-600"></div>
          </button>
        </TopHeader>
      </header>

      <main class="flex-1 p-6 px-10 lg:pt-8">
        <router-view />
      </main>
    </div>
  </div>
</template>
