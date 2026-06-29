<script setup lang="ts">
import { useHead } from '@vueuse/head'
import BannerComponent1 from '@/components/soluciones/01-Banner.vue'
import Banner2 from '@/components/soluciones/02-Banner.vue'
import Section3 from '@/components/soluciones/03-Section.vue'
import Banner4 from '@/components/soluciones/04-Banner.vue'
import Section5 from '@/components/soluciones/05-Section.vue'
import Banner6 from '@/components/soluciones/06-Banner.vue'
import Section7 from '@/components/soluciones/07-Section.vue'
import Banner8 from '@/components/soluciones/08-Banner.vue'
import Section9 from '@/components/soluciones/09-Section.vue'
import Banner10 from '@/components/soluciones/10-Banner.vue'
import Section11 from '@/components/soluciones/11-Section.vue'
import Section12 from '@/components/soluciones/12-Section.vue'
import Banner13 from '@/components/soluciones/13-Banner.vue'
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
  <BannerComponent1 />
  <Banner2/>
  <Section3/>
  <Banner4/>
  <Section5/>
  <Banner6/>
  <Section7/>
  <Banner8/>
  <Section9/>
  <Banner10/>
  <Section11/>
  <Section12/>
  <Banner13/>
</template>



<style scoped></style>