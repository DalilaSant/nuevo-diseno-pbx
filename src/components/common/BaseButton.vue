<script setup lang="ts">
defineProps<{
  texto: string         
  enlace: string        // "#" o "https://
  esExterno?: boolean   // Por si es un enlace externo a WhatsApp
  mostrarIcono?: boolean //flechita '>'
  roundedClass?: string // Clase de redondeado personalizada (ej. rounded-1, rounded-0)
  paddingClass?: string // Clase de padding personalizada (ej. py-2, py-1)
}>()
</script>

<template>
  <a 
    :href="enlace" 
    :target="esExterno ? '_blank' : '_self'"
    :class="['btn btn-red btn-lg px-4  fs-6  text-white shadow-sm d-inline-flex align-items-center gap-2 transition-all', roundedClass || 'rounded-3', paddingClass || 'py-2']"
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
