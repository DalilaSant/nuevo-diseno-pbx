<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import CookieConsent from './components/CookieConsent.vue'
</script>

<template>
  <HeaderComponent />

  <!-- Aquí cargarán dinámicamente las demás páginas -->
  <RouterView />

  <FooterComponent />

  <CookieConsent />
</template>

<style scoped></style>
