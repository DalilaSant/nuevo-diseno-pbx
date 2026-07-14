<script setup lang="ts">
import BannerAllElements from '@/components/common/BannerAllElements.vue';
import { bannerSMSMasivoDos } from '@/data/bannerallelements'
</script>

<template>
  <section class="solutions-features-section py-0 py-lg-4">
    <BannerAllElements :items="bannerSMSMasivoDos.dataBanner" lineHeight="lh-1"  reverse />
  </section>
</template>



<style scoped>
/* Estilos generales de la sección */
.solutions-features-section {
  width: 100%;
}

@media (max-width: 991px) {
  .solutions-features-section {
    padding: 3rem 0;
  }
}
</style>