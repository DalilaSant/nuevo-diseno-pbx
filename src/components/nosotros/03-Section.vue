<script setup lang="ts">
import { ref } from 'vue'

// Estados reactivos para controlar si el texto de misión y visión está expandido
const showMision = ref(false)
const showVision = ref(false)
</script>

<template>
  <section class="banner-section py-lg-5 py-4" style="background-color: #ffffff;">
    
    <!-- Bloque de Bento Grids usando el sistema de rejilla nativo de Bootstrap -->
    <div class="position-relative">

      <!-- Fila 1 de Guías -->
      <div class="container mb-4">
        <div class="row g-4">
          <!-- Tarjeta 1 (Misión) -->
          <div class="col-lg-6 col-12">
            <div class="bento-trigger bg-white text-start position-relative overflow-hidden d-flex flex-column p-3 h-100">
              <div class="row align-items-center h-100">
                <div class="col-xl-3 col-lg-4 col-md-4 col-5 text-center">
                  <div class="icon-box d-flex align-items-center justify-content-center mx-auto">
                    <img src="/img/nosotros/ICONO_5_SECCIO_9.png" alt="Misión" class="img-fluid">
                  </div>
                </div>
                <div class="col-xl-9 col-lg-8 col-md-8 col-7 ps-0 pe-3">
                  <h3 class="text-parrafo fw-semibold text-dark mb-1">Nuestra misión</h3>
                  <p class="small  mb-0 text-expand">
                    Ser una empresa líder en soluciones innovadoras de las telecomunicaciones 
                    <!-- Mostrar de manera instantánea sin animaciones -->
                    <span v-if="showMision" class="expandable-text">
                      y tecnologías de la información a nivel internacional, brindando a todos nuestros clientes satisfacción, calidad, precio y servicio de alta calidad tecnológica.
                    </span>
                  </p>
                  <button class="btn px-0 text-primary fw-semibold btn-read-guide" @click="showMision = !showMision">
                    {{ showMision ? 'Leer menos' : 'Leer más' }} 
                    <i :class="['fa-solid ms-1', showMision ? 'fa-chevron-up' : 'fa-chevron-right']" style="font-size: 0.75rem;"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Tarjeta 2 (Visión) -->
          <div class="col-lg-6 col-12">
            <div class="bento-trigger bg-white text-start position-relative overflow-hidden d-flex flex-column p-3 h-100">
              <div class="row align-items-center h-100">
                <div class="col-xl-3 col-lg-4 col-md-4 col-5 text-center">
                  <div class="icon-box d-flex align-items-center justify-content-center mx-auto">
                    <img src="/img/nosotros/ICONO_6_SECCIO_9.png" alt="Visión" class="img-fluid">
                  </div>
                </div>
                <div class="col-xl-9 col-lg-8 col-md-8 col-7 ps-0 pe-3">
                  <h3 class="text-parrafo fw-semibold text-dark mb-1">Nuestra visión</h3>
                  <p class="small  mb-0 text-expand">
                    Posicionar a Pbx Hosting a nivel nacional e internacional en el liderazgo 
                    <!-- Mostrar de manera instantánea sin animaciones -->
                    <span v-if="showVision" class="expandable-text">
                      de las telecomunicaciones, expandiendo su presencia en los mercados donde opera para ser una de las mejores empresas mexicanas con mayor crecimiento a nivel mundial.
                    </span>
                  </p>
                  <button class="btn px-0 text-primary fw-semibold btn-read-guide" @click="showVision = !showVision">
                    {{ showVision ? 'Leer menos' : 'Leer más' }} 
                    <i :class="['fa-solid ms-1', showVision ? 'fa-chevron-up' : 'fa-chevron-right']" style="font-size: 0.75rem;"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.featured-desc {
  font-size: 1.15rem;
  line-height: 1.6;
}

/* Tarjetas Bento */
.bento-trigger {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1);
}

.bento-trigger:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08), 0 5px 15px rgba(0, 0, 0, 0.04);
}

/* Contenedor gris del icono de la maquetación */
.icon-box {

  border-radius: 12px;
  width: 90px;
  height: 90px;
  transition: background-color 0.25s ease;
}



.btn-read-guide {
  font-size: 0.95rem;
  color: #0d6efd;
  transition: color 0.2s ease;
}

.btn-read-guide:hover {
  color: #0056b3;
}

.btn-read-guide:focus,
.btn-read-guide:active,
.btn-read-guide:focus-visible,
.btn-read-guide:active:focus {
  box-shadow: none !important;
  outline: none !important;
  border-color: transparent !important;
}

.text-parrafo {
  font-size: 1.25rem;
}

.text-expand {
  line-height: 1.5;
}

.expandable-text {
  display: inline;
}

@media (max-width: 575.98px) {
  .text-parrafo {
    font-size: 1rem;
  }

  .text-feature {
    font-size: .9rem;
  }
}

@media (min-width: 768px) and (max-width: 800px) {
  .bento-trigger {
    width: 75%;
    margin: 0 auto;
  }

  .text-parrafo {
    font-size: 1.2rem;
  }
}

@media (min-width:1022px) and (max-width: 1279px) {
  .text-parrafo {
    font-size: 1.25rem;
  }
}

@media (min-width: 1280px) and (max-width: 1366px) {
  .featured-desc {
    font-size: .95rem;
  }

  .text-parrafo {
    font-size: 1.3rem;
  }
}
</style>