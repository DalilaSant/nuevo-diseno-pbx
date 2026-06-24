<template>
  <div class="text-center text-lg-start mb-4">
    <!-- Línea decorativa roja -->
    <div class="accent-line mb-3 mx-auto mx-lg-0"></div>
    
    <!-- Título -->
    <h2 class="display-5 fw-bold text-dark mb-3 lh-sm" style="letter-spacing: -1px;">
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
</style>