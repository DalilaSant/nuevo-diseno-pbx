<script setup lang="ts">

</script>

<template>
    <div class="container">
        <!-- Contenedor principal con imagen de fondo -->
        <div class="custom-banner-bg position-relative rounded-4 overflow-hidden d-flex align-items-center">

            <!-- Cuadrito flotante posicionado en la esquina superior derecha en desktop, y en la esquina inferior en móviles -->
            <div class="floating-badge d-flex align-items-center gap-2 p-2 px-3 bg-white rounded-3 shadow position-absolute border-0 text-start">
                <span class="pulse-dot"></span>
                <div class="lh-sm" style="font-size: 0.85rem;">
                    <span class="d-block fw-bold text-dark">Infraestructura robusta</span>
                    <span class="text-dark opacity-90">con alta disponibilidad.</span>
                </div>
            </div>

            <!-- Contenido del Banner -->
            <div class="container position-relative z-3 pt-lg-0 pt-5 px-4 px-md-5 text-white">
                <div class="row align-items-center">

                    <!-- Lado izquierdo: Textos -->
                    <div class="col-12 col-lg-7 text-start">
                        <span
                            class="text-uppercase fw-semibold tracking-wider text-light-gray fs-5 mb-0 d-inline-block">
                            Por qué elegirlos
                        </span>
                        <h2 class="display-6 fw-semibold mb-3 banner-title">
                            Tu éxito es nuestra <br class="d-none d-md-block" />
                            <span class="text-danger">mejor conexión.</span>
                        </h2>
                        <p class="fs-5 text-white mb-0 banner-desc">
                            Combinamos tecnología y experiencia para ofrecerte lo que realmente necesitas.
                        </p>
                    </div>


                    <!-- Lado derecho: Espacio vacío para equilibrar el diseño en desktop -->
                    <div class="col-12 col-lg-5">
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.custom-banner-bg {
    background-image: url('/img/home/IMAGEN_3_SECCION_1.png');
    background-size: cover;
    background-position: center right;
    min-height: 320px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Ajustes de tipografía */
.text-light-gray {
    color: #ffffff;
    letter-spacing: 0.08em;
}

.banner-title {
    font-size: 2.2rem;
    line-height: 1.2;
}


.banner-desc {
    max-width: 500px;
}


/* Estilos para el recuadro flotante */
.floating-badge {
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 5;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08) !important;
    width: fit-content;
}

/* Punto parpadeante (alerta) */
.pulse-dot {
    width: 8px;
    height: 8px;
    background-color: #f12537;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(241, 37, 55, 0.7);
    animation: pulse 1.6s infinite;
    display: inline-block;
    flex-shrink: 0;
}

/*Animacion de fotogramas*/
@keyframes pulse {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(241, 37, 55, 0.7);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 6px rgba(241, 37, 55, 0);
    }

    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(241, 37, 55, 0);
    }
}



@media (max-width: 576px) {
    .custom-banner-bg {
        min-height: 420px;
    }
}
@media (min-width: 992px) {
  .custom-banner-bg {
    min-height: 360px; /* Aumentamos el alto del banner a 480px en computadoras */
  }
}

@media (min-width: 768px) {
    .banner-title {
        font-size: 3rem;
        line-height: 1;
    }
}
/* @media (max-width: 767px) {
    .floating-badge {
        top: auto;
        bottom: 25px;
        right: 25px;
    }
} */

</style>