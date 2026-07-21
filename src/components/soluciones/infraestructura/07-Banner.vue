<script setup lang="ts">

</script>

<template>
    <div class="container">
        <!-- Contenedor principal con imagen de fondo -->
        <div class="custom-banner-bg position-relative rounded-4 overflow-hidden d-flex align-items-center">

            <!-- Cuadrito flotante posicionado en la esquina superior derecha en desktop, y en la esquina inferior en móviles -->
            <div
                class="floating-badge d-flex align-items-center gap-2 p-2 px-3 bg-white rounded-3 shadow position-absolute border-0 text-start">
                <span class="pulse-dot"></span>
                <div class="lh-sm" style="font-size: 0.85rem;">
                    <span class="d-block fw-bold text-dark">Potencia donde</span>
                    <span class="text-dark opacity-90"> más lo necesitas.</span>
                </div>
            </div>

            <!-- Contenido del Banner -->
            <div class="container position-relative z-3 pt-lg-0 pt-0 px-3 px-md-5 text-white">
                <div class="row align-items-center">

                    <!-- Lado izquierdo: Textos -->
                    <div class="col-12 col-lg-7 text-center text-lg-start" v-motion-slide-visible-left :delay="200" :duration="1200">
                        <div class="accent-line mb-3 mx-auto mx-lg-0">
                        </div>
                        <h2 class="display-6 fw-semibold mb-3 banner-title">
                            Servidores Dedicados, <br class="d-none d-md-block" />
                            <span class="text-danger">control total de tus recursos.</span>
                        </h2>
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
    background-image: url('/img/soluciones/IMAGEN_4_SECCION_6.png');
    background-size: cover;
    background-position: center right;
    min-height: 320px;
}

.banner-title {
    font-size: 2.2rem;
    line-height: 1.2;
}

.accent-line {
    width: 40px;
    height: 4px;
    background-color: #f12537;
    border-radius: 4px;
}


/* Estilos para el recuadro flotante */
.floating-badge {
    position: absolute;
    bottom: 25px;
    right: 25px;
    z-index: 3;
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
        min-height: 250px;
        /* Aumentamos el alto del banner a 480px en computadoras */
    }
}

@media (min-width: 768px) {
    .banner-title {
        font-size: 2.6rem;
        line-height: 1;
    }
}

@media (max-width: 800px){
    .custom-banner-bg{
        background-position: left;
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