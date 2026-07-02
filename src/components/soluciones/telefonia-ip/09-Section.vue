<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import { solucionesData } from '@/data/soluciones'
</script>

<template>
  <section class="banner-section pt-5 ">
    <div class="container pt-lg-5 pb-lg-4">
      <div class="row">
        <div class="col-lg-8  col-12 order-2 order-lg-1">
          <img src="/img/soluciones/IMAGEN_15_SECCION_1.webp" alt="" class="img-fluid image-tablet" loading="lazy">
        </div>
        <div v-for="(card, index) in solucionesData.preciosCobranza" :key="index"
          class="col-lg-4 col-12 justify-content-center align-content-center paquete-card order-1 order-lg-2">
          <div
            class="pricing-switch-card py-4 px-xl-5 px-4  rounded-4 shadow-sm d-flex flex-column justify-content-between text-start w-100">
            <div>
              <!-- Cabecera de la tarjeta: Icono + Título -->
              <div class="d-flex align-items-center gap-1 mb-0">
                <div class="card-icon-wrapper flex-shrink-0 d-flex align-items-center justify-content-center">
                  <!-- Pon la ruta de tu imagen aquí -->
                  <img src="/img/soluciones/ICONO_8_SECCIO_2.png" alt="Icono" class="img-fluid card-icon-img" />
                </div>
                <div>
                  <span class="card-category d-block text-dark fw-semibold uppercase">{{ card.title }}</span>
                  <h3 class="card-plan-title text-red fw-semibold mb-0">{{ card.titletwo }}</h3>
                  <!-- Badge PREMIUM -->
                  <div class="mt-1 text-center">
                    <span class="badge-premium text-dark fw-bold uppercase">PREMIUM</span>
                  </div>
                </div>
              </div>
        
              
              <!-- Bloque del Precio -->
              <div class="price-block text-center my-3">
                <span class="price-period-top text-start ms-5 d-block mb-1">Al mes</span>
                <div class="price-container  d-inline-flex align-items-center justify-content-center gap-1">
                  <span class="price-symbol fw-semibold text-dark">{{ card.price }}</span>
                  <div class="text-start lh-sm">
                    <span class="d-block fw-bold text-dark small-iva">+IVA</span>
                    <span class="d-block fw-bold text-dark small-currency">MXN</span>
                  </div>
                </div>

              </div>

              <!-- Listado de Características (centrado en la tarjeta pero alineado a la izquierda entre sí) -->
              <div class="d-flex justify-content-center w-100 mb-4">
                <div class="features-list d-inline-flex flex-column gap-2 text-start">
                  <div class="feature-item d-flex align-items-center gap-2 text-start">
                    <i class="fa-regular fa-circle-check check-icon"></i>
                    <span class="feature-text text-dark fw-semibold">PBXDialer 30</span>
                  </div>
                  <div class="feature-item d-flex align-items-center gap-2 text-start">
                    <i class="fa-regular fa-circle-check check-icon"></i>
                    <span class="feature-text text-dark fw-semibold">2 Líneas Telefónicas<br><span class="text-secondary">2 Canales</span></span>
                  </div>
                  <div class="feature-item d-flex align-items-center gap-2 text-start">
                    <i class="fa-regular fa-circle-check check-icon"></i>
                    <span class="feature-text text-dark fw-semibold">4,000 SMS Masivos</span>
                  </div>
                  <div class="feature-item d-flex align-items-center gap-2 text-start">
                    <i class="fa-regular fa-circle-check check-icon"></i>
                    <span class="feature-text text-dark fw-semibold">Bolsa de Minutos:<span class="text-secondary">5,000 Min Fijos, 15,0000 Min Telcel y 10,000 Min Otros.</span></span>
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

  </section>
</template>



<style scoped>
/* Estilos de las tarjetas de precios */
.pricing-switch-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 376px;
  /* Ancho máximo para evitar que se estiren de más */
  background-color: #f8fafc;
}

.pricing-switch-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08) !important;
}

/* Icono circular de la cabecera */
.card-icon-wrapper {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  padding: 8px;

}

.card-icon-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Textos de la cabecera */
.card-category {
  font-size: 2.1rem;
  color: #000000;
  line-height: .9;
}

.card-plan-title {
  font-size: 2.1rem;
  line-height: 1.2;
}

.badge-premium {
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 0px 42px;
  display: inline-block;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
}

/* Contenedor de Precios */
.price-block {
  background-color: transparent;
  margin: 1.5rem 0;
}

.price-period-top {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
}

.price-symbol {
  font-size: 3.8rem;
  line-height: 1;
  letter-spacing: -2px;
  color: #000000;
}

.small-iva {
  font-size: 1.3rem;

  color: #000000;
}

.small-currency {
  font-size: 1.3rem;

  color: #000000;
}

.setup-price {
  font-size: 1rem;
  color: #1a1a1a;
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

@media (min-width:768px) and (max-width: 991px){
  .image-tablet{
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* Responsividad para móviles y pantallas medianas */
@media (max-width: 991px) {
  .pricing-switch-card {
    max-width: 320px;
    /* Centrado y acotado en pantallas más chicas */
    margin: 0 auto;
  }
}

@media (min-width: 1024px) and (max-width:1279px) {


  .card-category {
    font-size: 1.8rem;
  }

  .card-plan-title {
    font-size: 1.8rem;
  }

  .paquete-card{

    transform: translateY(-2.5rem);
  }


}

@media(min-width: 1279px) and (max-width: 1366px){
    .feature-text {
  font-size: 0.87rem;
}
}


</style>