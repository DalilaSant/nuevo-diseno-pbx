<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { useHead } from '@vueuse/head'
import BannerComponent1 from '@/components/soluciones/telefonia-ip/01-Banner.vue'
import Banner2 from '@/components/soluciones/telefonia-ip/02-Banner.vue'
import Section3 from '@/components/soluciones/telefonia-ip/03-Section.vue'
import Banner4 from '@/components/soluciones/telefonia-ip/04-Banner.vue'
import Section5 from '@/components/soluciones/telefonia-ip/05-Section.vue'
import Banner6 from '@/components/soluciones/telefonia-ip/06-Banner.vue'
import Section7 from '@/components/soluciones/telefonia-ip/07-Section.vue'
import Banner8 from '@/components/soluciones/telefonia-ip/08-Banner.vue'
import Section9 from '@/components/soluciones/telefonia-ip/09-Section.vue'
import Banner10 from '@/components/soluciones/telefonia-ip/10-Banner.vue'
import Section11 from '@/components/soluciones/telefonia-ip/11-Section.vue'
import Section12 from '@/components/soluciones/telefonia-ip/12-Section.vue'
import Banner13 from '@/components/soluciones/telefonia-ip/13-Banner.vue'
import Section14 from '@/components/soluciones/telefonia-ip/14-Section.vue'

import LoaderComponent from '@/components/LoaderComponent.vue'

const loading = ref(true)

onMounted(() => {
  document.body.style.overflow = 'hidden' // evita que el usuario pueda bajar o subir en la página mientras el loader está en pantalla.
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = ''
  }, 3000)
})


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
  <LoaderComponent />
  <div v-if="!loading">
    <BannerComponent1 />
    <Banner2 />
    <Section3 />
    <Banner4 />
    <Section5 />
    <Banner6 />
    <Section7 />
    <Banner8 />
    <Section9 />
    <Banner10 />
    <Section11 />
    <Section12 />
    <Banner13 />
    <Section14 />
  </div>

</template>



<style scoped></style>