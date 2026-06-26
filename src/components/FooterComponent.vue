<script setup lang="ts">
import WhatsAppChatComponent from './WhatsappChatComponent.vue'
</script>

<template>
  <!-- Main Footer -->
  <footer class="pt-5 pb-4 text-white" style="background-color: white">
    <div class="container custom-container">
      <div class="row g-4">
        <!-- Columna 1: Logo, Descripción y Redes -->
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div class="footer-header-box">
            <img src="/img/logonew.png" alt="PBX Hosting"
              style="max-width: 100px; max-height: 100%; object-fit: contain;" />
          </div>
          <p class="small text-secondary mb-3" style="line-height: 1.6; max-width: 280px;">
            <strong>PbxHosting</strong> mejora la comunicación, y la productividad de las empresas, ofreciendo servicios
            de alta calidad, flexibilidad y rentabilidad.
          </p>
          <img src="/img/footer/logo911.png" alt="Logo 911" class="mt-2 mb-5" style="max-width: 130px" />

          <div class="align-items-end">
            <p class="text-secondary mb-2"><strong>Siguenos en:</strong> </p>
            <div class="d-flex flex-wrap gap-2 mt-1">
              <a href="https://luminel.mx/"
                class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
                style="width: 36px; height: 36px">
                <img src="/img/footer/logopbx.png" alt="logo Empresa" class="w-75" />
              </a>
              <a href="https://twitter.com/PBX_Hosting"
                class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
                style="width: 36px; height: 36px"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.facebook.com/PBXHostingMX"
                class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
                style="width: 36px; height: 36px"><i class="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/pbxhostingMX/"
                class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
                style="width: 36px; height: 36px"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.tiktok.com/@pbxhosting"
                class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
                style="width: 36px; height: 36px"><i class="fa-brands fa-tiktok"></i></a>
              <a href="https://www.linkedin.com/company/pbx-hosting"
                class="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none transition-scale"
                style="width: 36px; height: 36px"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>

        </div>

        <!-- Columna 2: Contacto -->
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div class="footer-header-box">
            <h4 class="h6 text-tittle fw-bold mb-0 pb-2 border-bottom border-light border-opacity-25 w-100">
              Contacto
            </h4>
          </div>
          <p class="small mb-4 text-secondary">
            <i class="fa-solid fa-envelope text-secondary me-2"></i>
            <a href="mailto:ventas@pbxhosting.com.mx" class="text-secondary text-decoration-none footer-link ">
              Correo: ventas@pbxhosting.com.mx</a>
          </p>
          <p class="small mb-3 text-secondary">
            <i class="fa-solid fa-phone text-secondary me-2"></i>
            <a href="tel:+525541708990" class="text-secondary text-decoration-none footer-link">
              Teléfono 55 4170 8990</a>
          </p>
          <p class="small mb-2 text-secondary">
            <i class="fa-brands fa-whatsapp text-secondary me-2"></i>
            <a href="https://wa.me/+525587894847" class="text-secondary text-decoration-none footer-link">
              WhatsApp 55 8789 4847</a>
          </p>
        </div>

        <!-- Columna 3: Legales -->
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
          <div class="footer-header-box">
            <h4 class="h6 fw-bold text-tittle mb-0 pb-2 border-bottom border-light border-opacity-25 w-100">
              Legales
            </h4>
          </div>
          <p class="small mb-0 text-secondary lh-base">
            Términos legales por <br> agregar
          </p>
        </div>

        <!-- Columna 4: Horario de Atención -->
        <div class="col-lg-3 col-md-6">
          <div class="footer-header-box">
            <h4 class="h6 fw-bold text-tittle mb-0 pb-2 border-bottom border-light border-opacity-25 w-100">
              Horario de atención
            </h4>
          </div>

          <p class="small text-tittle fw-bold mb-2">
            Gestiones Administrativas y Ventas:
          </p>
          <p class="small text-secondary mb-2 lh-sm">
            Lunes a Viernes
          </p>
          <p class="small text-secondary mb-2 lh-sm">
            9:00am a 6:00pm
          </p>
          <p class="small text-secondary mb-2 lh-sm">
            Sábados
          </p>
          <p class="small text-secondary mb-2 lh-sm">
            9:00am a 2:00pm
          </p>

          <p class="small text-tittle fw-bold mb-2">
            Soporte Técnico:
          </p>
          <p class="small text-secondary mb-2 lh-sm">
            Lunes a Viernes
          </p>
          <p class="small text-secondary mb-2 lh-sm">
            8:00am a 9:00pm
          </p>
          <p class="small text-secondary mb-2 lh-sm">
            Sábados
          </p>
          <p class="small text-secondary mb-3 lh-sm">
            9:00am a 6:00pm
          </p>
        </div>
      </div>
    </div>
  </footer>

  <!-- Sub-Footer / Derechos Reservados -->
  <div class="text-center py-4" style="background-color: white">
    <div class="container custom-container d-flex flex-column align-items-center justify-content-center gap-3">
      <div class="small opacity-75">
        &copy; Copyright <strong>PbxHosting</strong> Todos los Derechos Reservados <br> Diseñado por Luminel Agencia
        Creativa
      </div>
    </div>
  </div>

  <WhatsAppChatComponent />
</template>

<style scoped>
/* Contenedor del encabezado del footer con alto fijo para alinear el texto de abajo */
.footer-header-box {
  height: 52px;
  display: flex;
  align-items: flex-end;
  /* Alinea la base del texto y del logo */
  margin-bottom: 1.5rem;
  /* Separación uniforme */
}

.text-tittle {
  color: #3a434d;
}

@media (min-width: 1200px) {
  .custom-container {
    max-width: 85%;
  }
}

/* Estilos hover para enlaces */
.footer-link:hover {
  color: #003eb3 !important;
}

/* Estilos hover para botones y redes sociales */
.transition-scale {
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.transition-scale:hover {
  transform: scale(1.1);
  background-color: #f12537 !important;
}
</style>
