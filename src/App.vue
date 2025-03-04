<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="te rt text-3xl font-bold underline">Hello world!</h1>
    <div class="wrapper">
      <nav>
        <RouterLink underline to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/ui-playground">UI</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
