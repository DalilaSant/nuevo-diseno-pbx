<script setup lang="ts">
import BenefitsBar from '@/components/common/BenefitsBar.vue'
import { benefitsInfraestructura } from '@/data/benefits-bar'
import SectionTitleTwo from '@/components/common/SectionTitleTwo.vue';

</script>

<template>
  <section class="pt-0 pt-xl-4 pb-3 mobile-reverse-container">
    <BenefitsBar class="pt-4 benefits-hidden-medium" :items="benefitsInfraestructura.benefits" paddingClass="pb-4" />
    <div class="container py-lg-0">
      <!-- Contenedor principal con imagen de fondo -->
      <div
        class="custom-banner-bg position-relative rounded-4 overflow-hidden d-flex flex-column flex-lg-row align-items-center py-5 py-lg-0">

        <!-- Contenido del Banner -->
        <div class="container position-relative z-3 pt-lg-4 pb-lg-5 px-4 px-md-5 text-white">
          <div class="row align-items-center">

            <!-- Lado izquierdo: Textos -->
            <div class="col-12 col-lg-7 text-start" v-motion-slide-visible-left :delay="200" :duration="1200">
              <SectionTitleTwo textColor="text-white" displayFont="display-4" lineHeight="lh-1">
                Hosting Compartido,  <br>
                <span class="text-red">crece con confianza.</span>
              </SectionTitleTwo>

              <p class="fs-4 text-white text-lg-start text-center mb-0 banner-desc">
                Hospeda tu sitio web con una solución estable, rápida y fácil de administrar.
              </p>
            </div>

            <!-- Lado derecho: Espacio vacío para equilibrar el diseño en desktop -->
            <div class="col-12 col-lg-5">
            </div>

          </div>
        </div>

        <!-- Recuadro Blanco Flotante (Mockup) -->
        <div class="floating-features-card bg-white p-4 p-md-4 shadow">
          <div class="d-flex flex-column gap-3 text-start">
            <h4 class="fw-semibold text-danger text-center">Implementación <br> sugerida para:</h4>
            <div class="d-flex align-items-center gap-2">
              <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="check-icon-small" />
              <span class="text-dark fw-semibold">Sitios corporativos.</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="check-icon-small" />
              <span class="text-dark fw-semibold">Tiendas en línea.</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="check-icon-small" />
              <span class="text-dark fw-semibold">Blogs y portafolios.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>



<style scoped>
.custom-banner-bg {
  background-image: url('/img/soluciones/IMAGEN_1_SECCION_6.png');
  background-size: cover;
  background-position: center;
  min-height: 320px;
  /* Altura base para móviles */
  transition: all 0.3s ease;
}

.banner-desc {
  max-width: 500px;
  transition: all 0.3s ease;
}

/* Icono de check */
.check-icon-small {
  width: 22px;
  height: 22px;
  object-fit: contain;
  flex-shrink: 0;
}

.floating-features-card {
  z-index: 3;
  min-width: 290px;
}

@media (max-width: 576px) {
  .custom-banner-bg {
    min-height: 420px;
  }
}
@media (max-width: 768px) {
  .mobile-reverse-container {
    display: flex;
    flex-direction: column-reverse;
  }
}
@media (min-width: 769px) and (max-width: 1366px) {
  .benefits-hidden-medium {
    display: none !important;
  }
}

@media (max-width: 991px) {
  .floating-features-card {
    position: relative;
    margin: 2rem auto 0 auto;
    border-radius: 16px;
    width: 90%;
    max-width: 320px;
    right: auto;
    /* Limpia cualquier desplazamiento heredado */
  }

  .banner-desc {
    margin: 0 auto;
  }
}

/* Escalabilidad en pantallas grandes */
@media (min-width: 992px) {
  .custom-banner-bg {
    min-height: 360px;
    /* Aumentamos el alto del banner en computadoras */
  }
  .floating-features-card {
    position: absolute;
    bottom: 0;
    right: 8%;
    border-radius: 16px 16px 0 0;
  }
}





</style>