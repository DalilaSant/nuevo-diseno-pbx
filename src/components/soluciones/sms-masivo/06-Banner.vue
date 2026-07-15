<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue';
</script>

<template>
  <section class="solutions-features-section rounded-4 container shadow py-5 py-lg-2 my-lg-5  ">
    <div class="container ">
      <!-- Fila principal: Se invierte en móvil para que la imagen quede arriba si es necesario, o se mantiene -->
      <div class="row align-items-center ps-0 ps-lg-4 g-4 g-lg-5">

        <!-- Lado Izquierdo: Imagen -->
        <div class="col-lg-6 col-12 text-center text-lg-start "
        v-motion-slide-visible-left
        :delay="200" 
        :duration="2000"
        >
          <div class="text-content-wrapper" v-motion-fade-visible :delay="200" :duration="1200">
            <!-- Línea decorativa roja -->
            <div class="accent-line mb-3 mx-auto mx-lg-0"></div>

            <!-- Título Principal -->
            <h2 class="featured-title fw-semibold mb-3 mb-lg-1  lh-sm text-dark">
              Trámite de Máscara <br>
              <span class="text-red">Personaliza tus mensajes.</span>
            </h2>

            <!-- Descripción -->
            <p class="featured-desc mb-3 mb-lg-4 ">
              Refuerza la confianza y mejora el reconocimiento en cada envío. Utilizando el nombre de tu marca como
              remitente.
            </p>

            <!-- Botón de Acción -->
            <div class="d-flex justify-content-center justify-content-lg-start">
              <BaseButton texto="Actívalo ahora" :mostrarIcono="true" enlace="#"
                roundedClass="rounded-1 py-2 px-4 fs-6" />
            </div>
          </div>

        </div>

        <!-- Lado Derecho: Contenedor de las 3 tarjetas de notificación -->
        <div class="col-lg-6 col-12 d-flex flex-column align-items-center align-items-lg-end">
          <div class="cards-stack-wrapper d-flex flex-column gap-3 w-100">
            <!-- Tarjeta 1: Arriba (Coloca aquí la ruta de la primera imagen) -->
            <div class="stack-card card-top" v-motion-fade-visible :delay="300" :duration="1500">
              <img src="/img/soluciones/RECURSO_2_SECCION_3.png" alt="Máscara de Remitente SMS 1"
                class="img-fluid bubble-img" />
            </div>

            <!-- Tarjeta 2: Centro (Coloca aquí la ruta de la segunda imagen) -->
            <div class="stack-card card-middle"
            v-motion-fade-visible
            :delay="650" 
            :duration="1500"
            >
              <img src="/img/soluciones/RECURSO_3_SECCION_3.png" alt="Máscara de Remitente SMS 2"
                class="img-fluid bubble-img" />
            </div>

            <!-- Tarjeta 3: Abajo (Coloca aquí la ruta de la tercera imagen) -->
            <div class="stack-card card-bottom"
            v-motion-fade-visible 
            :delay="950" 
            :duration="1500"
            >
              <img src="/img/soluciones/RECURSO_4_SECCION_3.png" alt="Máscara de Remitente SMS 3"
                class="img-fluid bubble-img" />
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
  background-image: url("/img/soluciones/RECURSO_1_SECCION_3.png");
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

/* Tipografías del lado izquierdo */
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
   ESTILOS DE LA PILA DE TARJETAS (DIAGONALES / RESPONSIVAS)
   ========================================================================== */
.cards-stack-wrapper {
  max-width: 480px;
}

.stack-card {
  width: 100%;
  max-width: 380px;
  /* Tamaño máximo para pantallas grandes */
  transition: transform 0.3s ease;
}

.bubble-img {
  width: 100%;
  height: auto;
  display: block;
}

/* Alineación diagonal en Desktop */
@media (min-width: 992px) {
  .card-top {
    align-self: flex-start;
  }

  .card-middle {
    align-self: flex-end;
    transform: translateX(10px);
    /* Ligero desplazamiento hacia la derecha */
  }

  .card-bottom {
    align-self: flex-start;
    transform: translateX(-40px);
    /* Desplazamiento más pronunciado hacia la izquierda */
  }
}

/* ==========================================================================
   RESPONSIVIDAD Y ADAPTACIÓN EN PANTALLAS
   ========================================================================== */

/* 2. Reglas específicas para pantallas de laptop intermedias (1024px a 1280px) */
@media (min-width: 1024px) and (max-width: 1366px) {
  .featured-title {
    font-size: 2.1rem;
  }

  .featured-desc {
    font-size: .95rem;
    max-width: 450px;
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

  /* Centrar la pila y uniformar tamaños en móviles */
  .cards-stack-wrapper {
    align-items: center;
    margin-top: 2rem;
  }

  .stack-card {
    max-width: 320px;
    /* Un poco más angosto en móvil */
  }

  .card-middle,
  .card-bottom {
    transform: none !important;
    /* Desactiva el offset en móvil */
  }
}
</style>
