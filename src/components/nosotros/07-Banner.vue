<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Referencia al contenedor de la sección para detectar visibilidad
const sectionRef = ref<HTMLElement | null>(null)
const animacionIniciada = ref(false)

// Variables reactivas para los contadores
const minutos = ref(0)
const clientes = ref(0)
const disponibilidad = ref(0.00)

// Función genérica para animar los números de forma fluida
const animarContador = (
  valorObjetivo: number, 
  duracionMs: number, 
  callback: (valorActual: number) => void, 
  decimales: number = 0
) => {
  let tiempoInicial: number | null = null

  const paso = (timestamp: number) => {
    if (!tiempoInicial) tiempoInicial = timestamp
    
    // Progreso de la animación entre 0 y 1
    const progreso = Math.min((timestamp - tiempoInicial) / duracionMs, 1)
    const valorCalculado = progreso * valorObjetivo
    
    // Retornamos el valor actual redondeado al número de decimales correspondiente
    callback(parseFloat(valorCalculado.toFixed(decimales)))

    if (progreso < 1) {
      window.requestAnimationFrame(paso)
    }
  }

  window.requestAnimationFrame(paso)
}

// Inicializar Intersection Observer para gatillar la animación al hacer scroll
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Si la sección entra en el viewport (visible al menos un 15%) y no se ha animado antes
      if (entry.isIntersecting && !animacionIniciada.value) {
        animacionIniciada.value = true
        
        // Iniciamos las animaciones
        animarContador(500, 2000, (val) => minutos.value = Math.floor(val))
        animarContador(5, 2000, (val) => clientes.value = Math.floor(val))
        animarContador(99.99, 2500, (val) => disponibilidad.value = val, 2)
        
        // Dejar de observar el elemento ya que solo queremos animarlo una vez
        if (sectionRef.value) {
          observer.unobserve(sectionRef.value)
        }
      }
    })
  }, {
    threshold: 0.15 // Gatilla cuando el 15% de la tarjeta de banner es visible
  })

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section ref="sectionRef" class="banner-section pt-0 mt-xl-0 mt-0">
    <div class="container py-lg-4">

      <!-- Contenedor principal con imagen de fondo -->
      <div class="custom-banner-bg position-relative rounded-4 overflow-hidden d-flex align-items-start">

        <!-- Contenido del Banner -->
        <div class="container z-3 pt-lg-4 pb-4 pt-3 text-center text-lg-start px-4 px-md-5 text-white">
          <h2 class="mb-3 mb-lg-4">Resultados que nos respaldan.</h2>
          
          <div class="row">

            <!-- Lado izquierdo: Textos -->
            <div class="col-12 col-lg-4 mt-1">
              <p class="fs-1 text-white fw-semibold text-center mb-0 banner-desc">
                +{{ minutos }}M
              </p>
              <p class="fs-5 text-white text-center mb-0">
                Minutos mensuales
              </p>
            </div>


            <div class="col-12 col-lg-4 text-start mt-1">
              <p class="fs-1 text-white fw-semibold text-center mb-0 banner-desc">
                +{{ clientes }}K
              </p>
              <p class="fs-5 text-white text-center mb-0">
                Clientes activos
              </p>
            </div>

            <div class="col-12 col-lg-4 text-start mt-1">
              <p class="fs-1 text-white fw-semibold text-center mb-0 banner-desc">
                {{ disponibilidad.toFixed(2) }}%
              </p>
              <p class="fs-5 text-white text-center mb-0">
                Disponibilidad efectiva
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.custom-banner-bg {
  background-image: url('/img/nosotros/IMAGEN_12_SECCION_9.png');
  background-size: cover;
  background-position: right;
  min-height: 320px;
  /* Altura base para móviles */
  transition: all 0.3s ease;
}

@media (max-width: 576px) {
  .custom-banner-bg {
    min-height: 280px;
  }
}

@media (max-width: 800px) {
  .custom-banner-bg {
    background-position: left;
  }
}

/* Escalabilidad en pantallas grandes */
@media (min-width: 992px) {
  .custom-banner-bg {
    min-height: 240px;
    /* Aumentamos el alto del banner a 240px en computadoras */
  }
}
</style>