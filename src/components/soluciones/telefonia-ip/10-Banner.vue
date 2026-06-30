<script setup lang="ts">
import SectionTitleTwo from '@/components/common/SectionTitleTwo.vue';
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<template>
  <section class="banner-section py-4 py-lg-0 mt-xl-1 mt-0">
    <div class="container py-lg-4">
      <!-- Contenedor principal con imagen de fondo -->
      <div
        class="custom-banner-bg position-relative rounded-4 overflow-hidden d-flex flex-column flex-lg-row align-items-center py-5 py-lg-0">

        <!-- Contenido del Banner -->
        <div class="container position-relative z-3 pt-lg-0 px-4 px-md-5 text-white">
          <div class="row align-items-center">

            <!-- Lado izquierdo: Textos -->
            <div class="col-12 col-lg-7 text-start"
              v-motion-slide-visible-left
              :delay="200" 
              :duration="1200">
              <SectionTitleTwo textColor="text-white" displayFont="display-6">
                Software Callcenter, <br>
                <span class="text-red">plataforma intuitiva y dinámica.</span>
              </SectionTitleTwo>

              <p class="fs-5 text-white text-lg-start text-center mb-0 banner-desc">
                PBXDialer permite potenciar tus operaciones de contactación y servicio al cliente.
              </p>
            </div>

            <!-- Lado derecho: Espacio vacío para equilibrar el diseño en desktop -->
            <div class="col-12 col-lg-5">
            </div>

          </div>
        </div>

        <!-- Recuadro Blanco Flotante (Mockup) -->
        <div class="floating-features-card bg-white p-4 p-md-4 shadow">
          <p class="text-center mb-2">Consulta nuestro sistema de <br><span class="fw-semibold">Gestión de
                llamadas</span> </p>
          <div class="d-flex flex-column gap-2 px-3 text-start">
            
            
            <div class="d-flex align-items-center gap-2">
              <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="check-icon-small" />
              <span class="text-dark fw-semibold">Marcador predictivo</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="check-icon-small" />
              <span class="text-dark fw-semibold">Múltiples agentes</span>
            </div>
            <div class="d-flex align-items-center gap-2">
              <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="check-icon-small" />
              <span class="text-dark fw-semibold">1 sola licencia</span>
            </div>
            <div class="text-start boton-cellphone mt-2">
              <BaseButton texto="Solicitar demo" enlace="#" :mostrarIcono="true" roundedClass="rounded-1" paddingClass="py-1" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</template>

<style scoped>
.custom-banner-bg {
  background-image: url('/img/soluciones/IMAGEN_13_SECCION_1.png');
  background-size: cover;
  background-position: center left;
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

@media (max-width: 800px) {

  .boton-cellphone {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
  }
  .boton-cellphone :deep(.btn) {
    width: 100% !important;
    display: inline-flex !important;
    justify-content: center !important;
    text-align: center !important;
  }
  .boton-cellphone :deep(.ms-3) {
    margin-left: 0 !important;
  }
}

/* Escalabilidad en pantallas grandes */
@media (min-width: 992px) {
  .custom-banner-bg {
    min-height: 400px;
    /* Aumentamos el alto del banner en computadoras */
  }
    .floating-features-card {
    position: absolute;
    bottom: 0;
    right: 8%;
    border-radius: 16px 16px 0 0;
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



</style>