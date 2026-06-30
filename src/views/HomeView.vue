<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BannerComponent from '@/components/home/01-Banner.vue'
import BannerComponent2 from '@/components/home/02-Banner.vue'
import Section3 from '@/components/home/03-Section.vue'
import Banner4 from '@/components/home/04-Banner.vue'
import Section5 from '@/components/home/05-Section.vue'
import Section6 from '@/components/home/06-Section.vue'
import Banner7 from '@/components/home/07-Banner.vue'
import { useHead } from '@vueuse/head'

import LoaderComponent from '@/components/LoaderComponent.vue'


///////////////
/*Para evitar que se pueda bajar o subir en la página, o si tengo animaciones que tardan en cargar se interrumpan se deja bloqueado hasta que el loader se muestre en pantalla */ 
const loading = ref(true)

onMounted(() => {
  document.body.style.overflow = 'hidden' // evita que el usuario pueda bajar o subir en la página mientras el loader está en pantalla.
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = ''
  }, 3000)
})
//abajo se agrega el loaderComponent, y los demas componentes los encierro en un div y agrego el v-if para que se se carguen cuando la animacion de loader termine
//////////////

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
    <BannerComponent />
    <BannerComponent2 />
    <Section3 />
    <Banner4 />
    <Section5 />
    <Section6 />
    <Banner7 />
  </div>
</template>

<style scoped></style>
