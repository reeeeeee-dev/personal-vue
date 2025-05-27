<script setup>
const scrollToElem = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <div class="m-64 max-lg:m-24">
    <div>
      <h1 class="text-8xl my-8">Projects, Presentations, and Contracts</h1>
      <ul class="text-4xl flex flex-col gap-3 list-['>']">
        <li
          class="pl-8 hover:text-[var(--accent)] transition-colors cursor-pointer"
          @click="scrollToElem('resplash')"
        >
          Resplash
        </li>
      </ul>
    </div>

    <br id="designpickle" class="my-32" />

    <div class="flex flex-row-reverse gap-32 h-full mt-8 flex-wrap">
      <div>
        <div class="w-min">
          <h3 class="text-6xl w-max">Resplash</h3>
          <div stop>Native Android</div>
        </div>
        <p class="max-w-prose mt-4">
          This was one of my first forays in native Android development. Resplash is always one of
          the first apps I download when I get a new phone. It has an autowallpaper feature that
          updates the wallpaper on my phone on a set interval. I also occasioanlly find myself
          scrolling Unsplash so having a mobile client was useful.
          <br />
          <br />
          I wanted the push notification to be persistent so it wouldn't disappear when I
          instinctively cleared all notifications. It was a shortcut for more details about the
          current wallpaper. Seeing the app was open source and available on GitHub, I decided to go
          ahead and take a crack at it. With some help from
          <a href="https://b-lam.github.io/">Brandon Lam</a>, the original creator of the app, I had
          my first pull request merged and released to the Google Play Store.
        </p>
        <div class="flex flex-row gap-4 mt-4">
          <a target="_blank" href="https://github.com/reeeeeee-dev">
            <img src="/img/github.svg" class="h-8" />
          </a>
        </div>
      </div>
      <img
        src="https://raw.githubusercontent.com/b-lam/Resplash/master/design/Resplash_Play_Store_Banner.jpg"
        class="h-64 bg-white"
      />
    </div>
  </div>
</template>
