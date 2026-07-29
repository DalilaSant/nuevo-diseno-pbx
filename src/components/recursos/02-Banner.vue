<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import SectionTitleTwo from '../common/SectionTitleTwo.vue'
import { recursosData } from '@/data/recursos'

// SCRIPT DEL CARRUSEL  INICIO
const originalItems = recursosData.newsletters


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


const getEstimateWidth = () => {
  if (typeof window === 'undefined') return 380 + 24
  const isDesktop = window.innerWidth >= 1280
  const isTablet = window.innerWidth >= 992 && window.innerWidth < 1280
  const cardW = isDesktop ? 380 : (isTablet ? 350 : 310)
  const gap = 24 // gap-4 en Bootstrap (24px)
  return cardW + gap
}


currentOffset.value = getEstimateWidth() * currentIndex.value


const updateWidths = () => {
  if (trackRef.value) {
    const cardEl = trackRef.value.querySelector('.carousel-item-card')
    if (cardEl) {
      const cardRect = cardEl.getBoundingClientRect()
      let cardW = cardRect.width


      if (cardW < 100) {
        const isDesktop = window.innerWidth >= 1280
        const isTablet = window.innerWidth >= 992 && window.innerWidth < 1280
        cardW = isDesktop ? 380 : (isTablet ? 350 : 310)
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
// Eventos táctiles para dispositivos móviles (deslizamiento / swipe)
const touchStartX = ref(0)
const touchEndX = ref(0)

const handleTouchStart = (event: TouchEvent) => {
  const touch = event.touches[0]
  if (touch) {
    touchStartX.value = touch.clientX
    touchEndX.value = touch.clientX // inicializar para evitar saltos falsos
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
  const minSwipeDistance = 50 // Distancia mínima en px para detectar el swipe

  if (swipeDistance > minSwipeDistance) {
    // Swipe hacia la izquierda -> Siguiente
    scrollRight()
  } else if (swipeDistance < -minSwipeDistance) {
    // Swipe hacia la derecha -> Anterior
    scrollLeft()
  }

  // Resetear coordenadas
  touchStartX.value = 0
  touchEndX.value = 0
}
// SCRIPT DEL CARRUSEL  FIN
</script>

<template>
  <section class="banner-section py-lg-4 py-0" style="background-color: #ffffff;">
    <div class="container">
      <div class="text-start pt-lg-0 mb-5" v-motion-fade-visible :delay="200" :duration="1000">
        <SectionTitleTwo display-font="display-5" marginBotton="mb-0">
          Últimas publicaciones.
        </SectionTitleTwo>
        <p class="featured-desc px-1">
          Descubre novedades, tendencias y consejos para optimizar la comunicación de tu empresa.
        </p>
      </div>
    </div>

    <div class="container">

      <div class="carousel-wrapper position-relative px-md-5 px-3 overflow-hidden">


        <button @click="scrollLeft"
          class="carousel-arrow prev-arrow d-none d-md-flex align-items-center justify-content-center shadow-sm"
          aria-label="Anterior">
          <i class="fa-solid fa-chevron-left"></i>
        </button>


        <!-- Tira de tarjetas desplazable por CSS con soporte táctil (swipe) -->
        <div class="carousel-container-outer overflow-hidden w-100" @touchstart="handleTouchStart"
          @touchmove="handleTouchMove" @touchend="handleTouchEnd">
          <div ref="trackRef" class="carousel-track d-flex gap-4 py-3" :style="trackStyle"
            @transitionend="handleTransitionEnd">
            <!-- Elemento del Carrusel -->
            <div v-for="(card, index) in items" :key="index" class="carousel-item-card d-flex justify-content-center">
              <div
                class="newsletter-linkedin-card border rounded-4 shadow-sm p-4 d-flex flex-column justify-content-between text-start w-100">
                <div>
                  <div class="nl-linkedin-header d-flex justify-content-between align-items-center mb-4">
                    <span class="nl-badge fw-semibold">{{ card?.badge }}</span>
                    <svg class="nl-linkedin-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>

                  <div class="nl-linkedin-body mb-4">
                    <h3 class="nl-linkedin-title fw-semibold">{{ card?.title }}</h3>
                    <p class="nl-linkedin-author">{{ card?.author }}</p>
                    <p class="nl-linkedin-description">
                      {{ card?.description }}
                    </p>
                  </div>
                </div>

                <div class="nl-linkedin-footer d-flex flex-column gap-3 mt-auto">
                  <div class="nl-subscriber-count d-flex align-items-center ">
                    <span class="nl-dot-live"></span> {{ card?.subscribers }}
                  </div>
                  <a :href="card?.link" target="_blank" class="nl-btn-linkedin d-block text-center">
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <button @click="scrollRight"
          class="carousel-arrow next-arrow d-none d-md-flex align-items-center justify-content-center shadow-sm"
          aria-label="Siguiente">
          <i class="fa-solid fa-chevron-right"></i>
        </button>

      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-desc {
  font-size: 1.15rem;
  line-height: 1.6;
}

/* ==========================================================================
   ESTILOS DEL CARRUSEL (DESPLAZABLE POR CSS)
   ========================================================================== */
.carousel-wrapper {
  width: 100%;
}

.carousel-container-outer {
  width: 100%;
}

.carousel-track {
  will-change: transform;
}

.carousel-item-card {
  flex: 0 0 auto;
  width: 310px;
  /* Móvil por defecto */
  box-sizing: border-box;
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
  left: 6px;
}

.next-arrow {
  right: 6px;
}

/* Contenedor principal de la tarjeta */
.newsletter-linkedin-card {
  background-color: #ffffff;
  box-sizing: border-box;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.newsletter-linkedin-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
}

.nl-badge {
  background-color: #f3f6f8;
  color: #666666;
  font-size: 0.75rem;
  padding: 6px 12px;
  border-radius: 20px;
  letter-spacing: 0.05em;
}

.nl-linkedin-icon {
  width: 28px;
  height: 28px;
  fill: #0a66c2;
  /* Azul oficial de LinkedIn */
}

.nl-linkedin-title {
  font-size: 1.5rem;
  color: #191919;
  margin: 0 0 0.25rem 0;
}

.nl-linkedin-author {
  font-size: 0.9rem;
  color: #666666;
  margin: 0 0 1rem 0;
}

.nl-linkedin-description {
  font-size: 0.95rem;
  color: #474747;
  line-height: 1.5;
  margin: 0;
}

/* Footer y Botón */
.nl-subscriber-count {
  gap: 6px;
  font-size: 0.85rem;
  color: #057642;
  /* Verde estilo LinkedIn para comunidad */
  font-weight: 600;
}

/* Pequeño punto parpadeante de "en vivo" */
.nl-dot-live {
  width: 8px;
  height: 8px;
  background-color: #057642;
  border-radius: 50%;
  display: inline-block;
}

/* Botón de acción */
.nl-btn-linkedin {
  background-color: #0a66c2;
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: 24px;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.nl-btn-linkedin:hover {
  background-color: #004182;
  color: #ffffff;
}

.nl-btn-linkedin:active {
  transform: scale(0.98);
}

/* Media Queries para comportamiento responsivo de la tarjeta */
@media (min-width: 992px) {
  .carousel-item-card {
    width: 350px;
    /* Tablet horizontal / Laptop pequeña */
  }
}

@media (min-width: 1280px) {
  .carousel-item-card {
    width: 380px;
    /* Escritorio (exactamente 3 tarjetas en pantalla) */
  }
}

@media (min-width: 1024px) and (max-width: 1366px) {
  .featured-desc {
    font-size: .95rem;
  }
}

@media (max-width: 991px) {
  .featured-desc {
    font-size: 1rem;
    margin: 0 auto 1.5rem auto;
  }
}
</style>