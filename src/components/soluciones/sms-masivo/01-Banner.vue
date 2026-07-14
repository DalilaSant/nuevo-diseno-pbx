<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import SectionTitleTwo from '@/components/common/SectionTitleTwo.vue'
import BenefitsBar from '@/components/common/BenefitsBar.vue'
import { benefitsSMS } from '@/data/benefits-bar'

// Definición de las 3 tarjetas de imágenes rectangulares
const cards = ref([
  { id: 1, img: '/img/soluciones/RECURSO_4_BANNER_1_SECCION_3.png', alt: 'Notificación SMS 1' },
  { id: 2, img: '/img/soluciones/RECURSO_1_BANNER_1_SECCION_3.png', alt: 'Notificación SMS 2' },
  { id: 3, img: '/img/soluciones/RECURSO_2_BANNER_1_SECCION_3.png', alt: 'Notificación SMS 3' },
  { id: 4, img: '/img/soluciones/RECURSO_3_BANNER_1_SECCION_3.png', alt: 'Notificación SMS 3' },
  { id: 5, img: '/img/soluciones/RECURSO_5_BANNER_1_SECCION_3.png', alt: 'Notificación SMS 3' },
  
])

const isPaused = ref(false)
const exitingCardId = ref<number | null>(null)
const translateY = ref(0)
const transitionStyle = ref('transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)')

let intervalId: any = null

const moveNext = () => {
  if (isPaused.value) return

  const firstCard = cards.value[0]
  if (!firstCard) return
  exitingCardId.value = firstCard.id

  // Desplazamiento dinámico: Altura de la tarjeta (95px) + Gap de separación (15px)
  const cardHeight = 95
  const gap = 15
  const totalDistance = cardHeight + gap

  translateY.value = -totalDistance
  transitionStyle.value = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'

  setTimeout(() => {
    exitingCardId.value = null
    const moved = cards.value.shift()
    if (moved) {
      cards.value.push(moved)
    }
    transitionStyle.value = 'none'
    translateY.value = 0
  }, 600)
}

onMounted(() => {
  intervalId = setInterval(moveNext, 3000) 
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section class="py-5">
    <div class="container">
      <!-- sms-banner encapsulado dentro del container con esquinas redondeadas -->
      <div class="sms-banner position-relative rounded-4 overflow-hidden d-flex align-items-center p-4 p-md-5 py-xl-0">
        <div class="container-fluid my-2 position-relative z-3">
          <div class="row align-items-center g-4">

            <!-- Columna Izquierda: Textos y Título -->
            <div class="col-lg-8 col-12 text-center text-lg-start mb-4 mb-lg-0" v-motion-slide-left :delay="200"
              :duration="1200">
              <SectionTitleTwo textColor="text-white" displayFont="display-4" lineHeight="lh-1" marginBotton="mb-3"
                textPosition="text-center text-lg-start" letterSpacing="0px">
                SMS Masivo,<br>
                <span class="text-red">comunicación directa.</span>
              </SectionTitleTwo>

              <p class="mb-4 text-light mx-md-auto mx-lg-0 parrafos">
                La mejor herramienta para llegar a tus clientes.
              </p>
              <div class="d-flex boton-cellphone justify-content-center justify-content-lg-start">
                <BaseButton texto="Hablar con un Asesor" :mostrarIcono="true" enlace="#"
                  roundedClass="rounded-1 py-2 px-4 fs-6" />
              </div>
            </div>

            <!-- Columna Derecha: Tarjetas de Notificaciones en Bucle Vertical -->
            <div class="col-lg-4 col-12 p-0 d-flex justify-content-center" v-motion-slide-right :delay="200"
              :duration="1200">
              <div class="carousel-container" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
                <div class="scroll-wrapper"
                  :style="{ transform: `translateY(${translateY}px)`, transition: transitionStyle }">
                  <!-- Tarjetas principales -->
                  <div v-for="card in cards" :key="card.id" class="notification-card"
                    :class="{ 'exiting': exitingCardId === card.id }">
                    <img :src="card.img" :alt="card.alt" class="img-fluid w-100 h-100 rounded-3 card-rect-img" />
                  </div>

                  <!-- Tarjeta duplicada al final para lograr el efecto infinito y suave -->
                  <div v-if="cards.length > 0" class="notification-card">
                    <img :src="cards[0]?.img" :alt="cards[0]?.alt"
                      class="img-fluid w-100 h-100 rounded-3 card-rect-img" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <BenefitsBar class="pt-4" :items = "benefitsSMS.benefits"/>
    
  </section>
</template>



<style scoped>
.sms-banner {
  background-image: url("/img/soluciones/IMAGEN_1_SECCION_3.png");
  background-size: cover;
  background-position: center;
  min-height: 450px;
  width: 100%;
}

.sms-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.parrafos {
  max-width: 535px;
  font-size: 1.41rem;
}

.carousel-container {
  width: 320px;
  height: 320px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  z-index: 2;
}


.scroll-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  align-items: center;
}

/* Estilo de las tarjetas de imagen */
.notification-card {
  width: 100%;
  height: 95px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-shrink: 0;
  transition: opacity 0.4s ease, transform 0.4s ease;
}

/* Efecto de desvanecer y achicar al salir por arriba */
.notification-card.exiting {
  opacity: 0;
  transform: scale(0.9) translateY(-10px);
}

.card-rect-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}





/* Responsividad para pantallas móviles y tablets */
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

@media (max-width: 991px) {
  .sms-banner {
    min-height: auto;
    padding: 2.5rem 1rem !important;
  }
  .sms-banner::before {
    /* En vertical, el gradiente oscuro cubre toda la tarjeta uniformemente */
    background: rgba(12, 24, 36, 0.9);
  }

  .parrafos {
    max-width: 100%;
  }
}

/* Responsividad intermedia para pantallas de laptops (1024px a 1366px) */
@media (min-width: 1024px) and (max-width: 1366px) {
  


}

@media (min-width: 1024px) and (max-width: 1100px) {

  .parrafos {
    font-size: 1.14rem;
    max-width: 85%;
  }
}

@media (min-width: 1024px){
.sms-banner {
    min-height: 380px;
  }
}



</style>