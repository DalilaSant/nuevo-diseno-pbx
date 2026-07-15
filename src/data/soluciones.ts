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

  //Banner09
  preciosCobranza: [
    {
      title: 'Paquete',
      titletwo: 'Cobranza',
      price: '$3,500',
    },
  ],

  //Banner12
  preciosDialler: [
    {
      title: 'PBX',
      tittletwo: 'Dialer 30',
      price: '$1,320',
      description: 'Costo de instalación ',
      textred: '$660 MXN + IVA',
      features: [
        'Sistema dialer avanzado',
        '30 llamadas en simultáneo',
        'Soporta hasta 30 agentes',
        'Hasta 80 blaster por minuto',
        'Grabación de llamadas',
      ],
    },
    {
      title: 'PBX',
      tittletwo: 'DIALER 60',
      price: '$2,640 ',
      description: 'Costo de instalación ',
      textred: '$1,320 MXN + IVA',
      features: [
        'Sistema dialer avanzado',
        '60 llamadas en simultáneo',
        'Soporta hasta 60 agentes',
        'Hasta 150 blaster por minuto',
        'Grabación de llamadas',
      ],
    },
    {
      title: 'PBX',
      tittletwo: 'DIALER 150',
      price: '$6,660',
      description: 'Costo de instalación',
      textred: '$3,330 MXN + IVA',
      features: [
        'Sistema dialer avanzado',
        '150 llamadas en simultáneo',
        'Soporta hasta 150 agentes',
        'Hasta 300 blaster por minuto',
        'Grabación de llamadas',
      ],
    },
  ],

  //Banner 14
  preciosCallcenter: [
    {
      title: 'BRONZE',
      price: '$4,299',
      features: [
        '2 Líneas Telefónicas México',
        '15 canales de entrada por línea',
        'Bolsa de minutos:',
      ],
      featuredesc: ['10,000Min a Fijos', '25,000Min a Telcel', '15,000Min a Otros'],
    },
    {
      title: 'SILVER',
      price: '$6,499 ',
      features: [
        '5 Líneas Telefónicas México',
        '5 canales de entrada por línea',
        'Bolsa de minutos:',
      ],
      featuredesc: ['15,000Min a Fijos', '40,000Min a Telcel', '25,000Min a Otros'],
    },
    {
      title: 'GOLD',
      price: '$9,499 ',
      features: [
        '10 Líneas Telefónicas México',
        '5 canales de entrada por línea',
        'Bolsa de minutos:',
      ],
      featuredesc: ['20,000Min a Fijos', '55,000Min a Telcel', '30,000Min a Otros'],
    },
  ],

  //SOLUCION WHATSAPP MASIVO BANNER 03
  cardsWhatsapp:[
    {
      title:'WhatsApp Autenticación',
      desc: 'Refuerza la seguridad mediante una autenticación confiable.',
      bgClass:'/img/soluciones/IMAGEN_5_SECCION_4.png',
    },
    {
      title:'WhatsApp Utilidad',
      desc: 'Automatiza notificaciones para mantener informados a tus usuarios.',
      bgClass:'/img/soluciones/IMAGEN_6_SECCION_44.png',
    },
    {
      title:'WhatsApp API',
      desc: 'Gestiona conversaciones desde una sola plataforma.',
      bgClass:'/img/soluciones/IMAGEN_7_SECCION_4.png',
    },
  ]
}
