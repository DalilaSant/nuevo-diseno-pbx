<script setup lang="ts">
import BannerComponent from '@/components/home/01-Banner.vue'
import BannerComponent2 from '@/components/home/02-Banner.vue'
import Section3 from '@/components/home/03-Section.vue'

import { useHead } from '@vueuse/head'

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
  <BannerComponent2 />
  <Section3 />
</template>

<style scoped></style>
