<script setup lang="ts">
import { ref } from 'vue'
import SectionTitleTwoCenter from '../common/SectionTitleTwoCenter.vue';
import { homeData } from '@/data/home';
import BenefitsBar from '../common/BenefitsBar.vue';
import { benefitsData } from '@/data/benefits-bar.ts';


</script>

<template>
  <section class="banner-section pt-5 position-relative overflow-hidden" style="background-color: #ffffff;">
    <div class="container py-lg-4">
      <div class="text-center pt-lg-4 mb-4"
      v-motion-fade-visible
            :delay="200" 
            :duration="1000">
        <h4 class="text-uppercase fw-semibold mb-2">PRINCIPALES BENEFICIOS</h4>
        <SectionTitleTwoCenter>
          <span class="text-red">Más rendimiento,</span> menos complicaciones
        </SectionTitleTwoCenter>
      </div>
    </div>
    <BenefitsBar :items="benefitsData.benefits"/>
  </section>
</template>

<style scoped>

</style>