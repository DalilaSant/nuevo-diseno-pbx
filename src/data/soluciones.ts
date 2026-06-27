import type { SolucionesData, CardsPrecios } from '@/interfaces/Soluciones'

export const solucionesData: SolucionesData = {
  cards: [
    {
      title: 'Conexión estable',
      desc: 'Comunicación clara y sin interrupciones.',
      bgClass: '/img/soluciones/IMAGEN_3_SECCION_1.png',
    },
    {
      title: 'Múltiples líneas',
      desc: 'Excelente gestión de llamadas simultaneas.',
      bgClass: '/img/soluciones/IMAGEN_4_SECCION_1.png',
    },
    {
      title: 'Múltiples funciones',
      desc: 'Mejoran la eficiencia y productividad.',
      bgClass: '/img/soluciones/IMAGEN_5_SECCION_1.png',
    },
    {
      title: 'Escalabilidad',
      desc: 'Adaptable al crecimiento de tu empresa.',
      bgClass: '/img/soluciones/IMAGEN_6_SECCION_1.png',
    },
  ],

  /*CARDS BANNER 5*/
  cardsDos: [
    {
      title: 'Más capacidad',
      desc: 'Atiende múltiples llamadas al mismo tiempo sin saturar tu operación.',
      bgClass: '/img/soluciones/IMAGEN_7_SECCION_1.png',
    },
    {
      title: 'Crecimiento',
      desc: 'Aumenta o disminuye canales según tus necesidades.',
      bgClass: '/img/soluciones/IMAGEN_8_SECCION_1.png',
    },
    {
      title: 'Alta disponibilidad',
      desc: 'Infraestructura robusta diseñada para mantener tu operación.',
      bgClass: '/img/soluciones/IMAGEN_9_SECCION_1.png',
    },
  ],

  preciosConmutador: [
    {
      title: 'IPPBX',
      titletwo: 'CLOUD 30',
      price: '$660',
      setup: 'SetUp $660+IVA',
      features: ['30 Llamadas Recurrentes', '4GB de Ram', '80GB SSD', '4TB Transferencia'],
    },
    {
      title: 'IPPBX',
      titletwo: 'CLOUD 60',
      price: '$1,320',
      setup: 'SetUp $1,320+IVA',
      features: ['60 Llamadas Recurrentes', '8GB de Ram', '160GB SSD', '5TB Transferencia'],
    },
    {
      title: 'IPPBX',
      titletwo: 'CLOUD 150',
      price: '$3,300',
      setup: 'SetUp $3,330+IVA',
      features: ['150 Llamadas Recurrentes', '16-32GB de Ram', '192GB SSD', '8TB Transferencia'],
    },
  ],
}
