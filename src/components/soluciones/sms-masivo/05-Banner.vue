<script setup lang="ts">
import SectionTitleTwo from '../../common/SectionTitleTwo.vue';
import BaseButton from '../../common/BaseButton.vue'
</script>

<template>
  <section class="banner-section py-4 mt-xl-1 mt-0">
    <div class="container  py-lg-0">
      <!-- Contenedor principal con imagen de fondo -->
      <div class="custom-banner-bg position-relative rounded-4 overflow-hidden d-flex align-items-center">

        <!-- Contenido del Banner -->
        <div class="container position-relative  z-3 pt-lg-0  px-4 px-md-5 text-white">
          <div class="row align-items-center">

            <!-- Lado izquierdo: Textos -->
            <div class="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-7 text-start "
              
            >
            </div>


            <!-- Lado derecho: Espacio vacío para equilibrar el diseño en desktop -->
            <div class="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-5"
              v-motion-slide-visible-right
              :delay="200" 
              :duration="1200"
            >
              <SectionTitleTwo textColor="text-white" displayFont="display-6" textPosition="text-center text-lg-end" linePosition="mx-auto ms-lg-auto me-lg-0"
              
              >
                SMS Flash, <br>
                <span class="text-red">atención inmediata.</span>
              </SectionTitleTwo>

              <p class="fs-5 text-white text-lg-end text-center mb-0 banner-desc">
                Tus mensajes <span class="fw-semibold">se muestran directamente</span>  en la <span class="fw-semibold">pantalla del dispositivo</span>  sin necesidad de abrir la bandeja de entrada.
              </p>
              <div class="d-flex justify-content-center justify-content-lg-end mt-3">
                <BaseButton texto="Cotizar" enlace="#" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>
.custom-banner-bg {
  background-image: url('/img/soluciones/IMAGEN_4_SECCION_3.png');
  background-size: cover;
  background-position: center ;
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

@media (max-width: 991px) {
  .custom-banner-bg{
     background: rgba(12, 24, 36, 0.9);
  }
  .banner-desc {
    max-width: 600px;
  }
}

@media (min-width: 1280px) and (max-width:1366px) {
.banner-desc{
  max-width: 560px;
  margin-left: 30px;
}
}
</style>