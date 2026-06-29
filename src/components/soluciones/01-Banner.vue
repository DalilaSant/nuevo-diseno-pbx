<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue'
import SectionTitleTwo from '../common/SectionTitleTwo.vue'
</script>

<template>
  <section class="py-5">
    <div class="container">
      <!-- solutions-banner encapsulado dentro del container con esquinas redondeadas -->
      <div class="solutions-banner position-relative rounded-4 overflow-hidden d-flex align-items-center p-4 p-md-5">
        <div class="container-fluid my-2 position-relative z-3">
          <div class="row align-items-center g-4">
            
            <!-- Columna Izquierda: Textos y Título -->
            <div class="col-lg-4 col-12 text-center text-lg-start mb-4 mb-lg-0"
              v-motion-slide-left
              :delay="200" 
              :duration="1200"
            >
              <SectionTitleTwo textColor="text-white" displayFont="display-3" textPosition="text-center text-lg-start">
                Porta tus <br>
                <span class="text-red">Líneas</span>
              </SectionTitleTwo>
              
              <p class="mb-4 text-light mx-md-auto mx-lg-0 parrafos" >
                Lo último en <span style="color:#f12537">tecnología</span> y comunicación empresarial.
              </p>
            </div>

            <!-- Columna Derecha: Tarjetas de Precios -->
            <div class="col-lg-8 col-12"
              v-motion-slide-right
              :delay="200" 
              :duration="1200"
            >
              <div class="d-flex flex-column flex-lg-row gap-3 justify-content-center justify-content-lg-around align-items-stretch">
                
                <!-- Tarjeta 1 -->
                <div class="price-card bg-white p-4 rounded-4 shadow d-flex flex-column justify-content-between text-start position-relative">
                  <div>
                    <!-- Fila de Encabezado: Icono Izquierda, Título y Canales Derecha -->
                    <div class="d-flex align-items-center gap-1 mb-3">
                      <div class="card-icon-wrapper flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src="/img/soluciones/ICONO_2_SECCIO_2.png" alt="Icono" class="img-fluid card-icon-img" />
                      </div>
                      <div>
                        <h3 class="card-title text-dark fw-bold mb-0">Línea Telefónica de México</h3>
                        <span class="card-subtitle fw-semibold">2 Canales</span>
                      </div>
                    </div>
                    
                    <!-- Bloque de Precio Centrado -->
                    <div class="price-block my-4">
                      <div class="price-container d-inline-flex align-items-center justify-content-center gap-1">
                        <span class="price-symbol fw-semibold text-dark">$840</span>
                        <div class="price-details text-start lh-sm">
                          <span class="d-block fw-bold text-dark small-iva">+IVA</span>
                          <span class="d-block fw-bold text-dark small-currency">MXN</span>
                        </div>
                      </div>
                      <span class="price-period d-block text-dark mt-1">Al año</span>
                    </div>
                  </div>
                  
                  <!-- Botón abajo a la izquierda -->
                  <div class="text-start boton-cellphone">
                    <BaseButton class="ms-3" texto="Me interesa" enlace="#" :mostrarIcono="true" roundedClass="rounded-1 py-2 px-3 fs-6" />
                  </div>
                </div>

                <!-- Tarjeta 2 -->
                <div class="price-card bg-white p-4 rounded-4 shadow d-flex flex-column justify-content-between text-start position-relative">
                  <div>
                    <!-- Fila de Encabezado: Icono Izquierda, Título y Canales Derecha -->
                    <div class="d-flex align-items-center gap-1 mb-3">
                      <div class="card-icon-wrapper flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src="/img/soluciones/ICONO_2_SECCIO_2.png" alt="Icono" class="img-fluid card-icon-img" />
                      </div>
                      <div>
                        <h3 class="card-title text-dark fw-bold mb-0">Línea Telefónica de México</h3>
                        <span class="card-subtitle fw-semibold">10 Canales</span>
                      </div>
                    </div>
                    
                    <!-- Bloque de Precio Centrado -->
                    <div class="price-block my-4">
                      <div class="price-container d-inline-flex align-items-center justify-content-center gap-1">
                        <span class="price-symbol fw-semibold text-dark">$1,680</span>
                        <div class="price-details text-start lh-sm">
                          <span class="d-block fw-bold text-dark small-iva">+IVA</span>
                          <span class="d-block fw-bold text-dark small-currency">MXN</span>
                        </div>
                      </div>
                      <span class="price-period d-block text-dark mt-1">Al año</span>
                    </div>
                  </div>
                  
                  <!-- Botón abajo a la izquierda -->
                  <div class="text-start boton-cellphone">
                    <BaseButton texto="Me interesa" enlace="#" :mostrarIcono="true" roundedClass="rounded-1 py-2 px-3 fs-6" />
                  </div>
                </div>

                <!-- Tarjeta 3 -->
                <div class="price-card bg-white p-4 rounded-4 shadow d-flex flex-column justify-content-between text-start position-relative">
                  <div>
                    <!-- Fila de Encabezado: Icono Izquierda, Título y Canales Derecha -->
                    <div class="d-flex align-items-center gap-1 mb-3">
                      <div class="card-icon-wrapper flex-shrink-0 d-flex align-items-center justify-content-center">
                        <img src="/img/soluciones/ICONO_2_SECCIO_2.png" alt="Icono" class="img-fluid card-icon-img" />
                      </div>
                      <div>
                        <h3 class="card-title text-dark fw-bold mb-0">Línea Telefónica Estados Unidos</h3>
                        <span class="card-subtitle fw-semibold">2 Canales</span>
                      </div>
                    </div>
                    
                    <!-- Bloque de Precio Centrado -->
                    <div class="price-block my-4">
                      <div class="price-container d-inline-flex align-items-center justify-content-center gap-1">
                        <span class="price-symbol fw-semibold text-dark">$1,056</span>
                        <div class="price-details text-start lh-sm">
                          <span class="d-block fw-bold text-dark small-iva">+IVA</span>
                          <span class="d-block fw-bold text-dark small-currency">MXN</span>
                        </div>
                      </div>
                      <span class="price-period d-block text-dark mt-1">Al año</span>
                    </div>
                  </div>
                  
                  <!-- Botón abajo a la izquierda -->
                  <div class="text-start boton-cellphone">
                    <BaseButton texto="Me interesa" enlace="#" :mostrarIcono="true" roundedClass="rounded-1 py-2 px-3 fs-6" />
                  </div>
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
.solutions-banner {
  background-image: url("/img/soluciones/IMAGEN_1_SECCION_1.png");
  background-size: cover;
  background-position: center;
  min-height: 450px;
  width: 100%;
}

