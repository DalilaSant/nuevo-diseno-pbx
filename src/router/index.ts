import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'PBX Hosting | Inicio' },
  },
  {
    path: '/telefoniaip',
    name: 'telefoniaip',
    component: () => import('@/views/TelefoniaIPView.vue'),
    meta: { title: 'PBX Hosting | Telefonía IP' },
  },
  {
    path: '/linea-sip',
    name: 'linea-sip',
    component: () => import('@/views/telefonia-ip/LineaSipView.vue'),
    meta: { title: 'PBX Hosting | Línea SIP' },
  },
  {
    path: '/lineas-telefonicas',
    name: 'lineas-telefonicas',
    component: () => import('@/views/telefonia-ip/LineasTelefonicasView.vue'),
    meta: { title: 'PBX Hosting | Líneas Telefónicas' },
  },
  {
    path: '/paquetes-voip',
    name: 'paquetes-voip',
    component: () => import('@/views/telefonia-ip/PaquetesVoipView.vue'),
    meta: { title: 'PBX Hosting | Paquetes VoIP' },
  },
  {
    path: '/conmutador',
    name: 'conmutador',
    component: () => import('@/views/ConmutadorView.vue'),
    meta: { title: 'PBX Hosting | Conmutador en la nube' },
  },
  {
    path: '/hosting',
    name: 'hosting',
    component: () => import('@/views/HostingView.vue'),
    meta: { title: 'PBX Hosting | Hosting' },
  },
  {
    path: '/dominio',
    name: 'dominio',
    component: () => import('@/views/DominioView.vue'),
    meta: { title: 'PBX Hosting | Dominio' },
  },
  {
    path: '/servidores',
    name: 'servidores',
    component: () => import('@/views/ServidoresView.vue'),
    meta: { title: 'PBX Hosting | Servidores' },
  },
  {
    path: '/smsmarketing',
    name: 'smsmarketing',
    component: () => import('@/views/SmsMarketingView.vue'),
    meta: { title: 'PBX Hosting | SMS Marketing' },
  },
  {
    path: '/callcenter',
    name: 'callcenter',
    component: () => import('@/views/CallcenterView.vue'),
    meta: { title: 'PBX Hosting | Callcenter' },
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('@/views/ContactoView.vue'),
    meta: { title: 'PBX Hosting | Contacto' },
  },
  {
    path: '/whatsappmasivo',
    name: 'whatsappmasivo',
    component: () => import('@/views/WhatsappMasivoView.vue'),
    meta: { title: 'PBX Hosting | Whatsapp Masivo' },
  },
  {
    path: '/agente-ia',
    name: 'agente-ia',
    component: () => import('@/views/AgenteIAView.vue'),
    meta: { title: 'PBX Hosting | Agente IA' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
