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

  <router-view v-slot="{ Component }">
    <Transition>
      <component class="main" :is="Component" />
    </Transition>
  </router-view>
</template>

<style scoped>
.main {
  min-height: calc(100vh - 80px /* Header */);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
