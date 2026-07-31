<script setup lang="ts">
import SectionTitleTwo from '@/components/common/SectionTitleTwo.vue';
</script>

<template>
  <section class="banner-section py-lg-0 py-4" style="background-color: #ffffff;">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Línea decorativa roja -->
          <div class="d-flex align-items-center gap-2 mb-3 justify-content-center justify-content-lg-start">
            <div class="accent-line m-0"></div>
            <span class="fw-semibold fs-5" style="letter-spacing: 0.05em;">Equipo comercial y soporte</span>
          </div>
          <div class="text-start pt-lg-0 mb-5" v-motion-fade-visible :delay="200" :duration="1000">
            <SectionTitleTwo display-font="display-6" marginBotton="mb-0" :show-line="false">
              Siempre habrá <span class="text-red">alguien para ayudarte.</span>
            </SectionTitleTwo>

          </div>
        </div>
      </div>
    </div>

    <div class="container mb-4">
      <div class="row g-4">
        <!-- Tarjeta 1 -->
        <div class="col-lg-6 col-12">
          <div class="bento-trigger bg-white text-start position-relative overflow-hidden d-flex flex-column h-100">
            <div class="row align-items-center h-100">
              <div class="col-xl-4 col-lg-4 col-md-4 col-4 text-center">
                <div class="icon-box d-flex align-items-center justify-content-center mx-auto">
                  <img src="/img/nosotros/IMAGEN_10_SECCION_9.png" alt="" class="img-fluid imagen-izq">
                </div>
              </div>
              <div class="col-xl-8 col-lg-8 col-md-8 col-8 ps-lg-2 ps-0 pe-3  ">
                <h3 class="tittle fw-semibold text-dark mb-lg-2 mb-0">Asesoría Comercial</h3>
                <p class="mb-xl-4  mb-lg-0 mb-md-4   mb-0 parrafo ">Te ayudamos a identificar la solución adecuada para tu empresa.</p>
                <button class="btn p-0 text-primary fw-semibold btn-read-guide">Contactar asesor
                  <i class="fa-solid ms-1 fa-chevron-right" style="font-size: 0.75rem;"></i>
                </button>

              </div>

            </div>

          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="bento-trigger bg-white text-start position-relative overflow-hidden d-flex flex-column h-100">
            <div class="row align-items-center h-100">
              <div class="col-xl-4 col-lg-4 col-md-4 col-4 text-center">
                <div class="icon-box d-flex align-items-center justify-content-center mx-auto">
                  <img src="/img/nosotros/IMAGEN_11_SECCION_9.png" alt="" class="img-fluid imagen-izq">
                </div>
              </div>
              <div class="col-xl-8 col-lg-8 col-md-8 col-8 ps-lg-2 ps-0 pe-3  ">
                <h3 class="tittle fw-semibold text-dark mb-lg-2 mb-0">Soporte Técnico</h3>
                <p class="mb-xl-4 mb-lg-0 mb-md-4  mb-0 parrafo ">Atención especializada para mantener la continuidad de tu operación.</p>
                <button class="btn p-0 text-primary fw-semibold btn-read-guide">Solicitar asistencia
                  <i class="fa-solid ms-1 fa-chevron-right" style="font-size: 0.75rem;"></i>
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Línea roja decorativa */
.accent-line {
  width: 40px;
  height: 4px;
  background-color: #f12537;
  border-radius: 2px;
}

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



.tittle {
  font-size: 1.25rem;
}

.text-expand {
  line-height: 1.5;
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


.parrafo {
  width: 85%
}

@media (max-width: 575.98px) {
  .tittle {
    font-size: .9rem;
  }

  .parrafo {
    width: 90%;
    font-size: .8rem;
  }
  .btn-read-guide {
  font-size: 0.8rem;
  }
}

@media (min-width: 768px) and (max-width: 800px) {
  .bento-trigger {
    width: 75%;
    margin: 0 auto;
  }

  .tittle {
    font-size: 1.2rem;
  }

  .parrafo {
    width: 90%;
    font-size: .8rem;
  }

}

@media (min-width:1022px) and (max-width: 1279px) {
  .tittle {
    font-size: 1.25rem;
  }
}

@media (min-width: 1280px) and (max-width: 1366px) {

  .tittle {
    font-size: 1.3rem;
  }
  .parrafo {
    width: 90%;
  }
}

@media (min-width:1024px) and (max-width:1350px) {
  .tittle {
    font-size: 1rem;
  }
}
</style>