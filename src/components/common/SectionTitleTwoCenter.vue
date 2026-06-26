<template>
  <div class="text-center text-lg-center mb-4">   
    <!-- Título -->
    <h2 class="display-5 fw-semibold text-dark mb-3 lh-sm" style="letter-spacing: -1px;">
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