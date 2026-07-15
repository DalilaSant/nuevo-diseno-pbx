<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
import BannerPrincipal from '@/components/soluciones/whatsapp-masivo/01-Banner.vue'
import BannerDos from '@/components/soluciones/whatsapp-masivo/02-Banner.vue'
import Section03 from '@/components/soluciones/whatsapp-masivo/03-Section.vue'
import Banner04 from '@/components/soluciones/whatsapp-masivo/04-Banner.vue'
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
        <Section03 />
        <Banner04/>
    </div>
</template>


<style scoped>

</style>