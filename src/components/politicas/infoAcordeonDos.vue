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
  //DATOS GENERALES
  {
    title: 'DATOS GENERALES',
    content: `
      <p class=" text-politica mb-3">
        Con fines legales, la "EMPRESA" declara su condición de persona moral debidamente constituida conforme a la legislación mexicana, lo que le faculta para otorgar y administrar los servicios que ofrece. Nuestra sede se encuentra ubicada en Calle: Tamaulipas #607, Zona centro, Tampico, Tamaulipas. Cp. 89000 y estamos disponibles para contacto a través del número telefónico (55) 41708990.
      </p>

      <p class=" text-politica mb-3">
      Bajo el nombre comercial "PBX Hosting By INBTEL", contamos con el sitio web oficial <a class="text-decoration-none" href="/" style="color: #1668af;">www.pbxhosting.com.mx</a>  en el que el "USUARIO" puede acceder para consultar la disponibilidad y/o contratación de un dominio, el cual se realiza a través del registrar acreditado Akky Online Solutions, S.A. de C.V. entidad encargada de los servicios y atención para los usuarios relacionados con la administración de Nombres de Dominio, Servicios de Dominio y Servicios de Presencia.
      </p>
    `
  },

  //NOMBRES DE DOMINIO
  {
    title: 'NOMBRES DE DOMINIO',
    content: `
      <p class=" text-politica mb-3">
      Un Nombre de Dominio deberá tener las siguientes características:
      </p>

      <ul class="p-0 text-politica">
        <li class="mb-2">- La longitud total del Nombre de Dominio, sin incluir los caracteres de la Clasificación, no deberá exceder los sesenta y tres (63) caracteres, de conformidad con lo estipulado por el Registry que corresponda.</li>
        <li class="mb-2">- Los caracteres válidos son números, letras del alfabeto inglés y el guion (-).</li>
        <li class="mb-2">- Los Nombres de Dominio no deberán comenzar o terminar con el guion (-) ni llevar dos guiones seguidos (--).</li>
        <li class="mb-2">- Los Nombres de Dominio deberán respetar las prohibiciones que los Registries correspondientes hayan determinado para los Nombres de Dominio.</li>
        <li class="mb-2">- En PBX Hosting no llevamos a cabo el registro de IDN o de Nombres de Dominio Premium.</li>
        <li class="mb-2">- Al concluir el registro de un Nombre de Dominio, se coloca el Bloqueo de Transferencia en modo Activo, quedando sujeta su modificación a Inactivo de acuerdo a lo establecido en las presentes políticas y a los lineamientos del Registry correspondiente.</li>

      </ul>

    `
  },

  //FACULTADES Y OBLIGACIONES DE LOS USUARIOS Y CONTACTOS
  {
    title: 'FACULTADES Y OBLIGACIONES DE LOS USUARIOS Y CONTACTOS',
    content: `
      <p class=" text-politica mb-3">
      El Usuario Principal será el único facultado para realizar la asignación y cancelación de permisos otorgados a los otros Usuarios, así como la asignación y/o modificación de Contactos, así como contratar Servicios de Dominio en nombre del Registrante (Titular), adicionalmente podrá revocar su carácter como tal a través del Sistema, siempre y cuando asigne a un nuevo Usuario Principal.
      </p>

      <p class="text-politica mb-3 fw-semibold">
      Facultades de los usuarios
      </p>

      <p class=" text-politica mb-3">
      Sólo los Usuarios con permisos de Pago y los Usuarios con permisos Técnicos podrán aceptar o rechazar dicha asignación en el momento de ser designados, mediante el sistema o bien, solicitar al Usuario Principal la revocación de su asignación. Esta aceptación o rechazo sólo la deberá realizar el Usuario con permisos de Pago y/o el Usuario con permisos Técnicos cuando sea asignado por primera vez a un Usuario
      </p>

      <p class=" text-politica mb-3">
      El Usuario Principal y/o Usuarios con permisos de Pago, según corresponda, serán los únicos que podrán solicitar el cambio de Estatus del Nombre de Dominio, de Suspendido Inicial y/o Suspendido Final a Activo, mediante el registro de la Orden de Servicios y/o pago de la misma, según sea el caso.
      </p>

      <p class=" text-politica mb-3">
      El Usuario Principal y/o Usuario con permisos de Pago puede realizar Órdenes de Servicios y sólo podrá consultar o rechazar las que él haya efectuado; así como tener acceso a las facturas correspondientes.
      </p>

      <p class=" text-politica mb-3">
      El Usuario Principal y/o Usuario con permisos Técnicos puede efectuar la asignación y modificación de la información de los servidores de DNS y/o de los Registros DS.
      </p>

      <p class="text-politica mb-3 fw-semibold">
      Obligaciones de los usuarios y los contactos
      </p>

      <p class=" text-politica mb-3">
      Los Usuarios para cada Nombre de Dominio deberán mantener sus datos y los de los Contactos actualizados, ya que es de suma importancia que estén al tanto de cualquier información relativa a los Nombres de Dominio, incluyendo notificaciones de pago.
      </p>

      <p class=" text-politica mb-3">
      Los Usuarios y los Contactos para cada Nombre de Dominio reconocen que el Registrante será considerado el titular del Nombre de Dominio.
      </p>

      <p class=" text-politica mb-3">
      El Usuario Principal y/o los Usuarios con permisos de Pago son los responsables de atender las notificaciones de pago, avisos de eliminación por falta de pago, así como demás operaciones y notificaciones correspondientes a las Órdenes de Servicios.
      </p>
    `
  },

  //OBLIGACIONES GENERALES DEL USUARIO
  {
    title: 'OBLIGACIONES GENERALES DEL USUARIO',
    content: `
      <p class=" text-politica mb-3">
      El "USUARIO" se compromete a suministrar información veraz al realizar una orden de compra, garantizando que todos los datos proporcionados son auténticos y verificables. En este sentido, exonera a la "EMPRESA" de cualquier responsabilidad que pueda surgir por la falta de veracidad en su conducta, así como por la falsificación de documentos o el uso indebido de identidades, nombres, direcciones u otros datos de identificación para contratar los servicios ofrecidos por la "EMPRESA". El "USUARIO" declara ser mayor de 18 años y poseer la capacidad legal necesaria para adherirse al presente documento y a todas sus consecuencias, asumiendo la responsabilidad por el uso adecuado de los derechos propios y ajenos relacionados con la propiedad industrial, intelectual, derechos de autor y cualquier otro derecho relacionado.
      </p>

      <p class=" text-politica mb-3">
      Asimismo, el "USUARIO" tiene la obligación de familiarizarse con los Términos y Condiciones Generales que rigen nuestro servicio. Los Términos y Condiciones Generales se encuentran disponibles en nuestra página web oficial para su consulta. Es importante que el "USUARIO" los revise minuciosamente antes de hacer uso de nuestros servicios.
      </p>
    `
  },

  //OBJETO
  {
    title: 'OBJETO',
    content: `
      <p class=" text-politica mb-3">
      El presente instrumento tiene como finalidad establecer los derechos y obligaciones del "USUARIO" en relación con el servicio de dominios, abarcando, entre otros aspectos, el registro, cancelación, transferencia, suspensión, así como aspectos relacionados con la propiedad intelectual e industrial.
      </p>

      <p class=" text-politica mb-3">
      Nuestra entidad, la "EMPRESA", ofrece servicios de registro, reserva, alojamiento y arrendamiento de dominios web. Al registrar un nombre de dominio, el "USUARIO" acepta cumplir con todos los procedimientos, reglamentos, estándares, requisitos, políticas y prácticas establecidos por nuestra empresa.
      </p>

      <p class=" text-politica mb-3">
      Cabe mencionar que la "EMPRESA" no asume responsabilidad en caso de que el "USUARIO" pierda la posesión de su dominio por cualquier motivo. Es responsabilidad exclusiva del "USUARIO" mantener adecuadamente los registros de propiedad industrial e intelectual, con el propósito de evitar que terceros se apropien de su dominio.
      </p>
    `
  },

  //PROHIBICIONES
  {
    title: 'PROHIBICIONES',
    content: `
    <p class=" text-politica mb-3">
      El servicio proporcionado tanto de alojamiento como registro de dominio no debe ser utilizado para los siguientes fines:
    </p>

    <ol class="p-3 text-politica">
      <li class="mb-1"> Fraude de Cuota Anticipada "spam": Queda prohibido el uso del servicio para solicitar cuotas anticipadas con la promesa de obtener ganancias monetarias.</li>
      <li class="mb-1"> Uso de "spam": No está permitido el uso intencional o no intencional de prácticas de "spam" para enviar correos electrónicos no solicitados.</li>
      <li class="mb-1"> Pornografía Infantil: Se prohíbe hospedar, distribuir o enlazar sitios que contengan pornografía que involucre a personas que aparenten ser menores de edad, incluyendo contenido que pueda denominarse como "Soft Porn" o "Pornografía Suave", que involucre a menores de edad, incluso si no incluye desnudos. Esto incluye el envío de correos electrónicos que contengan o enlacen a contenido pornográfico que involucre a una persona legalmente menor de edad</li>
      <li class="mb-1"> Parafilias: Está prohibido hospedar, distribuir o enlazar a sitios con contenido erótico o pornográfico relacionado con parafilias, incluyendo, pero sin limitarse a Zoofilia, Coprofilia y Necrofilia, o cualquier otro trastorno sexual relacionado con estos.</li>
      <li class="mb-1"> Violación de derechos de autor y demás derechos de propiedad intelectual": No está permitido hospedar, distribuir o enlazar a materiales protegidos por derechos de autor, propiedad intelectual o industrial, ni utilizar marcas registradas sin la debida autorización de los titulares respectivos.</li>
      <li class="mb-1"> "Denegación de Servicio" (DoS, Denial of Service): Queda estrictamente prohibido realizar ataques de denegación de servicio a dispositivos de red.</li>
      <li class="mb-1"> "Falsificación": Queda prohibido falsificar una dirección IP, nombre de host (hostname), correo electrónico o encabezado (header).</li>
      <li class="mb-1"> "Sitio de Fraude": No está permitido hospedar o enlazar a algún sitio con la intención de engañar al público, incluyendo esquemas piramidales y métodos de inversión fraudulenta.</li>
      <li class="mb-1"> "Hacking" o "Cracking": Se prohíbe sortear o intentar sortear sistemas de seguridad de dispositivos de red para obtener acceso no autorizado a un sistema, por cualquier medio.</li>
      <li class="mb-1"> "Robo de identidad", "Infección", "IRC Malicioso o no permitido", "Proxy y Relay": Queda terminantemente prohibido hospedar, distribuir o enlazar a información de cuentas robadas, así como a Exploits, Caballos de Troya, Virus o Gusanos. Además, el uso malicioso del servicio de Internet Relay Chat o la utilización de Proxy Inseguro (Open Proxy) o Relay Inseguro (Open Relay) sin nuestra previa aprobación están prohibidos.</li>
      <li class="mb-1"> Abuso de vulnerabilidad de un Proxy de un Tercero: No está permitido abusar de la vulnerabilidad de un Proxy de un Tercero.</li>
      <li class="mb-1"> "Phishing": Queda prohibido realizar cualquier proceso fraudulento para intentar obtener información delicada, como nombres de usuario, contraseñas o detalles de tarjetas de crédito, haciéndose pasar por una entidad segura y de confianza a través de una comunicación electrónica.</li>
      <li class="mb-1"> "Escaneo": Se prohíbe realizar escaneos de vulnerabilidades en dispositivos de red sin autorización.</li>
      <li class="mb-1"> "Shells": No está permitido hospedar cuentas principalmente para acceso vía shell.</li>
      <li class="mb-1"> "Farmacia en Línea": Queda terminantemente prohibido infringir la Ley de protección del consumidor de farmacia en línea Ryan Haight de 2008, así como la Ley General de Salud en México, en su artículo 226, y legislaciones similares. Además, se prohíbe promover, alentar o involucrarse en la venta o distribución de medicamentos de venta bajo receta sin receta válida.</li>
      <li class="mb-1"> Violación de protección de datos personales: No está permitido violar la protección de datos personales de los usuarios del dominio web.</li>
      <li class="mb-1"> Acceso indebido a servidores y sistemas internos: Queda estrictamente prohibido que el "USUARIO" acceda o intervenga en los servidores y sistemas internos de la "EMPRESA" y sus afiliadas que no estén al alcance de un usuario común, con el fin de obtener beneficios, ventajas, información confidencial u operativa, cometer fraudes o cualquier acto ilícito. Cualquier acceso indebido se considerará un delito castigado por el Código Penal Federal. <br><br>
      En general, queda terminantemente prohibida la comisión de cualquier delito o ilícito contemplado en la legislación mexicana que pueda llevarse a cabo mediante la utilización de nuestros servicios. Cualquier acto que contravenga la ley será perseguido y sancionado de conformidad con el Código Nacional de Procedimientos Penales o cualquier otra legislación aplicable en la materia.<br><br>
      La "EMPRESA" se reserva el derecho de denunciar cualquier conducta del "USUARIO" que identifique como delictiva ante las autoridades competentes.
      </li>
    </ol>
    `
  },

  //REGISTRO DE DOMINIO
  {
    title: 'REGISTRO DE DOMINIO',
    content: `
      <p class=" text-politica mb-3">
      El "USUARIO" tiene la obligación de proporcionar y mantener actualizados sus datos de contacto (nombre del titular, nombre de la compañía, dirección postal, teléfono y correo electrónico) con información veraz y confiable durante el proceso de registro del nombre de dominio. Además, es responsabilidad del "USUARIO" corregir y actualizar rápidamente cualquier cambio en sus datos mientras dure el registro del nombre de dominio. En caso de que el "USUARIO" o el titular del nombre de dominio proporcionen intencionalmente información inexacta o no confiable, o no actualicen sus datos de manera oportuna y no respondan en un plazo de 15 días naturales a las solicitudes de actualización enviadas por la "EMPRESA", el registro del nombre de dominio podrá ser cancelado.
      </p>

      <p class=" text-politica mb-3">
      El "USUARIO" comprende que existen tipos de dominios especiales y/o específicos que deben cumplir con ciertos requisitos para poder ser registrados, como dominios para entidades gubernamentales, educativas, sin fines de lucro, entre otros. En este sentido, el "USUARIO" se compromete a cumplir con dichos lineamientos y reconoce que la "EMPRESA" no será responsable por cualquier confusión en la información de registro relacionada con estos tipos de dominios.
      </p>

      <p class=" text-politica mb-3">
      En el caso de que el "USUARIO" o el titular del nombre de dominio registre un dominio y permita que una tercera persona lo utilice sin que esta última esté incluida en el acuerdo entre la "EMPRESA" y el "USUARIO", el "USUARIO" o el titular del dominio registrado podrían ser considerados responsables por cualquier uso indebido del nombre de dominio por parte de la tercera persona. Asimismo, el "USUARIO" acepta con la "EMPRESA" que el registro del nombre de dominio está sujeto a suspensión, cancelación o transferencia en las siguientes circunstancias:
      </p>

      <ol class="p-3 text-politica">
        <li class="mb-1">En el caso de dominios gTLD, el "USUARIO" deberá verificar el correo electrónico designado como contacto registrante de whois dentro de un plazo de 15 días a partir de su registro. De no llevar a cabo esta verificación en el tiempo estipulado, el dominio será suspendido.</li>
        <li class="mb-1">Asimismo, el dominio podrá ser suspendido si así lo requiere alguna especificación o política adoptada por ICANN (Corporación de Asignación de Nombres y Números de Internet).</li>
        <li class="mb-1">La "EMPRESA" podrá proceder a suspender el dominio si el procedimiento de registro del nombre de dominio lo exige para corregir errores del registrador o del Registro, y al momento de registrar un nombre de dominio.</li>
        <li class="mb-1">La suspensión del dominio también puede ocurrir como resultado de una resolución de disputas UDRP (Política Uniforme de Solución de Controversias en materia de Nombres de Dominio), que esté relacionada con el nombre de dominio registrado.</li>
      </ol>
      
      <p class=" text-politica mb-3">
      El "USUARIO" o titular del nombre de dominio manifiesta y garantiza que el registro o uso del nombre de dominio con la "EMPRESA" no infringe los derechos legales de terceros, de acuerdo con la Política de Resolución de Disputas por Nombres de Dominio (UDRP). Asimismo, asegura que el nombre de dominio no se está registrando con propósitos ilegales y que no será utilizado para violar ninguna ley aplicable; de lo contrario, la "EMPRESA" se reserva el derecho de eliminar y/o suspender sin previo aviso el nombre de dominio registrado por el "USUARIO".
      </p>

      <p class=" text-politica mb-3">
      La "EMPRESA" no asumirá responsabilidad por la disponibilidad del dominio que el "USUARIO" pretenda adquirir o utilizar si este no se encuentra disponible en el momento de la solicitud de registro. El "USUARIO" está consciente de los alcances legales de la búsqueda de disponibilidad, y la "EMPRESA" realizará dicha búsqueda en el mercado internacional de dominios sin que esto implique obligación de obtener resultados positivos en la búsqueda, reserva o compra del dominio deseado. En caso de que el "USUARIO" desee cambiar el nombre del dominio adquirido, deberá notificar a la "EMPRESA" por correo electrónico dentro de un plazo no mayor a 3 días posteriores al registro. Para este cambio de nombre de dominio, la "EMPRESA" no se hará responsable de la disponibilidad del nuevo dominio en el mercado internacional de dominios, ni estará obligada en ningún momento a realizar el cambio en el nombre del dominio contratado por el "USUARIO".
      </p>

      <p class=" text-politica mb-3">
      El "USUARIO" o titular del nombre de dominio se compromete a indemnizar y eximir de responsabilidad al Registry, directores, autoridades, empleados, agentes y afiliados de cualquier demanda, daño, responsabilidad legal, costo y gasto (incluyendo tarifas y gastos legales razonables) que surjan o estén relacionados con el registro del nombre de dominio del "USUARIO" o titular del dominio registrado.
      </p>

      <p class=" text-politica mb-3">
      Asimismo, el "USUARIO" que registra dominios ".com" o ".net" se compromete a indemnizar, defender legalmente y eximir de responsabilidad a la "EMPRESA", sus directores, empleados, agentes y afiliados de cualquier solicitud, daño, responsabilidad, costo y gasto, incluyendo tarifas legales razonables y otros gastos, que sean consecuencia o estén relacionados con el Registro de Dominio por parte del "USUARIO".
      </p>

      <p class=" text-politica mb-3">
      Es importante destacar que la orden de compra o el pago de servicios por parte del "USUARIO" para la obtención del dominio no garantiza de ninguna manera la adquisición del mismo.
      </p>

      <p class=" text-politica mb-3">
      Cabe mencionar que todos los dominios que el "USUARIO" contrate a través de la "EMPRESA" serán propiedad exclusiva del "USUARIO" y se registrarán a su nombre. En caso de que el "USUARIO" decida no renovar su contrato de hospedaje web, podrá optar por renovar solo el dominio o transferirlo a otro proveedor. No obstante, la "EMPRESA" puede optar por no activar un nombre de registro de dominio hasta que tenga seguridad por parte del "USUARIO" de que dicho registro será pagado en tiempo y forma.
      </p>
    `
  },

  //RENOVACIÓN
  {
    title: 'RENOVACIÓN',
    content: `
      <p class=" text-politica mb-3">
      El periodo para que el "USUARIO" renueve un dominio sin generar un cargo de restauración no podrá exceder del tiempo definido por la "EMPRESA". Los costos de renovación y cargos de restauración aplicables a su dominio pueden ser consultados en el sitio web de la "EMPRESA". Una vez vencida la fecha de renovación, el "USUARIO" deberá pagar los cargos de restauración de acuerdo con las tarifas vigentes de la "EMPRESA", basadas en los periodos establecidos por el Registry de cada tipo de dominio. En caso de que el "USUARIO" no realice el pago dentro del periodo de redención o el periodo de gracia otorgado por el Registry, acepta la posibilidad de perder el dominio. Los periodos de renovación pueden ser verificados desde el sitio web de la "EMPRESA".
      </p>

      <p class=" text-politica mb-3">
      La notificación de renovación se iniciará 30 días naturales antes de la fecha de vencimiento del dominio y, posteriormente, se enviará otra notificación 7 días naturales antes de la fecha de expiración. La última notificación se realizará un día antes de la suspensión del dominio. Todas las notificaciones relacionadas con la renovación se enviarán al correo electrónico que el "USUARIO" tenga registrado en su cuenta de usuario.
      </p>

      
    `
  },

  //PARQUEO DE DOMINIOS
  {
    title: 'PARQUEO DE DOMINIOS',
    content: `
      <p class=" text-politica mb-3">
      Si el "USUARIO" no renueva el dominio antes de su expiración, este pasará al modo de "Parking". En esta modalidad, el dominio será apuntado automáticamente a una página temporal. Una vez que el "USUARIO" renueve el dominio, este volverá a sus DNS originales de forma automática.
      </p>
      
    `
  },

  //TRANSFERENCIA DE DOMINIO MX
  {
    title: 'TRANSFERENCIA DE DOMINIO MX',
    content: `
    
      <p class=" text-politica mb-3">
      Por transferencia se entiende el cambio en la administración de un Nombre de Dominio de un Registrar a otro.
      </p>

      <p class=" text-politica mb-3">
      Por el hecho de solicitar la transferencia de uno o más Nombres de Dominio, se entiende que Quienes Colaboran en la Administración de un Nombre de Dominio conocen y aceptan los requisitos necesarios para que la transferencia se pueda llevar a cabo entre Akky y otro Registrar.
      </p>

      <p class=" text-politica mb-3">
      El Usuario Principal podrá administrar dos tipos de transferencias: las solicitadas y las recibidas.
      </p>

      <p class=" text-politica mb-3">
      Por transferencia solicitada se entiende aquella solicitud efectuada por el Usuario Principal en el Sistema con la finalidad de transferir un Nombre de Dominio que es administrado por otro Registrar a Akky.
      </p>

      <p class=" text-politica mb-3">
      Para realizar una solicitud de transferencia se requiere contar con la Información de Autorización (Código EPP) del Nombre de Dominio a transferir. Además, será necesario considerar las restricciones descritas de acuerdo al TLD en cuestión en el Anexo correspondiente.
      </p>

      <p class=" text-politica mb-3">
      Para solicitar la transferencia de un Nombre de Dominio será necesario cubrir la Tarifa por Transferencia que PBX Hosting señale en el resumen de la compra.
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting no reembolsará ni transferirá la cantidad pagada por la solicitud, aún y cuando ésta no haya podido llevarse a cabo.
      </p>

      <p class=" text-politica mb-3">
      Una vez concluido el proceso de transferencia, Akky colocará el Bloqueo de Transferencia del Nombre de Dominio en modo Activo, quedando sujeta su modificación a Inactivo a lo establecido en las presentes políticas, así como a los lineamientos del Registry correspondiente.
      </p>

      <p class=" text-politica mb-3">
      Por transferencia de Nombre de Dominio recibida, se entiende aquella solicitud efectuada por la cual se intenta transferir un Nombre de Dominio administrado a otro Registrar.
      </p>

      <p class=" text-politica mb-3">
      El Usuario Principal de un Nombre de Dominio podrá solicitar el envío de la Información de Autorización (Código EPP) mediante el Sistema. Para realizar la solicitud es necesario que el Nombre de Dominio esté bajo la administración del Usuario Principal que la solicita. La Información de Autorización (Código EPP) sólo es enviada al Registrante del Nombre de Dominio correspondiente.
      </p>

      <p class=" text-politica mb-3">
      Akky notificará al Usuario Principal vía correo electrónico que se ha recibido una solicitud de transferencia indicando el plazo para autorizarla o rechazarla.
      </p>

      <p class=" text-politica mb-3">
      Es necesario que el Bloqueo de Transferencia sea modificado de Activo a Inactivo por el Usuario Principal en el Sistema.
      </p>

      <p class=" text-politica mb-3">
      Una solicitud de transferencia recibida sólo podrá ser autorizada o rechazada por el Usuario Principal del Nombre de Dominio.
      </p>

      <p class=" text-politica mb-3">
      Si el Usuario Principal no autoriza o rechaza la transferencia a más tardar el día de la fecha de vencimiento de la solicitud, Akky procesará de forma automática la solicitud de transferencia el día de su fecha de vencimiento.
      </p>

      <p class=" text-politica mb-3">
      El Usuario Principal podrá determinar si desea o no recibir solicitudes de transferencias para un Nombre de Dominio, para lo cual podrá consultar y modificar el estatus del Bloqueo de Transferencia desde el Sistema.
      </p>
    `
  },

  //TRANSFERENCIA DE OTRAS EXTENSIONES DE DOMINIO
  {
    title: 'TRANSFERENCIA DE OTRAS EXTENSIONES DE DOMINIO',
    content: `
      <p class=" text-politica mb-3">
      El "USUARIO" o titular del nombre de dominio tiene el derecho de transferir nombres de dominio entre Registradores. Sin embargo, es importante tener en cuenta que este derecho no es absoluto y existen ciertas políticas que pueden establecer límites en la transferencia, como:
      </p>

      <ol class="p-3 text-politica">
        <li class="mb-1">Evidencia de fraude.</li>
        <li class="mb-1">Una disputa en curso del nombre de dominio.</li>
        <li class="mb-1">Una orden judicial emitida por tribunales competentes.</li>
        <li class="mb-1">Disputa razonable sobre la identidad del "USUARIO", titular del dominio o contacto administrativo.</li>
        <li class="mb-1">Objeción escrita expresa a la transferencia por parte del contacto Registrante.</li>
        <li class="mb-1">El nombre de dominio ya se encontraba en "estado de bloqueo".</li>
        <li class="mb-1">La transferencia se solicita dentro de los 60 días a partir de la fecha de registro del nombre de dominio.</li>
        <li class="mb-1">El nombre de dominio ha sido transferido en los últimos 60 días.</li>
        <li class="mb-1">El nombre de dominio está bloqueado debido a falta de pago o si se ha presentado un contracargo de la transacción original por el periodo anterior de registro.</li>
        <li class="mb-1">El nombre de dominio está involucrado en un procedimiento de disputa de transferencia de dominio TDRP.</li>
        <li class="mb-1">El registrador debe proporcionar una razón específica al rechazar una solicitud de transferencia. En caso de denegación, el registrante puede contactar al registrador actual o al registrador al que desea transferir el nombre de dominio para obtener más información sobre la negativa.</li>
        <li class="mb-1">El registrador puede rechazar una solicitud de transferencia en las siguientes circunstancias, que se enumeran de forma enunciativa pero no limitativa:<br>
          <ul class="ps-3">
            <li class="mb-1">a. El nombre de dominio está siendo objeto de un procedimiento de UDRP.</li>
            <li class="mb-1">b. El nombre de dominio está sujeto a una orden judicial de un tribunal competente.</li>
            <li class="mb-1">c. El nombre de dominio está siendo objeto de un procedimiento de TDRP.</li>
            <li class="mb-1">d. El nombre de dominio está siendo objeto de un procedimiento de URS o suspensión de URS.</li>
            <li class="mb-1">e. El nombre de dominio está sujeto a un bloqueo de 60 días debido a un cambio de registrador.</li>
          </ul>
        </li>
      </ol>
      
    `
  },

  //DOMINIOS CON REQUISITOS
  {
    title: 'DOMINIOS CON REQUISITOS',
    content: `
      <p class=" text-politica mb-3">
      Las solicitudes de registro relacionadas con las Clasificaciones de Nombres de Dominio .NET.MX, .EDU.MX y .GOB.MX, tienen requisitos particulares para su registro, los cuales son establecidos por el Registry .MX en sus Políticas Generales de Nombres de Dominio .MX, por lo que PBX Hosting no puede ser flexible al momento de procesar las solicitudes de registro en caso de no cumplir con alguno de los requisitos establecidos. Los pasos a seguir para la activación de estos nombres de dominio, están publicados nuestra pagina web <a class="text-decoration-none" href="/" style="color: #1668af;"> www.pbxhosting.com.mx</a>
      </p>

      <p class=" text-politica fw-semibold mb-3">
      Procedimiento
      </p>

      <p class=" text-politica mb-3">
      PBX Hosting enviará por correo electrónico confirmación de recepción para cada solicitud de registro recibida. Esta confirmación no implica que la solicitud será aceptada. La EMPRESA no se hace responsable si la cuenta de correo indicada por el Usuario no está funcionando.<br>
      Previo cumplimiento de los requisitos correspondientes, y dentro de las setenta y dos (72) horas siguientes a la recepción de los documentos señalados como requisito por el Registry .MX, PBX Hosting notificará por correo electrónico a Quienes Colaboran en la Administración de un Nombre de Dominio la aceptación o rechazo de la solicitud de registro.
      </p>
    `
  },

  //DE LAS SUSPENSIONES Y ELIMINACIONES DE NOMBRES DE DOMINIO
  {
    title: 'DE LAS SUSPENSIONES Y ELIMINACIONES DE NOMBRES DE DOMINIO',
    content: `
      <p class=" text-politica mb-3">
      Por suspensión se entiende la inhabilitación del Nombre de Dominio para ser resuelto por los DNS en Internet asociados a los Nombres de Dominio y la incapacidad de que un tercero lo pueda solicitar y/o registrar. Además, al realizar la suspensión de un Nombre de Dominio, PBX Hosting podrá, a su consideración, inhabilitar cualquier modificación a dicho Nombre de Dominio.
      </p>

      <p class=" text-politica mb-3">
      Un Nombre de Dominio podrá ser suspendido:
      </p>

      <p class=" text-politica mb-3">
      Por no realizar el pago de alguna tarifa, a más tardar quince (15) Días después de haberse suspendido inicialmente, siendo ésta la Suspensión Final. El tiempo adicional de suspensión podrá ser hasta de quince (15) Días, y únicamente el Usuario Principal y/o Usuarios con permisos de Pago podrán reactivarlo dentro de este periodo, realizando el pago de la(s) tarifa(s) y recargos pendientes(s).<br>
      Por resolución emitida por alguna Autoridad.
      </p>

      <p class=" text-politica mb-3">
      Por eliminación se entiende la inhabilitación del Nombre de Dominio para ser resuelto por los DNS de Internet, pero encontrándose éste disponible para solicitarse por un tercero.
      </p>

      <p class=" text-politica mb-3">
      Un Nombre de Dominio podrá ser eliminado:
      </p>

  
      <p class=" text-politica mb-3">
      - A solicitud del Usuario Principal del Nombre de Dominio, dicha solicitud deberá realizarla el Usuario Principal por medio del Sistema. Para que el Usuario Principal pueda enviar dicha solicitud, el Nombre de Dominio no deberá tener adeudos pendientes, además de no tener contratado el servicio de Seguridad Avanzada. El Usuario Principal de acuerdo al Nivel de Seguridad configurado en su Cuenta de Usuario, deberá habilitar la administración de operaciones para poder solicitar la eliminación de un Nombre de Dominio. El Registrante únicamente recibirá notificación de la solicitud de eliminación realizada por el Usuario Principal.
      </p>
  
      <p class=" text-politica mb-3">
      - Akky no procesará las solicitudes de eliminación recibidas por algún medio diferente al Sistema.
      </p>
  
      <p class=" text-politica mb-3">
      - Por resolución emitida por alguna Autoridad.
      </p>
  
      <p class=" text-politica mb-3">
      - Después de haber transcurrido el plazo estipulado por el Registry que corresponda para su eliminación definitiva.
      </p>
  
      <p class=" text-politica mb-3">
      - Cuando Akky necesite establecer comunicación con Quienes Colaboran en la Administración de un Nombre de Dominio, y alguno de ellos no respondiera, el Nombre de Dominio podrá eliminarse quince (15) Días posteriores al comunicado. Akky también podrá eliminar el Nombre de Dominio en caso de no recibir documentación requerida o suficiente para la resolución de algún proceso.
      </p>
  
      <p class=" text-politica mb-3">
      - Cuando el Solicitante y/o Quienes Colaboran en la Administración de un Nombre de Dominio incumplan cualquiera de los puntos establecidos en las políticas.
      </p>

      
    `
  },

  //RECUPERACIONES DE NOMBRES DE DOMINIO.
  {
    title: 'RECUPERACIONES DE NOMBRES DE DOMINIO.',
    content: `
      <p class=" text-politica mb-3">
      La recuperación de un Nombre de Dominio consiste en el cambio de Estatus de Eliminación Previa y/o Eliminado (en Akky) a Activo, mediante el pago de la Tarifa de Recuperación; siempre y cuando el Registry correspondiente lo permita o el Nombre de Dominio no haya alcanzado el Estatus Eliminado en el Registry del TLD que lo administra, es decir, que el Nombre de Dominio se encuentre disponible nuevamente para su registro.
      </p>

      <p class=" text-politica mb-3">
      La recuperación de un Nombre de Dominio únicamente podrá ser solicitada a través del Sistema por el Usuario Principal que administraba dicho Nombre de Dominio antes de su Eliminación.
      </p>

      <p class=" text-politica mb-3">
      Las Tarifas de Recuperación se mostrarán en el carrito en el resumen del carrito.
      </p>

      <p class=" text-politica mb-3">
      Al recuperar un Nombre de Dominio se extenderá su cobertura por un (1) año sin costo, siempre y cuando la Cobertura Máxima del Nombre de Dominio lo permita.
      </p>
    `
  },

  //SERVICIOS ESPECIALES.
  {
    title: 'SERVICIOS ESPECIALES.',
    content: `
      <p class=" text-politica mb-3">
      Si el "USUARIO" decide adquirir los servicios mencionados en esta cláusula y sus derivados, se regirá por los mismos términos y condiciones que se aplican a los servicios principales, a pesar de que estos sean considerados servicios adicionales o especiales debido a su naturaleza.
      </p>
    `
  },

  //ARRENDAMIENTO
  {
    title: 'ARRENDAMIENTO',
    content: `
      <p class=" text-politica mb-3">
      En el servicio de Arrendamiento de Dominios exclusivos, el arrendatario no puede hacer uso ilícito del dominio y debe entender que no es el propietario del mismo. Queda estrictamente prohibido subarrendar el nombre del dominio, y se requiere que se asegure un período mínimo de arrendamiento de 3 meses. El catálogo de dominios disponibles para arrendamiento se encuentra disponible en el sitio web oficial de la "EMPRESA". Es importante destacar que este servicio no ofrece ninguna devolución o garantía.
      </p>
    
    `
  },

  //REDIRECCIONAMIENTO DE DOMINIO.
  {
    title: 'REDIRECCIONAMIENTO DE DOMINIO.',
    content: `
      <p class=" text-politica mb-3">
      El servicio de Redireccionamiento de Dominio permite al "USUARIO" redirigir su sitio web a otro destino, ya sea de manera permanente (301) o temporal (302). Esta herramienta es útil para fines de mantenimiento, indexación en motores de búsqueda, temas de contenido, SEO o cualquier otro uso permitido y legal.
      </p>

      <p class=" text-politica mb-3">
      Es relevante destacar que, al ser un servicio gratuito, no ofrece garantías, y no justificará la inoperabilidad de nuestra empresa para cancelaciones bajo su responsabilidad. Asimismo, es fundamental mencionar que la implementación del servicio de Redireccionamiento de Dominio no puede utilizarse simultáneamente con el servicio de DNS Manager.
      </p>

      <p class=" text-politica mb-3">
      En caso de detectar un uso indebido y/o ilegal del redireccionamiento, nos reservamos el derecho de realizar la cancelación inmediata del servicio del "USUARIO", sin derecho a reembolso.
      </p>

      
    `
  },

  //ACTIVACIÓN DE DOMINIO
  {
    title: 'ACTIVACIÓN DE DOMINIO',
    content: `
      <p class=" text-politica mb-3">
      El "USUARIO" acepta expresamente que la transacción se realizará antes de prestar el servicio de manera total. La activación de un dominio es generalmente inmediata, aunque en algunos casos puede tardar hasta 24 horas. Sin embargo, si los datos otorgados por el "USUARIO" no son completos o no se acreditan debidamente, la activación del servicio quedará pendiente. En estos casos, siempre explicaremos al "USUARIO" o prospecto de cliente el motivo por el cual no se realizó la activación del servicio. Es importante mencionar que los dominios web no cuentan con garantía o reembolso. El pago realizado no garantiza la activación ni disponibilidad del dominio deseado por el "USUARIO".
      </p>
    `
  },

  //TERMINACIÓN
  {
    title: 'TERMINACIÓN',
    content: `
      <p class=" text-politica mb-3">
      Los dominios pueden ser registrados por periodos de 1, 2, 3, 4, 5, 6, 7, 8, 9 o 10 años. Al terminar dicho periodo, el "USUARIO" tendrá el derecho de renovar, transferir o cancelar su dominio web. En caso de una terminación anticipada por parte del "USUARIO", el proceso de eliminación total del dominio tomará 45 días naturales.
      </p>
      
    `
  },

  //ADHESIÓN
  {
    title: 'ADHESIÓN',
    content: `
      <p class=" text-politica mb-3">
      Se hace constar que el "USUARIO" está informado acerca de la existencia de las políticas y Términos y Condiciones Generales, las cuales tienen la misma validez que el presente contrato, considerándose de carácter accesorio.
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