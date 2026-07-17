<script setup lang="ts">
import { ref } from 'vue'
import { solucionesData } from '@/data/soluciones';


</script>

<template>
  <div class="container py-5">
    <!-- Grid de Tarjetas de Sectores -->
    <div class="row g-4 justify-content-center">
      
      <div 
        v-for="(cards, index) in solucionesData.cardsAgenteIA" 
        :key="index" 
        class="col-12 col-md-6 col-lg-4"
      >
        <!-- Tarjeta de Sector -->
        <div class="sector-card position-relative rounded-4 overflow-hidden shadow-sm" :style="{ backgroundImage: `url(${cards.bgClass})` }">

          <!-- Información de la Tarjeta (Abajo) -->
          <div class="card-content position-absolute bottom-0 start-0 w-100 p-4 z-3 text-white text-start">
            <h3 class="h5 fw-semibold mb-0">{{ cards.title }}</h3>
            <p class="mb-0 text-light fs-6 card-desc">
              {{ cards.desc }}
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.sector-card {
  min-height: 250px;
  background-size: cover ;
  background-position: top left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

}

.sector-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15) !important;
}

/* Descripción de la tarjeta */
.card-desc {
  line-height: 1.4;
  font-size: 0.95rem !important;
}


/* Ajustes responsivos para tablets y celulares */
@media (max-width: 991.98px) {
  .sector-card {
    min-height: 220px; /* Tarjetas ligeramente más compactas en pantallas medianas */
  }
}

@media (max-width: 576px) {
  .sector-card {
    min-height: 200px; /* Compactación ideal para móviles de una sola columna */
  }
}
</style>