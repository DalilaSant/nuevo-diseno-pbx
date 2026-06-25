<script setup lang="ts">
import { ref } from 'vue'
import SectionTitleTwoCenter from '../common/SectionTitleTwoCenter.vue';
import { homeData } from '@/data/home';


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
  <section class="banner-section py-5 position-relative overflow-hidden" style="background-color: #ffffff;">
    <div class="container py-lg-4">
      <div class="text-center pt-lg-4 mb-5">
        <h4 class="text-uppercase fw-bold mb-2" >Nosotros ofrecemos</h4>
        <SectionTitleTwoCenter>
          <span class="text-red">Soluciones integrales</span> para tu comunicación
        </SectionTitleTwoCenter>
      </div>

      <!-- Contenedor del Carrusel -->
      <div class="position-relative px-md-5">
        <!-- Botón Izquierdo -->
        <button 
          @click="scrollLeft" 
          class="carousel-nav-btn prev-btn d-flex align-items-center justify-content-center border-0 shadow-sm rounded-3"
          aria-label="Anterior"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <!-- Contenedor del scrollable track -->
        <div ref="scrollContainer" class="carousel-scroll-container d-flex gap-4 pb-4">
          <div 
            v-for="(carrusel, index) in homeData.carrusel" 
            :key="index" 
            class="carousel-card-item flex-shrink-0"
          >
            <div class="card h-100 p-4 border rounded-4 shadow-sm bg-white text-start transition-scale">

              <div class="icon-wrapper mb-3 d-flex align-items-center justify-content-center rounded-3" style="width: 54px; height: 54px; background-color: #f2f5f7;">
                <img 
                  :src="carrusel.icono" 
                  :alt="carrusel.titulo" 
                  class="img-fluid" 
                  style="max-width: 60%; max-height: 60%;"
                />
              </div>

              <h3 class="h5 fw-bold text-dark mb-2">{{ carrusel.titulo }}</h3>

              <p class="small mb-4 flex-grow-1">
                <strong>{{ carrusel.descNegrita }}</strong>{{ carrusel.descNormal }}
              </p>

              <router-link :to="carrusel.link" class="text-red fw-bold text-decoration-none d-inline-flex align-items-center gap-1 small-btn">
                Ver solución
                <i class="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></i>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Botón Derecho -->
        <button 
          @click="scrollRight" 
          class="carousel-nav-btn next-btn d-flex align-items-center justify-content-center border-0 shadow-sm rounded-3"
          aria-label="Siguiente"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

@media (max-width: 991px) {
  .carousel-card-item {
    width: calc(50% - 12px); /* 2 columnas en tablet */
  }
}

@media (max-width: 768px) {
  .carousel-card-item {
    width: 85%; /* 1 columna con vista previa en celular */
  }
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

@media (max-width: 768px) {
  .carousel-nav-btn {
    display: none !important; /* Ocultar botones en móviles para usar swipe nativo */
  }
}

/* Efecto hover en las tarjetas */
.transition-scale {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.transition-scale:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
}

/* Hover de botón ver solución */
.small-btn {
  transition: transform 0.2s ease;
}
.small-btn:hover {
  color: #b51322 !important;
}
.small-btn:hover i {
  transform: translateX(2px);
  transition: transform 0.2s ease;
}
</style>