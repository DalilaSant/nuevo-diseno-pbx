<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import LoaderComponent from '@/components/LoaderComponent.vue' 
import Banner01 from '@/components/soluciones/infraestructura/01-Banner.vue'
import Section02 from '@/components/soluciones/infraestructura/02-Section.vue'
import Banner03 from '@/components/soluciones/infraestructura/03-Banner.vue'
import Section04 from '@/components/soluciones/infraestructura/04-Section.vue'
import Banner05 from '@/components/soluciones/infraestructura/05-Banner.vue'
import Banner06 from '@/components/soluciones/infraestructura/06-Section.vue'
import Banner07 from '@/components/soluciones/infraestructura/07-Banner.vue'
import Banner08 from '@/components/soluciones/infraestructura/08-Section.vue'

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
        <Banner01 />
        <Section02 />
        <Banner03 />
        <Section04 />
        <Banner05 />
        <Banner06 />
        <Banner07 />
        <Banner08 />

    </div>
</template>



<style scoped>

</style>