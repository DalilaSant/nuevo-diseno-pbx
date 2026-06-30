<script setup lang="ts">
import SectionTitleTwo from '../common/SectionTitleTwo.vue';
import BaseButton from '../common/BaseButton.vue'
</script>

<template>
  <section class="banner-section py-5 mt-xl-1 mt-0">
    <div class="container  py-lg-4">
      <!-- Contenedor principal con imagen de fondo -->
      <div class="custom-banner-bg position-relative rounded-4 overflow-hidden d-flex align-items-center">

        <!-- Contenido del Banner -->
        <div class="container position-relative z-3 pt-lg-0  px-4 px-md-5 text-white">
          <div class="row align-items-center">

            <!-- Lado izquierdo: Textos -->
            <div class="col-12 col-lg-7 text-start "
              v-motion-slide-visible-left
              :delay="200" 
              :duration="1200"
            >
              <SectionTitleTwo textColor="text-white" displayFont="display-6"
              
              >
                ¿Listo para llevar tu empresa
                <span class="text-red">al siguiente nivel?</span>
              </SectionTitleTwo>

              <p class="fs-5 text-white text-lg-start text-center mb-0 banner-desc">
                Telefonía, servidores, y automatización integrados en un ecosistema tecnológico.
              </p>
              <div class="d-flex justify-content-center justify-content-lg-start mt-3">
                <BaseButton texto="Hablar con un asesor" enlace="#" />
              </div>
            </div>


            <!-- Lado derecho: Espacio vacío para equilibrar el diseño en desktop -->
            <div class="col-12 col-lg-5">
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>
.custom-banner-bg {
  background-image: url('/img/home/IMAGEN_7_SECCION_1.png');
  background-size: cover;
  background-position: center;
  min-height: 320px; /* Altura base para móviles */
  transition: all 0.3s ease;
}

.banner-desc {
  max-width: 500px;
  transition: all 0.3s ease;
}

/* Escalabilidad en pantallas grandes */
@media (min-width: 992px) {
  .custom-banner-bg {
    min-height: 400px; /* Aumentamos el alto del banner a 480px en computadoras */
  }
}

@media (max-width: 576px) {
  .custom-banner-bg {
    min-height: 420px;
  }
}
</style>