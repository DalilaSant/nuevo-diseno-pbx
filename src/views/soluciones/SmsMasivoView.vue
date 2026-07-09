<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import LoaderComponent from '@/components/LoaderComponent.vue'

import BannerPrincipal from '@/components/soluciones/sms-masivo/01-Banner.vue'

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

    </div>
</template>



<style scoped>

</style>