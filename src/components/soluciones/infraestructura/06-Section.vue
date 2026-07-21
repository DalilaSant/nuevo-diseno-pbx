<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { solucionesData } from '@/data/soluciones'


const originalItems = solucionesData.preciosServidores

// Triplicamos la lista agregando 3 clones al inicio y 3 al final para asegurar
// que no queden espacios vacíos al renderizar múltiples tarjetas en pantallas anchas.
const items = ref([
  originalItems[originalItems.length - 3], // Clon de VPS 02
  originalItems[originalItems.length - 2], // Clon de VPS 03
  originalItems[originalItems.length - 1], // Clon de VPS 04
  ...originalItems,                         // Tarjetas reales (VPS 01, 02, 03, 04)
  originalItems[0],                         // Clon de VPS 01
  originalItems[1],                         // Clon de VPS 02
  originalItems[2]                          // Clon de VPS 03
])

// Como agregamos 3 elementos al inicio, la primera tarjeta real (VPS 01) ahora está en el índice 3
const startIndex = 3
const currentIndex = ref(startIndex)
const isTransitioning = ref(false) // Desactivado inicialmente para evitar animación al cargar
const isLocked = ref(false) // Bloqueo para evitar clics dobles rápidos
const currentOffset = ref(0) // Desplazamiento actual en píxeles

const trackRef = ref<HTMLElement | null>(null)

// Determinar un ancho estimado por defecto según el tamaño de la pantalla
const getEstimateWidth = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992
  const cardW = isMobile ? 320 : 360
  const gap = 24 // gap-4 en Bootstrap es 1.5rem (24px)
  return cardW + gap
}

// Inicializar el desplazamiento con un estimado realista para el primer renderizado
currentOffset.value = getEstimateWidth() * currentIndex.value

// Función para calcular dinámicamente el ancho de la tarjeta + gap real
const updateWidths = () => {
  if (trackRef.value) {
    const cardEl = trackRef.value.querySelector('.carousel-item-card')
    if (cardEl) {
      const cardRect = cardEl.getBoundingClientRect()
      let cardW = cardRect.width
      
      // Si la tarjeta aún no se dibuja (ej: cargador activo, ancho = 0), usamos el estimado
      if (cardW < 100) {
        cardW = window.innerWidth < 992 ? 320 : 360
      }
      
      const computedStyle = window.getComputedStyle(trackRef.value)
      let gap = parseFloat(computedStyle.gap || computedStyle.columnGap || '24')
      
      // Salvaguarda por si el navegador devuelve "normal" o vacío para gap
      if (isNaN(gap)) {
        gap = 24
      }
      
      const singleWidth = cardW + gap
      currentOffset.value = currentIndex.value * singleWidth
    }
  }
}

// Inicializar posición sin transición al montar el componente
onMounted(() => {
  nextTick(() => {
    updateWidths()
    window.addEventListener('resize', updateWidths)
    
    // Habilitar transiciones después de posicionar el carrusel en el elemento inicial
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

// Al terminar la transición de CSS, gestionamos los teletransportes de los clones
const handleTransitionEnd = (event: TransitionEvent) => {
  // IMPORTANTE: Evitar que transiciones de elementos hijos (como hover de botones o tarjetas) activen esta lógica
  if (event.target !== event.currentTarget) return

  const totalItems = items.value.length

  // Si cruzamos al primer clon de la derecha (llegando al final real), saltamos al elemento real correspondiente
  if (currentIndex.value === totalItems - 3) {
    isTransitioning.value = false
    currentIndex.value = startIndex
    updateWidths()
  }
  // Si cruzamos al primer clon de la izquierda (llegando al inicio real), saltamos al elemento real correspondiente
  else if (currentIndex.value === startIndex - 1) {
    isTransitioning.value = false
    currentIndex.value = totalItems - 4
    updateWidths()
  }

  // Pequeño retardo antes de desbloquear clics y reactivar transiciones
  setTimeout(() => {
    isTransitioning.value = true
    isLocked.value = false
  }, 30)
}

// Propiedad computada para controlar los estilos del track de forma segura desde el script
const trackStyle = computed(() => {
  return {
    transform: `translateX(-${currentOffset.value}px)`,
    transition: isTransitioning.value ? 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
  }
})
</script>

<template>
  <section class="switch-pricing-section py-0 my-lg-4">
    <div class="container py-lg-4">

      <h2 class="section-title text-center fw-semibold mb-5 text-dark">
        ¡Servidores al <span class="text-red">mejor precio!</span>
      </h2>

      <!-- Contenedor del Carrusel Relativo con Botones Flotantes -->
      <div class="carousel-wrapper position-relative px-md-5 px-3 overflow-hidden">
        
        <!-- Flecha de Navegación Izquierda -->
        <button 
          @click="scrollLeft" 
          class="carousel-arrow prev-arrow d-none d-md-flex align-items-center justify-content-center shadow-sm"
          aria-label="Anterior"
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>

        <!-- Tira de tarjetas desplazable por CSS -->
        <div class="carousel-container-outer overflow-hidden w-100">
          <div 
            ref="trackRef"
            class="carousel-track d-flex gap-4 py-3"
            :style="trackStyle"
            @transitionend="handleTransitionEnd"
          >
            <!-- Elemento del Carrusel -->
            <div 
              v-for="(card, index) in items" 
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
                        {{ card?.title }}
                      </span>
                      <h3 class="card-plan-title text-red fw-semibold mb-0">{{ card?.titletwo }}</h3>
                    </div>
                  </div>

                  <!-- Bloque del Precio -->
                  <div class="price-block text-center my-3">
                    <span class="price-period-top text-start d-block mb-0">Al mes</span>
                    <div class="price-container d-inline-flex align-items-center justify-content-center gap-1">
                      <span class="price-symbol fw-semibold text-dark">{{ card?.price }}</span>
                      <div class="text-start lh-sm">
                        <span class="d-block fw-bold text-dark small-iva">+IVA</span>
                        <span class="d-block fw-bold text-dark small-currency">MXN</span>
                      </div>
                    </div>
                    <span class="setup-price d-block mt-1 fw-semibold">{{ card?.setup }}</span>
                  </div>

                  <!-- Listado de Características -->
                  <div class="d-flex justify-content-center w-100 mb-4">
                    <div class="features-list d-inline-flex flex-column gap-2 text-start">
                      <div v-for="(feature, fIndex) in card?.features" :key="fIndex" class="feature-item d-flex align-items-center gap-2">
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
        </div>

        <!-- Flecha de Navegación Derecha -->
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
   ESTILOS DEL CARRUSEL (CONTROLADO POR CSS)
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
  width: 360px; /* Ancho en desktop */
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
    width: 320px; /* Tarjeta más angosta en móvil */
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