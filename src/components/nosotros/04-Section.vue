<script setup lang="ts">
import { ref } from 'vue'
import { nosotrosData } from '@/data/nosotros';

// Referencia al contenedor del scroll
const scrollContainer = ref<HTMLElement | null>(null)

// Funciones para deslizar a la izquierda y derecha
const scrollLeft = () => {
  if (scrollContainer.value) {
    const cardWidth = scrollContainer.value.firstElementChild?.clientWidth || 300
    scrollContainer.value.scrollBy({ left: -cardWidth - 24, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    const cardWidth = scrollContainer.value.firstElementChild?.clientWidth || 300
    scrollContainer.value.scrollBy({ left: cardWidth + 24, behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="banner-section py-lg-0 py-4" style="background-color: #ffffff;">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Línea decorativa roja -->
          <div class="d-flex align-items-center gap-2 mb-3 justify-content-center justify-content-lg-start">
            <div class="accent-line m-0"></div>
            <span class="fw-semibold fs-5" style="letter-spacing: 0.05em;">Nuestros Valores</span>
          </div>
        </div>
      </div>
      
      <!-- Contenedor del Carrusel -->
      <div class="position-relative px-md-5 ">
        <!-- Botón Izquierdo (Oculto en móviles con d-none d-md-flex) -->
        <button @click="scrollLeft"
          class="carousel-nav-btn prev-btn d-none d-md-flex align-items-center justify-content-center border-0 shadow-sm rounded-3"
          aria-label="Anterior">
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <!-- Contenedor del scrollable track -->
        <div ref="scrollContainer" class="carousel-scroll-container d-flex gap-4 pb-4">
          <div v-for="(cards, index) in nosotrosData.cards" :key="index" class="carousel-card-item flex-shrink-0 pt-2">
            <!-- Tarjeta de Sector -->
            <div class="sector-card position-relative rounded-4 overflow-hidden shadow-sm"
              :style="{ backgroundImage: `url(${cards.bgClass})` }">

              <!-- Información de la Tarjeta (Abajo) -->
              <div class="card-content position-absolute bottom-0 start-0 w-100 p-4 z-3 text-white text-start">
                <h3 class="h5 fw-semibold mb-0">{{ cards.title }}</h3>
                <p class="mb-0 text-light fs-6 card-desc">
                  {{ cards.desc }}
                </p>
              </div>

            </div>
          </div>
        </div>

        <!-- Botón Derecho (Oculto en móviles con d-none d-md-flex) -->
        <button @click="scrollRight"
          class="carousel-nav-btn next-btn d-none d-md-flex align-items-center justify-content-center border-0 shadow-sm rounded-3"
          aria-label="Siguiente">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Línea roja decorativa */
.accent-line {
  width: 40px;
  height: 4px;
  background-color: #f12537;
  border-radius: 2px;
}

/* Ocultar barra de scroll en navegadores */
.carousel-scroll-container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
}
.carousel-scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

/* Anchos de las tarjetas */
.carousel-card-item {
  scroll-snap-align: start;
  width: calc(33.333% - 16px); /* 3 columnas en desktop */
}

/* Botones de navegación */
.carousel-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  background-color: #f8f9fa;
  color: #7d879c;
  z-index: 10;
  transition: all 0.2s ease;
  border: 1px solid #e3e9ef !important;
}

.carousel-nav-btn:hover {
  background-color: #f12537;
  color: #ffffff;
  border-color: #f12537 !important;
}

.prev-btn {
  left: 0px;
}

.next-btn {
  right: 0px;
}

.sector-card {
  min-height: 250px;
  background-size: cover;
  background-position: top left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  height: 100%;
}

.sector-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15) !important;
}

/* Descripción de la tarjeta */
.card-desc {
  line-height: 1.4;
  font-size: 0.95rem !important;
}

/* Ajustes responsivos */
@media (max-width: 991.98px) {
  .carousel-card-item {
    width: calc(50% - 12px); /* 2 columnas en tablet */
  }
  .sector-card {
    min-height: 220px;
  }
}

@media (max-width: 768px) {
  .carousel-card-item {
    width: 85%; /* 1 columna con vista previa en celular */
  }
  .sector-card {
    min-height: 200px;
  }
}
</style>