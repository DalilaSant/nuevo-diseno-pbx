<script setup lang="ts">
import { homeData } from '@/data/home'
</script>

<template>
  <section class="py-5 mb-5">
    <div class="container">
      <!-- Cabecera de Soluciones -->
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-5"
      >
        <div class="text-center text-md-start mb-4 mb-md-0">
          <h3 class="fs-5 text-pbx-primary fw-medium mb-1">Para cualquier tipo de empresa</h3>
          <h2 class="display-5 fw-bold mb-0">Soluciones en Telefonía IP</h2>
        </div>
        <div class="text-center text-md-end">
          <a href="https://www.pbxhosting.com.mx/servicios" class="btn-deg d-inline-block"
            >Ver más servicios</a
          >
        </div>
      </div>

      <!-- Grid de Tarjetas de Servicio -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
        <!-- Iteramos las tarjetas usando el arreglo "servicios" que ya tienes arriba -->
        <div class="col" v-for="(servicio, index) in homeData.servicio" :key="index">
          <div class="card h-100 border-0 shadow-sm rounded-4 text-center pb-3 card-hover">
            <div class="position-relative mb-4">
              <img
                :src="servicio.img"
                class="card-img-top rounded-top-4 img-cover"
                :alt="servicio.title"
              />
              <div
                class="service-icon-circle bg-white rounded-circle p-2 shadow position-absolute start-50 translate-middle"
              >
                <img
                  :src="servicio.icon"
                  class="w-100 h-100 object-fit-contain"
                  :alt="servicio.title"
                />
              </div>
            </div>
            <div class="card-body px-4 mt-2 d-flex flex-column">
              <h2 class="h5 fw-bold">{{ servicio.title }}</h2>
              <p class="text-secondary text-center small mb-4">
                {{ servicio.desc }}
              </p>
              <router-link
                :to="servicio.url"
                class="fw-bold text-decoration-none text-center text-pbx-primary mt-auto"
                >Ver más</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  width: 90%;
}

/* Efecto de elevación elegante para las tarjetas */
.card-hover {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.service-icon-circle {
  width: 70px;
  height: 70px;
  top: 100%; /* Se coloca justo en la frontera entre la foto y el texto */
}
</style>
