import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import Sidebar1 from '../components/Projects.vue'
import Sidebar2 from '../components/Experience.vue'
import Sidebar3 from '../components/Skills.vue'
import Sidebar4 from '../components/Contact.vue'
import Sidebar5 from '../components/AcademicExperience.vue'
import Sidebar6 from '../components/Certificates.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage,
      meta: {
        title: 'Harley Gotardo'
      }
    },
    {
      path: '/projects',
      name: 'sidebar1',
      component: Sidebar1, // Projects
      meta: {
        title: 'Harley Gotardo - Projects'
      }
    },
    {
      path: '/experience',
      name: 'sidebar2',
      component: Sidebar2, // Experience
      meta: {
        title: 'Harley Gotardo - Experience'
      }
    },
    {
      path: '/skills',
      name: 'sidebar3',
      component: Sidebar3, // Skills
      meta: {
        title: 'Harley Gotardo - Skills'
      }
    },
    {
      path: '/contact',
      name: 'sidebar4',
      component: Sidebar4, // Contact
      meta: {
        title: 'Harley Gotardo - Contact'
      }
    },
    {
      path: '/academic-experience',
      name: 'sidebar5',
      component: Sidebar5, // Academic Experience
      meta: {
        title: 'Harley Gotardo - Academic Experience'
      }
    },
    {
      path: '/certificates',
      name: 'sidebar6',
      component: Sidebar6, // Certificates
      meta: {
        title: 'Harley Gotardo - Certificates'
      }
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router
