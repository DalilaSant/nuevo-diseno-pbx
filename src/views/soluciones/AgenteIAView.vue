<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import LoaderComponent from '@/components/LoaderComponent.vue'
import Banner01 from '@/components/soluciones/agente-ia/01-Banner.vue'
import Banner02 from '@/components/soluciones/agente-ia/02-Banner.vue'
import Section03 from '@/components/soluciones/agente-ia/03-Section.vue'
import Banner04 from '@/components/soluciones/agente-ia/04-Banner.vue'

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
      <Banner02 />
      <Section03 />
      <Banner04 />
    </div>
</template>



<style scoped>

</style>