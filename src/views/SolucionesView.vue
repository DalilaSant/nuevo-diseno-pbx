<script setup lang="ts">
import { useHead } from '@vueuse/head'
import BannerComponent from '@/components/soluciones/01-Banner.vue'

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

</template>



<style scoped></style>