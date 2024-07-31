<script setup></script>

<template>
  <div class="m-64">
    <h1 class="text-8xl">My Journey</h1>
    <ul class="text-4xl mt-8 flex flex-col gap-3 list-['>']">
      <li class="pl-8 hover:text-[var(--accent)] transition-colors">
        <RouterLink to="#xerosec">Xerosec</RouterLink>
      </li>
      <li class="pl-8 hover:text-[var(--accent)] transition-colors">
        <RouterLink to="#bill">Bill.com / Divvy</RouterLink>
      </li>
      <li class="pl-8 hover:text-[var(--accent)] transition-colors">
        <RouterLink to="#walmart">Walmart</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
