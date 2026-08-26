<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LoaderComponent from '@/components/LoaderComponent.vue';
import Banner01 from '@/components/contacto/01-Banner.vue';
import Section02 from '@/components/contacto/02-Section.vue';
const loading = ref(true)
onMounted(() => {
  document.body.style.overflow = 'hidden'
  setTimeout(() => {
    loading.value = false
    document.body.style.overflow = ''
  }, 3000);
})

</script>

<template>
  <LoaderComponent />
  <div v-if="!loading">
    <Banner01/>
    <Section02/>
  </div>
</template>



<style scoped></style>