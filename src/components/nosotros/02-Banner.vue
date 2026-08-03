<script setup lang="ts">
import BannerAllElements from '@/components/common/BannerAllElements.vue';
import { bannerNosotros } from '@/data/bannerallelements'
</script>

<template>
  <section class="solutions-features-section py-0 pt-lg-5 pb-lg-0">
    <BannerAllElements :items="bannerNosotros.dataBanner" lineHeight="lh-1"  subtitulo="Nuestra historia"  :mostrarBoton="false" reverse marginBottonTittle="mb-lg-2"  animarTexto direccionAnimacion="left"/>
  </section>
</template>



<style scoped>
/* Estilos generales de la sección */
.solutions-features-section {
  width: 100%;
  background-color: #f2f5f7;
}

@media (max-width: 991px) {
  .solutions-features-section {
    padding: 3rem 0;
  }
}
</style>