import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JourneyView from '@/views/JourneyView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/journey',
      name: 'journey',
      component: JourneyView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    }
  ]
})

export default router
