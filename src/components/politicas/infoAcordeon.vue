<template>
  <section class="accordeon" id="pbxAccordion">
    <div class="accordion-item border-0 border-bottom" v-for="(section, index) in sections" :key="index">
      <h3 class="accordion-header py-4 ps-3" :id="'heading' + index">
        <button class="accordion-button fs-3 text-pbx p-1" type="button" :class="{ collapsed: index !== 0 }"
          data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0"
          :aria-controls="'collapse' + index">
          {{ section.title }}

        </button>
      </h3>
      <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ show: index === 0 }"
        :aria-labelledby="'heading' + index" data-bs-parent="pbxAccordion">
        <div class="accordion-body " v-html="section.content">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const sections = ref([
  //Formulario y Contratos 
  {
    title: 'Formulario y Contratos',
    content: `
      <p class=" text-politica mb-3">
        El cliente que use los servicios de PBX Hosting está sujeto a ser mayor de edad (18 años) o que un adulto (padre o tutor) actúen como el cliente para términos de este contrato
      </p>

      <p class=" text-politica mb-3">
      El cliente declara que toda la información que se provee en el formulario de contacto y contratos es verdadera, tales como nombre, dirección, teléfono, datos fiscales, etc. Si PBX Hosting identifica que dicha información es falsa, nos reservamos el derecho de suspender la cuenta del cliente, así como sus servicios temporal o definitivamente hasta que se resuelva la identificación del cliente.
      </p>

      <p class=" text-politica mb-3">
      Todo cliente de PBX Hosting se compromete a enviar completamente lleno el formulario de registro enviado por el departamento de administrativo, después del pago de la orden de compra, además de las copias de los documentos que ahí se solicitan, tales como la identificación oficial, comprobante de domicilio y RFC, en caso de no cumplir con esta cláusula, el servicio ya no podrá ser renovado por el cliente, dando por terminada dicha relación entre cliente y PBX Hosting.
      </p>

      <p class=" text-politica mb-3">
      El cliente se compromete a enviar el contrato correspondiente del servicio adquirido, correctamente llenado y firmado para su expediente como cliente de PBX Hosting dentro de los primeros 30 días de su contratación. La firma de estos contratos no obliga al cliente a tener un plazo forzoso de contratación por algún tiempo determinado, pero en caso de incumplimiento los servicios serán suspendidos.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se reserva el derecho de suspender una cuenta en caso de no cumplir con el requisito de enviar el formulario y contratos firmados, así como la documentación previamente solicitada, en caso de recibir información falsificada que no sea aprobada por nuestro departamento legal, la cuenta del cliente será cerrada.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se compromete a proteger y/o resguardar la información personal de sus clientes ya que solo es para control interno y administrativo mientras el cliente tenga contratado un servicio con la empresa, sin embargo, se reserva el derecho de entregar información a las autoridades competentes en caso de recibir alguna denuncia o reporte por mal uso del servicio o actividades fraudulentas.
      </p>
    `
  },

  //Uso del servicio
  {
    title: 'Uso del Servicio',
    content: `
      <p class=" text-politica mb-3">
      Al proporcionar servicio de hospedaje Web y/o Telefonía VoIP a nuestros clientes es nuestra responsabilidad proteger a cada uno de ellos y ofrecerles el mejor servicio disponible.
      </p>

      <p class=" text-politica mb-3">
      Los Servicios proporcionados podrán ser utilizados solamente para fines lícitos. Se prohíbe cualquier transmisión, almacenamiento, o presentación de información, datos o material que viole las leyes federales, estatales o regionales de la ciudad o país donde sea prestado el servicio.
      </p>

      <p class=" text-politica mb-3">
      Esto incluye, pero no se limita a: materiales con derecho de autor, material que consideremos peligroso u obsceno, o material protegido por secreto comercial u otro estatuto. El suscriptor acuerda indemnizar y salvaguardar a PBX Hosting de cualquier demanda a consecuencia del uso indebido del servicio y de los daños ocasionados a raíz de esto, tanto al suscriptor en cuestión, así como a cualquier otra persona o grupo.
      </p>

      <p class=" text-politica mb-3">
      Queda prohibida la pornografía infantil o cualquier delito de tipo sexual que viole los derechos humanos en nuestros servidores.
      </p>

      <p class=" text-politica mb-3">
      Los números virtuales o líneas virtuales proporcionados son estrictamente para uso de llamada entrante y/o identificadores, no deben ser configurados o utilizados en aplicaciones de mensajería como Telegram o WhatsApp.
      </p>

      <p class=" text-politica mb-3">
      Esto incluye a sitios que puedan inferir contenido sexual, o enlaces a otros sitios con contenido sólo para adultos. PBX Hosting determinará si el sitio cuenta con el aviso de advertencia “Solo para mayores de 18 años” “Contenido solo para adultos”. No se aceptan los sitios web que promuevan cualquier actividad ilegal o que contengan información que pueda dañar a nuestros servidores o a cualquier otro servidor en Internet.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se reserva el derecho de suspender definitivamente sin derecho a garantía de devolución, al usuario que pueda estar cometiendo una violación de la siguiente índole:
      </p>

      <ul class="p-0 text-politica">
        <li class="mb-2">- Hackers</li>
        <li class="mb-2">- Phishing</li>
        <li class="mb-2">- Software Pirata</li>
      </ul>

      <p class=" text-politica mb-3">
      Abuso de recursos en el Servidor, queda prohibido todo intento de sabotaje, infiltración o daño a los servidores de PBX Hosting, que alteren la estabilidad de los servidores compartidos.
      </p>
      
      <p class=" text-politica mb-3">
      No está permitido el Spam, Spamming o cualquier otra actividad que involucre el envío masivo de correo electrónico no solicitado, esta actividad está estrictamente prohibida, utilizando la infraestructura de PBX Hosting, así como de una dirección de correo o dominio alojado en nuestros servidores.
      </p>
      
      <p class=" text-politica mb-3">
      En la Telefonía IP, como en cualquier otro servicio dentro de nuestra infraestructura, quedan prohibidas las actividades de Fraude o cualquier actividad que pueda ser utilizada para delitos como robo de información personal o robo de identidad. No está permitida la modificación o manipulación del Caller ID. Todo servicio de Troncal SIP en PBX Hosting, debe contar con un número identificador para su salida de llamadas, ese número deberá ser adquirido dentro de la infraestructura de PBX Hosting. Para llamadas a USA es de carácter obligatorio que la Troncal SIP cuente con un CID asignado, en este caso contratado dentro de la infraestructura de PBX Hosting, si esta cláusula no se cumple el servicio de llamadas puede llegar a ser suspendido sin previo aviso.
      </p>
      
      <p class=" text-politica mb-3">
      PBX Hosting ofrece las herramientas para que el cliente realice respaldos de su página web, así como todo el contenido del hosting, sin embargo, es responsabilidad del cliente programar respaldos periódicos. PBX Hosting no se hace responsable por perdida de información, es por eso muy importante que atienda la recomendación de los respaldos periódicos de su hosting, bases de datos y correos electrónicos.
      </p>
      
      <p class=" text-politica mb-3">
      PBX Hosting no se hace responsable de la pérdida accidental de información.
      </p>
      
      <p class=" text-politica mb-3">
      En los cambios de planes, PBX Hosting, trabaja de la siguiente forma:
      </p>
      
      <p class=" text-politica mb-3">
      En servicio de alojamiento, si desea actualizar a un VPS, plan de Hosting mayor al actual o Servidor Dedicado, deberá pagar la diferencia para poder cambiar a ese plan, si implica cambio de servidor, este deberá programarse con el departamento de soporte técnico para que se le haga la mudanza de la información. Por su primer servicio contratado.
      </p>
      
      <p class=" text-politica mb-3">
      Si desea disminuir de plan de un Reseller Anual o un VPS a un Hosting ilimitado, no hay reembolso de la cantidad ya abonada.
      </p>
      
      <p class=" text-politica mb-3">
      En la Telefonía, si desea ampliar un servicio, deberá pagar la cantidad del nuevo servicio y si desea disminuir, no hay reembolso por la cantidad ya pagada en el primer servicio.
      </p>
      
      <p class=" text-politica mb-3">
      La transferencia de datos y el almacenamiento son ilimitados, siempre y cuando no ponga en riesgo la estabilidad del servidor compartido donde se alojan y el cliente se compromete a no violar las Políticas de Uso Justo publicadas también en esta sección.
      </p>
      
      <p class=" text-politica mb-3">
      Queda estrictamente prohibido para el usuario, la instalación de sistemas, aplicaciones y/o programas que no cuenten con la licencia de uso y que no estén relacionadas directamente con la operación del conmutador/vicidial para el servicio de telefonía que fue contratado.
      </p>
      
      <p class=" text-politica mb-3">
      El soporte técnico de PBX Hosting no se da sobre aplicaciones o programas instalados por los clientes sobre el servicio de web hosting, este solo es sobre el funcionamiento del servidor.
      </p>
      
      <p class=" text-politica mb-3">
      PBX Hosting se deslinda de cualquier reclamación si el Saldo VoIP llegara a ser congelado, retenido o retirado de su Troncal SIP, lo anterior, en caso de que el cliente cuente con una inactividad mayor a los 12 meses, sin usar la troncal y consumo del saldo contratado, por ello es recomendable consumir el saldo contratado hasta agotarse.
      </p>

    `
  },

  //Derecho de Admisión y Terminación de Servicios
  {
    title: 'Derecho de Admisión y Terminación de Servicios',
    content: `
      <p class=" text-politica mb-3">
      PBX Hosting se reserva el derecho de admisión, así como la facultad discrecional de aceptar o rechazar solicitudes de contratación de sus servicios, sin necesidad de expresar causa alguna.
      </p>

      <p class=" text-politica mb-3">
      Asimismo, PBX Hosting se reserva el derecho de suspender temporalmente y/o cancelar de manera definitiva cualquier servicio contratado, en cualquier momento, cuando a su juicio se detecte incumplimiento a los presentes Términos y Condiciones, uso indebido de los servicios, actividades que puedan afectar la operación, seguridad o reputación de la empresa, o cuando el cliente cuente con antecedentes o indicios de mala reputación comercial, legal o en el sector, o cualquier otra conducta que contravenga la legislación aplicable o las buenas prácticas del sector.
      </p>

      <p class=" text-politica mb-3">
      La suspensión o cancelación podrá realizarse sin responsabilidad para PBX Hosting y, en su caso, sin previo aviso cuando la gravedad de la situación lo amerite
      </p>
    `
  },

  //SITIOS RESOLVIENDO CON DNS DE PBX HOSTING
  {
    title: 'SITIOS RESOLVIENDO CON DNS DE PBX HOSTING',
    content: `
      <p class=" text-politica mb-3">
      Todo aquel dominio vencido (libre) o dominio que deje de resolver hacia los DNS de PBX Hosting, para resolver con otro proveedor de web hosting, será dado de baja con previo aviso, debido a que los servicios de Web Hosting deben de estar Activos y resolviendo con nuestros DNS para poder seguir alojados dentro de nuestra infraestructura. Lo anterior sin ninguna obligación por parte de PBX Hosting de conservar o extraer algún respaldo de información.
      </p>
    `
  },

  //DISPONIBILIDAD DEL 99.9%
  {
    title: 'DISPONIBILIDAD DEL 99.9%',
    content: `
      <p class=" text-politica mb-3">
      PBX Hosting cuenta con una disponibilidad del 99.9%, todo servicio web puede presentar eventos que puedan interrumpir la funcionalidad, desde mantenimientos programados o no programados, sin embargo, contamos con ingenieros altamente capacitados para este tipo de situaciones.
      </p>
    `
  },

  //TERMINOS DE PLANES DE TELEFONIA
  {
    title: 'TERMINOS DE PLANES DE TELEFONIA',
    content: `
      <ol class="text-politica">
        <li class="mb-1">Estos planes manejan una <span class="fw-semibold">facturación</span> del día TÉRMINOS DE PLANES DE TELEFONÍA</li>

        <li class="mb-1">Si llegara a contratar a principios, mediados o antes del fin de mes, tendría que pagar la <span class="fw-semibold">prorrata del mes en curso</span>  y el día último del mes estar pagando su mensualidad completa del siguiente mes.</li>

        <li class="mb-1">Estos planes se deben de <span class="fw-semibold">renovar anticipadamente o de forma puntual los días últimos del mes.</span></li>

        <li class="mb-1">En caso de renovar después del día 30 de cada mes el sistema le hará un <span class="fw-semibold">cargo por demora</span>, el cual debe pagar el cliente.</li>

        <li class="mb-1">Los comprobantes se envían a <a href="mailto:administrativo@pbxhosting.com.mx" style="color: #004182;"</a>administrativo@pbxhosting.com.mx</a></li>

        <li class="mb-1" >El Área administrativa le estará haciendo llegar <span class="fw-semibold">un contrato entre PBX Hosting y el Cliente</span> (o sea usted) el cual debe ser correctamente completado y firmado por el representante legal de su empresa, además de alguna otra documentación. Esto como medida de control interna y requisito nuestro como concesionario ante la IFT.</li>

        <li class="mb-1">En caso de que el cliente se niegue a enviar dicho contrato correctamente completo, firmado y documentación que se le pedirá, PBX Hosting se reserva a suspender temporal o definitiva el plan de telefonía.</li>

        <li class="mb-1">Actualizaciones en planes y/o paquetes (upgrade y downgrade), deben ser solicitados con 15 días de anticipación al correo <a href="mailto:ventas@pbxhosting.com.mx." style="color: #004182;"</a>ventas@pbxhosting.com.mx.</a></li>
      </ol>
      <div class="text-politica ps-3 mb-3 fw-semibold">DESCARGA LA
        <a href="/excel/destinos.xlsx" download="Tabla_Destinos_Permitidos.xlsx" class="fw-semibold text-decoration-none d-inline-flex align-items-center gap-2" style="color: #004182;">
            TABLA DE DESTINOS 
        </a> PERMITIDOS EN LA TELEFONIA IP
      </div>
    `
  },

  //Pagos del servicio
  {
    title: 'Pagos del servicio',
    content: `
      <p class=" text-politica mb-3">
      Todos los precios de los productos de PBX Hosting así como Tarifas, están sujetos a cambios sin previo aviso.
      </p>

      <p class=" text-politica mb-3">
      Todos los precios de los productos de PBX Hosting son + IVA y si el cliente requiere factura deberá enviar junto con su comprobante los datos fiscales para la expedición y envío de su factura electrónica vía correo electrónico en formato PDF y XML al correo electrónico de contacto.
      </p>

      <p class=" text-politica mb-3">
      Para solicitar la emisión de una factura fiscal, el cliente deberá enviar un ticket al correo <span class="fw-semibold">facturacion@pbxhosting.com.mx</span> dentro del mismo mes en que se haya realizado el pago correspondiente.
      </p>

      <p class=" text-politica mb-3">
      La solicitud deberá incluir la siguiente información y documentación:
      </p>

      <ul class="p-0 text-politica">
        <li class="mb-1">- RFC.</li>
        <li class="mb-1">- Nombre o Razón Social.</li>
        <li class="mb-1">- Código Postal del domicilio fiscal.</li>
        <li class="mb-1">- Régimen Fiscal.</li>
        <li class="mb-1">- Uso del CFDI.</li>
        <li class="mb-1">- Correo electrónico.</li>
        <li class="mb-1">- Constancia de Situación Fiscal (CSF) vigente.</li>
        <li class="mb-1">- Comprobante de pago correspondiente.</li>
      </ul>

      <p class="text-politica mb-3 fw-semibold">
      Consideraciones importantes:
      </p>

      <p class=" text-politica mb-3">
      La factura fiscal únicamente podrá emitirse cuando el pago haya sido plenamente identificado en nuestros sistemas.
      </p>

      <p class=" text-politica mb-3">
      Si la información y documentación requerida no es enviada a través de los medios oficiales de comunicación y al departamento de Facturación dentro del plazo establecido, no será posible registrar los datos fiscales en nuestro sistema ni emitir la factura correspondiente.
      </p>

      <p class=" text-politica mb-3">
      Todas las facturas emitidas para los servicios contratados dentro de una misma cuenta de cliente/usuario se expedirán a una única Razón Social. En caso de requerir que distintos servicios sean facturados a diferentes razones sociales, esta solicitud deberá realizarse antes de la emisión de la factura y ser notificada al área de Facturación o Administrativa.
      </p>

      <p class=" text-politica mb-3">
      Una vez emitida la factura fiscal, no será posible realizar cambios o correcciones en los datos fiscales ni en la Razón Social.
      </p>

      <p class=" text-politica mb-3">
      Para clientes de nuevo ingreso, las facturas fiscales serán emitidas únicamente dentro del mismo mes en que se reciba el pago, siempre que la solicitud de facturación, los datos fiscales completos y el comprobante de pago hayan sido enviados oportunamente.
      </p>

      <p class=" text-politica mb-3">
      No se emitirán facturas fiscales correspondientes a pagos de meses anteriores ni solicitudes presentadas fuera del mes en que se efectuó el pago.
      </p>

      <p class=" text-politica mb-3">
      El cumplimiento de estos requisitos y plazos es indispensable para la emisión de la factura fiscal, de conformidad con nuestras políticas administrativas y las disposiciones fiscales aplicables.
      </p>

      <p class=" text-politica mb-3">
      Si no llegara a enviar sus datos fiscales al cambio de mes, su factura fiscal ya no podrá ser generada.
      </p>

      <p class=" text-politica mb-3">
      Los pagos realizados a través de PayPal son facturables. Sin embargo, el cliente deberá cubrir una comisión equivalente al 6% del importe total indicado en el invoice emitido por PBX Hosting.
      </p>

      <p class=" text-politica mb-3">
      Esta comisión corresponde al cargo aplicado por la plataforma de PayPal y debe ser liquidada en su totalidad. En caso de no cubrirse, el cliente mantendrá un saldo pendiente con PBX Hosting, ya que dicho importe es retenido por PayPal. Además, la falta de pago de esta comisión puede ocasionar retrasos o impedir el aprovisionamiento del servicio hasta que el adeudo sea liquidado.
      </p>

      <p class=" text-politica mb-3">
      Los pagos de PayPal si pueden hacerse en dólares y pesos.
      </p>

      <p class=" text-politica mb-3">
      Una vez pagado el invoice de su orden de compra, es necesario que envíe su comprobante de pago al correo <a class="text-decoration-none" href="mailto:administrativo@pbxhosting.com.mx" style="color: #1668af;"</a>administrativo@pbxhosting.com.mx</a>  para cualquier servicio o <a class="text-decoration-none" href="mailto:saldo@pbxhosting.com.mx" style="color: #1668af;"</a>saldo@pbxhosting.com.mx</a>  para el abono de saldo a su Troncal SIP, así mismo deberá esperar el tiempo de activación con cada uno de los servicios.
      </p>

      <p class=" text-politica mb-3">
      Las órdenes de compra que se generen en moneda USD tendrán un tipo de cambio protegido de $20MXN o bien el que estipule PBX Hosting.
      </p>

      <p class=" text-politica mb-3">
      Los clientes que efectúen sus pagos en pesos mexicanos deberán tener su perfil de cliente con la moneda MXN. Únicamente clientes extranjeros o que paguen en dólar (USD) podrán tener su perfil de cliente con la moneda USD.
      </p>

      <p class=" text-politica mb-3 fw-bold">
      COSTO POR RECUPERACIÓN DE NÚMERO VIRTUAL
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se reserva el derecho de cobrar un Costo por Recuperación de Número Virtual, que el cliente en su momento no haya renovado puntualmente y envíe su solicitud para volver a adquirirlo. El precio de éste Costo por Recuperación será enviado por su Ejecutivo de Venta
      </p>

      <p class=" text-politica mb-3 fw-bold">
      NÚMEROS VIRTUALES CON DESTINOS INTERNACIONALES
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting cuenta con una variedad de códigos de área en sus números virtuales para la recepción de llamadas en la telefonía IP, sin embargo, dentro del volumen más solicitado son los números virtuales en México, USA y Canadá.
      </p>

      <p class=" text-politica mb-3">
      Códigos de área Internacional fuera de estos tres países, el cliente está sujeto a verificar en su cotización y/o agente de ventas una probable:
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">Verificación de requisitos:</span> Algunos países piden cierta documentación para poder habilitar un número IP de su país, si este requerimiento no se cumple, no se puede aprovisionar el Did.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">Límite en el número de canales a utilizar:</span> Los canales pueden variar de acuerdo al país, hay países que no dejan trabajar con más de 3 canales y el costo por canal también varía de acuerdo al país, así como cargos de SETUP.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">Cobro con Costo Compartido:</span> Existen países que hacen un cobro compartido con las compañías telefónicas de cada país al recibir una llamada de determinados Did´s, el cual le generaría un cobro por minuto en llamada entrante al cliente, pero al mismo tiempo a la compañía de telefonía de donde se saca la llamada hacia el did. PBX Hosting no se hace responsable si el operador NO desea cubrir el pago y rechace la llamada, ya que es una situación en la cual no tenemos control y no podemos obligar a ningún operador para que efectúe el pago compartido. Sin embargo, sí podemos notificar al cliente para que esté consciente de estas eventualidades, en caso de querer contratar estos Did´s.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">Costos de minuto por llamada entrante:</span> Existen algunos números virtuales de algunos países, los cuales generan un cobro mensual en su renta mas un cobro por minuto entrante en las llamadas telefónicas, independiente de los números Virtuales Toll Free que trabajan con esta modalidad. Si el cliente no cuenta con saldo en su troncal sip, la llamada no podría entrar al número virtual. La tarifa del minuto entrante depende del país que la asigne y es proporcionada por el área de ventas antes de la contratación.
      </p>

      <p class=" text-politica mb-3">
      En PBX Hosting nuestro mayor interés es que pueda utilizar sus números virtuales sin ningún inconveniente, pero existen reglas que rigen a cada país a las cuales todo proveedor de servicios debe apegarse y es nuestra responsabilidad informarle.
      </p>
    `
  },

  //TIEMPOS DE APROVISIONAMIENTO
  {
    title: 'TIEMPOS DE APROVISIONAMIENTO',
    content: `
      <p class=" text-politica mb-3">
      El tiempo de aprovisionamiento es el tiempo que toma para la activación/entrega del servicio contratado y éste empieza a contar después de la entrega del FORMULARIO DE CONTACTO que el departamento administrativo le solicita después de identificar su pago.
      </p>

      <ul class="p-0 text-politica">
        <li class="mb-1">- Web Hosting – Activación casi inmediata (horas hábiles)</li>
        <li class="mb-1">- Registro de Dominio – Activación casi inmediata (horas hábiles)</li>
        <li class="mb-1">- Saldo – Activación casi inmediata (horas hábiles)</li>
        <li class="mb-1">- Servicio de SMS´s – Activación casi inmediata (horas hábiles)</li>
        <li class="mb-1">- Números Virtuales – De 6 a 12 horas hábiles</li>
        <li class="mb-1">- Conmutadores PBX - De 12 a 24 horas hábiles</li>
        <li class="mb-1">- IVR's (Menú de Bienvenida) - De 6 a 12 horas hábiles</li>
        <li class="mb-1">- Servidores Dedicados - De 24 a 72 horas hábiles</li>
        <li class="mb-1">- VPN - De 24 a 72 horas hábiles</li>
      </ul>

      <p class=" text-politica mb-3">
      Todos los comprobantes de pago deben enviarse al correo <a class="text-decoration-none" href="mailto:administrativo@pbxhosting.com.mx" style="color: #1668af;"</a>administrativo@pbxhosting.com.mx</a> antes de las 5:00pm, de lo contrario no nos hacemos responsables para el aprovisionamiento oportuno.
      </p>

      <p class=" text-politica mb-3">
      Si es recarga de saldo debe enviar su comprobante a <a class="text-decoration-none" href="mailto:saldo@pbxhosting.com.mx" style="color: #1668af;"</a>saldo@pbxhosting.com.mx</a>
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting hace un cargo por demora en pagos atrasado, 5 días después del vencimiento de un servicio, el cual debe ser pagado por el cliente. Se le recomienda estar al pendiente de los recordatorios de pago que envía el sistema para efectuar el pago oportuno de sus servicios ya que si este cargo no se cubre en su totalidad el servicio no podrá ser renovado.
      </p>
    `
  },

  //Cancelaciones
  {
    title: 'Cancelaciones',
    content: `
      <p class=" text-politica mb-3">
      Todas las cancelaciones de los servicios contratados en PBX Hosting deben de solicitarse por el cliente titular del servicio por escrito mediante un ticket a <a class="text-decoration-none" href="mailto:cancelacion@pbxhosting.com.mx" style="color: #1668af;"</a>cancelacion@pbxhosting.com.mx</a> de la cuenta de correo de contacto con la cual fue contratado dicho servicio.
      </p>

      <p class=" text-politica mb-3">
      Para Cancelaciones Anticipadas, el cliente esta obligado a especificar si desea mantener activos sus servicios hasta la fecha de vencimiento, de lo contrario, en cuanto se reciba la solicitud de cancelación, se ejecutará la eliminación administrativa y física de los servicios.
      </p>

      <p class=" text-politica mb-3">
      La cancelación de un servicio debe de solicitarse con un mínimo de <span class="fw-semibold">5 días antes</span>  del vencimiento, después de una solicitud de cancelación, la baja y/o eliminación física del servicio se realiza con un mínimo de <span class="fw-semibold">5 días antes</span> del vencimiento del servicio, de lo contrario, el cliente está obligado a efectuar el pago de la renovación de ese servicio.
      </p>
      
    `
  },

  //Cancelaciones de Licencias CW Kolob
  {
    title: 'Cancelaciones de Licencias CW Kolob',
    content: `
      <p class=" text-politica mb-3">
      Para este servicio, el Cliente está comprometido a solicitar su cancelación con una anticipación de <span class="fw-semibold">30 días antes</span> del vencimiento de su servicio, de lo contrario esta obligado a pagar la renovación del siguiente mes.
      </p>
    `
  },

  //Upgrades/Downgrades
  {
    title: 'Upgrades/Downgrades',
    content: `
      <p class=" text-politica mb-3">
      Si el upgrade/downgrade es solicitado <span class="fw-semibold">7 días antes</span> de vencer su factura o menos, se deberá cubrir el prorrateo y el pago del siguiente mes.
      </p>
    `
  },

  //Garantía de devolución
  {
    title: 'Garantía de devolución',
    content: `
      <p class=" text-politica mb-3">
      Garantía de Devolución, entra en vigor a menos de que el cliente no haya recibido el servicio dentro de nuestros términos y condiciones y aplica únicamente en nuevas contrataciones dentro de los primeros 30 días para servicios de Hosting.
      </p>

      <p class=" text-politica mb-3">
      La Garantía de Devolución en la Telefonía IP, aplica siempre y cuando el servicio no se haya entregado de acuerdo a las horas de aprovisionamiento estipuladas en estos términos y condiciones.
      </p>

      <p class=" text-politica mb-3">
      Para aplicar la garantía debe existir un ticket donde el cliente reclame que el servicio no se le ha proporcionado y este ticket debe exceder las 24 horas sin respuesta nuestra, de acuerdo a nuestro SLA, la respuesta no precisamente puede ser la solución, sino una respuesta de seguimiento al asunto que se esté tratando.
      </p>

      <p class=" text-politica mb-3">
      La garantía de devolución aplica cuando nuestro equipo de soporte técnico no haya logrado mostrarle al cliente que el servicio funciona, queda descartada la funcionalidad de aplicaciones como (softphone) celulares, dispositivos o hasta el servicio de internet el cual no puede ser el óptimo, sin embargo, son recursos que no están dentro de nuestra administración o responsabilidad para el buen funcionamiento del servicio.
      </p>

      <p class=" text-politica mb-3">
      La garantía de devolución No Aplica, si el cliente no envío su comprobante de pago en tiempo y forma a los correos correspondientes de nuestra área administrativa.
      </p>

      <p class=" text-politica mb-3">
      El saldo no se reembolsa, en caso de que el cliente no llegara a hacer uso del mismo, PBX Hosting no está obligado a reembolsar ese monto, sin embargo, el cliente puede utilizar ese saldo para el pago de servicios o renovaciones pendiente, de igual forma puede transferir este saldo a otra cuenta dentro de PBX Hosting. Para hacer valido esto debe enviar su solicitud por escrito al correo administrativo@pbxhosting.com.mx
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting no se hace responsable de reportes de llamadas con mas de 3 meses de antigüedad para aclaraciones de cobros incorrectos o alguna situación similar. El cliente es responsable de verificar que sus cobros de tarifa sean correctos y los negociados con el equipo de ventas de PBX Hosting, así como reportar en tiempo y forma cualquier discrepancia que pueda existir para una pronta corrección y aclaración. No hay reembolso por corrección de tarifas.
      </p>
    `
  },

  //Políticas de uso justo
  {
    title: 'Políticas de uso justo',
    content: `
      <p class=" text-politica mb-3">
      En los planes Ilimitados de telefonía residencial en México, el cliente puede utilizar el servicio de telefonía de manera Ilimitada, pero con uso razonable/moderado, no aplica para call center o un uso masivo, en caso de que se identifique un uso no razonable, PBX Hosting se reserva el derecho de suspender esa troncal sin derecho a reactivación por violación a esta política de uso. Además de que estas troncales se habilitan únicamente con 1 canal de salida.
      </p>

      <p class=" text-politica mb-3">
      Las políticas de uso justo en nuestros planes de WEB Hosting son las siguientes:
      </p>

      <p class=" text-politica mb-3">
      1.- Correos Electrónicos: <br>
      2048MB/2GB por buzón de correo electrónico, el cliente puede crear sus cuentas de correo con la capacidad que el desee, incluso ilimitado pero al sobre-utilizar el límite permitido en nuestra política de uso justo recibirá una notificación para depurar la cuenta que exceda la capacidad en un inicio mencionada.
      </p>

      <p class=" text-politica mb-3">
      2.- Transferencia mensual<br>
      5000GB/5TB es el total de datos que podemos transmitir en nuestro plan de alojamiento.
      </p>

      <p class=" text-politica mb-3">
      3.- Bases de Datos<br>
      3000MB/3GB para el tamaño máximo de una base de datos MySQL.
      </p>
    `
  },

  //Uso de recursos en hosting compartido
  {
    title: 'Uso de recursos en hosting compartido',
    content: `
      <p class=" text-politica mb-3">
      Es importante que el usuario de hosting compartido conozca que, en un Servidor Compartido, se comparten los recursos que éste les proporciona con miles de usuarios mas, alojados dentro del mismo servidor. Para asegurar que todos los usuarios tengan los mismos recursos y ninguno abuse de ellos se han marcado algunos limites, sin embargo, el abuso de recursos no está limitado solo a estas políticas, PBX Hosting puede determinar lo que considere un abuso y suspender alguna cuenta. <br>
      El principal objetivo es proteger a todos los usuarios que comparten el servidor, otorgando una estabilidad y optima funcionalidad en el servicio.
      </p>

      <p class=" text-politica fw-semibold mb-3">
      BACKUPS
      </p>

      <p class=" text-politica mb-3">
      Por ningún motivo está permitido usar nuestros servicios de hosting compartido en PBX Hosting como servidor de almacenamiento de respaldos, queda estrictamente prohibido y con derecho a suspensión inmediata aquel servicio que sea identificado por almacenar respaldos en nuestros servidores, todos los respaldos deben de ser eliminados de forma inmediata y no está permitido almacenar archivos ajenos a su sitio web.<br>
      En todos nuestros planes de hospedaje, el uso en disco para correos electrónicos, no debe de superar los 10GB de almacenamiento de toda la cuenta de hospedaje, en caso de ser así, el cliente está obligado a descargar sus correos y depurar cada cuenta de correo para disminuir su almacenamiento.<br>
      Es importante que, en los planes de hosting compartido, el uso en disco para correos no debe de superar el 50% del espacio utilizado para el sitio web alojado en el plan.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se reserva el derecho de suspender y/o eliminar aquella cuenta de hosting compartido que no cumpla con esta política de uso.
      </p>

      <p class=" text-politica mb-3">
      El uso de los recursos del servidor (hardware) tienen un límite, el cual en caso de sobrepasar el cliente podrá experimentar perdida e interrupción del servicio. Dicha actividad no está permitida en un servicio de hosteo compartido ya que las capacidades asignadas para cada plan son lo suficientemente amplias para abastecer y trabajar con las características de cada uno (almacenamiento y trafico). PBX Hosting se deslinda en caso de que el cliente presente interrupciones del servicio por sobrepasar los recursos del servidor compartido donde se aloja, sin embargo, nos reservamos el derecho de suspender la cuenta y habilitarla hasta que el cliente modere su forma de trabajar o actualice de servicio a uno más grande donde no comparta recursos.
      </p>

      <p class=" text-politica fw-semibold mb-3">
      EN TELEFONÍA
      </p>

      <p class=" text-politica mb-3">
      Es muy importante que el cliente efectúe respaldos de sus grabaciones y/o CDR´s en caso de necesitarlas para su operación.<br>
      PBX Hosting no se hace responsable de CDR´s con más de 1 mes de antigüedad en nuestros servicios de Troncal SIP Gratuita, por lo cual recae dentro de las responsabilidades del cliente, descargar esos reportes periódicamente si son de su interés para poder ir respaldando esta información de manera local.<br>
      Así mismo es importante que el cliente monitoree el espacio en disco para el grabado de llamadas en sus servicios de conmutador, así como la activación de esta función.<br>
      Todos los CDR's que generamos para nuestros clientes se basan en la zona horaria Centro UTC-06:00. Esto asegura la uniformidad y precisión de la información presentada en nuestros reportes.
      </p>

      <p class=" text-politica fw-semibold mb-3">
      PLAN DE HOSTING RESELLER
      </p>

      <p class=" text-politica mb-3">
      Este plan de hosting ya no se maneja actualmente en nuestros servicios, sin embargo, los planes revendedores que se vendieron se respetan con las siguientes características
      </p>

      <p class=" text-politica mb-3">
      - Limite de 50 cuentas de Hosting por plan reseller<br>
      - Si el dominio no está resolviendo hacia nuestros servidores es necesario que haga la baja del alojamiento dentro del hosting reseller<br>
      - Una vez cancelado el servicio ya no podrá ser nuevamente contratado.<br>
      </p>

      <p class=" text-politica mb-3">
      El cliente tiene la obligación de sujetarse a las políticas de uso justo publicados en este apartado.
      </p>

      <p class=" text-politica fw-semibold mb-3">
      RECURSOS DE CONMUTADORES PBX
      </p>

      <p class=" text-politica mb-3">
      En los servicios de telefonía ip, conmutadores ip, vicidial, planes de telefonía, etc. es importante sujetarse a los recursos que le brinda cada servicio contratado, en almacenamiento, tráfico, memoria, llamadas soportadas, etc. En caso de que llegara a rebasar estos recursos, PBX Hosting se reserva el derecho de suspender temporal o definitivamente su servicio, hasta haber actualizado al plan que cubra sus necesidades.
      </p>

      <p class=" text-politica fw-semibold mb-3">
      LLAMADAS Y MENSAJES DE BLASTER SOPORTADOS
      </p>

      <p class=" text-politica mb-3">
      -   CONMUTADOR PBX10<br>
      Soporte hasta 5 llamadas concurrentes<br>
      No soporta grabación de llamadas, en caso de activarse, es bajo responsabilidad del cliente final.<br><br>
      -   CONMUTADOR PBX20<br>
      Soporte hasta 10 llamadas concurrentes<br><br>

      -    CONMUTADOR PBX30<br>
      Soporte hasta 30 llamadas concurrentes<br><br>

      -   CONMUTADOR PBX60<br>
      Soporte hasta 60 llamadas concurrentes<br><br>

      -   CONMUTADOR PBX150<br>
      Soporte hasta 150 llamadas concurrentes<br><br>

      -   VICIDIAL30<br>
      Soporte hasta 30 llamadas concurrentes<br>
      50 grabaciones sencillas de blaster<br><br>

      -   VICIDIAL150<br>
      Soporte hasta 150 llamadas concurrentes<br>
      200 grabaciones sencillas de blaster<br><br>

      NOTA: Entiéndase por “grabaciones sencillas de blaster” aquellos mensajes de audio que solo son para escuchar. Grabaciones con interacción son más pesados y por consecuencia disminuye el número de grabaciones soportadas.
      </p>



    `
  },

  //Recargos de saldo
  {
    title: 'Recargos de saldo',
    content: `
      <p class=" text-politica mb-3">
      El cliente se compromete a estar al pendiente de su consumo de saldo, así como el precio de sus tarifas para hacer nuevas recargas de saldo cuando sea necesario. El saldo en nuestras troncales SIP es acumulable y no tiene fecha de vencimiento.<br><br>

      En caso de que el cliente no llegara a utilizar su saldo en telefonía IP, PBX Hosting no está obligado a reembolsar ese monto, sin embargo, el cliente puede utilizar ese saldo para el pago de servicios o renovaciones pendiente, de igual forma puede transferir este saldo a otra cuenta dentro de PBX Hosting. Para hacer valido esto debe enviar su solicitud por escrito al correo  <a class="text-decoration-none" href="mailto:administrativo@pbxhosting.com.mx" style="color: #1668af;"</a>administrativo@pbxhosting.com.mx</a> <br><br>

      SERVICIO DE SMS<br><br>

      • Esta plataforma de SMS solo es para envío de SMS a México.<br><br>

      • Para envío de SMS a otro destino se utiliza una plataforma distinta y es bajo cotización.<br><br>

      • La interfaz es una plataforma web para el envío de SMS o puedes enviar tus SMS por API, la plataforma cuenta con toda la documentación y soporte gratuito para la conexión.<br><br>

      • No colocar acentos al redactar un SMS.<br><br>

      • Los números que se introduzcan para el envío de SMS, deben de estar a 10 dígitos.<br><br>

      • Solo cobra por SMS enviado, los inválidos o los fallidos no los cobra.<br><br>

      • En los archivos de Excel no se deben de colocar signos de peso o caracteres especiales.<br><br>

      • La plataforma está habilitada para el envío de SMS de 160 caracteres, si el usuario llegara a redactar un SMS con más de 160 caracteres no le permitirá hacer el envío, debe solicitar “soporte” para habilitar esta función y le sea cobrado 1 SMS por cada 160 caracteres.<br><br>

      o Ejemplo, si envía un SMS de 180 caracteres le será tomado como 2 SMS para un mismo destinatario.<br><br>

      • Si se utilizan variables se deben de considerar los caracteres de la variable.<br><br>

      • Esta plataforma te permite revender el servicio de SMS con tus propios clientes.<br><br>

      • Capacitación gratuita.<br><br>

      • Si requieres envío de SMS Flash es bajo cotización pues se maneja otra tarifa en el SMS.<br><br>

      • La plataforma le brinda SMS de 2 vías.<br><br>

      • Si requiere hacer la conexión de la API, la plataforma brinda toda la documentación y soporte Gratuito.<br><br>

      • Ruta Premium Hall Corta es bajo otro costo de tarifa.<br><br>

      • El uso de esta herramienta es para uso empresarial y/o comercial, no está permitido el uso de palabras altisonantes u ofensivas, usuario que sea sorprendido con este tipo de actividades será suspendido de manera temporal o definitiva según sea la situación.<br><br>

      • PBX Hosting se reserva el derecho de monitorear solo en caso de ser necesario el contenido de los SMS desde la plataforma administradora, con el objetivo de que se cumplan los lineamientos de envío estipulados en esta política, además de revisiones de soporte técnico que se puedan solicitar.<br><br>

      • Esta plataforma le brinda una ruta mix donde se asignan aleatoriamente números de 4 a 5 dígitos para la salida de sms por operadora y cuando la ruta se encuentra muy saturada o existe alguna intermitencia puede llegar a ser numero largo. Si requiere una ruta premium, se maneja otra tarifa mas elevada por SMS, consúltelo con su agente de ventas.<br><br>

      • No nos hacemos responsables si la operadora receptora llega a identificar los sms que el cliente envía como un posible spam.<br><br>

      • Queda estrictamente prohibido el envío de SMS con carácter político, de ningún tipo. En caso de ser identificados, PBX Hosting se reserva el derecho de la suspensión de la cuenta de SMS´s, sin derecho a reembolso. El envío de SMS con carácter político que llegara a ser reportado por alguna operadora de telefonía móvil, se hace acreedor a una multa de $10,000 MXN + IVA por SMS enviado y la cual debe ser cubierta por el usuario responsable.<br><br>

      • Esta plataforma soporta el envío de SMS´s en dos vías pero no un servicio de chat.<br><br>


      • PBX Hosting se deslinda de cualquier reclamación si los SMS llegaran a ser congelados, retenidos o retirados por el Carrier de SMS´s, lo anterior, en caso de que el cliente cuente con una inactividad mayor a los 12 meses, sin usar los SMS´s contratados. Por ello es recomendable utilizar los créditos contratados hasta agotarse, ya que, si son acumulables, pero en caso de inactividad o falta de uso mayor a los 12 meses, el Carrier puede proceder por el tiempo en el que la plataforma estuvo en activación.
      </p>
    `
  },

  //Responsabilidad del Usuario en Cobranza Financiera
  {
    title: 'Responsabilidad del Usuario en Cobranza Financiera',
    content: `
      <p class=" text-politica mb-3">
      El Usuario es exclusivamente <span class="fw-semibold">responsable de acreditar</span> que cuenta con autorización vigente para realizar <span class="fw-semibold">cobranza en nombre de cada institución bancaria involucrada.</span> Deberá presentar los contratos o documentos de autorización cuando PBX Hosting by INBTEL lo solicite.<br><br>

      En caso de no acreditar dicha autorización, el <span class="fw-semibold">Usuario tiene prohibido utilizar los servicios para realizar cobranza o enviar comunicaciones a nombre de cualquier banco.</span><br><br>

      El incumplimiento resultará en la <span class="fw-semibold">suspensión inmediata</span> del servicio, sin previo aviso y <span class="fw-semibold">sin reembolso de saldos o créditos de SMS.</span>
      </p>
    `
  },

  //TÉRMINOS EN SERVICIO DE SMS
  {
    title: 'TÉRMINOS EN SERVICIO DE SMS',
    content: `
      <p class=" text-politica mb-3">
      Es responsabilidad del <span class="fw-semibold">CLIENTE</span> de verificar los términos y condiciones con regularidad para verificar cambio cualquier cambio, y si el <span class="fw-semibold">CLIENTE</span> continúa utilizando nuestros servicios luego del cambio realizado, el <span class="fw-semibold">CLIENTE</span> aceptará apegarse a los nuevos términos, condiciones y cargos.<br><br>

      <span class="fw-semibold">PBX HOSTING</span> no garantiza en ningún caso los resultados del uso de la aplicación, dependiendo el buen fin del servicio de la exactitud de los datos aportados por el cliente final.<br><br>

      <span class="fw-semibold">PBX HOSTING</span> no garantiza que la prestación de servicio sea ininterrumpida o exenta de errores o incompatibilidad a nivel de sistema operativo y/o de hardware.<br><br>

      <span class="fw-semibold">CLIENTE </span> se compromete a no utilizar nuestros servicios para divulgar contenidos que sean dañinos, amenazadores, abusivos, acosadores, vulgares, de odio, racistas o cualquier otro que pudiera considerarse ofensivos o discriminatorios, sean obscenos, pornográficos, excesivamente violentos o nocivos para menores de edad, ilegales en México o en el país dónde se encuentre el destinatario del mensaje, difamatorios, calumniosos, que invadan la privacidad o los derechos de la publicidad o que infrinjan cualquier patente, marca registrada, secreto comercial, derechos de autor u otros derechos de propiedad intelectual.
      </p>
    `
  },

  //CANCELACIONES / RETIROS DE CRÉDITOS
  {
    title: 'CANCELACIONES / RETIROS DE CRÉDITOS',
    content: `
      <p class=" text-politica mb-3">
      <span class="fw-semibold">PBX HOSTING</span> se reserva el derecho a suspender total o parcialmente el servicio prestado cuando se reciba comunicación de un órgano administrativo o una instancia de autoridad judicial o del/los operadores de comunicaciones electrónicas requiriendo información de la actividad desarrollada derivada de reclamaciones, quejas o denuncias de los clientes de los servicios o se requiera la suspensión o supresión del mismo.<br><br>

      La suspensión cautelar o definitiva del servicio en base a cualquier causa descrita anteriormente no dará derecho al cliente a obtener compensación económica alguna.<br><br>

      El <span class="fw-semibold">CLIENTE</span> puede terminar el servicio sin ninguna penalización en el momento que lo decida y por cualquier razón simplemente dejando de utilizar el servicio.<br><br>

      Cualquier cuenta registrada que no haya tenido movimiento durante un período de seis meses o más, será dada de baja por <span class="fw-semibold">PBX HOSTING</span> sin el consentimiento del <span class="fw-semibold">CLIENTE</span> aun así cuando tenga créditos a su favor.<br><br>

      El <span class="fw-semibold">CLIENTE</span> da por entendido que el servicio no incluye el envío o recepción de MMS (mensajes multimedia), ni archivos adjuntos.<br><br>

      Los precios del servicio están determinados por las rutas utilizadas para el envío de mensajes a cada país y cada operador y pueden ser modificados en caso de que rutas existentes no se encuentren funcionales y se determine que una nueva ruta es necesaria. Los precios también se verán afectados por incrementos por parte de los operadores.<br><br>

      Cada mensaje SMS tendrá una capacidad máxima de 160 caracteres, espacio que será 100% utilizable para el mensaje del cliente, utilizando alfabeto GMS 3.38 (sin caracteres especiales).<br><br>

      Los horarios de mantenimiento se notificarán directamente al <span class="fw-semibold">CLIENTE</span> contratante del servicio.<br><br>

      La plataforma de mensajería de <span class="fw-semibold">PBX HOSTING</span> opera 24 horas al día los 7 días de la semana.<br><br>

      Si <span class="fw-semibold">CLIENTE</span> requiere asistencia, está estará disponible durante el al día a través del chat dentro de la plataforma o por correo electrónico al: <a class="text-decoration-none" href="mailto:soporte@pbxhosting.com.mx" style="color: #1668af;"</a>soporte@pbxhosting.com.mx</a>
      </p>
    `
  },

  //Soporte Técnico
  {
    title: 'Soporte Técnico',
    content: `
      <p class=" text-politica mb-3">
      El soporte técnico que se brinda a los clientes de PBX Hosting es por los siguientes medios oficiales:
      </p>

      <p class=" text-politica mb-3">
      Vía telefónica a los números que vienen en la sección de contacto <a class="text-decoration-none" href="/contacto" style="color: #1668af;"</a>www.pbxhosting.com.mx/contacto</a> 
      </p>

      <p class=" text-politica mb-3">
      El servicio de chat, ubicado en nuestra página web <a class="text-decoration-none" href="/" style="color: #1668af;"</a>www.pbxhosting.com.mx</a> 
      </p>

      <p class=" text-politica mb-3">
      Ticket desde el área de cliente a nuestros distintos departamentos o bien escribiendo a las siguientes direcciones:
      </p>


      <p class=" text-politica mb-3">
      - soporte@pbxhosting.com.mx para  <span class="fw-semibold">Soporte Técnico</span><br>
      - ventas@pbxhosting.com.mx para <span class="fw-semibold">Ventas</span><br>
      - clientes@pbxhosting.com.mx para <span class="fw-semibold">Atención a Clientes</span><br>
      - administrativo@pbxhosting.com.mx para <span class="fw-semibold">Administrativo</span>
      </p>

      <p class=" text-politica mb-3">
      En PBX Hosting brindamos atención por Whatsapp Business, este medio de comunicación solo le brindara al cliente la facilidad de reportar algún problema o situación con su servicio, ya que es responsabilidad del cliente generar el ticket con la explicación del problema dentro del sistema de clientes o bien, pedir el apoyo de un ejecutivo para la elaboración del ticket.
      </p>

      <p class=" text-politica mb-3">
      El ticket es el medio oficial donde se dará respuesta o solución al problema que haya reportado el cliente. Whatsapp Business es una herramienta de seguimiento y reporte rápido personalizado.
      </p>

      <p class=" text-politica mb-3">
      Todos los reportes de los clientes deben estar capturados en un ticket dentro del sistema y los tickets tienen un SLA de 24 hrs para su respuesta, sin embargo esta respuesta no siempre puede ser la solución, ya que algunos tickets de mucha complejidad requieren de pruebas, investigación, ajustes que pueden rebasar este tiempo estimado, sin embargo el equipo de soporte técnico está comprometido a enviar retroalimentación de lo que se está trabajando.
      </p>

      
    `
  },

  //Soporte Técnico Gratuito
  {
    title: 'Soporte Técnico Gratuito',
    content: `
      <p class=" text-politica mb-3">
      El soporte técnico gratuito es únicamente para configuraciones básicas sobre cualquiera de los servicios que proveemos en PBX Hosting.
      </p>

      <p class=" text-politica mb-3">
      - Números Virtuales<br>
      - Troncal SIP<br>
      - Conmutadores<br>
      - Vicidial<br>
      - Hosting<br>
      - Equipos de Grandstream<br>
      </p>

      <p class=" text-politica mb-3">
      El soporte técnico gratuito va encaminado a ayudar y asesorar al cliente para que el servicio quede funcionando como lo requiere, sin embargo, se le muestra cómo utilizar su servicio para que el cliente pueda trabajar con el servicio más adelante sin que necesite de nuestro soporte.
      </p>

      <p class=" text-politica mb-3">
      El soporte técnico básico GRATUITO es para atender cuestiones sencillas que sean rápidas de realizar y siempre es vía ticket, teléfono o chat, así como escritorio remoto (solo en caso de ser necesario).
      </p>

      <p class=" text-politica mb-3">
      Cualquier apoyo personalizado que rebase los 60 minutos de atención de parte de nuestro equipo de soporte técnico será necesario pagar una póliza de soporte técnico.
      </p>

      <p class=" text-politica mb-3">
      El soporte técnico de Conmutador Vicidial o PBX incluye otorgar al cliente una asesoría completa del servicio que se está operando, además de material (manuales y videos) que puedan servir al cliente a programar sus campañas, subir grabaciones, extraer reportes, registrar agentes, etc. Entre muchas otras actividades, deslindando de responsabilidad al equipo de soporte técnico de PBX Hosting para la ejecución continua de dichas actividades. El cliente asume la responsabilidad y disponibilidad para ser capacitado en este tema.<br>
      El cliente puede solicitar una póliza de soporte técnico para la ejecución de actividades o tareas programadas del vicidial, para mayores informes debe contactar a ventas@pbxhosting.com.mx
      </p>
    `
  },

  //Tiempos en configuraciones
  {
    title: 'Tiempos en configuraciones',
    content: `
      <p class=" text-politica mb-3">
      PBX Hosting no se hace responsable del tiempo que tome la configuración de nuestros servicios en sus dispositivos o equipos para operar el servicio de Telefonía IP.
      </p>

      <p class=" text-politica mb-3">
      En PBX Hosting brindamos soporte técnico GRATUITO para poder configurar los servicios de: Telefonía, Conmutadores, Números Virtuales, pero NO es Obligación directa de PBX Hosting si esta configuración demora, ya que siempre va a depender de:
      </p>

      <p class=" text-politica mb-3">
      - Que el cliente informe claramente por tickets desde un principio que desea ayuda para configurar sus servicios<br>
      - Que ayude llenando de forma clara formularios indicando como va a querer configurado cada servicio contratado y en que dispositivos o equipos<br>
      - Que se pueda contactar al cliente en el teléfono de contacto cuando se requiera por parte de soporte ver alguna duda<br>
      - Recibir respuesta puntual del seguimiento de los tickets que se levanten en soporte para la configuración de dichos servicios
      </p>

      <p class=" text-politica mb-3">
      Si lo anterior no se cumple, nos deslindamos del tiempo que pueda tomar dichas configuraciones y el cliente está obligado a cumplir con el pago de cada renovación de servicio.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">COSTO DE POLIZAS DE SOPORTE TÉCNICO</span>
      </p>

      <p class=" text-politica mb-3">
      - Póliza de soporte técnico básica que tome 2 horas (dos sesiones de 60 minutos) - $600 MXN + IVA<br>
      - Póliza de soporte técnico estándar que tome 4 horas (4 sesiones de 60 minutos) - $1200 MXN + IVA<br>
      - Póliza para realizar trabajos personalizados de configuración dentro del servicio de un cliente que no incluya infraestructura de PBX Hosting – Bajo cotización
      </p>

      <p class=" text-politica mb-3">
       <span class="fw-semibold">CONFIGURACION DE UN CONMUTADOR EN LA NUBE</span>
      </p>

      <p class=" text-politica mb-3">
      La configuración de un conmutador es un proceso largo, cuando el cliente no tiene conocimientos sobre el tema, el soporte técnico gratuito consiste en:
      </p>

      <p class=" text-politica mb-3">
      Enseñarle al cliente de PBX Hosting como realizar varias acciones que podría necesitar realizar mas adelante:
      </p>

      <p class=" text-politica mb-3">
      - Crear una extensión<br>
      - Configurar su troncal en un teléfono IP, Softphone, etc.<br>
      - Crear grupos de extensiones<br>
      - Dar de alta un IVR<br>
      - Entre otras…
      </p>

      <p class=" text-politica mb-3">
      Para una configuración básica de conmutador PBX es indispensable que el cliente especifique mediante un diagrama de flujo o un documento como va a querer trabajar y el apoyo que recibirá de nuestro equipo de soporte consiste dejar su servicio funcionando:
      </p>

      <p class=" text-politica mb-3">
      - Recibir llamadas (si es que contrato números virtuales)<br>
      - Hacer llamadas salientes (si es que contrato servicio de troncal sip)<br>
      - Creación de extensiones y colas de trabajo (en caso de contratar un conmutador)
      </p>

      <p class=" text-politica mb-3">
       <span class="fw-semibold">En un VICIDIAL</span>
      </p>

      <p class=" text-politica mb-3">
      - Recibir llamadas (si es que contrato números virtuales)<br>
      - Hacer llamadas salientes (si es que contrato servicio de troncal sip)<br>
      - Creación de extensiones y colas de trabajo<br>
      - Cargar una base de datos de clientes<br>
      - Configuración sencilla de alguna campaña telefónica<br>
      </p>

      <p class=" text-politica mb-3">
      La asesoría es para enseñarle a realizar las acciones, una configuración avanzada, tendría que cotizar una póliza de soporte técnico en el departamento de ventas, de acuerdo al tiempo de trabajo que se estima implementar.
      </p>

      <p class=" text-politica mb-3">
      La configuración especial y personalizada de un Conmutador, Vicidial, Troncal SIP, Numero Virtual y/o Hosting (con muchas funcionalidades) tiende a rebasar el tiempo promedio de atención por lo cual, si el cliente desea que nuestro equipo de soporte técnico le apoye, será necesario que efectúe el pago de una póliza de soporte técnico personalizada de acuerdo a todo lo que desea realizar, esto en el departamento de ventas.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">LISTAS PARA VICIDIAL</span>
      </p>

      <p class=" text-politica mb-3">
      El servicio de Vicidial requiere de Bases de Datos para la ejecución de campañas en este servicio de conmutador Vicidial en la nube, sin embargo, es muy importante que estas listas cumplan con los siguientes requerimientos:
      </p>

      <p class=" text-politica mb-3">
      - Los números telefónicos deben de ser números VALIDOS, es decir al hacer su marcación la lista debe de contar con una efectividad razonable.<br>
      - Las bases de datos deben de cumplir con el formato que el ejecutivo de soporte técnico le marque y no contener espacios o caracteres especiales, ya que esto provocaría errores en la marcación.<br>
      - En base al resultado de sus reportes, el cliente debe hacer limpieza y filtración de sus bases de datos, al ejecutar las llamadas, para aumentar su efectividad.
      </p>

      <p class=" text-politica mb-3">
      Es responsabilidad del cliente revisar que sus Bases de Datos sean efectivas, se recomienda un porcentaje mínimo de efectividad del 60% para campañas con altos niveles de tráfico, PBX Hosting se reserva el derecho de <span class="fw-semibold">LIMITAR</span> los recursos de la troncal en caso de no cumplir la regla anterior, debido a que sus llamadas FALLIDAS nos afecta directamente al ocupar canales que no ejecutan <span class="fw-semibold">LLAMADAS EFECTIVAS</span>.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting no es responsable de las llamadas que terminen en buzón de voz y que a su vez sean tomadas como llamadas efectivas, restando saldo de su troncal sip, ya que esto depende de la configuración del numero receptor de la llamada.
      </p>

      <p class=" text-politica mb-3">
      El equipo de soporte técnico de PBX Hosting por política de seguridad no puede modificar ni manipular las bases de datos de los clientes, únicamente brinda la asesoría para que el cliente pueda ejecutar las acciones en sus campañas.
      </p>

      <p class=" text-politica mb-3">
      El objetivo de esta política es concientizar al cliente de la importancia y responsabilidad que tiene al momento de crear sus campañas y montar bases de datos con <span class="fw-semibold">DATOS AUTENTICOS</span>.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">PAGO DE NUEVO SETUP</span>
      </p>

      <p class=" text-politica mb-3">
      Actualmente el cliente recibe los accesos ROOT a su servicio de VPS, por lo cual es responsabilidad del cliente si llegara a realizar alguna modificación o alteración que pudiera repercutir en la correcta funcionalidad del conmutador y/o Vicidial, dando como lugar el pago de un nuevo SETUP.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">AGENDA DE POLIZAS DE SOPORTE</span>
      </p>

      <p class=" text-politica mb-3">
      Después de efectuar el pago de una póliza de soporte técnico, el equipo de soporte técnico agendara la llamada en un calendario de atención que se lleva de manera interna y se comunicara con el cliente para darle el día y la hora del soporte o bien enviara la información vía ticket, el cliente debe estar al pendiente de la respuesta.
      </p>

      <p class=" text-politica mb-3">
      Las sesiones no pueden rebasar los 60 minutos, si va a tomar más tiempo, en esa llamada se re-agenda la segunda sesión y así sucesivamente hasta concluir el tiempo que pago en su póliza el cliente.
      </p>

      <p class=" text-politica mb-3">
      Si el cliente requiere más tiempo y ya consumió sus minutos de atención, deberá efectuar el pago de una nueva póliza.
      </p>

      <p class=" text-politica mb-3">
      Es importante que, al recibir la llamada, el cliente ya cuente con accesos, escritorio remoto, aplicaciones y todo lo que requiere para trabajar de manera rápida.
      </p>

      <p class=" text-politica mb-3">
      Si es configuración de conmutador o campaña de vicidial, debe de haber enviado el documento con las especificaciones de cómo lo va a querer configurado o su diagrama de flujo.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">RESPALDOS DE INFORMACIÓN</span>
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting no se hace responsable de respaldos en los servicios de conmutador, vps y dedicados, el cliente es responsable de efectuar respaldos periódicos de su información y si desea que PBX Hosting efectúe esta actividad es importante que solicite una cotización por este servicio adicional, al correo ventas@pbxhosting.com.mx
      </p>

      <p class=" text-politica mb-3">
      En el servicio de web hosting, contamos con el respaldo de R1Soft sin embargo es responsabilidad del cliente tener un respaldo reciente del contenido de su página web, correos electrónicos y base de datos. PBX Hosting no se hace responsable por perdida de información, es por eso muy importante que atienda la recomendación de los respaldos periódicos de su hosting, bases de datos y correos electrónicos.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">GRABACIÓN DE LLAMADAS</span>
      </p>

      <p class=" text-politica mb-3">
      Todos nuestros conmutadores PBX en la nube y Vicidial tienen la funcionalidad de poder grabar las llamadas que circulan en dicho servidor, sin embargo, es importante saber que no todos los servicios están aptos para soportar dicha actividad, ya que se requiere de un amplio almacenamiento en el disco duro y de depuraciones periódicas en el servidor.
      </p>

      <p class=" text-politica mb-3">
      Es responsabilidad del cliente si habilita sin notificar al área de soporte técnico, la opción para la grabación de llamadas, es responsabilidad del cliente la ejecución de respaldos periódicos de la grabación de llamadas de su Conmutador y/o Vicdial y es importante que notifique a soporte técnico para que se le brinden los accesos y los pasos a seguir para dicha actividad.
      </p>

      <p class=" text-politica mb-3">
      El cliente está obligado a actualizar al siguiente plan, en caso de que su Conmutador y/o Vicidial llegara a colapsar por espacio en almacenamiento insuficiente, de lo contrario el equipo de soporte técnico no podrá dar la atención para restablecer el servicio.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">CLIENTES REVENDEDORES</span>
      </p>

      <p class=" text-politica mb-3">
      Los clientes revendedores están sujetos a enviar los contratos correspondientes para la reventa de:
      </p>

      <p class=" text-politica mb-3">
      - Alojamiento de Página Web<br>
      - Telefonía IP<br>
      - Números Virtuales<br>
      - Conmutadores PBX<br>
      - Cualquier otro servicio más
      </p>

      <p class=" text-politica mb-3">
      Así como la documentación que lo valide como un cliente revendedor de los servicios de PBX Hosting y el cual recibirá precios especiales en algunos de los productos.
      </p>

      <p class=" text-politica mb-3">
      En caso de no cumplir con dicha documentación PBX hosting se reserva el derecho de suspender su cuenta hasta que se cumpla con este requisito indispensable.
      </p>

      <p class=" text-politica mb-3">
      El cliente revendedor/reseller tiene la obligación de dar soporte técnico a sus clientes, ya que por seguridad PBX Hosting no puede brindar información de ningún tipo a los clientes de los revendedores.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se reserva el derecho de otorgar el servicio como cliente final a cualquier usuario que nos contacte en nuestros medios de atención y si alguno de estos clientes llegara a ser cliente de uno de nuestros revendedores, PBX Hosting hará lo posible por que este cliente final regrese con su reseller, sin embargo no podemos obligarlo y tampoco podemos negarle el servicio, por eso es importante que no conozcan que nosotros somos su proveedor directo.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">PORTABILIDAD DE NÚMEROS VIRTUALES</span>
      </p>

      <p class=" text-politica mb-3">
      El trámite y proceso de portabilidad es totalmente GRATUITO para nuestro cliente, pero una vez portado el número hacia PBX Hosting, el cliente está obligado a pagar una renta (mensual, semestral o anual con PBX Hosting) además de pagar un SETUP (pago único) en la primera mensualidad.
      </p>

      <p class=" text-politica mb-3">
      El cliente está sujeto a cumplir con una serie de requisitos solicitados por nosotros para poder llevar a cabo la portabilidad de un numero virtual.
      </p>

      <p class=" text-politica mb-3">
      En caso de que el cliente no llegara a cumplir con dichos requisitos, PBX Hosting se deslinda de cualquier responsabilidad.
      </p>

      <p class=" text-politica mb-3">
      Para la portabilidad de un número virtual es importante que el número esté funcionando.
      </p>

      <p class=" text-politica mb-3">
      En caso de que el número a portar este asociado con algún servicio de internet, es responsabilidad del cliente verificar con su proveedor como quedara su contratación al llevarse el numero con otro proveedor, PBX Hosting se deslinda de acciones que pudiera llegar a realizar el proveedor anterior.
      </p>

      <p class=" text-politica mb-3">
      La portabilidad deberá ejecutarse en un plazo no mayor a 24 horas, siempre y cuando la solicitud y requisitos necesarios (documentación) sean presentados en tiempo y forma, es decir dentro de las 11:00 a las 17:00 horas de lunes a viernes.
      </p>

      <p class=" text-politica mb-3">
      Una vez iniciado el proceso de <span class="fw-semibold">PORTABILIDAD</span> no es recomendable <span class="fw-semibold">CANCELARLO</span> ya que este proceso le generaría un <span class="fw-semibold">cobro de $30 USD + IVA</span>cobro de $30 USD + IVA
      </p>

      <p class=" text-politica mb-3">
      Por eso se le recomienda estar seguro de la fecha de aplicación de la portabilidad. Cargo que el cliente está obligado a cubrir antes de iniciar un nuevo intento de portabilidad.
      </p>
    `
  },

  //Registro de Dominios
  {
    title: 'Registro de Dominios',
    content: `
      <p class=" text-politica mb-3">
      El cliente es libre de registrar su dominio en PBX Hosting o cualquier otro proveedor.
      </p>

      <p class=" text-politica mb-3">
      La disponibilidad del dominio requerido se podrá consultar online y de ninguna manera PBX Hosting se responsabiliza por dominios ya registrados por otro registrar. El dominio se registra una vez se identifique el pago del servicio, mientras no se registre corre el riesgo de ser registrado por otro registrar en cualquier parte del mundo.
      </p>

      <p class=" text-politica mb-3">
      El costo de Registros, Renovaciones y Transferencias de dominios puede encontrarlos <a class="text-decoration-none" href="https://bit.ly/2PfAeal" style="color: #1668af;"</a>en este enlace </a>
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">RENOVACIÓN DE SERVICIOS</span>
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting envía recordatorios de renovación de los servicios 15 días antes del vencimiento de su servicio y genera el invoice de renovación, sin embargo no es obligación de PBX Hosting que el cliente mantenga actualizada la información de contacto en el correo electrónico, para asegurar que el cliente reciba la información de pago, es obligación del cliente estar al pendiente del vencimiento de sus servicios de telefonía VoIP, cuando el saldo se agota, cuando el dominio o hosting llegará a su vencimiento, ya que el vencimiento puede generar suspensiones automáticas del servicio, causando interrupciones y pérdidas de las cuales nosotros nos deslindamos por falta de pago.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">MUDANZA DE HOSTING</span>
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting cuenta con una promoción permanente de un 50% de descuento en cualquiera de nuestros planes de hosting compartido.
      </p>

      <p class=" text-politica mb-3">
      Además, ofrecemos la migración del contenido web totalmente GRATIS por parte de nuestro departamento de soporte técnico siempre y cuando el panel de control que maneje con su anterior proveedor sea cPanel.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se deslinda de realizar mudanzas de página web gratuitamente, si el peso del sitio rebasa los 5GB, en caso de rebasar este almacenamiento, deberá cotizar una mudanza de página web en ventas@pbxhosting.com.mx informando el peso actual de su sitio.
      </p>

      <p class=" text-politica mb-3">
      En caso de tener otro tipo de panel de control la mudanza de información tendría un costo de $500 MXN + IVA y debe solicitarse al área de ventas@pbxhosting.com.mx
      </p>

      <p class=" text-politica mb-3">
      Después de concluir una migración de página web es importante que el cliente verifique toda la información, así como el contenido, dando por concluido el proceso. Nuestros ingenieros realizan revisiones de rutina, pero necesita de la ayuda del cliente para finalizar el proceso.
      </p>

      <p class=" text-politica mb-3">
      En caso de tener su propio backup (respaldo), nuestros ingenieros de soporte técnico pueden realizar la restauración gratuita, solo debe enviar su ticket a <a class="text-decoration-none" href="mailto:soporte@pbxhosting.com.mx" style="color: #1668af;">soporte@pbxhosting.com.mx</a> solicitando la restauración de los datos. Es importante que los datos estén en su web hosting y para eso deba enviarlos vía FTP.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">PLAN S.O.S.</span>
      </p>

      <p class=" text-politica mb-3">
      - Esta promoción no es acumulable con otras promociones.<br>
      - Esta promoción estará vigente del 01 al 31 de julio del 2019 o hasta agotar existencia.<br>
      - El Hosting a contratar será nuestro plan S.O.S el cual tiene las características para un hosting en tamaño promedio.<br>
      - El hosting con Plan S.O.S será gratuito por el tiempo de contratación que tenía con su anterior proveedor, al vencimiento deberá renovarlo con nosotros al precio de lista de $500MXN + iva<br>
      - El cliente está obligado a enviar la factura o último recibo de pago que hizo a su anterior proveedor.<br>
      - PBX Hosting se reserva el derecho de negar el servicio a aquel cliente que no envíe la documentación completa para el proceso de contratación.<br>
      - El hosting se activará hasta que el cliente haya enviado la factura o comprobante de pago de su anterior proveedor.<br>
      - Esta promoción no incluye el registro de dominio GRATIS por un año<br>
      - Esta promoción no incluye la transferencia del dominio hacia PBX Hosting, si el cliente desea transferir el dominio deberá cubrir el costo.<br>
      - El cliente se compromete a asignar los DNS de PBX Hosting al dominio para que funcione correctamente su página web y correo electrónicos.<br>
      - Nuestro equipo de soporte técnico puede ayudarle a migrar la información, enviando la solicitud a soporte@pbxhosting.com.mx siempre y cuando el hosting con su anterior proveedor tenga cPanel, de lo contrario únicamente podremos darle asesoría completa para que hagan el respaldo y migración de información.<br>
      - En caso de incurrir en algún abuso de recurso en el plan S.O.S. , el Hosting será suspendido sin derecho a reactivación.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">TRANSFERENCIA DEL DOMINIO</span>
      </p>

      <p class=" text-politica mb-3">
      La transferencia de dominio es un proceso diferente e independiente de la mudanza del web hosting, cuando el cliente requiere transferir el dominio hacia la administración de PBX Hosting es necesario que cubra un costo de $440 MXN + IVA para extensiones .com, .com.mx, .org, otra extensión es bajo cotización a ventas@pbxhosting.com.mx
      </p>

      <p class=" text-politica mb-3">
      Antes de iniciar una transferencia de dominio el cliente requiere saber lo siguiente:
      </p>

      <p class=" text-politica mb-3">
      Requisitos:
      </p>

      <p class=" text-politica mb-3">
      - El dominio debe transferirse mínimo 30 días antes del vencimiento o con varios meses antes de su vencimiento.<br>
      - Se debe solicitar al actual administrador que desboque el dominio<br>
      - Si se cumplen los pasos anteriores, se paga la orden de compra y se espera a que se identifique el pago.<br>
      - Usted debe solicitar el código EPP TRASFER (código de transferencia) a su anterior administrador de dominio y debe hacérnoslo llegar inmediatamente para comprar la transferencia del dominio.<br>
      - Nosotros le indicaremos una vez hayamos comprado la transferencia del dominio para que su anterior proveedor acepte darnos el dominio.<br>
      - Hay que esperar a que el dominio se coloque en nuestra consola (aproximadamente 5 días siempre y cuando el proveedor acepte darnos el dominio, de lo contrario hay que esperar de 10 a 15 dias).<br>
      - Una vez se coloca el dominio en nuestra consola, éste se renueva un año más y debe renovarse año con año ahora en PBX Hosting.<br>
      - Si se retrasa en enviar el código de transferencia podemos perder el proceso, ya que el código se caduca.<br>
      - Si el dominio está a punto de vencer es bajo su responsabilidad el inicio de la transferencia.<br>
      - Si se llega a solicitar la transferencia y el dominio no está desbloqueado perdemos la transferencia.<br>
      - El dominio no debe estar recién renovado, mínimo 1 mes después de su renovación.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se reserva el derecho de modificar/actualizar en cualquier momento los términos y condiciones publicados en este apartado, informando al final de dichos términos la última fecha de actualización.
      </p>

      <p class=" text-politica mb-3">
      Es obligación del cliente revisar periódicamente o después de cada contratación, el apartado de Términos y Condiciones ya que se considerará que el Usuario acepta los nuevos términos y las partes continuarán vinculadas.
      </p>

      <p class=" text-politica mb-3">
      Estos términos y condiciones aplican para todo aquel cliente que contrate los servicios de PBX Hosting, ya sea cliente final, revendedor, etc.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">SEGURIDAD EN SERVIDORES DEDICADOS O VPS PARA HOSTEO PARTICULAR</span>
      </p>

      <p class=" text-politica mb-3">
      La responsabilidad sobre los servicios que PBX HOSTING provee mediante su sitio web y demás medios de comunicación, recae íntegramente en el cliente titular del servicio. Nuestros ingenieros de soporte técnico no administran físicamente las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde al cliente final del servicio.
      </p>

      <p class=" text-politica mb-3">
      Si llegara a presentar dudas o tener problemas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">POLITICA DE SEGURIDAD EN RED DE TRABAJO INTERNA</span>
      </p>

      <p class=" text-politica mb-3">
      Todo cliente que utiliza los servicios de PBX Hosting, llámese telefonía, hosting, dedicados, vps, sms, o cualquier otro, se compromete a resguardar la seguridad de su red de trabajo.
      </p>

      <p class=" text-politica mb-3">
      Por la parte de la Troncal SIP de voz IP hay implementadas medidas de seguridad para minimizar los riesgos de hacking telefónico en toda la plataforma, pero para habilitarlas necesitamos de su autorización pues de alguna manera limitara su servicio, si requiere saber más de ellas debe solicitar asesoría en <a class="text-decoration-none" href="mailto:soporte@pbxhosting.com.mx" style="color: #1668af;">soporte@pbxhosting.com.mx</a>
      </p>

      <p class=" text-politica mb-3">
      El cliente se compromete a tomar las medidas de precaución en su red de trabajo interna, como por ejemplo:
      </p>

      <p class=" text-politica mb-3">
      • Revisar brechas de IPs y puertos abiertos, usados habitualmente en este tipo de ataques. La mayoría de ataques son a través de agujeros en la red informática del cliente.<br>
      • Contraseñas WiFi. Debemos tener cuidado que la telefonía voip es accesible si se cuelan a la red informática y eso incluye el acceso por wifi. Mucho cuidado especialmente en redes wifi públicas.<br>
      • Mantener una IP fija con el operador voip. Es una medida de protección adicional si la telefonía sólo la tenemos disponible desde la IP fija de la oficina. Sin embargo, esto dificulta un despliegue en múltiples sedes, el teletrabajo, y usuarios remotos.<br>
      • Cambiar claves de configuración en terminales. Los teléfonos SIP tienen una clave de fábrica para la configuración. Es recomendable cambiarlo por una clave secreta.<br>
      • Los correos electrónicos pueden estar infectados con algún virus y si se ejecuta puede infectar la red de trabajo y obtener los accesos a la troncal sip.<br>
      • Mantener actualizadas las aplicaciones que utilice en los equipos de cómputo, ya que, al no estar en la última versión, estas pueden ser vulneradas.<br>
      Cualquier otra actividad que no se mencione aquí pero que pueda poner en vulnerabilidad el acceso al servicio de telefonía IP o servicios de hosteo.
      </p>

      <p class=" text-politica mb-3">
      Las medidas anteriores también ayudan para evitar hackeos del servicio de web hosting y con ello evitar el uso mal intencionado donde se pueden presentar actividades como envío de SPAM o Phishing, dando a lugar la suspensión inmediata del servicio.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se deslinda de cualquier intrusión si el cliente no toma las medidas de precaución y seguridad en su red interna de trabajo y no es responsable de reponer saldos agotados en la parte de la telefonía y arreglar la reputación de un dominio en el hosteo.

      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">HACKEOS EN SERVICIOS DE TELEFONIA Y SMS</span>
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting se deslinda de saldos consumidos por hackeos en servicios de telefonía VoIP y SMS, ejecutados por la poca o nula seguridad que el cliente y/o usuario final tiene en su red interna de trabajo, así como información de acceso compartida con otros usuarios.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting cuenta con seguridad a nivel servidor, así como en su red de trabajo y brinda todas las recomendaciones necesarias a sus clientes al momento de contratar sus servicios para que protejan su red interna de trabajo, evitando con ello alguna intrusión o hackeo generando consumos no deseados.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting no es responsable si el cliente no lleva a cabo esas recomendaciones y en algún momento llegara a presentar algún hackeo, así como consumo de saldo/crédito, por lo cual no está obligado a llevar a cabo algún rembolso por esta índole.
      </p>

      <p class=" text-politica mb-3">
      Consulte las Recomendaciones de Seguridad para su Red de Trabajo <a href="/pdf/Recomendaciones-de-Seguridad-para-su-Red-Interna-de-Trabajo.pdf" target="_blank" class="text-decoration-none fw-semibold" style="color: #1668af;">Aquí</a>
      </p>
    `
  },

  //TÉRMINOS Y CONDICIONES DEL SERVICIO DE WHATSAPP MASIVO
  {
    title: 'TÉRMINOS Y CONDICIONES DEL SERVICIO DE WHATSAPP MASIVO',
    content: `
      <p class=" text-politica mb-3">
      <span class="fw-semibold">1. Objeto del servicio</span>
      </p>

      <p class=" text-politica mb-3">
      Nuestra empresa proporciona una solución para el envío de mensajes masivos a través de nuestra herramienta <span class="fw-semibold">Ominicanal CIROX</span>. Este servicio se ofrece mediante la infraestructura y herramientas autorizadas de Meta, por lo que su funcionamiento está sujeto a las políticas, condiciones y lineamientos establecidos por dicha plataforma.
      </p>

      <p class=" text-politica mb-3">
      Al contratar el servicio, el cliente reconoce y acepta que el uso de WhatsApp Masivo depende del cumplimiento de las políticas vigentes de Meta.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">2. Cumplimiento de las políticas de Meta</span>
      </p>

      <p class=" text-politica mb-3">
      El cliente se compromete a utilizar el servicio conforme a las políticas, condiciones y normas establecidas por Meta para WhatsApp Business.
      </p>

      <p class=" text-politica mb-3">
      Nuestra empresa actúa como proveedor de la solución, pero no tiene facultad para modificar, eliminar o intervenir en las decisiones que Meta adopte respecto al uso de la plataforma.
      </p>

      <p class=" text-politica mb-3">
      Cualquier restricción, limitación, suspensión, rechazo o bloqueo realizado por Meta como resultado del incumplimiento de sus políticas será responsabilidad exclusiva del cliente.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">3. Responsabilidad sobre el contenido de los mensajes</span>
      </p>

      <p class=" text-politica mb-3">
      El cliente es el único responsable del contenido de los mensajes enviados mediante el servicio.
      </p>

      <p class=" text-politica mb-3">
      El cliente declara que cuenta con las autorizaciones necesarias para utilizar nombres comerciales, marcas, logotipos, razones sociales, productos o cualquier otro elemento de terceros incluido en sus comunicaciones.
      </p>

      <p class=" text-politica mb-3">
      Queda estrictamente prohibido:
      </p>

      <p class=" text-politica mb-3">
      • Hacerse pasar por otra empresa, marca o entidad.<br>

      • Utilizar nombres comerciales o marcas sin autorización.<br>

      • Inducir a error a los destinatarios respecto de la identidad del remitente.<br>

      • Enviar información falsa, engañosa, fraudulenta o que infrinja derechos de terceros.<br>

      • Realizar prácticas consideradas como spam por Meta.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">4. Uso de plantillas de mensajes</span>
      </p>

      <p class=" text-politica mb-3">
      Cuando la plataforma lo requiera, el cliente acepta que únicamente podrán utilizarse plantillas de mensajes previamente aprobadas por Meta.
      </p>

      <p class=" text-politica mb-3">
      La aprobación, modificación, rechazo o suspensión de dichas plantillas es una decisión exclusiva de Meta y se encuentra fuera del control de nuestra empresa.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">5. Restricciones impuestas por Meta</span>
      </p>

      <p class=" text-politica mb-3">
      El cliente reconoce que Meta puede, en cualquier momento y sin previo aviso:
      </p>

      <p class=" text-politica mb-3">
      • Rechazar plantillas de mensajes.<br>

      • Limitar el envío de mensajes.<br>

      • Suspender campañas.<br>

      • Restringir la cuenta de WhatsApp Business.<br>

      • Bloquear temporal o definitivamente el acceso al servicio.
      </p>

      <p class=" text-politica mb-3">
      Estas acciones obedecen a las políticas internas de Meta y no constituyen una falla del servicio proporcionado por nuestra empresa.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">6. Suspensión o bloqueo por Meta.</span>
      </p>

      <p class=" text-politica mb-3">
      El cliente reconoce y acepta que Meta es la única autoridad facultada para aprobar, restringir, suspender o cancelar cuentas, números telefónicos, plantillas o el acceso a WhatsApp Business. En caso de que Meta suspenda, límite o bloquee el servicio como consecuencia del incumplimiento de sus políticas por parte del cliente, incluyendo, de manera enunciativa más no limitativa, el uso indebido de marcas, la suplantación de identidad, el envío de contenido no autorizado o cualquier otra infracción a sus políticas, <span class="fw-semibold">el proveedor no estará obligado a realizar reembolsos, devoluciones, bonificaciones o compensaciones</span> por los servicios contratados, sin perjuicio de las demás acciones que correspondan conforme al contrato.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">7. Solicitudes de baja de los destinatarios</span>
      </p>

      <p class=" text-politica mb-3">
      El cliente deberá respetar las solicitudes de los usuarios que manifiesten su deseo de dejar de recibir comunicaciones por WhatsApp.
      </p>

      <p class=" text-politica mb-3">
      Asimismo, será responsabilidad del cliente mantener actualizadas sus bases de datos y eliminar de sus listas de envío a las personas que soliciten no recibir más mensajes.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">8. Disponibilidad del servicio</span>
      </p>

      <p class=" text-politica mb-3">
      Nuestra empresa garantiza el acceso y funcionamiento de la plataforma tecnológica contratada.
      </p>

      <p class=" text-politica mb-3">
      No obstante, la entrega de mensajes, las restricciones de envío, la velocidad de procesamiento, la aprobación de plantillas, la calidad de la cuenta o cualquier limitación aplicada por Meta dependen exclusivamente de dicha plataforma.
      </p>

      <p class=" text-politica mb-3">
      Por ello, nuestra empresa no garantiza que todos los mensajes enviados sean entregados cuando existan restricciones impuestas por Meta.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">9. Reembolsos</span>
      </p>

      <p class=" text-politica mb-3">
      El cliente acepta que la contratación del servicio corresponde a una licencia de uso de una plataforma tecnológica.
      </p>

      <p class=" text-politica mb-3">
      No procederán reembolsos cuando:
      </p>

      <p class=" text-politica mb-3">
      • El servicio haya sido activado o utilizado.<br>

      • Meta límite, rechace o bloquee mensajes por incumplimiento de sus políticas.<br>

      • Meta rechace plantillas de mensajes.<br>

      • Existen restricciones derivadas del contenido enviado por el cliente.<br>

      • El cliente utilice nombres comerciales, marcas o información que infrinja las políticas de Meta.<br>

      • El cliente incumpla cualquiera de las presentes condiciones o las políticas de WhatsApp Business.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">10. Limitación de responsabilidad</span>
      </p>

      <p class=" text-politica mb-3">
      Nuestra empresa no será responsable por pérdidas económicas, campañas detenidas, disminución de ventas, suspensión de cuentas o cualquier daño derivado de decisiones tomadas por Meta en aplicación de sus políticas.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">11. Modificaciones</span>
      </p>

      <p class=" text-politica mb-3">
      Nuestra empresa podrá actualizar estos Términos y Condiciones cuando Meta modifique sus políticas o cuando resulte necesario para la correcta prestación del servicio.
      </p>

      <p class=" text-politica mb-3">
      Las modificaciones serán aplicables a partir de su publicación.
      </p>

      <p class=" text-politica mb-3">
      <span class="fw-semibold">12. Aceptación</span>
      </p>

      <p class=" text-politica mb-3">
      La contratación, activación o utilización del servicio implica que el cliente ha leído, comprendido y aceptado estos Términos y Condiciones, así como las políticas vigentes de WhatsApp Business establecidas por Meta: <a class="text-decoration-none" href="https://whatsappbusiness.com/es-la/policy/" style="color: #1668af;">https://whatsappbusiness.com/es-la/policy/</a>
      </p>
    `
  },

  //TÉRMINOS Y CONDICIONES DE PAQUETES
  {
    title: 'TÉRMINOS Y CONDICIONES DE PAQUETES',
    content: `
      <p class=" text-politica mb-3">
      La política de uso razonable de PBXhosting se ha diseñado para impedir los fraudes y los abusos relacionados con nuestros productos.
      </p>

      <p class=" text-politica mb-3">
      Los paquetes de PBXhosting están destinados únicamente al uso individual o empresarial. A continuación le indicamos una lista no exhaustiva de prácticas que no se podrían considerar Uso Legítimo:
      </p>

      <p class=" text-politica mb-3">
      - Uso de planes para telemarketing u operaciones de centros de llamadas<br>
      - Reventa de minutos de un plan<br>
      - Uso compartido de planes entre usuarios a través de un sistema PBX, centro de llamadas, equipo informático o cualquier otro medio<br>
      - Llamadas a números (ya sea de forma única, secuencial o automática) para generar ingresos para uno mismo o para otros como consecuencia de las llamadas, cuando no se trate de comunicaciones comerciales personales<br>
      - Patrones de llamadas inusuales que no sean consecuentes con el uso normal y personal del plan, por ejemplo, llamadas habituales de corta duración o llamadas a varios números en un corto periodo de tiempo.
      </p>

      <p class=" text-politica mb-3">
      Puede haber otras prácticas relevantes para determinar el Uso Legítimo y PBXhosting se reserva el derecho de tener en cuenta cualquier actividad ilícita, prohibida, anormal o inusual en el momento de tomar su determinación.
      </p>

      <p class=" text-politica mb-3">
      PBXhosting puede optar por finalizar o suspender la relación con usted o suspender su uso de cualquier producto de PBXhosting de inmediato si determina que está usando el producto de forma contraria a lo estipulado en estos Paquetes.
      </p>

      <p class=" text-politica mb-3">
      En virtud de esta politica, los planes sin límites de PBXhosting permiten llamadas ilimitadas a teléfonos fijos y moviles en los países correspondientes a los planes (se excluyen números especiales, premium, de servicio y no geográficos) durante el periodo especificado en el momento de la compra.
      </p>

      <p class=" text-politica mb-3">
      Las llamadas ilimitadas a teléfonos móviles también pueden incluirse donde se especifique en el momento de la compra. Después de 1 hora de duración, todas las llamadas se desconectarán y el usuario deberá volver a marcar.
      </p>

      <p class=" text-politica mb-3">
      La política de uso razonable de PBX Hosting se ha diseñado para impedir los fraudes y abusos relacionados con nuestros productos. Los paquetes de PBX Hosting están destinados únicamente al uso individual o empresarial, queda estrictamente prohibido su uso en Call Center y esquema de Revendedores.
      </p>

      <p class=" text-politica mb-3">
      A continuación le indicamos una lista no exhaustiva de prácticas que no se podrían considerar Uso Legítimo:
      </p>

      <p class=" text-politica mb-3">
      - Uso de planes para telemarketing u operaciones de centros de llamadas<br>
      - Reventa de minutos de un plan<br>
      - Uso compartido de planes entre usuarios a través de un sistema PBX, centro de llamadas, equipo informático o cualquier otro medio<br>
      - Llamadas a números (ya sea de forma única, secuencial o automática) para generar ingresos para uno mismo o para otros como consecuencia de las llamadas, cuando no se trate de comunicaciones comerciales personales<br>
      - Patrones de llamadas inusuales que no sean consecuentes con el uso normal y personal del plan, por ejemplo, llamadas habituales de corta duración o llamadas a varios números en un corto periodo de tiempo
      </p>

      <p class=" text-politica mb-3">
      Puede haber otras prácticas relevantes para determinar el Uso Legítimo y PBX Hosting se reserva el derecho de determinar cualquier actividad ilícita, prohibida, anormal o inusual para efectual la suspensión y/o cancelación definitiva del servicio.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting puede optar por finalizar o suspender la relación con usted o suspender el servicio de cualquier producto de PBX Hosting de inmediato si determina que el servicio no se está usando de acuerdo dentro de los lineamientos establecidos. Dando  <a href="/excel/destinos.xlsx" download="Tabla_Destinos_Permitidos.xlsx" class="fw-bold text-decoration-none d-inline-flex align-items-center gap-2" style="color: #1668af;"> Click Aquí</a> podrá descargar los destinos permitidos y restringidos en su Plan Ilimitado.
      </p>

    `
  },



])
</script>


<!-- 
<p class=" text-politica mb-3"></p>
<span class="fw-semibold"></span>
<span></span>
<a class="text-decoration-none" href="mailto:" style="color: #1668af;"></a>
-->

<style scoped>
.accordion-button {
  font-weight: 600;
}

.accordion-body {
  padding-left: 1.2rem;
}

.text-pbx {
  color: #004182 !important
}
</style>