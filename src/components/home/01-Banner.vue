<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue'
import FeatureItem from '../common/FeatureItem.vue'
import SectionTitleTwo from '../common/SectionTitleTwo.vue';
</script>

<template>
  <section class="banner-section py-5 position-relative overflow-hidden" style="background-color: #ffffff;">
    <div class="container py-lg-4">
      <div class="row align-items-center mb-5">
        <div class="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0"
          v-motion-slide-left
            :delay="200" 
            :duration="1200"
        >
          <SectionTitleTwo >
            Conecta, automatiza <br>
            <span class="text-red">y escala</span> tu empresa.
          </SectionTitleTwo>
          <p class="mb-4 fs-5 mx-md-auto mx-lg-0" style="max-width: 600px; ">
            Proveedores de <span class="fw-semibold">Telefonía IP</span> y soluciones en <strong
              class="fw-semibold">Telecomunicaciones</strong> para crecer sin límites.
          </p>

          <div class="d-flex justify-content-center justify-content-lg-start">
            <BaseButton texto="Hablar con un asesor" enlace="#" />
          </div>
        </div>

        <div class="col-lg-6 col-md-12 text-center"
          v-motion-slide-right
            :delay="200" 
            :duration="1200">
          <div class="banner-image-container p-2">
            <img src="/img/home/IMAGEN_1_SECCION_1.webp" alt="PBX Hosting Soluciones" class="img-fluid mx-auto d-block banner-img"
              style="max-height: 400px; width: auto; object-fit: contain;" />
          </div>
        </div>
      </div>

      <div class="d-flex flex-column flex-md-row gap-4 gap-lg-4 justify-content-center justify-content-lg-start pt-0 features-container"
        v-motion-slide-left
            :delay="200" 
            :duration="1200">

        <FeatureItem icono="/img/home/ICONO_1_SECCIO_1.png" titulo="Soporte especializado las 24 horas." />
        <FeatureItem icono="/img/home/ICONO_2_SECCIO_1.png" titulo="Infraestructura confiable" />
        <FeatureItem icono="/img/home/ICONO_3_SECCIO_1.png" titulo="Comunicación sin límites" />

      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 1024px) {
  .banner-img {
    transform: scale(1.1);
    transform-origin: center;
  }
}

@media (min-width: 1022px) and (max-width: 1279px) {
  .features-container {
    width: 70% !important;
  }
}

@media (min-width: 1280px) {
  .features-container {
    width: 60% !important;
  }
}

@media (min-width: 1920px) {
  .features-container {
    width: 54% !important;
  }
}
</style>