<script setup lang="ts">
import { homeData } from '@/data/home'
</script>
<template>
  <section class="py-5 my-md-5">
    <div class="container">
      <div class="row align-items-center mb-5 g-5">
        <div class="col-lg-7">
          <h1 class="text-pbx-primary fw-bold display-5 mb-4">
            Proveedores de Telefonía IP en México
          </h1>
          <p class="fs-5 text-justify mb-4">
            Transforma la comunicación empresarial con nuestra avanzada
            <strong class="text-pbx-primary">Telefonía VOIP en México.</strong> Redefine la
            eficiencia y reduce costos con nuestros servicios personalizados, seguros y confiables.
            Descubre cómo nuestra tecnología VoIP de vanguardia puede optimizar tus comunicaciones
            hoy mismo.
          </p>
          <div>
            <a href="https://www.pbxhosting.com.mx/telefonia-ip" class="btn-deg d-inline-block"
              >Ver más</a
            >
          </div>
        </div>
        <div class="col-lg-5 text-center">
          <img src="/img/Home/teleip.png" class="img-fluid" alt="telefonia-ip-pbxhosting" />
        </div>
      </div>

      <!-- Cuadros informativos miniatura -->
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div class="col" v-for="(recuadro, index) in homeData.recuadro" :key="index">
          <div class="bg-light rounded-4 h-100 px-2 py-4 d-flex align-items-center">
            <!-- Usamos v-html para que interprete el <strong class="text-pbx-primary"> -->
            <p class="mb-0 flex-grow-1 ms-3 fw-medium" v-html="recuadro.text"></p>
            <router-link :to="recuadro.url" class="p-3 fs-5">
              <i class="fa-solid fa-arrow-up-right-from-square text-pbx-primary"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
