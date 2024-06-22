<script setup lang="ts"></script>

<template>
  <main class="overflow-visible m-16 text-white">
    <div
      class="rotate-[-45deg] overflow-hidden md:min-xl:h-screen flex flex-wrap m-16 mt-96 items-center justify-center"
    >
      <div class="rotate-90 m-[-128px]">
        <h1 class="text-[80px] bg-black text-red-400 p-4">Reetik Patel</h1>
      </div>
      <div class="h-[50vh] w-[50vh] rounded-3xl overflow-hidden">
        <img class="rotate-45 object-fill scale-150" src="/img/profile.jpg" />
      </div>
    </div>
    <div class="flex flex-col items-center w-[45%] float-right">
      <h6 class="text-xl bg-black text-red-400 font-bold w-fit float-right p-4">
        My new site is a work in progress, but feel free to look around.
      </h6>
      <a
        href="/resume.pdf"
        class="text-lg bg-black text-red-400 float-right w-fit p-4 underline cursor-pointer hover:text-white"
      >
        Click here for my resume
      </a>
    </div>
  </main>
</template>

<style>
.title {
  font-size: 80px;
}
</style>
