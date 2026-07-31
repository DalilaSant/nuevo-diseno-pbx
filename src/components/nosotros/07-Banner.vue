<script setup lang="ts">
import SectionTitleTwo from '../common/SectionTitleTwo.vue';
</script>

<template>
  <section class="banner-section pt-5 mt-xl-0 mt-0">
    <div class="container  py-lg-4">

      <!-- Contenedor principal con imagen de fondo -->
      <div class="custom-banner-bg position-relative rounded-4 overflow-hidden d-flex align-items-start">

        <!-- Contenido del Banner -->
        <div class="container  z-3 pt-lg-4 pb-4 pt-3 text-center text-lg-start  px-4 px-md-5 text-white">
          <h2 class="mb-3 mb-lg-4">Resultados que nos respaldan.</h2>
          
          <div class="row ">

            <!-- Lado izquierdo: Textos -->
            <div class="col-12 col-lg-4 mt-1">
              <p class="fs-1 text-white fw-semibold  text-center mb-0 banner-desc">
               +500M
              </p>
              <p class="fs-5 text-white text-center mb-0 ">
                Minutos mensuales
              </p>
            </div>


            <div class="col-12 col-lg-4 text-start mt-1">
              <p class="fs-1 text-white fw-semibold text-center mb-0 banner-desc">
               +5K
              </p>
              <p class="fs-5 text-white text-center mb-0 ">
                Clientes activos
              </p>
            </div>

            <div class="col-12 col-lg-4 text-start mt-1">
              <p class="fs-1 text-white fw-semibold text-center mb-0 banner-desc">
               99.99%
              </p>
              <p class="fs-5 text-white text-center mb-0 ">
                Disponibilidad efectiva
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>
.custom-banner-bg {
  background-image: url('/img/nosotros/IMAGEN_12_SECCION_9.png');
  background-size: cover;
  background-position: right;
  min-height: 320px;
  /* Altura base para móviles */
  transition: all 0.3s ease;
}


@media (max-width: 576px) {
  .custom-banner-bg {
    min-height: 280px;
  }
}


@media (max-width: 800px) {


  .custom-banner-bg {
    background-position: left;
  }
}


/* Escalabilidad en pantallas grandes */
@media (min-width: 992px) {
  .custom-banner-bg {
    min-height: 240px;
    /* Aumentamos el alto del banner a 480px en computadoras */
  }

}
</style>