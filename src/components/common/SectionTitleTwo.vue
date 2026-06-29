<script setup lang="ts">
defineProps({
  textColor: {
    type: String,
    default: 'text-dark'
  },
  displayFont: {
    type: String,
    default: 'display-4'
  },
  textPosition:{
    type: String,
    default: 'text-center text-lg-start'
  },
  marginBotton:{
    type:String,
    default: 'mb-4'
  },
  lineHeight:{
    type: String,
    default: 'lh-sm'
  },
})
</script>

<template>
  <div :class="[textPosition, marginBotton]">
    <!-- Línea decorativa roja -->
    <div class="accent-line mb-3 mx-auto mx-lg-0"></div>
    
    <!-- Título -->
    <h2 :class="[textColor, displayFont, lineHeight, 'fw-semibold mb-3']" style="letter-spacing: -1px;">
      <slot></slot>
    </h2>
  </div>
</template>

<style scoped>
.accent-line {
  width: 40px;
  height: 4px;
  background-color: #f12537;
  border-radius: 2px;
}

@media (min-width: 1022px) and (max-width: 1366px) {
  h2 {
    font-size: calc(1.375rem + 1.5vw) !important; /* Equivalente al tamaño responsive de display-5 en Bootstrap 5 */
  }
}

@media (min-width: 1024px) and (max-width:1279px) {
h2{
  font-size: 2.3rem !important;
}
}
</style>