<script setup lang="ts">
import UserAvatarButton from '@/components/UserAvatarButton.vue'
import SearchInput from '@/components/SearchInput.vue'
import NotificationBell from '@/components/NotificationBell.vue'
</script>

<template>
  <header class="flex items-center justify-between gap-5">
    <slot />
    <SearchInput placeholder="Search for something..." />

    <div class="flex items-center gap-4">
      <NotificationBell hasNotification />
      <UserAvatarButton
        src="https://s3-alpha-sig.figma.com/img/dafb/60e8/72dd001b9fb5cabe0125e587a3429887?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lWwsS0A8I2Z5DypAFN0fLpzyby3nUyz4xrBTFZbr5f8lbM5IWixREQgS4QG1AxezeSFAkzXlRszKPURMPfLOVMx6PMyr56qxeDI-vMZfcUtGLmFSUPDSsTbbfX-HpHIAikvIx~tuPlHjjtLXRyjjQhSBIVq8~0YDxcobBvGidSDpBjxCuVgi0df~B3DGT37x4IfmkLdaS2bjMDD1jM-yPEfaw07wDRko51VTUbe6jCLwnDUo1S9OMQFQKT6PDMKtv-cuGRZWeSzocBIgGLfH3RVFdem6SwBN5nO~JYzuaWOlCeBga-NLcQ2Rn7fAsoqw~FmBLT1G2vUPNtOQcrqdrA__"
        alt="User Avatar"
      />
    </div>
  </header>
</template>
