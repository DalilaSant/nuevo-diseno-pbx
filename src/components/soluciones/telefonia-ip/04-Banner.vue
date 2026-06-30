<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
</script>

<template>
  <section class="solutions-features-section container shadow py-5 my-lg-5  pb-4">
    <div class="container py-lg-3">
      <!-- Fila principal: Se invierte en móvil para que la imagen quede arriba si es necesario, o se mantiene -->
      <div class="row align-items-center ps-0 ps-lg-4 g-4 g-lg-5">

        <!-- Lado Izquierdo: Imagen -->
        <div class="col-lg-6 col-12 text-center text-lg-start ">
          <div class="text-content-wrapper" 
          v-motion-fade-visible :delay="200" :duration="1200">
            <!-- Línea decorativa roja -->
            <div class="accent-line mb-3 mx-auto mx-lg-0"></div>

            <!-- Título Principal -->
            <h2 class="featured-title fw-semibold mb-3 mb-lg-1  lh-sm text-dark">
              Troncal SIP, escala <br>
              <span class="text-red">tu comunicación.</span>
            </h2>

            <!-- Descripción -->
            <p class="featured-desc mb-3 mb-lg-4 ">
              Las Líneas SIP conectan tu telefonía empresarial a través de internet, gestionando llamadas de forma más
              eficiente y rentable.
            </p>

            <!-- Botón de Acción -->
            <div class="d-flex justify-content-center justify-content-lg-start">
              <BaseButton texto="Activa tu cuenta" :mostrarIcono="true" enlace="#"
                roundedClass="rounded-1 py-2 px-4 fs-6" />
            </div>
          </div>

        </div>

        <!-- Lado Derecho: Textos y Beneficios -->
        <div class="col-lg-6 col-12 px-lg-0 text-center  text-lg-end ">
          <div class="image-wrapper ">
            <img src="/img/soluciones/RECURSO_2_SECCION_2.png" alt="Telefonía IP eficiente"
              class="img-fluid mx-auto solutions-featured-img" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos generales de la sección */
.solutions-features-section {
  background-image: url("/img/soluciones/RECURSO_1_SECCION_2.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  width: 100%;
}

/* Línea roja decorativa */
.accent-line {
  width: 40px;
  height: 4px;
  background-color: #f12537;
  border-radius: 2px;
}

/* Contenedor de la imagen con diseño premium */
.image-wrapper {
  overflow: hidden;
  border-radius: 12px;
  display: inline-block;
  width: 100%;
  max-width: 540px;
}

.solutions-featured-img {
  height: auto;
  max-height: 380px;
  object-fit: cover;
  display: block;
}

/* Tipografías del lado derecho */
.featured-title {
  font-size: 2.8rem;
  letter-spacing: -1px;
}

.featured-desc {
  font-size: 1.15rem;
  line-height: 1.6;
  max-width: 520px;
}



/* ==========================================================================
   RESPONSIVIDAD Y ADAPTACIÓN EN PANTALLAS
   ========================================================================== */



/* 1. Desde 1024px en adelante (Balance y alineación perfecta) */
@media (min-width: 1024px) {
  .image-wrapper {
    max-width: 600px !important;
    /* Agranda el cuadro completo */
  }

  .solutions-featured-img {
    max-height: 370px;
  }
}

@media (min-width: 1024px) and (max-width: 1100px) {
  .solutions-featured-img {
    width: 50%;
  }
}

/* 2. Reglas específicas para pantallas de laptop intermedias (1024px a 1280px) */
@media (min-width: 1024px) and (max-width: 1366px) {
  .featured-title {
    font-size: 2.1rem;
  }

  .featured-desc {
    font-size: .95rem;
    max-width: 450px;
  }

  .solutions-featured-img {
    max-height: 360px;
  }

  :deep(.btn) {
    font-size: 0.85rem !important;
    padding: 8px 16px !important;
  }
}

/* 3. Adaptaciones para celulares y tablets (menores a 991px) */
@media (max-width: 991px) {
  .solutions-features-section {
    padding: 3rem 0;
  }

  .featured-title {
    font-size: 2rem;
  }

  .featured-desc {
    font-size: 1rem;
    margin: 0 auto 1.5rem auto;
  }

  .solutions-featured-img {
    max-height: 280px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>
