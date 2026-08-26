<script setup lang="ts">
import { ref, onMounted} from 'vue'
import LoaderComponent from '@/components/LoaderComponent.vue';
import Banner01 from '@/components/nosotros/01-Banner.vue';
import Banner02 from '@/components/nosotros/02-Banner.vue';
import Section03 from '@/components/nosotros/03-Section.vue';
import Section04 from '@/components/nosotros/04-Section.vue';
import Banner05 from '@/components/nosotros/05-Banner.vue';
import Section06 from '@/components/nosotros/06-Section.vue';
import Banner07 from '@/components/nosotros/07-Banner.vue';
const loading = ref(true)
onMounted(()=>{
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
        <Banner02/>
        <Section03/>
        <Section04/>
        <Banner05/>
        <!-- <Section06/> -->
        <Banner07/>
    </div>
</template>



<style scoped>

</style>