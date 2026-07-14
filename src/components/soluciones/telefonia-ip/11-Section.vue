<script setup lang="ts">
import BenefitsBar from '@/components/common/BenefitsBar.vue';
import { benefitsTelefonia } from '@/data/benefits-bar';

</script>

<template>
  <section class="banner-section pt-4 position-relative overflow-hidden" style="background-color: #ffffff;">
    <BenefitsBar :items="benefitsTelefonia.benefits"/>
  </section>
</template>

<style scoped>
.benefits-bar {
  border-color: #f0f0f0 !important;
  background-color: #ffffff;
}

.icon-placeholder {
  width: 48px;
  height: 48px;
}

.vertical-divider {
  width: 1.7px;
  height: 48px;
  background-color: #e9ecef;
}


@media (max-width: 1199.98px) {
  .benefits-bar {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tablets e pantallas intermedias */
    gap: 24px !important;
    padding: 30px 24px !important;
    max-width: 680px; /* Limit el ancho de la tarjeta para agrupar el contenido */
    margin: 0 auto;   /* Centra la tarjeta completa */
  }
  /* Alineamos a la izquierda para que los iconos queden alineados verticalmente */
  .benefits-bar > div:not(.vertical-divider) {
    justify-content: flex-start !important;
    padding-left: 15%; 
  }
  /* último elemento ocupe ambas columnas y esté centrado */
  .benefits-bar > div:last-child {
    grid-column: span 2;
    justify-content: center !important;
    padding-left: 0;
  }
}

@media (max-width: 768px) {
  .benefits-bar {
    grid-template-columns: 1fr; 
    gap: 20px !important;
    padding: 24px 20px !important;
    max-width: 320px; 
    margin: 0 auto;
  }
  /* Alineación a la izquierda con padding para centrar visualmente en móvil */
  .benefits-bar > div:not(.vertical-divider) {
    justify-content: flex-start !important;
    padding-left: 35px;
  }
  /* Desactiva el span de 2 columnas en móvil para que fluya en 1 columna normal */
  .benefits-bar > div:last-child {
    grid-column: span 1;
    justify-content: flex-start !important;
    padding-left: 35px;
  }
}
</style>