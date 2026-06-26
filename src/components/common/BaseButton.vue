<script setup lang="ts">
defineProps<{
  texto: string         
  enlace: string        // "#" o "https://
  esExterno?: boolean   // Por si es un enlace externo a WhatsApp
  mostrarIcono?: boolean //flechita '>'
}>()
</script>

<template>
  <a 
    :href="enlace" 
    :target="esExterno ? '_blank' : '_self'"
    class="btn btn-red btn-lg rounded-3 px-4 py-2 fs-6 fw-semibold text-white shadow-sm d-inline-flex align-items-center gap-2 transition-all"
  >
    {{ texto }}
    <!-- Renderiza el icono solo si 'mostrarIcono' es verdadero -->
    <i v-if="mostrarIcono" class="fa-solid fa-chevron-right" style="font-size: 0.8rem;"></i>
  </a>
</template>

<style scoped>
.btn-red {
  background-color: #f12537;
  border: none;
  box-shadow: 0 4px 12px rgba(241, 37, 55, 0.2);
}
.btn-red:hover {
  background-color: #f12537;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(241, 37, 55, 0.35);
  color: #ffffff;
}
.transition-all {
  transition: all 0.3s ease;
}
</style>
