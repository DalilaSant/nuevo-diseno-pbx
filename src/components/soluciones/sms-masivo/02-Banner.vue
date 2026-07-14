<script setup lang="ts">
import BannerAllElements from '@/components/common/BannerAllElements.vue';
import BenefitsBar from '@/components/common/BenefitsBar.vue';
import {bannerSMSMasivo} from '@/data/bannerallelements';
import {benefitsSMSDos} from '@/data/benefits-bar';

</script>

<template>
  <section class="solutions-features-section py-0">
    <BannerAllElements :items="bannerSMSMasivo.dataBanner" />
    <BenefitsBar class="pt-2 benefits-hidden-medium" :items = "benefitsSMSDos.benefits"  />
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

@media (min-width: 800px) and (max-width: 1024px) {
  .benefits-hidden-medium {
    display: none !important;
  }
}
</style>
