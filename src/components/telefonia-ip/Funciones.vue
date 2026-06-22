<script setup lang="ts">
import { telefoniaIPData } from '@/data/telefonia-ip'
</script>
<template>
  <section id="funciones">
    <div class="container">
      <div class="">
        <div class="">
          <h1 class="fw-bold display-5 text-center mt-4 mt-lg-5 pt-lg-5 mb-4" style="color: #000">
            Funcionalidades de la <span class="text-pbx-primary">Telefonía IP</span>
          </h1>
        </div>
      </div>
      <!-- Termina titulo -->
      <!-- Funciones -->
      <div class="row justify-content-center align-items-center mt-4 mt-lg-5 pt-lg-5 g-4 g-lg-5">
        <div
          class="col-12 col-md-6 col-lg-4 fun-item"
          v-for="(funciones, index) in telefoniaIPData.funciones"
          :key="index"
        >
          <div class="image-container">
            <img class="img-fluid w-50 mx-auto d-block" :src="funciones.img" alt="Imagen 1" />
          </div>
          <p class="text-center fw-bold fs-5 mt-3" v-html="funciones.tittle"></p>
        </div>
      </div>

      <!-- Termina Funciones -->
    </div>
  </section>
</template>

<style scoped>
#funciones {
  margin-bottom: 100px;
}
</style>
