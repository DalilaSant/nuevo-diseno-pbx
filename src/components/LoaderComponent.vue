<script setup lang="ts">
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  document.body.style.overflow = 'hidden'

  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = '' 
  }, 3000) // Cambiado a 2 segundos para una carga ágil
})
</script>

<template>
  <transition name="fade">
    <div v-if="loading" class="loading-overlay">
      <div class="spinner-container">
        <!-- Logo Estático -->
        <div class="mb-4">
          <img src="/img/logonew.png" alt="Logo PBX Hosting" class="img-fluid" width="120" />
        </div>
        <!-- Spinner en CSS Puro idéntico a HalfCircleSpinner -->
        <div class="custom-half-circle-spinner">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.loading-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 99999; /* Z-index máximo para quedar sobre toda la web */
}

.spinner-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Animación del Logo */
.logo-pulse {
  animation: pulse 1.6s infinite ease-in-out;
}

/* Spinner CSS que emula perfectamente a epic-spinners */
.custom-half-circle-spinner {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
}

.custom-half-circle-spinner .circle {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid transparent;
}

.custom-half-circle-spinner .circle.circle-1 {
  border-top-color: #003eb3;
  animation: spin-clockwise 1s infinite linear;
}

.custom-half-circle-spinner .circle.circle-2 {
  border-bottom-color: #003eb3;
  animation: spin-counter-clockwise 1s infinite linear;
}

/* Transición suave al desaparecer */
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
}

/* Keyframes de animación */
@keyframes spin-clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin-counter-clockwise {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(0.96);
    opacity: 0.85;
  }
  50% {
    transform: scale(1.03);
    opacity: 1;
  }
}
</style>
