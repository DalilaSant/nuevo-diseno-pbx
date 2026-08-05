<script setup lang="ts">
import { ref, onMounted } from 'vue'
import InfoAcordeon from '@/components/politicas/infoAcordeon.vue';
import { politicaDominios, politicaServicios } from '@/data/politica';
import { useHead } from '@vueuse/head'
import LoaderComponent from '@/components/LoaderComponent.vue'
import InfoAcordeonDos from '@/components/politicas/infoAcordeonDos.vue';

const loading = ref(true)

onMounted(() => {
  document.body.style.overflow = 'hidden' // evita que el usuario pueda bajar o subir en la página mientras el loader está en pantalla.
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = ''
  }, 3000)
})

useHead({
  title: 'PBX Hosting | Política de Dominios',
  meta: [
    {
      name: 'description',
      content: 'Política de Dominios de PBX Hosting. Conoce las condiciones aplicables al servicio de Dominios web proporcionado por nuestra entidad, en adelante referida como "EMPRESA" INBTEL S.A. de C.V.'
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
        <div class="text-start mb-4 mb-lg-4 ">
          <h2 class="fs-1 fw-semibold mb-2 px-3 pb-2 " style="color: #004182;">PBX Hosting</h2>
        </div>

        <div v-for="(seccion, index) in politicaDominios" :key="index" class="mb-5">
          <h3 class="fw-semibold fs-2 mb-3 p-3" style="color: #004182;">{{ seccion.titulo }}</h3>

          <p v-for="(parrafo, index) in seccion.contenido" :key="`p-${index}`" class="ps-3 text-politica"
            v-html="parrafo">

          </p>

        </div>

        <div class="row justify-content-center">
          <div class="">
            <InfoAcordeonDos />



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

.custom-ol {
  padding-left: 20px;
}
</style>