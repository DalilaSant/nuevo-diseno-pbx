<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import { nosotrosData } from '@/data/nosotros';

// SCRIPT DEL CARRUSEL INFINITO
const originalItems = nosotrosData.cards

// Clonar elementos al inicio y al final para el bucle infinito
const items = ref([
  originalItems[originalItems.length - 3], 
  originalItems[originalItems.length - 2], 
  originalItems[originalItems.length - 1], 
  ...originalItems,                        
  originalItems[0],                         
  originalItems[1],                         
  originalItems[2]                          
])

const startIndex = 3
const currentIndex = ref(startIndex)
const isTransitioning = ref(false) 
const isLocked = ref(false) 
const currentOffset = ref(0) 

const trackRef = ref<HTMLElement | null>(null)

// Ancho estimado inicial
const getEstimateWidth = () => {
  if (typeof window === 'undefined') return 310 + 24
  const isDesktop = window.innerWidth >= 992
  const cardW = isDesktop ? (window.innerWidth >= 1280 ? 380 : 350) : 310
  const gap = 24
  return cardW + gap
}

currentOffset.value = getEstimateWidth() * currentIndex.value

// Actualizar offsets dinámicamente según dimensiones reales
const updateWidths = () => {
  if (trackRef.value) {
    const cardEl = trackRef.value.querySelector('.carousel-item-card')
    if (cardEl) {
      const cardRect = cardEl.getBoundingClientRect()
      let cardW = cardRect.width
      
      if (cardW < 100) {
        const isDesktop = window.innerWidth >= 992
        cardW = isDesktop ? (window.innerWidth >= 1280 ? 380 : 350) : 310
      }
      
      const computedStyle = window.getComputedStyle(trackRef.value)
      let gap = parseFloat(computedStyle.gap || computedStyle.columnGap || '24')
      if (isNaN(gap)) {
        gap = 24
      }
      
      const singleWidth = cardW + gap
      currentOffset.value = currentIndex.value * singleWidth
    }
  }
}

onMounted(() => {
  nextTick(() => {
    updateWidths()
    window.addEventListener('resize', updateWidths)
    
    setTimeout(() => {
      isTransitioning.value = true
    }, 150)
  })
})

const scrollLeft = () => {
  if (isLocked.value) return
  isLocked.value = true
  isTransitioning.value = true
  currentIndex.value--
  updateWidths()
}

const scrollRight = () => {
  if (isLocked.value) return
  isLocked.value = true
  isTransitioning.value = true
  currentIndex.value++
  updateWidths()
}

// Bucle de reajuste silencioso sin transición al llegar a los extremos
const handleTransitionEnd = (event: TransitionEvent) => {
  if (event.target !== event.currentTarget) return

  const totalItems = items.value.length

  if (currentIndex.value === totalItems - 3) {
    isTransitioning.value = false
    currentIndex.value = startIndex
    updateWidths()
  }
  else if (currentIndex.value === startIndex - 1) {
    isTransitioning.value = false
    currentIndex.value = totalItems - 4
    updateWidths()
  }

  setTimeout(() => {
    isTransitioning.value = true
    isLocked.value = false
  }, 30)
}

const trackStyle = computed(() => {
  return {
    transform: `translateX(-${currentOffset.value}px)`,
    transition: isTransitioning.value ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
  }
})

// Eventos táctiles para móviles (Swipe)
const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (event: TouchEvent) => {
  const touch = event.touches[0]
  if (touch) {
    touchStartX.value = touch.clientX
    touchEndX.value = touch.clientX
  }
}

const handleTouchMove = (event: TouchEvent) => {
  const touch = event.touches[0]
  if (touch) {
    touchEndX.value = touch.clientX
  }
}

const handleTouchEnd = () => {
  const swipeDistance = touchStartX.value - touchEndX.value
  const minSwipeDistance = 50
  
  if (swipeDistance > minSwipeDistance) {
    scrollRight()
  } else if (swipeDistance < -minSwipeDistance) {
    scrollLeft()
  }
  
  touchStartX.value = 0
  touchEndX.value = 0
}
</script>

<template>
  <section class="banner-section py-lg-5 py-4" style="background-color: #ffffff;">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Línea decorativa roja -->
          <div class="d-flex align-items-center gap-2 mb-4 justify-content-center justify-content-lg-start">
            <div class="accent-line m-0"></div>
            <span class="fw-semibold fs-5" style="letter-spacing: 0.05em;">Nuestros Valores</span>
          </div>
        </div>
      </div>
      
      <!-- Contenedor del Carrusel -->
      <div class="carousel-wrapper position-relative px-md-5 px-3 overflow-hidden">
        
        <!-- Botón Izquierdo -->
        <button @click="scrollLeft"
          class="carousel-nav-btn prev-btn d-none d-md-flex align-items-center justify-content-center border-0 shadow-sm rounded-3"
          aria-label="Anterior">
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <!-- Track del Carrusel con soporte táctil swipe -->
        <div 
          class="carousel-container-outer overflow-hidden w-100" 
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove" 
          @touchend="handleTouchEnd"
        >
          <div 
            ref="trackRef" 
            class="carousel-track d-flex gap-4 py-2" 
            :style="trackStyle"
            @transitionend="handleTransitionEnd"
          >
            <!-- Elemento del Carrusel -->
            <div 
              v-for="(cards, index) in items" 
              :key="index" 
              class="carousel-item-card flex-shrink-0"
            >
              <!-- Tarjeta de Valor -->
              <div class="sector-card position-relative rounded-4 overflow-hidden shadow-sm"
                :style="{ backgroundImage: `url(${cards?.bgClass})` }">

                <!-- Información de la Tarjeta (Abajo) -->
                <div class="card-content position-absolute bottom-0 start-0 w-100 p-4 z-3 text-white text-start">
                  <h3 class="h5 fw-semibold mb-0">{{ cards?.title }}</h3>
                  <p class="mb-0 text-light fs-6 card-desc">
                    {{ cards?.desc }}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        <!-- Botón Derecho -->
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

/* Contenedores del carrusel por traducción CSS */
.carousel-wrapper {
  width: 100%;
}

.carousel-container-outer {
  width: 100%;
}

.carousel-track {
  will-change: transform;
}

/* Ancho inicial responsivo de las tarjetas */
.carousel-item-card {
  box-sizing: border-box;
  width: 310px; /* Celular */
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
  left: 6px;
}

.next-btn {
  right: 6px;
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
@media (min-width: 992px) {
  .carousel-item-card {
    width: 350px; /* Tablet */
  }
}

@media (min-width: 1280px) {
  .carousel-item-card {
    width: 380px; /* Desktop */
  }
}

@media (max-width: 991.98px) {
  .sector-card {
    min-height: 220px;
  }
}

@media (max-width: 768px) {
  .sector-card {
    min-height: 200px;
  }
}
</style>