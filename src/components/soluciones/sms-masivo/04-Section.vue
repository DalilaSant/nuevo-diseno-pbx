<script setup lang="ts">
import { ref, computed } from 'vue'

// Pasos de cantidad de SMS y sus precios correspondientes
const smsSteps = [100, 1000, 1500, 3000, 5000, 10000, 18000, 30000, 60000, 150000]
const prices = [0.28, 0.28, 0.28, 0.27, 0.27, 0.27, 0.27, 0.26, 0.25, 0.24]

const selectedIndex = ref(0) // Índice del paso actual seleccionado

// Propiedades computadas reactivas
const currentSms = computed(() => smsSteps[selectedIndex.value])
const currentUnitPrice = computed(() => prices[selectedIndex.value])

const subtotal = computed(() => {
  const sms = currentSms.value || 0
  const price = currentUnitPrice.value || 0
  return Number((sms * price).toFixed(2))
})

const iva = computed(() => {
  return Number((subtotal.value * 0.16).toFixed(2))
})

const total = computed(() => {
  return Number((subtotal.value * 1.16).toFixed(2))
})

const showContactMsg = computed(() => {
  return currentSms.value === 150000
})

const whatsappLink = computed(() => {
  return `https://wa.me/5587894847?text=Estoy+interesad@+en+cotizar+${currentSms.value}+SMS`
})
</script>

<template>
  <section class="py-5 my-lg-4 bg-white">
    <div>
      <h2 class="section-title text-center fw-semibold mb-5 text-red">
        ¿Cuántos SMS Necesitas?
      </h2>
    </div>
    <div class="container py-lg-3">

      <!-- Contenedor del Tabulador (Vue 3 puro) sin bordes ni sombras -->
      <div class="tabulador-sms mx-auto mb-4" style="max-width: 1280px;">
        <div class="p-0 bg-transparent">
          <div class="position-relative">
            
            <!-- Input Range nativo adaptado como línea delgada -->
            <input 
              type="range" 
              min="0" 
              :max="smsSteps.length - 1" 
              v-model.number="selectedIndex" 
              class="form-range custom-slider"
            />
            
            <!-- Leyendas y Ticks del Slider -->
            <div class="d-flex justify-content-between mt-1 text-muted px-1 text-center scale-labels">
              <span 
                v-for="(step, idx) in smsSteps" 
                :key="idx" 
                :class="['step-label-container', { 'active-label fw-bold text-dark': idx === selectedIndex }]"
              >
                <!-- Tick vertical de la regla -->
                <div class="tick-mark mx-auto mb-1"></div>
                <!-- Valor numérico -->
                <span class="step-value">{{ step.toLocaleString() }}</span>
              </span>
            </div>

          </div>
        </div>
      </div>

      <!-- Fila de Resultados alineados exactamente como la maquetación -->
      <div class="tabla-sms-container d-flex flex-wrap justify-content-center align-items-center gap-5 mt-5 pt-xl-5">
        
        <!-- Lado Izquierdo: Total SMS elegidos, cantidad y botón Cotizar -->
        <div class="izq-sms-block text-center d-flex flex-column align-items-center">
          <p class="fs-5 text-dark fw-semibold mb-1">Total SMS elegidos</p>
          <p class="cantidad-text text-secondary mb-3">{{ currentSms?.toLocaleString() }} SMS</p>
          
          <!-- Botón de Acción Cotizar > -->
          <a :href="whatsappLink" class="btn btn-cotizar px-4 py-2 fw-semibold rounded-1 text-white d-inline-flex align-items-center gap-1 shadow-sm" target="_blank">
            Cotizar <i class="fa-solid fa-chevron-right" style="font-size: 0.75rem;"></i>
          </a>

          <p v-if="showContactMsg" class="masSms text-muted mt-3 mb-0 fs-6">
            Si requiere más SMS contacte a: <br> 
            <a href="mailto:ventas@pbxhosting.com.mx" class="text-red fw-bold text-decoration-none">ventas@pbxhosting.com.mx</a>
          </p>
        </div>

        <!-- Lado Derecho: Desglose de Precios Limpio (Tabla limpia) -->
        <div class="der-sms-block">
          <table class="table table-borderless mb-0 sms-tabla-clean">
            <tbody>
              <tr>
                <td class="text-start text-dark ps-0 py-1">Precio Unitario</td>
                <td class="text-end text-dark pe-0 py-1">${{ currentUnitPrice?.toFixed(2) }}</td>
              </tr>
              <tr>
                <td class="text-start text-dark ps-0 py-1">Subtotal</td>
                <td class="text-end text-dark pe-0 py-1">${{ subtotal.toFixed(2) }}</td>
              </tr>
              <tr>
                <td class="text-start text-dark ps-0 py-1">IVA</td>
                <td class="text-end text-dark pe-0 py-1">${{ iva.toFixed(2) }}</td>
              </tr>
              <tr class="total-row">
                <td class="text-start text-dark fw-semibold ps-0 py-1 fs-5">Total</td>
                <td class="text-end text-dark fw-semibold pe-0 py-1 fs-5">${{ total.toFixed(2) }}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 2.2rem;
  letter-spacing: -0.5px;
}
/* Personalización del Slider Range a línea delgada */
.custom-slider {
  height: 6px;
  background: #e9ecef;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  border-radius: 3px;
  margin: 20px 0;
}

