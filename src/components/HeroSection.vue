<script setup>
import Parallaxy from '@lucien144/vue3-parallaxy'
</script>

<template>
  <div
    class="bg-cover bg-no-repeat bg-[url(/img/shades.jpg)] flex h-96 px-32 py-64 items-center justify-center"
  >
    <div class="text-9xl text-[var(--dark)] p-16">Reetik Patel</div>
    <img src="/img/headshot.jpg" class="h-96" />
  </div>
  <div class="flex flex-wrap justify-evenly">
    <div class="p-8 flex gap-8">
      <a target="_blank" href="https://github.com/reeeeeee-dev"
        ><img src="/img/github.svg" class="h-16"
      /></a>
      <a target="_blank" href="https://linkedin.com/in/reetik"
        ><img src="/img/linkedin.svg" class="h-16"
      /></a>
    </div>
  </div>
</template>
