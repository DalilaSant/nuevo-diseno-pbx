<script setup lang="ts">
import { ref, computed } from 'vue'
import SectionTitleTwo from '../common/SectionTitleTwo.vue'
import BaseButton from '@/components/common/BaseButton.vue';

// Estado reactivo del modal bento único
const activeCardId = ref<string | null>(null)
const isExpandedActive = ref(false)
const isOverlayActive = ref(false)

// Estilos dinámicos para simular la expansión orgánica de la tarjeta cliqueada
const expandedStyles = ref({
  top: '0px',
  left: '0px',
  width: '0px',
  height: '0px',
  transition: 'none'
})

let lastTrigger: HTMLElement | null = null

// Abrir modal posicionándolo sobre la tarjeta que se cliqueó y expandiéndola al centro
const openBento = (event: MouseEvent, contentId: string) => {
  const trigger = event.currentTarget as HTMLElement
  lastTrigger = trigger
  const rect = trigger.getBoundingClientRect()

  // Posicionamos el modal exactamente encima de la tarjeta cliqueada sin transición
  expandedStyles.value = {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    transition: 'none'
  }
  
  activeCardId.value = contentId
  isOverlayActive.value = true
  isExpandedActive.value = true

  // Forzamos el reflujo y animamos hacia las coordenadas del centro
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      expandedStyles.value = {
        top: '50%',
        left: '50%',
        width: '950px',
        height: '520px',
        transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
      }
    })
  })
}

