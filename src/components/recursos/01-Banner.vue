<script setup lang="ts">
import BannerAllElements from '@/components/common/BannerAllElements.vue';
import {bannerRecursos} from '@/data/bannerallelements';
import BenefitsBar from '@/components/common/BenefitsBar.vue';
import { benefitsRecursos } from '@/data/benefits-bar';
</script>

<template>
  <section class="solutions-features-section pt-4 pb-4 pt-lg-5 pb-lg-4 ">
    <BannerAllElements :items="bannerRecursos.dataBanner" class="recursos-custom-banner"  texto="Explorar recursos"  marginBottom="mb-lg-3"/>

    <BenefitsBar class="pt-4 benefits-hidden-medium" :items = "benefitsRecursos.benefits" />

    
  </section>
</template>

<style scoped>
/* Estilos generales de la sección */
.solutions-features-section {
  background-color: #fff;
  width: 100%;
}

.recursos-custom-banner :deep(.featured-title) {
  font-size: 3.3rem;
  letter-spacing: -1px;
}

@media (min-width: 769px) and (max-width: 1024px) {
  .benefits-hidden-medium {
    display: none !important;
  }
}

@media (max-width: 991px) {
  .solutions-features-section {
    padding: 3rem 0;
  }
  .recursos-custom-banner :deep(.featured-title) {
    font-size: 2.2rem;
  }
}

@media (min-width: 1024px) and (max-width:1080px){
 .recursos-custom-banner :deep(.featured-title) {
    font-size: 2.5rem;
  }
}

@media (min-width: 1280px) and (max-width: 1366px) {
  .recursos-custom-banner :deep(.featured-title) {
    font-size: 2.8rem;
  }
}
</style>
