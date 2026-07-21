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
  ],

  //AGENTE IA BANNER 03
  cardsAgenteIA:[
    {
      title:'Agente IA – Recepción',
      desc: 'Recibe llamadas y dirige a cada cliente al área correspondiente.',
      bgClass: 'img/soluciones/IMAGEN_3_SECCION_5.png',
    },
    {
      title:'Agente IA para campañas',
      desc: 'Realiza llamadas automatizadas para ventas y promociones.',
      bgClass: 'img/soluciones/IMAGEN_4_SECCION_5.png',
    },
    {
      title:'Agente IA – Soporte',
      desc: 'Brinda respuestas inmediatas, y ofrece atención continua.',
      bgClass: 'img/soluciones/IMAGEN_5_SECCION_5.png',
    },
  ],

  //INFRAESTRUCTURA WEB SECTION 02
  preciosHosting: [
    {
      title: 'Hosting',
      titletwo: 'Lite',
      price: '$589 ',
      setup: '',
      features: ['8GB de Almacenamiento', '80GB de Transferencia Mensual', '100 Cuentas de Correo','Certificado SSL','10 Bases de datos MySQL','5 Cuentas FTP','Respaldo JetBackup 5','Instalador de Apps Softaculous','Dominio Gratis primer año*',],
    },
    {
      title: 'Hosting ',
      titletwo: 'Deluxe ',
      price: '$929 ',
      setup: '',
      features: ['20GB de Almacenamiento SSD', '20TB de Transferencia Mensual', 'Cuentas de Correo ilimitadas', 'Certificado SSL','15 Bases de datos MySQL','15 Cuentas FTP','Soporta 5 Dominios Adicionales','Respaldo JetBackup 5', 'Instalador de Apps Softaculous', 'Dominio Gratis primer año*',],
    },
    {
      title: 'Hosting',
      titletwo: 'Enterprise',
      price: '$1,219 ',
      setup: '',
      features: ['35GB de Almacenamiento SSD', 'Transferencia ilimitada', 'Cuentas de Correo ilimitadas', 'Certificado SSL','Bases de datos ilimitadas','Cuentas FTP ilimitadas','Soporta 10 Dominios Adicionales','Respaldo JetBackup 5','Instalador de Apps Softaculous','Dominio Gratis primer año*'],
    },
  ],

  //seccion 06
  preciosServidores: [
    {
      title: '',
      titletwo: 'VPS 01',
      price: '$140 ',
      setup: '',
      features: ['1CPU Core','1GB de RAM','25GB SSD Disco','1TB de Transferencia','40Gbps Network In','1000Mbps Network Out','Soporte Técnico',],
    },
    {
      title: '',
      titletwo: 'VPS 02',
      price: '$260 ',
      setup: '',
      features: ['1CPU Core','2GB de RAM','50GB SSD Disco','2TB de Transferencia','40Gbps Network In','2000Mbps Network Out','Soporte Técnico',],
    },
    {
      title: '',
      titletwo: 'VPS 03',
      price: '$520 ',
      setup: '',
      features: ['2CPU Core','4GB de RAM','80GB SSD Disco','4TB de Transferencia','40Gbps Network In','4000Mbps Network Out','Soporte Técnico',],
    },
    {
      title: '',
      titletwo: 'VPS 04',
      price: '$1,040  ',
      setup: '',
      features: ['4CPU Core','8GB de RAM','160GB SSD Disco','5TB de Transferencia','40Gbps Network In','5000Mbps Network Out','Soporte Técnico',],
    },

  ],

  //seccion 8 

  preciosDedicado: [
    {
      title: 'Dedicado 4GB',
      titletwo: '',
      price: '$780 ',
      setup: '',
      features: ['4GB de Ram','2CPU Core','80GB Almacén SSD','4TB de Transferencia','40Gbps Network In','4000Mbps Network Out',],
    },
    {
      title: 'Dedicado 8GB',
      titletwo: '',
      price: '$1,560',
      setup: '',
      features: ['8GB de Ram','4CPU Core','160GB Almacén SSD','5TB de Transferencia','40Gbps Network In','5000Mbps Network Out',],
    },
    {
      title: 'Dedicado 16GB',
      titletwo: '',
      price: '$3,120',
      setup: '',
      features: ['16GB de Ram','8CPU Core','320GB Almacén SSD','6TB de Transferencia','40Gbps Network In','6000Mbps Network Out',],
    },
    {
      title: 'Dedicado 32GB',
      titletwo: '',
      price: '$6,240',
      setup: '',
      features: ['32GB de Ram','16CPU Core','640GB Almacén SSD','7TB de Transferencia','40Gbps Network In','7000Mbps Network Out',],
    },
    {
      title: 'Dedicado 64GB',
      titletwo: '',
      price: '$12,480',
      setup: '',
      features: ['64GB de Ram','32CPU Core','1280GB Almacén SSD','8TB de Transferencia','40Gbps Network In','8000Mbps Network Out',],
    },
  ]
}
