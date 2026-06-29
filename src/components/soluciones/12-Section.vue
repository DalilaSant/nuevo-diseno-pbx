<script setup lang="ts">
import BaseButton from '../common/BaseButton.vue'
import { solucionesData } from '@/data/soluciones'
</script>

<template>
    <section class="switch-pricing-section py-3 py-lg-5 my-lg-0">
        <div class="container py-lg-0">

            <!-- Título de la Sección -->
            <h2 class="section-title text-center fw-semibold mb-5 text-dark">
                Precios en PBXDialer
            </h2>

            <!-- Fila de Tarjetas de Precios -->
            <div class="row g-4 justify-content-center">

                <div v-for="(card, index) in solucionesData.preciosDialler" :key="index"
                    class="col-xl-4 col-lg-4 col-md-6 col-12 d-flex justify-content-center">
                    <div
                        class="pricing-switch-card py-4 px-xl-5 px-4  rounded-4 shadow-sm d-flex flex-column justify-content-between text-start w-100">
                        <div>
                            <!-- Cabecera de la tarjeta: Icono + Título -->
                            <div class="d-flex align-items-center gap-1 mb-4">
                                <div
                                    class="card-icon-wrapper flex-shrink-0 d-flex align-items-center justify-content-center">
                                    <!-- Pon la ruta de tu imagen aquí -->
                                    <img src="/img/soluciones/ICONO_17_SECCIO_2.png" alt="Icono"
                                        class="img-fluid card-icon-img" />
                                </div>
                                <div>
                                    <span class="card-category d-block text-dark fw-semibold uppercase">{{ card.title
                                        }}</span>
                                    <h3 class="card-plan-title text-uppercase text-red fw-semibold mb-0">{{
                                        card.tittletwo }}</h3>
                                </div>
                            </div>

                            <!-- Bloque del Precio -->
                            <div class="price-block text-center my-3">
                                <span class="price-period-top text-start ms-5  d-block mb-1">Al mes</span>
                                <div
                                    class="price-container d-inline-flex align-items-center justify-content-center gap-1">
                                    <span class="price-symbol fw-semibold text-dark">{{ card.price }}</span>
                                    <div class="text-start lh-sm">
                                        <span class="d-block fw-bold text-dark small-iva">+IVA</span>
                                        <span class="d-block fw-bold text-dark small-currency">MXN</span>
                                    </div>
                                </div>
                                <p class="setup-price mt-1 fw-semibold">{{ card.description }} <span
                                        class="mt-1 fw-semibold text-red">{{ card.textred }}</span></p>

                            </div>

                            <!-- Listado de Características (centrado en la tarjeta pero alineado a la izquierda entre sí) -->
                            <div class="d-flex justify-content-center w-100 mb-4">
                                <div class="features-list d-inline-flex flex-column gap-2 text-start">
                                    <div v-for="(feature, fIndex) in card.features" :key="fIndex"
                                        class="feature-item d-flex align-items-center gap-2">
                                        <i class="fa-regular fa-circle-check check-icon"></i>
                                        <span class="feature-text fw-semibold text-dark">{{ feature }}</span>
                                    </div>
                                </div>
                            </div>
                            <!-- Botón de acción -->
                            <div class="d-flex justify-content-start boton-action mt-2">
                                <BaseButton texto="Me interesa" enlace="#" :mostrarIcono="true"
                                    roundedClass="rounded-1 py-2 px-3 w-100 text-center justify-content-center" />
                            </div>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.section-title {
    font-size: 2.2rem;
    letter-spacing: -0.5px;
}

/* Estilos de las tarjetas de precios */
.pricing-switch-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.05);
    max-width: 360px;
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
    font-size: 1.8rem;
    color: #000000;
    line-height: .9;
}

.card-plan-title {
    font-size: 1.8rem;
    line-height: 1.2;
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
    font-size: .84rem;
}

/* Listado de características */
.check-icon {
    color: #f12537;
    font-size: 1.15rem;
    flex-shrink: 0;
}

.feature-text {
    font-size: 0.95rem;
}


/* Responsividad para móviles y pantallas medianas */
@media (max-width: 991px) {
    .pricing-switch-card {
        max-width: 320px;
        /* Centrado y acotado en pantallas más chicas */
        margin: 0 auto;
    }

    .boton-action {
        max-width: 85%;
        margin: 0 auto;
    }
}

@media (min-width: 1024px) and (max-width:1279px) {
    .boton-action {
        max-width: 65%;
        margin-left: 1rem !important;

    }

    .card-category {
        font-size: 1.8rem;
    }

    .card-plan-title {
        font-size: 1.8rem;
    }

}

@media (min-width:1024px) and (max-width: 1366px) {
    .setup-price {
        font-size: .79rem;
    }
    .feature-text {
    font-size: 0.92rem;
}
}

@media (min-width: 1280px) and (max-width:1366px) {
    .boton-action {
        max-width: 61%;
        font-size: 1rem;
        margin-left: 1rem !important;

    }

}


@media (min-width: 1367px) {
    .boton-action {
        max-width: 60%;
        margin-left: 1rem !important;

    }
}
</style>