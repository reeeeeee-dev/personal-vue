<template>
  <div
    class="rotate-[-45deg] overflow-hidden md:min-xl:h-screen flex flex-wrap m-16 mt-96 items-center justify-center"
  >
    <div class="rotate-90 m-[-128px]">
      <h1 class="text-[80px] bg-black p-4">Reetik Patel</h1>
    </div>
    <div class="h-[50vh] w-[50vh] rounded-3xl overflow-hidden">
      <img
        class="rotate-45 object-cover scale-[1.45] mt-[-450px] ml-12 sepia-[0.3]"
        src="/img/headshot.jpg"
      />
    </div>
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
