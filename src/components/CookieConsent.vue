<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Variable reactiva que controla si se ve o no el banner
const showBanner = ref(false)

onMounted(() => {
  // Al cargar la página, revisamos si ya aceptó las cookies antes
  if (!localStorage.getItem('cookiesAccepted')) {
    showBanner.value = true
  } else {
    // Si ya las aceptó en una visita anterior, cargamos el chat directamente
    loadTawkTo()
  }
})

// Función que se ejecuta al darle clic al botón "Aceptar"
const acceptCookies = () => {
  localStorage.setItem('cookiesAccepted', 'true')
  showBanner.value = false
  loadTawkTo()
}

// Función original que inyecta el script del chat de Tawk.to
const loadTawkTo = () => {
  const s1 = document.createElement('script')
  const s0 = document.getElementsByTagName('script')[0]
  s1.async = true
  s1.src = 'https://embed.tawk.to/592f165db3d02e11ecc67aae/1ble2n5gh'
  s1.charset = 'UTF-8'
  s1.setAttribute('crossorigin', '*')
  if (s0 && s0.parentNode) {
    s0.parentNode.insertBefore(s1, s0)
  } else {
    document.head.appendChild(s1)
  }
}
</script>

<template>
  <!-- El banner solo se muestra si showBanner es true -->
  <div
    v-if="showBanner"
    class="cookie-consent-banner bg-dark text-white p-2 fixed-bottom text-center z-3"
  >
    Este sitio web utiliza cookies de terceros para mejorar su experiencia.
    <a
      href="https://www.pbxhosting.com.mx/terminos-condiciones/"
      class="text-info text-decoration-none ms-1"
      >Leer más</a
    >

    <button @click="acceptCookies" class="btn btn-primary btn-sm ms-3 rounded-1">Aceptar</button>
  </div>
</template>

<style scoped>

</style>
