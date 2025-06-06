import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/sumadora',
    component: () => import('../views/Sumadora.vue')
  },
  {
    path: '/traductor-numeros',
    component: () => import('../views/TraductorNumerico.vue')
  },
  {
    path: '/multiplicador',
    component: () => import('../views/Multiplicadora.vue')
  },
  {
    path: '/experiencia-personal',
    component: () => import('../views/Experiencia.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router