.custom-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background: #ecf1f4;
  border-radius: 3px;
}

/* Indicador vertical del slider de la maquetación */
.custom-slider::-webkit-slider-thumb {
  height: 20px;
  width: 3px;
  background: #333333; /* Línea negra vertical como en la maqueta */
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px; /* Centrar con respecto al track */
}

/* Ticks debajo de la línea del slider */
.tick-mark {
  width: 1px;
  height: 6px;
  background-color: #d1d5db;
}

/* Distribución exacta de las leyendas para alinear con el slider */
.scale-labels {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: 0;
  margin: 0;
}

.step-label-container {
  position: relative;
  width: 0; /* Ancho cero para que los puntos de distribución de flex correspondan exactamente a los valores del slider */
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
}

.step-value {
  font-size: 0.9rem;
  color: #333333;
  font-weight: 500;
  margin-top: 4px;
  position: absolute;
  top: 10px;
  white-space: nowrap;
  transform: translateX(-50%); /* Centra el texto exactamente debajo del tick */
}

.active-label .tick-mark {
  background-color: #333333;
  height: 10px;
  width: 1.5px;
}

/* Contenedor de las dos columnas de resultados */
.tabla-sms-container {
  max-width: 650px;
  margin: 0 auto;
}

/* Bloque Izquierdo */
.izq-sms-block {
  min-width: 200px;
}

.cantidad-text {
  font-size: 1.6rem;
  font-weight: 500;
}

/* Botón Cotizar Rojo */
.btn-cotizar {
  background-color: #f12537;
  border-color: #f12537;
  color: #ffffff;
  font-size: 0.95rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-cotizar:hover {
  background-color: #d61829;
  border-color: #d61829;
  color: #ffffff;
  transform: translateY(-1px);
}

/* Bloque Derecho - Tabla Limpia */
.der-sms-block {
  min-width: 250px;
}

.sms-tabla-clean td {
  font-size: 1.05rem;
  color: #333333;
}

.total-row td {
  color: #000000 !important;
}

@media (max-width: 576px) {
  .tabla-sms-container {
    flex-direction: column;
    align-items: center;
    gap: 35px !important;
  }
  .step-value {
    font-size: 0.5rem;
  }

  /* Ocultar etiquetas numéricas alternas en móviles para evitar que se encimen */
  .step-label-container:nth-child(2) .step-value,
  .step-label-container:nth-child(4) .step-value,
  .step-label-container:nth-child(6) .step-value,
  .step-label-container:nth-child(8) .step-value {
    display: none;
  }
}

@media (max-width: 380px) {
  .step-value {
    font-size: 0.65rem;
  }
  /* Ocultar más etiquetas en pantallas muy estrechas (menores a 380px) */
  .step-label-container:nth-child(3) .step-value,
  .step-label-container:nth-child(7) .step-value,
  .step-label-container:nth-child(9) .step-value {
    display: none;
  }
}
</style>