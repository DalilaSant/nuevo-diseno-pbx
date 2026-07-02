<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
</script>

<template>
  <section class="solutions-features-section py-5">
    <div class="container py-lg-3">
      <!-- Fila principal: Se invierte en móvil para que la imagen quede arriba si es necesario, o se mantiene -->
      <div class="row align-items-center g-4 g-lg-5">
        
        <!-- Lado Izquierdo: Imagen -->
        <div class="col-lg-6 col-12 text-center text-lg-start order-2 order-lg-1">
          <div class="image-wrapper ">
            <img src="/img/soluciones/IMAGEN_2_SECCION_1.webp" alt="Telefonía IP eficiente" class="img-fluid solutions-featured-img" />
          </div>
        </div>

        <!-- Lado Derecho: Textos y Beneficios -->
        <div class="col-lg-6 col-12 px-lg-0 text-center text-lg-start order-1 order-lg-2">
          <div class="text-content-wrapper">
            <!-- Línea decorativa roja -->
            <div class="accent-line mb-3 mx-auto mx-lg-0"></div>
            
            <!-- Título Principal -->
            <h2 class="featured-title fw-semibold mb-3 mb-lg-1 lh-sm text-dark">
              Telefonía IP <br>
              <span class="text-red">eficiente y rentable.</span>
            </h2>
            
            <!-- Descripción -->
            <p class="featured-desc mb-3 mb-lg-2 ">
              Mejora la forma en que tu empresa se comunica con una solución diseñada para optimizar costos y brindar una experiencia profesional.
            </p>

            <!-- Listado de Checks -->
            <div class="features-list d-flex flex-column gap-3 mb-4 align-items-center align-items-lg-start">
              <div class="feature-item d-flex align-items-center gap-2">
                <i class="fa-regular fa-circle-check check-icon"></i>
                <span class="feature-text fw-semibold text-dark">Configuración sencilla</span>
              </div>
              
              <div class="feature-item d-flex align-items-center gap-2">
                <i class="fa-regular fa-circle-check check-icon"></i>
                <span class="feature-text fw-semibold text-dark">Funciones avanzadas</span>
              </div>
            </div>

            <!-- Botón de Acción -->
            <div class="d-flex boton-cellphone justify-content-center justify-content-lg-start">
              <BaseButton  texto="Cotizar" :mostrarIcono="true" enlace="#" roundedClass="rounded-1 py-2 px-4 fs-6" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilos generales de la sección */
.solutions-features-section {
  background-color: #f2f5f7;
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
  width: 100%;
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

/* Iconos de check personalizados */
.check-icon {
  color: #f12537;
  font-size: 1.25rem;
}

.feature-text {
  font-size: 1.05rem;
}

/* ==========================================================================
   RESPONSIVIDAD Y ADAPTACIÓN EN PANTALLAS
   ========================================================================== */

/* 1. Desde 1024px en adelante (Balance y alineación perfecta) */
@media (min-width: 1024px) {
  .image-wrapper {
    max-width: 600px !important; /* Agranda el cuadro completo */
  }
  .solutions-featured-img {
    max-height: 370px; 
   
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

  .feature-text {
    font-size: 0.95rem;
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
    max-height: 300px;
    margin-bottom: 0rem;
  }

   
}
</style>