/* Capa de overlay oscura para mejorar la legibilidad sobre la imagen de fondo */
.solutions-banner::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: linear-gradient(90deg, rgba(12, 24, 36, 0.95) 0%, rgba(12, 24, 36, 0.75) 50%, rgba(12, 24, 36, 0.4) 100%); */
  z-index: 1;
}

.parrafos{
  max-width: 280px;
  font-size: 1.41rem;
}

/* Estilos de las tarjetas de precios */
.price-card {
  flex: 1;
  min-width: 240px;
  max-width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  z-index: 2; /* Asegurar que queden por encima del pseudo-elemento overlay */
}

.price-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

/* Wrapper del icono circular de la tarjeta */
.card-icon-wrapper {
  width: 58px;
  height: 58px;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 1px;
  
}

.card-icon-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Tipografías internas de la tarjeta */
.card-title {
  font-size: 0.95rem;
  line-height: 1.2;
  color: #000000;
}

.card-subtitle {
  font-size: 0.8rem;
  color: #f12537; /* Color rojo */
  display: block;
  margin-top: 2px;
}

/* Contenedor de precio centrado */
.price-block {
  text-align: center;
}

.price-container {
  display: inline-flex;
  align-items: center;
}

.price-symbol {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -2px;
}

.price-details {
  font-weight: 800;
}

.small-iva {
  font-size: 1.1rem;
  font-weight: 800;
}

.small-currency {
  font-size: 1.1rem;
  font-weight: 800;
}

.price-period {
  font-size: 0.85rem;
  font-weight: 500;
}


/* Responsividad para pantallas móviles y tablets */
@media (max-width: 991px) {
  .solutions-banner {
    min-height: auto; 
    padding: 2.5rem 1rem !important;
  }
  


  .solutions-banner::before {
    /* En vertical, el gradiente oscuro cubre toda la tarjeta uniformemente */
    background: rgba(12, 24, 36, 0.9);
  }

  .price-card {
    max-width: 320px; /* Ancho cómodo centrado */
    width: 100%;
    margin: 0 auto; /* Centrar tarjetas apiladas */
  }
  .parrafos{
  max-width:100%;
  }
}

/* Responsividad intermedia para pantallas de laptops (1024px a 1366px) */
@media (min-width: 1024px) and (max-width: 1366px) {
  .solutions-banner {
    min-height: 420px; /* Asegura espacio suficiente para las tarjetas */
  }

  .price-card {
    min-width: 200px !important;
    max-width: 240px !important;
    padding: 1.25rem !important; /* Más compacto */
  }

  .card-icon-wrapper {
    width: 46px !important;
    height: 46px !important;
    padding: 6px !important;
  }

  .card-title {
    font-size: 0.85rem !important;
  }

  .card-subtitle {
    font-size: 0.75rem !important;
  }

  .price-symbol {
    font-size: 2.4rem !important;
  }

  .small-iva, .small-currency {
    font-size: 0.85rem !important;
  }

  .price-period {
    font-size: 0.8rem !important;
  }

  .price-card :deep(.btn) {
    white-space: nowrap !important; /* Evita que el texto del botón se rompa en dos líneas */
    font-size: 0.75rem !important;
    padding: 6px 10px !important;
  }
  
}

@media (min-width: 1024px) and (max-width: 1100px) {
  .card-title {
  font-size: 0.80rem !important;
  }
  .parrafos{
    font-size: 1.14rem;
    max-width:85%;
  }
}

@media (min-width: 1920px){
  .price-card :deep(.btn) {
    white-space: nowrap !important; 
    font-size: 0.90rem !important;
    padding: 6px 10px !important;
  }
}

@media (max-width: 800px) {
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