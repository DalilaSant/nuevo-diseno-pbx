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
    meta: { title: 'PBX Hosting | Soluciones SMS Masivo' },
  },
  {
    path: '/soluciones-whatsapp-masivo',
    name: 'soluciones-whatsapp-masivo',
    component: () => import('@/views/soluciones/WhatsappMasivoView.vue'),
    meta: { title: 'PBX Hosting | Soluciones WhatsApp Masivo' },
  },
  {
    path: '/soluciones-agenteia',
    name: 'soluciones-agenteia',
    component: () => import('@/views/soluciones/AgenteIAView.vue'),
    meta: { title: 'PBX Hosting | Soluciones Agente IA' },
  },
  {
    path: '/infraestructura-web',
    name: 'infraestructura-web',
    component: () => import('@/views/soluciones/InfraestructuraView.vue'),
    meta: { title: 'PBX Hosting | Infraestructura Web' },
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
    meta: { title: 'PBX Hosting | Página no encontrada' },
  },

  //POLITICAS
  {
    path:'/politica-de-privacidad',
    name: 'politica-de-privacidad',
    component: ()=> import('@/views/politicas/PoliticaPrivacidad.vue'),
    meta: { title: 'PBX Hosting | Política de Privacidad'},
  },
  {
    path:'/terminos-y-condiciones-generales',
    name: 'terminos-y-condiciones-generales',
    component: ()=> import('@/views/politicas/CondicionesGenerales.vue'),
    meta: { title: 'PBX Hosting | Términos y Condiciones Generales'},
  },
  {
    path:'/terminos-y-condiciones-dominios',
    name: 'terminos-y-condiciones-dominios',
    component: ()=> import('@/views/politicas/CondicionesDominios.vue'),
    meta: { title: 'PBX Hosting | Términos y Condiciones Dominios'},
  },
  {
    path:'/terminos-y-condiciones-promocion-dominios-mx',
    name: 'terminos-y-condiciones-promocion-dominios-mx',
    component: ()=> import('@/views/politicas/CondicionesMXDominios.vue'),
    meta: { title: 'PBX Hosting | Términos y Condiciones Promoción Dominios .MX'},
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si la ruta destino contiene un hash (#mensajes-rss), nos desplazamos a ese elemento
    if (to.hash) {
      return new Promise((resolve) => {
        //revisamos repetidamente cada 100ms si el elemento ya apareció en el DOM
        const checkExist = setInterval(() => {
          const element = document.querySelector(to.hash)
          if (element) {
            clearInterval(checkExist) //paramos la búsqueda
            resolve({
              el: to.hash,
              top: 80,
              behavior: 'smooth', // Animación de scroll suave
            })
          }
        }, 100)

        //salvaguarda: si tras los 5 segundo no aparece, detenemos el reloj
        setTimeout(() => {
          clearInterval(checkExist)
          resolve(false)
        }, 5000)
      })
    }
    // Si regresamos atrás con las flechas del navegador, recordamos la posición anterior
    if (savedPosition) {
      return savedPosition
    }
    // Por defecto, mandamos la pantalla al inicio de la página
    return { top: 0 }
  },
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
