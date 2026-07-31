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
        <div class="container position-relative  z-3 pt-lg-0  px-4 px-md-5 text-white">
          <div class="row align-items-center">

            <!-- Lado izquierdo: Textos -->
            <div class="col-12 col-lg-7 text-start "
              v-motion-slide-visible-left
              :delay="200" 
              :duration="1200"
            >
              <SectionTitleTwo textColor="text-white" displayFont="display-4" lineHeight="lh-1" marginBotton="mb-3"
              
              >
                Cobertura <br>
                <span class="text-red">Internacional.</span>
              </SectionTitleTwo>

              <p class="fs-5 text-white text-lg-start text-center mb-0 banner-desc">
                Respaldados por brindar una atención especializada y una infraestructura preparada para crecer contigo.
              </p>
              <div class="button-light d-flex justify-content-center justify-content-lg-start mt-5 mt-md-4 mt-lg-5">
                <BaseButton texto="Comunicación - Infraestructura - Tecnología" roundedClass="rounded-5" paddingClass="py-1" enlace="#" />
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
  background-image: url('/img/nosotros/IMAGEN_9_SECCION_9.png');
  background-size: cover;
  background-position: center;
  min-height: 320px; /* Altura base para móviles */
  transition: all 0.3s ease;
}

.custom-banner-bg::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.banner-desc {
  max-width: 500px;
  transition: all 0.3s ease;
}

.button-light :deep(.btn){
  color: #000 !important;
  background-color: #fff !important;
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

  .button-light :deep(.btn){
  font-size: .7rem !important;
}

}

@media (max-width: 991px){
  .custom-banner-bg::before{
    background: rgba(12, 24, 36, 0.9);
  }
  .banner-desc{
    margin: 0 auto !important;
    
  }
  
}
</style>