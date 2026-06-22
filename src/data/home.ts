import type { HomeData } from '@/interfaces/Home'

export const homeData: HomeData = {
  recuadro: [
    {
      text: ' Solución de Comunicación con una <span class="text-pbx-primary">Línea Sip</span>',
      url: '/linea-sip',
    },
    {
      text: 'Conmutador en la nube con más de <span class="text-pbx-primary"> 40</span> funciones',
      url: '/conmutador-en-la-nube',
    },
    {
      text: 'Líneas Telefónicas Virtuales Empresariales y Líneas <span class="text-pbx-primary">800</span>',
      url: '/linea-telefonica',
    },
    {
      text: 'Marcado predictivo, blasters y más para <span class="text-pbx-primary">CallCenters</span>',
      url: '/vicidial',
    },
  ],

  servicio:[
    {
      title: 'Linea SIP',
      desc: 'Con esta tecnología, puedes realizar y recibir llamadas de manera eficiente a través de internet, brindando una comunicación avanzada y flexible.',
      img: '/img/Home/linea-sip.jpg',
      icon: '/img/Home/sip-icono.png',
      url: '/linea-sip',
    },
    {
    title: 'Líneas Telefónicas',
    desc: 'Es un identificador como un número pero que no necesita de una tarjeta SIM para hacer o recibir llamadas. Son habituales en el mundo empresarial.',
    img: '/img/Home/lineas-telefonicas-numeros-virtuales-lineas-virtuales.jpg',
    icon: '/img/Home/linea-icono.png',
    url: '/linea-telefonica',
    },
    {
      title: 'Conmutador en la Nube',
      desc: 'Brindan los servicios de voz y comunicaciones unificadas básicas para profesionalizar el negocio y hacerlo más productivo.',
      img: '/img/Home/conmutador-en-la-nube.jpg',
      icon: '/img/Home/conmutador-icono.png',
      url: '/conmutador-en-la-nube',
    },
    {
      title: 'SMS Marketing',
      desc: 'Es la solución para envío de altos volúmenes de mensajes de texto, envía enlaces, SMS flash y más, con alta eficiencia de entrega y éxito de apertura.',
      img: '/img/Home/sms-portada.jpg',
      icon: '/img/Home/sms-icono.png',
      url: '/sms',
    },
    {
      title: 'Software Callcenter',
      desc: 'Brinda características y funcionalidades completas y robustas de call center. Marcador predictivo, mensajes blaster y una interfaz amigable.',
      img: '/img/Home/software-portada.jpg',
      icon: '/img/Home/software-icono.png',
      url: '/pbxdialer',
    },
    {
      title: 'Hosting Web',
      desc: 'Aloja tu página web con nuestros planes de hosting con correos ilimitados* y certificado SSL gratis desde $369MXN+IVA con soporte técnico incluido.',
      img: '/img/Home/hosting-portada.jpg',
      icon: '/img/Home/hosting-icono.png',
      url: '/hosting',
    },
  ]
}
