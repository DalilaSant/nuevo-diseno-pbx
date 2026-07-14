<script setup lang="ts">
import BannerAllElements from '@/components/common/BannerAllElements.vue';
import { bannerSMSMasivoTres } from '@/data/bannerallelements'
</script>

<template>
  <section class="solutions-features-section py-5 py-lg-4">
    <BannerAllElements :items="bannerSMSMasivoTres.dataBanner" lineHeight="lh-1"  reverse>
       <!-- Inyectamos la imagen flotante con animación en el slot -->
      <template #image-overlay>
        <img 
          src="/img/soluciones/RECURSO_5_SECCION_3.png" 
          alt="Notificación RCS" 
          class="overlay-notification"
          v-motion-slide-visible-top
          :delay="1000" 
          :duration="900"
        />
      </template>
    </BannerAllElements>
  </section>
</template>



<style scoped>
/* Estilos generales de la sección */
.solutions-features-section {
  width: 100%;
}


.overlay-notification {
  position: absolute;
  top: 24%; 
  left: 20%; 
  width: 60%;
  height: auto;
  z-index: 5;
}

@media (max-width: 991px) {
  .solutions-features-section {
    padding: 3rem 0;
  }
}


</style>