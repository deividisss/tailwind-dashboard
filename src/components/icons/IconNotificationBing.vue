<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 24,
  },
})
</script>

<template>
  <svg
    :style="{ width: `${size}px`, height: `${size}px` }"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="stroke-current"
  >
    <path
      d="M12 6.54352V9.87352"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M12.02 2.10352C8.34002 2.10352 5.36002 5.08352 5.36002 8.76352V10.8635C5.36002 11.5435 5.08002 12.5635 4.73002 13.1435L3.46002 15.2635C2.68002 16.5735 3.22002 18.0335 4.66002 18.5135C9.44002 20.1035 14.61 20.1035 19.39 18.5135C20.74 18.0635 21.32 16.4835 20.59 15.2635L19.32 13.1435C18.97 12.5635 18.69 11.5335 18.69 10.8635V8.76352C18.68 5.10352 15.68 2.10352 12.02 2.10352Z"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
    />
    <path
      d="M15.33 18.9235C15.33 20.7535 13.83 22.2535 12 22.2535C11.09 22.2535 10.25 21.8735 9.64998 21.2735C9.04998 20.6735 8.66998 19.8335 8.66998 18.9235"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-miterlimit="10"
    />
  </svg>
</template>
