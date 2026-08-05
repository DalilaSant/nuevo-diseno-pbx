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
  title: 'PBX Hosting | Términos y Condiciones de promociones en dominios.mx',
  meta: [
    {
      name: 'description',
      content: 'Términos y Condiciones de promociones en dominios.mx de PBX Hosting. Conoce las condiciones aplicables al servicio de Dominios web proporcionado por nuestra entidad, en adelante referida como "EMPRESA" INBTEL S.A. de C.V.'
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
          <h1 class="fw-semibold text-uppercase mt-2 pb-2 fs-2 border-bottom" style="color: #004182;">Términos y Condiciones de promociones en dominios.mx</h1>
        </div>

        <div class="row justify-content-center">
          <div class="">

            <!-- Tarjeta contenedora de la política (Diseño editorial limpio) -->
            <div class=" text-start text-dark ">

              <p class=" text-politica mb-4">
                Este documento tiene por objetivo establecer los Términos y Condiciones aplicables al servicio de Dominios web proporcionado por nuestra entidad, en adelante referida como "EMPRESA" INBTEL S.A. de C.V. Al utilizar nuestros servicios, usted, en calidad de "USUARIO", acepta los términos y condiciones aquí estipulados.
              </p>

              <p class="text-politica mb-0">
                El dominio será registrado hasta que se haya identificado el pago, nos deslindamos de responsabilidad si el dominio llegara a ser registrado de manera anticipada por otro proveedor y el cliente deberá elegir otro nombre que tenga disponibilidad.
                El costo de renovación anual de este servicio, es al precio de lista publicado en la página web y está sujeto a cambios de acuerdo a la inflación anual del año inmediato anterior. <br>
                Este dominio una vez registrado puede ser alojado en el hosting que el cliente desee. Si desea asignar DNS diferentes a los de PBX Hosting, deberá solicitarlo al correo soporte@pbxhosting.com.mx.
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