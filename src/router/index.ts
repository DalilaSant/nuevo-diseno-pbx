import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'PBX Hosting | Inicio' },
  },
  {
    path: '/soluciones',
    name: 'soluciones',
    component: () => import('@/views/SolucionesView.vue'),
    meta: { title: 'PBX Hosting | Soluciones' },
  },
  {
    path: '/numeracion',
    name: 'numeracion',
    component: () => import('@/views/NumeracionView.vue'),
    meta: { title: 'PBX Hosting | Numeración' },
  },
  {
    path: '/recursos',
    name: 'recursos',
    component: () => import('@/views/RecursosView.vue'),
    meta: { title: 'PBX Hosting | Recursos' },
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import('@/views/NosotrosView.vue'),
    meta: { title: 'PBX Hosting | Nosotros' },
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('@/views/ContactoView.vue'),
    meta: { title: 'PBX Hosting | Contacto' },
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
