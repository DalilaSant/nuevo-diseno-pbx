<script setup lang="ts">
import { useHead } from '@vueuse/head'
import BannerComponent from '@/components/soluciones/01-Banner.vue'
import BannerDos from '@/components/soluciones/02-Banner.vue'
import Section3 from '@/components/soluciones/03-Section.vue'
import BannerCuatro from '@/components/soluciones/04-Banner.vue'

useHead({
  title: 'PbxHosting | Proveedores de Telefonía IP en México',
  meta: [
    {
      name: 'description',
      content:
        'Transforma la comunicación empresarial con nuestra avanzada Telefonía VOIP en México. Redefine la eficiencia y reduce costos con nuestros servicios personalizados.',
    },
  ],
})
</script>

<template>
  <BannerComponent />
  <BannerDos/>
  <Section3/>
  <BannerCuatro/>

</template>



<style scoped></style>