<script setup lang="ts">
import SectionTitleTwo from '@/components/common/SectionTitleTwo.vue'
</script>

<template>
  <section class="banner-section pt-5 position-relative overflow-hidden" style="background-color: #f2f5f7;">
    <div class="container pt-lg-4">
      <div class="row align-items-center flex-column-reverse flex-lg-row mb-5 gx-lg-5">
        <div class="col-lg-6 col-md-12 text-center">
          <div class="banner-image-container p-2 position-relative d-inline-block">
            <img src="/img/soluciones/IMAGEN_14_SECCION_1.webp" alt="PBX Hosting Soluciones"
              class="img-fluid mx-auto d-block" style="max-height: 400px; width: auto; object-fit: contain;" loading="lazy"  />

            <!-- Recuadro flotante con punto parpadeante -->
            <div
              class="floating-badge d-flex align-items-center gap-2 p-2 px-3 bg-white rounded-3 shadow position-absolute border-0 text-start">
              <span class="pulse-dot"></span>
              <div class="lh-sm" style="font-size: 0.85rem;">
                <span class="d-block fw-bold text-dark">Gestión de llamadas</span>
                <span class="text-dark opacity-90">simultaneas</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 text-center  text-lg-start mb-5 mb-lg-0"
        v-motion-slide-visible-right
        :delay="200" 
        :duration="1200">
          <SectionTitleTwo class="section-title-two" display-font="display-5" lineHeight="lh-">
            Paquetes CallCenter,<br>
            <span class="text-red">mejorar tu contactación.</span>
          </SectionTitleTwo>
          <p class="mb-4 fs-5 text-derecho mx-md-auto mx-lg-0  " style="max-width: 600px; ">
            Maximiza la eficiencia, optimiza recursos y brinda una experiencia de atención al cliente excepcional.
          </p>

          <div class="d-flex flex-column gap-3 mb-4  align-items-lg-start">
            <!-- Item 1 -->
            <div class="d-flex align-items-center gap-2 mx-auto mx-lg-0" style="max-width: 350px; width: 100%;">
              <div class="flex-shrink-0 d-flex align-items-center justify-content-center"
                style="width: 24px; height: 24px;">
                <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid"
                  style="max-width: 100%; max-height: 100%;" />
              </div>
              <span class="text-dark fw-semibold" style="font-size: 1.05rem;">Soluciones completas de telefonía
                IP</span>
            </div>

            <!-- Item 2 -->
            <div class="d-flex align-items-center gap-2 mx-auto mx-lg-0" style="max-width: 350px; width: 100%;">
              <div class="flex-shrink-0 d-flex align-items-center justify-content-center"
                style="width: 24px; height: 24px;">
                <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid"
                  style="max-width: 100%; max-height: 100%;" />
              </div>
              <span class="text-dark fw-semibold" style="font-size: 1.05rem;">Paquetes Escalables</span>
            </div>
          </div>
        </div>


      </div>

    </div>

  </section>
</template>



<style scoped>
/* Estilos para el recuadro flotante */
.floating-badge {
  top: 10%;
  left: 5%;
  z-index: 5;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08) !important;
}

/* Punto parpadeante (alerta) */
.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #f12537;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(241, 37, 55, 0.7);
  animation: pulse 1.6s infinite;
  display: inline-block;
  flex-shrink: 0;
}

@media (min-width:1024px) and (max-width:1100px) {
  .text-derecho {
    font-size: 1.07rem !important;
     margin-bottom: 1rem !important;
  }

}


/*Animacion de fotogramas*/
@keyframes pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(241, 37, 55, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(241, 37, 55, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(241, 37, 55, 0);
  }
}
</style>
