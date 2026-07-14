<script setup lang="ts">
import BannerAllElements from '@/components/common/BannerAllElements.vue';
import {bannerTelefoniaIP} from '@/data/bannerallelements';
</script>

<template>
  <section class="solutions-features-section py-5">
    <BannerAllElements :items="bannerTelefoniaIP.dataBanner" />
  </section>
</template>

<style scoped>
/* Estilos generales de la sección */
.solutions-features-section {
  background-color: #f2f5f7;
  width: 100%;
}



/* ==========================================================================
   RESPONSIVIDAD Y ADAPTACIÓN EN PANTALLAS
   ========================================================================== */



/* 3. Adaptaciones para celulares y tablets (menores a 991px) */
@media (max-width: 991px) {
  .solutions-features-section {
    padding: 3rem 0;
  }
}
</style>
