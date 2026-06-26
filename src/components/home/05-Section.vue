<script setup lang="ts">
import { ref } from 'vue'
import SectionTitleTwoCenter from '../common/SectionTitleTwoCenter.vue';
import { homeData } from '@/data/home';


</script>

<template>
  <section class="banner-section pt-5 position-relative overflow-hidden" style="background-color: #ffffff;">
    <div class="container py-lg-4">
      <div class="text-center pt-lg-4 mb-4"
      v-motion-fade-visible
            :delay="200" 
            :duration="1000">
        <h4 class="text-uppercase fw-semibold mb-2">PRINCIPALES BENEFICIOS</h4>
        <SectionTitleTwoCenter>
          <span class="text-red">Más rendimiento,</span> menos complicaciones
        </SectionTitleTwoCenter>
      </div>
    </div>
    <div class="container pb-5">
      <div class="row">
        <div class="col-12">
          <div
            class="benefits-bar bg-white shadow-sm rounded-4 border p-3 py-md-4 px-md-5 d-flex flex-wrap align-items-center justify-content-around gap-4">
            <!-- Beneficio 1 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/home/ICONO_7_SECCIO_1.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Reduce costos</span>
                <span class="">operativos</span>
              </div>
            </div>
            <!-- Divisor Vertical para Escritorio -->
            <div class="d-none d-xl-block vertical-divider"></div>

            <!-- Beneficio 2 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/home/ICONO_8_SECCIO_1.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Rendimiento</span>
                <span class="">optimizado</span>
              </div>
            </div>

            <!-- Divisor Vertical para Escritorio -->
            <div class="d-none d-xl-block vertical-divider"></div>

            <!-- Beneficio 3 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/home/ICONO_9_SECCIO_1.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Comunicación</span>
                <span class="">segura</span>
              </div>
            </div>

            <!-- Divisor Vertical para Escritorio -->
            <div class="d-none d-xl-block vertical-divider"></div>

            <!-- Beneficio 4 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/home/ICONO_10_SECCIO_1.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Flexibilidad</span>
                <span class="">para trabajar</span>
              </div>
            </div>

            <!-- Divisor Vertical para Escritorio -->
            <div class="d-none d-xl-block vertical-divider"></div>

            <!-- Beneficio 5 -->
            <div class="d-flex align-items-center gap-2">
              <div class="icon-placeholder rounded-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                <img src="/img/home/ICONO_11_SECCIO_1.png" alt="" class="img-fluid">
              </div>
              <div class="text-start lh-sm">
                <span class="d-block fw-semibold">Escalabilidad</span>
                <span class="">garantizada</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.benefits-bar {
  border-color: #f0f0f0 !important;
  background-color: #ffffff;
}

.icon-placeholder {
  width: 48px;
  height: 48px;
}

.vertical-divider {
  width: 1.7px;
  height: 48px;
  background-color: #e9ecef;
}


@media (max-width: 1199.98px) {
  .benefits-bar {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tablets e pantallas intermedias */
    gap: 24px !important;
    padding: 30px 24px !important;
    max-width: 680px; /* Limit el ancho de la tarjeta para agrupar el contenido */
    margin: 0 auto;   /* Centra la tarjeta completa */
  }
  /* Alineamos a la izquierda para que los iconos queden alineados verticalmente */
  .benefits-bar > div:not(.vertical-divider) {
    justify-content: flex-start !important;
    padding-left: 15%; 
  }
  /* último elemento ocupe ambas columnas y esté centrado */
  .benefits-bar > div:last-child {
    grid-column: span 2;
    justify-content: center !important;
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .benefits-bar {
    grid-template-columns: 1fr; 
    gap: 20px !important;
    padding: 24px 20px !important;
    max-width: 320px; 
    margin: 0 auto;
  }
  /* Alineación a la izquierda con padding para centrar visualmente en móvil */
  .benefits-bar > div:not(.vertical-divider) {
    justify-content: flex-start !important;
    padding-left: 35px;
  }
  /* Desactiva el span de 2 columnas en móvil para que fluya en 1 columna normal */
  .benefits-bar > div:last-child {
    grid-column: span 1;
    justify-content: flex-start !important;
    padding-left: 35px;
  }
}
</style>