// Cerrar modal encogiéndolo de vuelta hacia la tarjeta original
const closeBento = () => {
  if (!lastTrigger) return
  const rect = lastTrigger.getBoundingClientRect()

  expandedStyles.value = {
    top: `${rect.top}px`,
    left: `${rect.left}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
  }

  isExpandedActive.value = false
  isOverlayActive.value = false

  // Limpiar el estado interno cuando termine de encogerse
  setTimeout(() => {
    if (!isExpandedActive.value) {
      activeCardId.value = null
    }
  }, 500)
}
</script>

<template>
  <section class="banner-section py-lg-5 py-0" style="background-color: #ffffff;">
    <div class="container">
      <div class="text-start pt-lg-5 pt-5 mb-5" v-motion-fade-visible :delay="200" :duration="1000">
        <SectionTitleTwo display-font="display-5" marginBotton="mb-0">
          Guías esenciales.
        </SectionTitleTwo>
        <p class="featured-desc px-1">
          Resolvemos las dudas más frecuentes para ayudarte a elegir la mejor solución.
        </p>
      </div>
    </div>
    
    <!-- Bloque de Bento Grids usando el sistema de rejilla nativo de Bootstrap -->
    <div class="position-relative">
      
      <!-- Fila 1 de Guías -->
      <div class="container mb-4">
        <div class="row g-4">
          <!-- Tarjeta 1 (DID) -->
          <div class="col-lg-6 col-12">
            <div class="bento-trigger border-0 bg-white text-start position-relative overflow-hidden d-flex flex-column p-xl-4  py-2 h-100 ">
              <div class="row justify-content-center align-items-center h-100">
                <div class="col-xl-3 col-lg-4 col-lg-4 col-md-4 col-5 text-center">
                  <img src="/img/recursos/RECURSO_1_SECCIO_8.png" alt="DID" class="img-fluid img-bento">
                </div>
                <div class="col-xl-9 col-lg-8 col-lg-8 col-md-8 col-7 ps-0 pe-4">
                  <h3 class="text-parrafo fw-semibold text-dark mb-1">¿Qué es un DID?</h3>
                  <p class=" small mb-0  mb-lg-2">Comprende cómo funcionan los números telefónicos virtuales.</p>
                  <button class="btn px-0 text-primary fw-semibold" @click="openBento($event, 'did')">Leer guía</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Tarjeta 2 (RCS) -->
          <div class="col-lg-6 col-12">
            <div class="bento-trigger border-0 bg-white text-start position-relative overflow-hidden d-flex flex-column p-xl-4  py-2 h-100">
              <div class="row justify-content-center align-items-center h-100">
                <div class="col-xl-3 col-lg-4 col-lg-4 col-md-4 col-5 text-center">
                  <img src="/img/recursos/RECURSO_4_SECCIO_8.png" alt="RCS" class="img-fluid img-bento">
                </div>
                <div class="col-xl-9 col-lg-8 col-lg-8 col-md-8 col-7 ps-0 pe-4">
                  <h3 class="text-parrafo fw-semibold text-dark mb-1">¿Qué es RCS?</h3>
                  <p class=" small mb-0 mb-lg-2">Cómo los RCS crean experiencias de mensajería <br class="d-none d-lg-block"> interactiva.</p>
                  <button class="btn px-0 text-primary fw-semibold" @click="openBento($event, 'rcs')">Leer guía</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fila 2 de Guías -->
      <div class="container pt-3">
        <div class="row g-4">
          <!-- Tarjeta 3 (SIP) -->
          <div class="col-lg-6 col-12">
            <div class="bento-trigger border-0 bg-white text-start position-relative overflow-hidden d-flex flex-column p-xl-4  py-2 h-100">
              <div class="row justify-content-center align-items-center h-100">
                <div class="col-xl-3 col-lg-4 col-lg-4 col-md-4 col-5 text-center">
                  <img src="/img/recursos/RECURSO_2_SECCIO_8.png" alt="SIP" class="img-fluid img-bento">
                </div>
                <div class="col-xl-9 col-lg-8 col-lg-8 col-md-8 col-7 ps-0 pe-4">
                  <h3 class="text-parrafo fw-semibold text-dark mb-1">¿Qué es una troncal SIP?</h3>
                  <p class=" small mb-0 mb-lg-2">Conoce cómo una Troncal SIP conecta tu empresa <br class="d-none d-lg-block"> con la red.</p>
                  <button class="btn px-0 text-primary fw-semibold" @click="openBento($event, 'sip')">Leer guía</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Tarjeta 4 (Proveedor) -->
          <div class="col-lg-6 col-12">
            <div class="bento-trigger border-0 bg-white text-start position-relative overflow-hidden d-flex flex-column p-xl-4  py-2 h-100">
              <div class="row justify-content-center align-items-center h-100">
                <div class="col-xl-3 col-lg-4 col-lg-4 col-md-4 col-5 text-center">
                  <img src="/img/recursos/RECURSO_3_SECCIO_8.png" alt="Proveedor" class="img-fluid img-bento">
                </div>
                <div class="col-xl-9 col-lg-8 col-lg-8 col-md-8 col-7 ps-0 pe-4">
                  <h3 class="text-parrafo fw-semibold text-dark mb-1">Elegir un proveedor de Telefonía IP</h3>
                  <p class=" small mb-0 mb-lg-2">Identifica los aspectos para seleccionar un proveedor confiable.</p>
                  <button class="btn px-0 text-primary fw-semibold" @click="openBento($event, 'proveedor')">Leer guía</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ÚNICO Overlay (Fondo oscuro) para toda la sección -->
      <div class="bento-modal-overlay" :class="{ 'active': isOverlayActive }" @click="closeBento"></div>

      <!-- ÚNICO Contenedor del Modal Dinámico -->
      <div 
        class="bento-content-expanded" 
        :class="{ 'active': isExpandedActive }" 
        :style="expandedStyles"
      >
        <button class="close-btn" @click="closeBento">✕</button>
        <div class="expanded-inner h-100">
          
          <!-- Contenido: ¿Qué es un DID? -->
          <div v-if="activeCardId === 'did'" class="h-100 d-flex align-items-center">
            <div class="row align-items-center w-100 py-3 py-lg-0">
              <div class="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                <img src="/img/recursos/IMAGEN_3_SECCION_8.png" class="img-fluid w-100 modal-main-img" alt="DID">
              </div>
              <div class="col-lg-6 col-12">
                <h2 class="mb-1 fw-semibold text-dark fs-1">¿Qué es un <span class="text-red">DID?</span></h2>
                <p class="parrafo_card text-dark fw-semibold mb-3">
                  Un DID (Direct Inward Dialing) es un número telefónico virtual que permite recibir llamadas directamente hacia una extensión o usuario, sin necesidad de una línea física.
                </p>
                <div class="d-flex flex-column gap-3 mb-3 align-items-start">
                  <!-- Item 1 -->
                  <div class="d-flex align-items-center gap-2 w-100">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center check-img-wrapper">
                      <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid" />
                    </div>
                    <span class="text-dark fw-semibold text-feature">Mejora la atención al cliente.</span>
                  </div>

                  <!-- Item 2 -->
                  <div class="d-flex align-items-center gap-2 w-100">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center check-img-wrapper">
                      <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid" />
                    </div>
                    <span class="text-dark fw-semibold text-feature">Optimiza el enrutamiento de llamadas.</span>
                  </div>

                  <!-- Item 3 -->
                  <div class="d-flex align-items-center gap-2 w-100">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center check-img-wrapper">
                      <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid" />
                    </div>
                    <span class="text-dark fw-semibold text-feature">Ofrece una comunicación profesional.</span>
                  </div>
                </div>

                <p class="parrafo_card text-dark fw-semibold mb-3">
                  Una solución utilizada por empresas que requieren administrar múltiples números desde una sola plataforma.
                </p>

                <!-- Botón de Acción -->
                <div class="d-flex boton-cellphone justify-content-start">
                  <BaseButton texto="Ver Solución" :mostrarIcono="true" enlace="#" roundedClass="rounded-1 py-2 px-4 fs-6" />
                </div>
              </div>
            </div>
          </div>

          <!-- Contenido: ¿Qué es RCS? -->
          <div v-else-if="activeCardId === 'rcs'" class="h-100 d-flex align-items-center">
            <div class="row align-items-center w-100 py-3 py-lg-0">
              <div class="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                <img src="/img/recursos/IMAGEN_4_SECCION_8.png" class="img-fluid w-100 modal-main-img" alt="RCS">
              </div>
              <div class="col-lg-6 col-12">
                <h2 class="mb-1 fw-semibold text-dark fs-1">¿Qué es un <span class="text-red">RCS?</span></h2>
                <p class="parrafo_card text-dark fw-semibold mb-2">
                  Un RCS Permite enviar mensajes enriquecidos con imágenes, botones, archivos, carruseles, ubicación y otros elementos interactivos desde una marca verificada. <br> <br> Utilizados comúnmente para:
                </p>
                <div class="d-flex flex-column gap-3 mb-4 align-items-start">
                  <!-- Item 1 -->
                  <div class="d-flex align-items-center gap-2 w-100">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center check-img-wrapper">
                      <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid" />
                    </div>
                    <span class="text-dark fw-semibold text-feature">Promociones.</span>
                  </div>

                  <!-- Item 2 -->
                  <div class="d-flex align-items-center gap-2 w-100">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center check-img-wrapper">
                      <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid" />
                    </div>
                    <span class="text-dark fw-semibold text-feature">Notificaciones.</span>
                  </div>

                  <!-- Item 3 -->
                  <div class="d-flex align-items-center gap-2 w-100">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center check-img-wrapper">
                      <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid" />
                    </div>
                    <span class="text-dark fw-semibold text-feature">Confirmaciones. </span>
                  </div>
                </div>

                
                <!-- Botón de Acción -->
                <div class="d-flex boton-cellphone justify-content-start">
                  <BaseButton texto="Ver Solución" :mostrarIcono="true" enlace="#" roundedClass="rounded-1 py-2 px-4 fs-6" />
                </div>
              </div>
            </div>
          </div>

          <!-- Contenido: ¿Qué es una troncal SIP? -->
          <div v-else-if="activeCardId === 'sip'" class="h-100 d-flex align-items-center">
            <div class="row align-items-center w-100 py-3 py-lg-0">
              <div class="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                <img src="/img/recursos/IMAGEN_5_SECCION_8.png" class="img-fluid w-100 modal-main-img" alt="SIP">
              </div>
              <div class="col-lg-6 col-12">
                <h2 class="mb-1 fw-semibold text-dark fs-1">¿Qué es una <span class="text-red">Troncal SIP?</span></h2>
                <p class="parrafo_card text-dark fw-semibold mb-3">
                  Una Troncal SIP es el servicio que conecta tu conmutador telefónico con la red, eliminando la necesidad de líneas telefónicas tradicionales.
                </p>
                <div class="d-flex flex-column gap-3 mb-3 align-items-start">
                  <!-- Item 1 -->
                  <div class="d-flex align-items-center gap-2 w-100">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center check-img-wrapper">
                      <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid" />
                    </div>
                    <span class="text-dark fw-semibold text-feature">Reduce Costos.</span>
                  </div>

                  <!-- Item 2 -->
                  <div class="d-flex align-items-center gap-2 w-100">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center check-img-wrapper">
                      <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid" />
                    </div>
                    <span class="text-dark fw-semibold text-feature">Geolocalización.</span>
                  </div>

                  <!-- Item 3 -->
                  <div class="d-flex align-items-center gap-2 w-100">
                    <div class="flex-shrink-0 d-flex align-items-center justify-content-center check-img-wrapper">
                      <img src="/img/home/ICONO_12_SECCIO_1.png" alt="check" class="img-fluid" />
                    </div>
                    <span class="text-dark fw-semibold text-feature">Compatibilidad. </span>
                  </div>
                </div>
                <p class="parrafo_card text-dark fw-semibold mb-3">
                  Es una solución ideal para empresas que buscan escalar su infraestructura de comunicación.
                </p>
                
                <!-- Botón de Acción -->
                <div class="d-flex boton-cellphone justify-content-start">
                  <BaseButton texto="Ver Solución" :mostrarIcono="true" enlace="#" roundedClass="rounded-1 py-2 px-4 fs-6" />
                </div>
              </div>
            </div>
          </div>

          <!-- Contenido: Elegir un proveedor de Telefonía IP -->
          <div v-else-if="activeCardId === 'proveedor'" class="h-100 d-flex align-items-center">
            <div class="row align-items-center w-100 py-3 py-lg-0">
              <div class="col-lg-6 col-12 text-center mb-4 mb-lg-0">
                <img src="/img/recursos/IMAGEN_6_SECCION_8.png" class="img-fluid w-100 modal-main-img" alt="Proveedor">
              </div>
              <div class="col-lg-6 col-12">
                <h2 class="mb-1 fw-semibold text-dark fs-1">Elegir un proveedor de  <span class="text-red">Telefonía IP</span></h2>
                <p class="parrafo_card text-dark fw-semibold mb-3 ">
                 Antes de contratar, verifica la calidad de la infraestructura, soporte técnico, escalabilidad y disponibilidad de la red. 
                </p>
                <p class="parrafo_card text-dark fw-semibold mb-3 ">Elegir una plataforma confiable garantiza una comunicación estable, crecimiento a largo plazo y una mejor experiencia para tus clientes y colaboradores.</p>
                
                <!-- Botón de Acción -->
                <div class="d-flex boton-cellphone justify-content-start">
                  <BaseButton texto="Ver Solución" :mostrarIcono="true" enlace="#" roundedClass="rounded-1 py-2 px-4 fs-6" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.featured-desc {
  font-size: 1.15rem;
  line-height: 1.6;
}

/* Tarjetas Bento */
.bento-trigger {
  border-radius: 20px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1);
}

.bento-trigger:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.2), 0 18px 36px -18px rgba(0, 0, 0, 0.25);
}

/* El "Modal" que se expande */
.bento-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 37, 64, 0.4);
  backdrop-filter: blur(4px);
  display: none;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bento-modal-overlay.active {
  display: block;
  opacity: 1;
}

.bento-content-expanded {
  position: fixed;
  background: white;
  border-radius: 20px;
  z-index: 1001;
  padding: 40px;
  box-shadow: 0 50px 100px -20px rgba(50, 50, 93, 0.25);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  overflow-y: auto;
}

/* Centrado responsivo en pantallas grandes (Desktop >= 992px) */
.bento-content-expanded.active {
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 950px !important;
  height: 540px !important;
}

/* Estilos internos del contenido expandido */
.expanded-inner {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.bento-content-expanded.active .expanded-inner {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
  transition-duration: 0.3s;
}

.close-btn {
  position: absolute;
  top: 24px;
  right: 24px;
  background: #f6f9fc;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #666666;
  z-index: 1002;
}

.modal-main-img {
  max-height: 390px;
  object-fit: contain;
}

.check-img-wrapper {
  width: 24px;
  height: 24px;
}

.text-feature {
  font-size: 1.05rem;
}

.parrafo_card {
  max-width: 500px;
  font-size: 1.05rem;
  line-height: 1.6;
}

.text-parrafo{
    font-size: 1.25rem;
}
.modal-detail-text p {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #4a5568;
}

/************** */
.benefits-bar {
  border-color: #f0f0f0 !important;
  background-color: #ffffff;
}


@media (max-width: 575.98px) {
  .bento-content-expanded.active {
    width: 95% !important;
    height: 90% !important;
    padding: 24px 16px;
  }
  
  .modal-main-img {
    max-height: 160px;
  }
  
  .bento-content-expanded {
    padding: 24px 16px;
  }
  
  .close-btn {
    top: 12px;
    right: 12px;
  }

  .img-bento{
    width: 75%;
  }

  .text-parrafo{
    font-size: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 800px){

  .bento-trigger{
    width: 75%;
    margin: 0 auto;
  }
  .text-parrafo{
    font-size: 1.2rem;
  }
  .img-bento{
    width: 75%;
  }
}

/* Reglas Responsivas para el Modal */
@media (max-width: 991.98px) {
  .bento-content-expanded.active {
    width: 90% !important;
    height: 80% !important;
    padding: 30px;
  }
  
  .img-bento{
    width: 75%;
  }
  .modal-main-img {
    max-height: 220px;
  }
}

@media (max-width: 768px) {
  .benefits-bar {
    grid-template-columns: 1fr;
    gap: 20px !important;
    padding: 24px 20px !important;
    max-width: 320px;
    margin: 0 auto;
  }

  .benefits-bar>div:not(.vertical-divider) {
    justify-content: flex-start !important;
    padding-left: 35px;
  }

  .benefits-bar>div:last-child {
    grid-column: span 1;
    justify-content: flex-start !important;
    padding-left: 35px;
  }

}

@media (max-width: 991px) {
  .featured-desc {
    font-size: 1rem;
    margin: 0 auto 1.5rem auto;
  }
}

@media (max-width: 1199.98px) {
  .benefits-bar {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px !important;
    padding: 30px 24px !important;
    max-width: 680px;
    margin: 0 auto;
  }

  .benefits-bar>div:not(.vertical-divider) {
    justify-content: flex-start !important;
    padding-left: 15%;
  }

  .benefits-bar>div:last-child {
    grid-column: span 2;
    justify-content: center !important;
    padding-left: 0;
  }
}

@media (min-width:1022px) and (max-width: 1279px) {
  .img-bento{
    width:85%;
  }
  .text-parrafo{
    font-size: 1.25rem;
  }
}
@media (min-width: 1280px) and (max-width: 1366px) {
  .featured-desc {
    font-size: .95rem;
  }
  .text-parrafo{
    font-size: 1.3rem;
  }
  .img-bento{
    width:100%;
  }
}



</style>