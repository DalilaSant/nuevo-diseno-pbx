<script setup lang="ts"></script>

<template>
  <section id="precios-telefonia">
    <div class="container">
      <div class="row justify-content-center align-items-center py-5 py-lg-5 g-4 g-lg-5">
        <div class="col-12 col-lg-8 text-center text-lg-start">
          <div class="">
            <h2 class="fw-bold display-3 lh-1">
              Precios <br />
              <span class="text-pbx-primary">TelefonÍa IP</span>
            </h2>
            <p class="fs-5 mb-4">
              Un agente de ventas está listo para atenderte y realizar un servicio personalizado.
            </p>
            <div class="btn bg-pbx-orange fw-bold fs-5 px-5 py-2">
              <a href="/telefonia-ip" class="text-white">Contratar</a>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 text-center">
          <img
            src="/img/telefonia-ip/puzzle-funciones-ip.png"
            alt="integracion-pbx"
            class="img-fluid mx-auto"
          />
        </div>
      </div>
    </div>
  </section>

  <section id="portabilidad" class="py-5 mb-5 mb-lg-0">
    <div class="container">
      <div class="row justify-content-center align-items-center py-lg-5 g-4 g-lg-5">
        <div class="col-12 col-lg-4 text-center">
          <img
            src="/img/telefonia-ip/portabilidad-numeros-virtuales.svg"
            alt="Imagen 4"
            class="img-fluid mx-auto mb-4 mb-lg-0"
          />
        </div>
        <div class="col-12 col-lg-8 text-center text-lg-end">
          <h2 class="fw-bold display-3 lh-1 text-center text-lg-end">Portabilidad</h2>
          <p class="fs-5 text-center text-lg-end w-responsive mx-auto ms-lg-auto mb-4">
            Si ya cuentas con líneas virtuales con otro proveedor y te están fallando... Porta tus
            líneas con nosotros.
          </p>
          <div class="row justify-content-center justify-content-lg-end  g-4">
            <div class="col-12 col-md-6">
              <div class="box rounded-4 py-4 px-4 h-100 w-75 w-responsive mx-auto ms-lg-auto">
                <h5 class="fw-bold">Línea 2 Canales</h5>
                <h6 class="text-pbx-primary fw-bold fs-1">$840</h6>
                <p class="mb-0">MXN+IVA/ANUAL</p>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="box rounded-4 py-4 px-4 h-100 w-75 w-responsive mx-auto ms-lg-auto">
                <h5 class="fw-bold">Línea 10 Canales</h5>
                <h6 class="text-pbx-primary fw-bold fs-1">$1,680</h6>
                <p class="mb-0">MXN+IVA/ANUAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.box {
  background-color: #ebf2fa;
  text-align: center;
}

/* Sobrescribir w-75 en tablets y celulares para aprovechar el espacio */
@media (max-width: 991.98px) {
  .w-responsive {
    width: 100% !important;
  }
}
</style>
