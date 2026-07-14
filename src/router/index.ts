import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import NotFoundView from '@/views/NotFoundView.vue'


export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'PBX Hosting | Inicio' },
  },
  {
    path: '/soluciones-telefonia-ip',
    name: 'soluciones-telefonia-ip',
    component: () => import('@/views/soluciones/TelefoniaIPView.vue'),
    meta: { title: 'PBX Hosting | Soluciones Telefonía IP' },
  },
  {
    path: '/soluciones-sms-masivo',
    name: 'soluciones-sms-masivo',
    component: () => import('@/views/soluciones/SmsMasivoView.vue'),
    meta: { title: 'PBX Hosting | Soluciones SMS Masivo'}

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
    //ERROR 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: { title: 'PBX Hosting | Página no encontrada' }
  }


]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Guardia global para actualizar dinámicamente el título de la pestaña del navegador
router.beforeEach((to, from, next) => {
  const routeTitle = to.meta.title as string | undefined
  if (routeTitle) {
    document.title = routeTitle
  } else {
    document.title = 'PBX Hosting | Proveedores de Telefonía IP'
  }
  next()
})

export default router
