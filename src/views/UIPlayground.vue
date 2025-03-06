<script lang="ts" setup>
import UserAvatarButton from '@/components/UserAvatarButton.vue'
import NotficationBell from '../components/NotificationBell.vue'
import SearchInput from '@/components/SearchInput.vue'
import TopHeader from '@/components/TopHeader.vue'
import IconNotificationBing from '@/components/icons/IconNotificationBing.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import AppTextInput from './AppTextInput.vue'
import AppTable from '@/components/AppTable.vue'

// Headers configuration
const headers = [
  { key: 'title', label: 'Title', sortable: true, isVisibleOnMobile: true },
  { key: 'category', label: 'Category', sortable: true },
  { key: 'brand', label: 'Brand', sortable: true },
  { key: 'price', label: 'Price', sortable: true },
  { key: 'stock', label: 'Stock', sortable: false },
  { key: 'rating', label: 'Rating', sortable: false },
]

const headersMobileCheck = [
  { key: 'title', label: 'Title', sortable: true, isVisibleOnMobile: true },
  { key: 'category', label: 'Category', sortable: false, isVisibleOnMobile: true },
  { key: 'brand', label: 'Brand', sortable: false },
  { key: 'price', label: 'Price', sortable: false },
  { key: 'stock', label: 'Stock', sortable: false },
  { key: 'rating', label: 'Rating', sortable: false },
]

const rows = [
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

const rowsMobileCheck = [
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
</script>

<template>
  <main>
    <h1 class="mb-8 text-5xl font-bold">UI Playground</h1>

    <section class="flex items-center gap-4">
      <IconNotificationBing />
      <IconSearch />
    </section>

    <section>
      <NotficationBell />
      <NotficationBell hasNotification />
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

    <section>
      <AppTable :headers="headers" :rows="rows" />
    </section>

    <section>
      <AppTable
        :headers="headersMobileCheck"
        :rows="rowsMobileCheck"
        isSelectable
        hasBorderBottom
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
