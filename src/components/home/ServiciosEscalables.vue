<script setup lang="ts"></script>

<template>
  <section class="position-relative mb-5 bg-image-escalable d-flex align-items-center">
    <div class="container position-relative z-1 py-5 my-5">
      <div class="row">
        <div class="col-12 text-center py-5 w-75 mx-auto">
          <h5 class="text-pbx-primary fw-bold">Servicios Escalables</h5>
          <h2 class="text-white fw-bold fs-2 my-4">
            Soluciones VoIP Personalizadas para empresas de todos los tamaños
          </h2>
          <p class="text-white fs-5 fw-light mb-5">
            Optimiza tu comunicación empresarial con servicios voip adaptados a las necesidades
            específicas de tu empresa o call center. Desde pequeños negocios hasta grandes
            corporativos, ofrecemos soluciones personalizadas que impulsan tu éxito.
          </p>
          <a href="tel:5541708990" class="btn-deg rounded-pill d-inline-block">
            <i class="fa-solid fa-phone" aria-hidden="true"></i> Llamar a un asesor
          </a>
        </div>
      </div>
    </div>
    <!-- Chica absoluta -->
    <img
      src="/img/Home/chica-callcenter.png"
      class="position-absolute bottom-0 end-0 d-none d-lg-block w-25"
      style="max-width: 400px; z-index: 0"
      alt="Asesora PBX"
    />
  </section>
  <section class="py-5 mb-5">
    <div class="container">
      <div class="text-center mb-5">
        <h3 class="text-pbx-primary display-5 fw-bold">Beneficios de PbxHosting</h3>
      </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 mt-4">
        <div class="col">
          <div
            class="bg-light rounded-4 p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center box-beneficios"
          >
            <p class="fs-5 mb-0">
              <strong class="text-pbx-primary display-6 fw-bold">+500</strong><br />Millones de
              <strong class="text-pbx-primary">Min</strong> mensuales
            </p>
          </div>
        </div>
        <div class="col">
          <div
            class="bg-light rounded-4 p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center box-beneficios"
          >
            <p class="fs-5 mb-0">
              Interconexión por <strong class="text-pbx-primary"> Fibra Óptica</strong>
            </p>
          </div>
        </div>
        <div class="col">
          <div
            class="bg-light rounded-4 p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center box-beneficios"
          >
            <p class="fs-5 mb-0">
              Disponibilidad del <strong class="text-pbx-primary">99.99%</strong>
            </p>
          </div>
        </div>
        <div class="col">
          <div
            class="bg-light rounded-4 p-4 text-center h-100 d-flex flex-column align-items-center justify-content-center box-beneficios"
          >
            <p class="fs-5 mb-0">
              <strong class="text-pbx-primary display-6 fw-bold">10</strong><br />Años de
              experiencia
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gradient-pbx py-5 mb-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3 align-items-center text-center g-4 py-4">
        <div class="col">
          <p class="fs-5 text-white fw-medium mb-0">Miles de empresas confían en PbxHosting</p>
        </div>
        <div class="col">
          <p class="fs-5 text-white mb-0">Solicita tu prueba <b class="fw-bold">Gratis</b></p>
        </div>
        <div class="col">
          <a
            href="https://pbxhosting.com.mx/contacto"
            class="btn bg-pbx-orange text-white fw-bold fs-5 px-5 py-2"
            >Contacto</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Utilidades adicionales necesarias para diseños muy específicos */
.bg-image-escalable {
  background-image: url('/img/Home/fondo-custom.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 80vh;
}



/* Altura mínima para que las cajas de beneficios sean todas iguales */
.box-beneficios {
  min-height: 160px;
}

.text-pbx-primary,
:deep(.text-pbx-primary) {
  color: #2298ff !important;
}
</style>
