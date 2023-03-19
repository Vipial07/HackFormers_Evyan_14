import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Election from '../views/Election.vue'
import Candidate from '../views/Candidate.vue'
import Admin from '../views/Admin.vue'
import Login from "../views/Login.vue"
import ElectionAdmin from "../views/ElectionAdmin.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/electionadmin',
      name: 'ElectionAdmin',
      component: ElectionAdmin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin/candidate',
      name: 'Candidate',
      component: Candidate
    },
    {
      path: '/election',
      name: 'Election',
      component: Election
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
