<script setup lang="ts">
import BannerAllElements from '@/components/common/BannerAllElements.vue';
import {bannerAgenteIA} from '@/data/bannerallelements';

</script>

<template>
  <section class="solutions-features-section py-4">
    <BannerAllElements :items="bannerAgenteIA.dataBanner" marginBottom="mb-3"/>
    
  </section>
</template>

<style scoped>
/* Estilos generales de la sección */
.solutions-features-section {
  background-color: #f2f5f7;
  width: 100%;
}

@media (max-width: 991px) {
  .solutions-features-section {
    padding: 3rem 0;
  }
}
</style>
