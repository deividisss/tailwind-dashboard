<script lang="ts" setup>
import {
  dashBoardHelpButton,
  dashbooardItems,
  headers,
  headersMobileCheck,
  rows,
  rowsMobileCheck,
} from '@/data/mockData'
import UserAvatarButton from '@/components/UserAvatarButton.vue'
import NotficationBell from '../components/NotificationBell.vue'
import SearchInput from '@/components/SearchInput.vue'
import TopHeader from '@/components/TopHeader.vue'
import IconNotificationBing from '@/components/icons/IconNotificationBing.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import AppTextInput from './AppTextInput.vue'
import AppTable from '@/components/AppTable.vue'
import AppButton from '@/components/AppButton.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import type { DashboardButton } from '@/types/types'
import AppSpinner from '@/components/AppSpinner.vue'

function handleSidebarItemClick(item: DashboardButton) {
  console.log('Sidebar item clicked:', item)
}
</script>

<template>
  <main>
    <h1 class="mb-8 text-5xl font-bold">UI Playground</h1>

    <section class="flex items-center gap-4">
      <IconNotificationBing />
      <IconSearch />
    </section>

    <section class="flex gap-3">
      <NotficationBell />
      <NotficationBell hasNotification />
    </section>

    <section class="grid gap-4">
      <AppButton><IconSearch /> Clicks</AppButton>
      <AppButton
        ><IconSearch /> Click me Click meClick meClick meClick meClick meClick meClick me</AppButton
      >
      <AppButton isActive><IconSearch /> Click me</AppButton>
      <AppButton isActive is-transparent><IconSearch /> Click me</AppButton>
      <AppButton isFullWidth><IconSearch /> Click me</AppButton>
      <AppButton isFullWidth isActive><IconSearch /> Click me</AppButton>
      <AppButton isFullWidth isActive is-transparent><IconSearch /> Click me</AppButton>
      <AppButton isFullWidth is-transparent
        ><IconSearch /> Click me Click meClick meClick meClick meClick meClick meClick me</AppButton
      >
    </section>

    <section>
      <AppSpinner />
    </section>

    <section><SearchInput placeholder="Search for something..." /></section>

    <section>
      <UserAvatarButton
        src="https://s3-alpha-sig.figma.com/img/dafb/60e8/72dd001b9fb5cabe0125e587a3429887?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lWwsS0A8I2Z5DypAFN0fLpzyby3nUyz4xrBTFZbr5f8lbM5IWixREQgS4QG1AxezeSFAkzXlRszKPURMPfLOVMx6PMyr56qxeDI-vMZfcUtGLmFSUPDSsTbbfX-HpHIAikvIx~tuPlHjjtLXRyjjQhSBIVq8~0YDxcobBvGidSDpBjxCuVgi0df~B3DGT37x4IfmkLdaS2bjMDD1jM-yPEfaw07wDRko51VTUbe6jCLwnDUo1S9OMQFQKT6PDMKtv-cuGRZWeSzocBIgGLfH3RVFdem6SwBN5nO~JYzuaWOlCeBga-NLcQ2Rn7fAsoqw~FmBLT1G2vUPNtOQcrqdrA__"
        alt="User Avatar"
      />
    </section>

    <section><TopHeader /></section>

    <section class="flex flex-col gap-4">
      <AppTextInput label="Full Name" placeholder="Enter your full name..." />
      <AppTextInput placeholder="Enter your full name..." />
    </section>

    <section class="grid gap-5">
      <AppTable :headers="headers" :rows="rows" class="mr-3" />

      <AppTable
        :headers="headersMobileCheck"
        :rows="rowsMobileCheck"
        isSelectable
        hasBorderBottom
      />
    </section>

    <section>
      <AppSidebar
        title="Sales."
        :dashbooardItems="dashbooardItems"
        :helpButton="dashBoardHelpButton"
        @itemClick="handleSidebarItemClick"
      />
    </section>
  </main>
</template>

<style scoped>
.testas {
  justify-content: center;
  align-items: center;
}

main {
  padding: 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
}

section {
  background-color: #f8f8f8;
  padding: 2rem;
  border: 1px dashed #ccc;
}
</style>
