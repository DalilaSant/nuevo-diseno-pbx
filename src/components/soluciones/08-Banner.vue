<script setup lang="ts">
import SectionTitleTwo from '../common/SectionTitleTwo.vue';
import BaseButton from '../common/BaseButton.vue';
</script>

<template>
  <section class="banner-section py-0 mt-xl-1 mt-0">
    <div class="container py-lg-4">

      <!-- Contenedor principal con imagen de fondo -->
      <div
        class="custom-banner-bg position-relative rounded-4 overflow-hidden d-flex flex-column flex-lg-row align-items-center py-5 py-lg-0">

        <!-- Contenido del Banner (Textos y Badges en la izquierda) -->
        <div class="container position-relative z-3 pt-lg-0 px-4 px-md-5 text-white">
          <div class="row  align-items-center">

            <!-- Lado izquierdo: Textos y los 3 Badges Informativos -->
            <div class="col-12 col-lg-7 text-start px-lg-5">
              <SectionTitleTwo textColor="text-white" displayFont="display-4" marginBotton="mb-2" lineHeight="lh-1">
                Precios <br>
                <span class="text-red">Paquetes VOIP</span>
              </SectionTitleTwo>

              <p class="fs-5 text-white text-lg-start text-center mb-4 banner-desc">
                Elige el paquete ideal para tu comunicación y comienza a ahorrar.
              </p>

              <!-- Las tres listas con fondo blanco en la parte inferior de los títulos -->
              <div class="info-badges-list d-flex flex-column gap-3 mb-4 mb-lg-0">

                <!-- Badge 1 -->
                <div
                  class="info-badge-item bg-white d-inline-flex align-items-center gap-1 px-3 py-2 rounded-3 shadow-sm">
                  <div class="badge-icon-wrapper d-flex align-items-center justify-content-center">
                    <img src="/img/soluciones/ICONO_5_SECCIO_2.png" alt="Icono" class="badge-icon-img" />
                  </div>
                  <span class="badge-text fw-semibold text-dark">Llamadas de alta calidad</span>
                </div>

                <!-- Badge 2 -->
                <div
                  class="info-badge-item bg-white d-inline-flex align-items-center gap-1 px-3 py-2 rounded-3 shadow-sm">
                  <div class="badge-icon-wrapper d-flex align-items-center justify-content-center">
                    <img src="/img/soluciones/ICONO_6_SECCIO_2.png" alt="Icono" class="badge-icon-img" />
                  </div>
                  <span class="badge-text fw-semibold text-dark">Confiable y seguro</span>
                </div>

                <!-- Badge 3 -->
                <div
                  class="info-badge-item bg-white d-inline-flex align-items-center gap-1 px-3 py-2 rounded-3 shadow-sm">
                  <div class="badge-icon-wrapper d-flex align-items-center justify-content-center">
                    <img src="/img/soluciones/ICONO_7_SECCIO_2.png" alt="Icono" class="badge-icon-img" />
                  </div>
                  <span class="badge-text fw-semibold text-dark">Sin contratos forzosos</span>
                </div>

              </div>
            </div>

            <div class="col-12 col-lg-5">
              <div class="floating-plan-card mx-auto bg-white py-4  shadow">
                <div>
                  <div class="d-flex align-items-center gap-2 mb-3">
                    <div class="card-icon-wrapper flex-shrink-0 d-flex align-items-center justify-content-center">
                      <img src="/img/soluciones/ICONO_4_SECCIO_2.png" alt="Icono" class="card-icon-img" />
                    </div>
                    <div class="lh-sm">
                      <span class="card-plan-subtitle d-block text-dark fw-semibold">Plan</span>
                      <h3 class="card-plan-title text-red fw-semibold mb-0">Residencial</h3>
                    </div>
                  </div>

                  <!-- Bloque del Precio -->
                  <div class="price-block  my-5">
                    <span class="price-period-top d-block mb-0 ms-5 text-dark">Al mes</span>
                    <div class="price-container d-inline-flex align-items-center justify-content-center gap-3">
                      <span class="price-symbol fw-semibold text-dark">$150</span>
                      <div class="text-start lh-sm">
                        <span class="d-block fw-bold text-dark small-iva">+IVA</span>
                        <span class="d-block fw-bold text-dark small-currency">MXN</span>
                      </div>
                    </div>
                  </div>

                  <!-- Listado de Características -->
                  <div class="features-list d-flex flex-column gap-2 mb-4">
                    <div class="feature-item d-flex align-items-center gap-2 text-start">
                      <i class="fa-regular fa-circle-check check-icon"></i>
                      <span class="feature-text text-dark fw-semibold">1 Línea Telefónica de México</span>
                    </div>
                    <div class="feature-item d-flex align-items-center gap-2 text-start">
                      <i class="fa-regular fa-circle-check check-icon"></i>
                      <span class="feature-text text-dark fw-semibold">Hasta 1200 Min de México</span>
                    </div>
                  </div>
                </div>

                <!-- Botón de acción -->
                <div class="text-start boton-cellphone mt-2">
                  <BaseButton texto="Me interesa" enlace="#" :mostrarIcono="true"
                    roundedClass="rounded-1" />
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
.custom-banner-bg {
  background-image: url('/img/soluciones/IMAGEN_11_SECCION_1.png');
  background-size: cover;
  background-position: center;
  min-height: 320px;
  /* Altura base para móviles */
  transition: all 0.3s ease;
}

.banner-desc {
  max-width: 500px;
  transition: all 0.3s ease;
}

/* Estilos de los Badges Informativos (Lado izquierdo) */
.info-badges-list {
  max-width: 320px;
}

.info-badge-item {
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.info-badge-item:hover {
  transform: translateX(5px);
}

.badge-icon-wrapper {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  padding: 6px;
  flex-shrink: 0;
}

.badge-icon-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.badge-text {
  font-size: 0.95rem;
}

/* Tarjeta del Plan Flotante (Lado derecho) */
.floating-plan-card {
  width: 100%;
  max-width: 320px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding-right: 2.4rem;
  padding-left: 2.4rem;
}

.card-icon-wrapper {
  width: 52px;
  height: 52px;
  background-color: #f8fafc;
  border-radius: 50%;
  padding: 0px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.card-icon-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.card-plan-subtitle {
  font-size: 1.6rem;
  line-height: 1;
}

.card-plan-title {
  font-size: 1.6rem;
  line-height: 1.1;
}

/* Bloque del Precio */
.price-block {
  margin: 1.5rem 0;
}

.price-period-top {
  font-size: 1rem;
  font-weight: 600;
}

.price-symbol {
  font-size: 4rem;
  line-height: 1;
  letter-spacing: -2px;
}

.small-iva,
.small-currency {
  font-size: 1.35rem;
  font-weight: 800;
}

/* Características y Checks */
.check-icon {
  color: #f12537;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.feature-text {
  font-size: 0.95rem;
}

/* Posicionamiento en Desktop */
@media (min-width: 992px) {
  .custom-banner-bg {
    min-height: 480px;
    /* Aumentamos el alto en computadoras */
  }
}

@media (max-width: 576px) {
  .custom-banner-bg {
    min-height: 460px;
  }
}

@media (max-width: 800px) {
  .info-badges-list{
    margin: auto;
  }
  .banner-desc {
    margin: 0 auto;
  }

  .boton-cellphone {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
  }
  .boton-cellphone :deep(.btn) {
    width: 100% !important;
    display: inline-flex !important;
    justify-content: center !important;
    text-align: center !important;
  }
  .boton-cellphone :deep(.ms-3) {
    margin-left: 0 !important;
  }
}
</style>