<script setup lang="ts">
defineProps<{
    icono: string
    titulo: string

}>()
</script>

<template>
    <div class="d-flex align-items-center gap-2 p-lg-0 rounded-3 mx-auto mx-lg-0"
        style="max-width: 250px; width: 100%;">
        <div class="icon-placeholder-wrapper flex-shrink-0 d-flex align-items-center justify-content-center"
            style="width: 50px; height: 50px;">
            <img :src="icono" :alt="titulo" class="img-fluid" style="max-width: 100%; max-height: 100%;" />
        </div>
        <div class="lh-sm">
            <span class="d-block fw-bold text-dark  ">{{ titulo }}</span>
        </div>
    </div>
</template>



<style scoped></style>