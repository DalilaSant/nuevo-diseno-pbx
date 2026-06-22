<script setup lang="ts">
import BannerSection from '@/components/home/BannerSection.vue'
import ProveedoresTelefoniaIP from '@/components/home/ProveedoresTelefoniaIP.vue'
import ServiciosEscalables from '@/components/home/ServiciosEscalables.vue'
import SolucionesTelefonia from '@/components/home/SolucionesTelefonia.vue'
import GeneraGanancias from '@/components/home/GeneraGanancias.vue'

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
  <BannerSection />
  <ProveedoresTelefoniaIP />
  <SolucionesTelefonia />
  <ServiciosEscalables />
  <GeneraGanancias />
</template>

<style scoped></style>
