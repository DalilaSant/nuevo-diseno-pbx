<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import LoaderComponent from '@/components/LoaderComponent.vue'

import BannerPrincipal from '@/components/soluciones/sms-masivo/01-Banner.vue'
import BannerDos from '@/components/soluciones/sms-masivo/02-Banner.vue'
import BannerTres from '@/components/soluciones/sms-masivo/03-Banner.vue'
import Section04 from '@/components/soluciones/sms-masivo/04-Section.vue'
import Banner05 from '@/components/soluciones/sms-masivo/05-Banner.vue'
import Banner06 from '@/components/soluciones/sms-masivo/06-Banner.vue'
import Banner07 from '@/components/soluciones/sms-masivo/07-Banner.vue'
const loading = ref(true)

onMounted(() =>{
    document.body.style.overflow = 'hidden'
    setTimeout(()=>{
        loading.value = false
        document.body.style.overflow = ''
    }, 3000)
})
</script>

<template>
    <LoaderComponent />
    <div v-if="!loading">
      <BannerPrincipal /> 
      <BannerDos /> 
      <BannerTres />
      <Section04 />
      <Banner05 />
      <Banner06 />
      <Banner07 />
    </div>
</template>



<style scoped>

</style>