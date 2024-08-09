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
  <div class="flex flex-col items-center w-[45%] float-right">
    <h6 class="text-xl bg-black font-bold w-fit float-right p-4">
      My new site is a work in progress, but feel free to look around.
    </h6>
    <a
      href="/resume.pdf"
      target="_blank"
      class="text-lg bg-black float-right w-fit p-4 underline cursor-pointer hover:text-white"
    >
      Click here for my resume
    </a>
  </div>
</template>
