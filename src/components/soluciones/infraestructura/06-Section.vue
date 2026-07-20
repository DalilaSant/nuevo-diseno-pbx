<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { solucionesData } from '@/data/soluciones'

const carouselRef = ref<HTMLElement | null>(null)


const scrollLeft = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: -384, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: 384, behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="switch-pricing-section py-0 my-lg-4">
    <div class="container py-lg-4">

   
      <h2 class="section-title text-center fw-semibold mb-5 text-dark">
        ¡Servidores al <span class="text-red">mejor precio!</span>
      </h2>

      
      <!-- Contenedor del Carrusel Relativo con Botones Flotantes y Padding Lateral Suficiente -->
      <div class="carousel-wrapper position-relative px-md-5  px-3">
        
        <!-- Flecha de Navegación Izquierda -->
        <button 
          @click="scrollLeft" 
          class="carousel-arrow prev-arrow d-none d-md-flex align-items-center justify-content-center shadow-sm"
          aria-label="Anterior"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>

       
        <div ref="carouselRef" class="carousel-container d-flex gap-4 py-3 px-5">
          
          <!-- Elemento del Carrusel -->
          <div 
            v-for="(card, index) in solucionesData.preciosServidores" 
            :key="index"
            class="carousel-item-card d-flex justify-content-center"
          >
            <div class="pricing-switch-card py-4 px-4 rounded-4 shadow-sm d-flex flex-column justify-content-between text-start w-100">
              <div>
                <!-- Cabecera de la tarjeta: Icono + Título -->
                <div class="d-flex align-items-center gap-2 mb-3">
                  <div class="card-icon-wrapper flex-shrink-0 d-flex align-items-center justify-content-center">
                    <img src="/img/soluciones/ICONO_3_SECCIO_6.png" alt="Icono" class="img-fluid card-icon-img" />
                  </div>
                  <div>
                    <span class="card-category d-block text-dark fw-semibold uppercase">
                      {{ card.title }}
                    </span>
                    <h3 class="card-plan-title text-red fw-semibold mb-0">{{ card.titletwo }}</h3>
                  </div>
                </div>

                <!-- Bloque del Precio -->
                <div class="price-block text-center my-3">
                  <span class="price-period-top text-start d-block mb-0">Al mes</span>
                  <div class="price-container d-inline-flex align-items-center justify-content-center gap-1">
                    <span class="price-symbol fw-semibold text-dark">{{ card.price }}</span>
                    <div class="text-start lh-sm">
                      <span class="d-block fw-bold text-dark small-iva">+IVA</span>
                      <span class="d-block fw-bold text-dark small-currency">MXN</span>
                    </div>
                  </div>
                  <span class="setup-price d-block mt-1 fw-semibold">{{ card.setup }}</span>
                </div>

                <!-- Listado de Características -->
                <div class="d-flex justify-content-center w-100 mb-4">
                  <div class="features-list d-inline-flex flex-column gap-2 text-start">
                    <div v-for="(feature, fIndex) in card.features" :key="fIndex" class="feature-item d-flex align-items-center gap-2">
                      <i class="fa-regular fa-circle-check check-icon"></i>
                      <span class="feature-text fw-semibold text-dark">{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Botón de acción -->
              <div class="d-flex justify-content-start boton-action mt-auto">
                <BaseButton 
                  texto="Me interesa" 
                  enlace="#" 
                  :mostrarIcono="true"
                  roundedClass="rounded-1 py-2 px-3 w-100 text-center justify-content-center" 
                />
              </div>
            </div>
          </div>

        </div>

        
        <button 
          @click="scrollRight" 
          class="carousel-arrow next-arrow d-none d-md-flex align-items-center justify-content-center shadow-sm"
          aria-label="Siguiente"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>

      </div>

    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 2.2rem;
  letter-spacing: -0.5px;
}

/* ==========================================================================
   ESTILOS DEL CARRUSEL (NATIVO Y FLUIDO)
   ========================================================================== */
.carousel-wrapper {
  width: 100%;
}

.carousel-container {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Oculta scrollbar en Firefox */
  -ms-overflow-style: none;  /* Oculta scrollbar en IE/Edge */
  padding: 10px 0;
}

.carousel-container::-webkit-scrollbar {
  display: none; /* Oculta scrollbar en Chrome/Safari */
}

.carousel-item-card {
  scroll-snap-align: center;
  flex: 0 0 auto;
  width: 360px;
}


.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 20%;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  color: #718096;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
}

.carousel-arrow:hover {
  background-color: #f8fafc;
  color: #f12537;
  border-color: #cbd5e1;
}

.prev-arrow {
  left: 0;
}

.next-arrow {
  right: 0;
}

/* Estilos de las tarjetas de precios */
.pricing-switch-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #f8fafc;
}

.pricing-switch-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
}

/* Icono circular de la cabecera */
.card-icon-wrapper {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  padding: 8px;
}

.card-icon-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Textos de la cabecera */
.card-category {
  font-size: 2.3rem;
  color: #000000;
  line-height: .9;
}

.card-plan-title {
  font-size: 2.3rem;
  line-height: 1.2;
}

/* Contenedor de Precios */
.price-block {
  background-color: transparent;
  margin: 1.5rem 0;
  margin-left: -1.6rem;
}

.price-period-top {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-left: 6.8rem !important;
}

.price-symbol {
  font-size: 4rem;
  line-height: 1;
  letter-spacing: -2px;
  color: #000000;
}

.small-iva {
  font-size: 1.3rem;
  color: #000000;
}

.small-currency {
  font-size: 1.3rem;
  color: #000000;
}

.setup-price {
  font-size: 1rem;
  color: #1a1a1a;
}

/* Listado de características */
.check-icon {
  color: #f12537;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.feature-text {
  font-size: 0.95rem;
}

.description {
  font-size: 1.15rem;
}

/* Responsividad para móviles y pantallas medianas */
@media (max-width: 991px) {
  .pricing-switch-card {
    max-width: 320px;
    margin: 0 auto;
  }

  .boton-action {
    max-width: 85%;
    margin: 0 auto;
  }

  .carousel-item-card {
    width: 320px; /* Tarjetas ligeramente más angostas en móvil */
  }
}

@media (min-width: 1024px) and (max-width:1279px) {
  .boton-action {
    max-width: 65%;
    margin-left: 3.5rem !important;
  }

  .card-category {
    font-size: 1.8rem;
  }

  .card-plan-title {
    font-size: 1.8rem;
  }
}

@media (min-width: 1280px) and (max-width:1366px) {
  .boton-action {
    max-width: 61%;
    font-size: 1rem;
    margin-left: 3rem !important;
  }
}

@media (min-width: 1367px) {
  .boton-action {
    max-width: 60%;
    margin-left: 3.5rem !important;
  }
}
</style>