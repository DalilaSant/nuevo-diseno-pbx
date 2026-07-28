<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import LoaderComponent from '@/components/LoaderComponent.vue'
import Banner01 from '@/components/recursos/01-Banner.vue'
import Section02 from '@/components/recursos/02-Banner.vue'
import Section03 from '@/components/recursos/03-Section.vue'
import Banner04 from '@/components/recursos/04-Banner.vue'

const loading = ref(true)
onMounted(() => {
  document.body.style.overflow = 'hidden' // evita que el usuario pueda bajar o subir en la página mientras el loader está en pantalla.
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = ''
  }, 3000)
})

</script>

<template>
  <LoaderComponent />
  <div v-if="!loading">
    <Banner01/>
    <Section02/>
    <Section03/>
    <Banner04/>

  </div>
</template>



<style scoped>

</style>