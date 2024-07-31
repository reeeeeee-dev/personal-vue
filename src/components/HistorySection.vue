<script setup>
const scrollToElem = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
</script>

<template>
  <div class="m-64">
    <div>
      <h1 class="text-8xl my-8">My Journey</h1>
      <ul class="text-4xl flex flex-col gap-3 list-['>']">
        <li
          class="pl-8 hover:text-[var(--accent)] transition-colors"
          @click="scrollToElem('xerosec')"
        >
          Xerosec
        </li>
        <li class="pl-8 hover:text-[var(--accent)] transition-colors" @click="scrollToElem('bill')">
          Bill.com / Divvy
        </li>
        <li
          class="pl-8 hover:text-[var(--accent)] transition-colors"
          @click="scrollToElem('walmart')"
        >
          Walmart
        </li>
      </ul>
    </div>

    <br id="xerosec" class="my-32" />

    <div>
      <h3 class="text-6xl">Xerosec LLC</h3>
      <marquee class="w-80 gap-0">
        Typescript | Javascript | SCSS | NextJS | Storybook | Azure
      </marquee>
      <div class="flex gap-32 h-full mt-8">
        <p class="max-w-prose">
          In January of 2024, an old friend from high school reach out about an opportunity. It was
          a revolutionary new way to share and install scripts. After some design work, I
          single-handedly created the frontend platform for the site. It was an NX monorepo
          containing the app itself and a component library supporting it. The component library was
          written in Typescript and documented with Storybook. The app was built on NextJS.
        </p>
        <img src="https://picsum.photos/300?seed=1" />
      </div>
    </div>

    <br id="bill" class="my-32" />

    <div>
      <h3 class="text-6xl text-right">Bill.com / Divvy</h3>
      <marquee class="w-80 gap-0 float-right">
        Typescript | Javascript | SCSS | NX | Jest | Storybook
      </marquee>
      <div class="flex flex-row-reverse gap-32 h-full mt-8">
        <p class="max-w-prose">
          After 6 years at Walmart, I felt it was time for a change. I joined Divvy just as it was
          being absorbed by Bill.com. As a frontend engineer, I worked closely with my fellow
          engineers as well as my design partner. Together we created completely redesigned spend
          controls for 461,000 businesses controlling over $4&nbsp;billion in total payment volume
          (TPV). In the process, I greatly improved my team's test coverage and migrated some of our
          Javascript functions in our legacy monorepo to a new federated Typescript repository.
        </p>
        <img src="https://picsum.photos/300?seed=2" />
      </div>
    </div>

    <br id="walmart" class="my-32" />

    <div>
      <h3 class="text-6xl">Walmart</h3>
      <marquee class="w-80 gap-0">
        Typescript | Javascript | SCSS | AngularJS | React | React Native | iOS | Android |
        Storybook | Azure | Jenkins
      </marquee>
      <div class="flex gap-32 h-full mt-8">
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
        <img src="https://picsum.photos/300?seed=3" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
