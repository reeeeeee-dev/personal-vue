<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-[var(--dark)] flex justify-end gap-8 px-16 py-8">
    <RouterLink to="/" class="hover:text-[var(--accent)] transition-colors">Home</RouterLink>
    <RouterLink to="/journey" class="hover:text-[var(--accent)] transition-colors">
      Journey
    </RouterLink>
    <RouterLink to="/projects" class="hover:text-[var(--accent)] transition-colors">
      Projects
    </RouterLink>
  </header>

  <RouterView />
</template>

<style scoped></style>
