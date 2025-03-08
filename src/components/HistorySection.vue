<script setup>
const scrollToElem = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <div class="m-64 max-lg:m-24">
    <div>
      <h1 class="text-8xl my-8">My Journey</h1>
      <ul class="text-4xl flex flex-col gap-3 list-['>']">
        <li
          class="pl-8 hover:text-[var(--accent)] transition-colors cursor-pointer"
          @click="scrollToElem('designpickle')"
        >
          Design Pickle
        </li>
        <li
          class="pl-8 hover:text-[var(--accent)] transition-colors cursor-pointer"
          @click="scrollToElem('xerosec')"
        >
          Xerosec
        </li>
        <li
          class="pl-8 hover:text-[var(--accent)] transition-colors cursor-pointer"
          @click="scrollToElem('bill')"
        >
          Bill.com / Divvy
        </li>
        <li
          class="pl-8 hover:text-[var(--accent)] transition-colors cursor-pointer"
          @click="scrollToElem('walmart')"
        >
          Walmart
        </li>
      </ul>
    </div>

    <br id="designpickle" class="my-32" />

    <div class="flex flex-row-reverse gap-32 h-full mt-8 flex-wrap">
      <div>
        <div class="w-min">
          <h3 class="text-6xl w-max">Design Pickle</h3>
          <marquee>Typescript | Javascript | SCSS | Storybook | Jest</marquee>
        </div>
        <p class="max-w-prose mt-4">
          Still too early to summarize, I'm learning and growing in my current role.
        </p>
      </div>
      <img src="/img/designpickle.jpg" class="w-64 object-contain aspect-square bg-white" />
    </div>

    <br id="xerosec" class="my-32" />

    <div class="flex gap-32 h-full mt-8 flex-wrap">
      <div>
        <div class="w-min">
          <h3 class="text-6xl w-max">Xerosec LLC</h3>
          <marquee>Typescript | Javascript | SCSS | NX | NextJS | Storybook | Azure</marquee>
        </div>
        <p class="max-w-prose mt-4">
          In January of 2024, an old friend from high school reached out about an opportunity. It
          was a revolutionary new way to share and install scripts. After some design work, I
          single-handedly created the frontend platform for the site. It was an NX monorepo
          containing the app itself and a component library supporting it. The component library was
          written in Typescript and documented with Storybook. The app was built on NextJS.
        </p>
      </div>
      <img src="/img/xerosec.svg" class="w-64 aspect-square p-16 bg-[rgb(20,20,22)]" />
    </div>

    <br id="bill" class="my-32" />

    <div class="flex flex-row-reverse flex-wrap gap-16 h-full mt-8">
      <div>
        <div class="w-max m-auto mr-0 my-4">
          <h3 class="text-6xl text-right">Bill.com / Divvy</h3>
          <marquee class="text-right">
            Typescript | Javascript | SCSS | NX | Jest | Storybook
          </marquee>
        </div>
        <p class="max-w-prose">
          After 6 years at Walmart, I felt it was time for a change. I joined Divvy just as it was
          being absorbed by Bill.com. As a frontend engineer, I worked closely with my fellow
          engineers as well as my design partner. Together we created completely redesigned spend
          controls for 461,000 businesses controlling over $4&nbsp;billion in total payment volume
          (TPV). In the process, I greatly improved my team's test coverage and migrated some of our
          Javascript functions in our legacy monorepo to a new federated Typescript repository.
        </p>
      </div>
      <div class="flex gap-16">
        <img src="/img/divvy.svg" class="object-contain aspect-square w-64 bg-[#f8f7ee]" />
        <img src="/img/bill.png" class="object-cover aspect-square w-64" />
      </div>
    </div>

    <br id="walmart" class="my-32" />

    <div class="flex gap-32 h-full mt-8 flex-wrap">
      <div>
        <div class="w-min my-4">
          <h3 class="text-6xl w-max">Walmart Global Tech</h3>
          <marquee>
            Typescript | Javascript | SCSS | AngularJS | React | React Native | iOS | Android |
            Storybook | Azure | Jenkins
          </marquee>
        </div>
        <p class="max-w-prose">
          The longest and earliest run of my career was a trial by fire. I started at Walmart in
          2016 through a high school internship program called the
          Bentonville&nbsp;Ignite&nbsp;Program. On the Associate Mobile Platforms team, there was
          always something to do. I did everything from designing an new version of an admin
          console, to iOS code signing, to deploying through Walmart's internal hybrid-cloud
          systems. My most notable project at Walmart was rebuilding the admin console for an
          internal notifications platform. I designed and built it from the ground up. It allowed
          app teams to view and configure their settings within the platform. More importantly, the
          notification platform allowed for emergency alerts to stores in cases such as violent
          threats, inclement weather, and COVID exposures.
        </p>
      </div>
      <img src="/img/walmart.png" class="object-contain aspect-square bg-[#122b53] w-64 h-64" />
    </div>
  </div>
</template>

<style scoped></style>
