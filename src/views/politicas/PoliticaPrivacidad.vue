<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'

import LoaderComponent from '@/components/LoaderComponent.vue'

const loading = ref(true)

onMounted(() => {
  document.body.style.overflow = 'hidden' // evita que el usuario pueda bajar o subir en la página mientras el loader está en pantalla.
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = ''
  }, 3000)
})


useHead({
  title: 'PBX Hosting | Política de Privacidad',
  meta: [
    {
      name: 'description',
      content: 'Aviso de Privacidad de PBX Hosting. Conoce cómo protegemos y tratamos tus datos personales.'
    }
  ]
})
</script>

<template>
  <LoaderComponent />
  <div v-if="!loading">
    <section class="privacy-section py-5 px-2 bg-light-gray">
      <div class="container py-lg-4 ">

        <!-- Encabezado de la página -->
        <div class="text-start mb-4 mb-lg-5 ">
          <h2 class="fs-1 fw-semibold mb-2 pb-2 " style="color: #004182;">PBX Hosting</h2>
          <h1 class="fw-semibold text-uppercase mt-2 pb-2 fs-2 border-bottom" style="color: #004182;">Aviso de
            Privacidad</h1>
        </div>

        <div class="row justify-content-center">
          <div class="">

            <!-- Tarjeta contenedora de la política (Diseño editorial limpio) -->
            <div class=" text-start text-dark ">

              <p class=" text-politica mb-4">
                Los datos personales solicitados por cualquier medio o empresa por nosotros autorizada o relacionada con
                PBX Hosting son administrados exclusivamente por PBX Hosting Calle Sinaloa #203 Altos. Col. Unidad
                Nacional. C.D. Madero. C.P.89410
              </p>

              <p class="text-politica mb-4">
                Estos datos serán utilizados con fines estadísticos con el objetivo de ofrecerle cada día mejores
                productos y servicios acorde a sus necesidades.
              </p>

              <p class=" text-politica mb-4">
                En todo momento usted tendrá la libertad de aceptar o negar el que pueda recibir o seguir recibiendo
                información por parte de PBX Hosting, si su deseo es dejar de recibir nuestra información puede hacer la
                petición por escrito a la dirección de correo electrónico contacto@pbxhosting.com.mx o llamando al (55)
                4170-8990 o si lo prefiere utilice el servicio de "desuscripición" en el mensaje dentro del boletín
                electrónico o mensaje promocional, en cualquier caso favor de incluir sus datos completos e indicarnos
                el medio del cual desea el no recibir más nuestra información
              </p>

              <p class="text-politica mb-4">
                Al no contar con una negación expresa usted nos autoriza a enviarle por medio de correo postal, correo
                electrónico, telefonía, mensaje sms o cualquier otro medio no considerado en este párrafo la información
                de nuestras ofertas, encuestas, promociones, eventos especiales, fe de erratas, peticiones, disculpas o
                cualquier otra información relevante en relación a PBX Hosting. De acuerdo a lo Previsto en la “Ley
                Federal de Protección de Datos Personales”, declara PBX Hosting ser una empresa legalmente constituida
                de conformidad con las leyes mexicanas; y como responsable del tratamiento de sus datos personales, hace
                de su conocimiento que la información de sus clientes es tratada de forma estrictamente confidencial por
                lo que al proporcionar sus datos personales, tales como:
              </p>

              <ol class="custom-ol text-politica">
                <li class="mb-2">Nombre completo</li>
                <li class="mb-2">Dirección física</li>
                <li class="mb-2">Registro Federal de Contribuyentes</li>
                <li class="mb-2">Teléfonos de Hogar, Oficina y móviles</li>
                <li class="mb-2">Correo electrónico</li>
                <li class="mb-5">Redes sociales</li>
              </ol>
              <p class="text-politica mb-3">Estos serán utilizados única y exclusivamente para los siguientes fines:</p>

              <ol class="custom-ol text-politica mb-0">
                <li class="mb-2">Actualización de la Base de Datos.</li>
                <li class="mb-2">Informar sobre cambios o nuevos productos o servicios que estén relacionados con el
                  contratado o adquirido por el cliente.</li>
                <li class="mb-2">Envió de promociones, avisos y otros de carácter comercial y mercadotecnia.</li>
                <li class="mb-2">Proveer los servicios y productos requeridos por usted.</li>
                <li class="mb-5">Cualquier finalidad análoga o compatible con las anteriores.</li>
              </ol>


              <p class="text-politica mb-3">En el caso de Datos sensibles, tales como:</p>
              <ol class="custom-ol text-politica mb-0">
                <li class="mb-2">Datos Financieros (Ingresos, Estados de Cuenta, y demás relacionados)</li>
                <li class="mb-2">Datos Patrimoniales (Bienes Materiales, Inmuebles, y demás relacionados)
                </li>
                <li class="mb-2">Datos Personales (Cónyuge, Estado Civil, Nacionalidad, Educación, Hijos, y demás
                  relacionados).</li>
                <li class="mb-5">Referencias familiares y no familiares (Nombre, Dirección, Teléfono, Relación, etc.).
                </li>
              </ol>

              <p class="text-politica mb-2">Estos serán utilizados única y exclusivamente para los siguientes fines:</p>
              <ol class="custom-ol text-politica">
                <li class="mb-2">Investigación y/u obtención de créditos.</li>
                <li class="mb-2">Cualquier finalidad análoga o compatible con la anterior.</li>
              </ol>


              <p class="text-politica mb-3">
                Para prevenir el acceso no autorizado a sus datos personales y con el fin de asegurar que la información
                sea utilizada para los fines establecidos en este aviso de privacidad, hemos establecido diversos
                procedimientos con la finalidad de evitar el uso o divulgación no autorizados de sus datos,
                permitiéndonos tratarlos debidamente.
              </p>
              <p class="text-politica mb-3">
                Así mismo, le informamos que sus datos personales pueden ser Transmitidos para ser tratados por personas
                distintas a esta empresa, nos comprometemos a no transferir su información personal a terceros sin su
                consentimiento, salvo las excepciones previstas en el artículo 37 de la Ley Federal de Protección de
                Datos Personales en Posesión de los Particulares, así como realizar esta transferencia en los términos
                que fija la Ley.
              </p>
              <p class="text-politica mb-3">
                Si usted no manifiesta su oposición enviando un correo a la dirección electrónica
                contacto@pbxhosting.com.mx, para que sus datos personales sean transferidos, se entenderá que ha
                otorgado su consentimiento para ello.
              </p>
              <p class="text-politica mb-3">
                Todos sus datos personales son tratados de acuerdo a la legislación aplicable y vigente en el país, por
                ello le informamos que usted tiene en todo momento los derechos (ARCO) de acceder, rectificar, cancelar
                u oponerse al tratamiento que le damos a sus datos personales; derecho que podrá hacer valer a través
                del Área de Privacidad encargada de la seguridad de datos personales, en el Teléfono +01 55 41708990, o
                por medio del siguiente correo electrónico: contacto@pbxhosting.com.mx.
              </p>
              <p class="text-politica mb-3">

              </p>
              <p class="text-politica mb-3">
                A través de estos canales usted podrá actualizar o revocar sus datos y especificar el medio por el cual
                desea recibir información, ya que en caso de no contar con esta especificación de su parte, PBX Hosting
                establecerá libremente el canal que considere pertinente para enviarle información.
              </p>

            </div> <!-- Fin Card -->

          </div>
        </div>

      </div>
    </section>
  </div>

</template>

<style scoped>
.bg-light-gray {
  background-color: #f8fafc;
}


.text-secondary {
  color: #475569 !important;
  line-height: 1.7;
}

/* Numeración ordenada elegante */
.custom-ol {
  padding-left: 20px;
}
</style>