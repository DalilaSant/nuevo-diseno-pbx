<script setup lang="ts"></script>

<template>
  <section class="py-5 mb-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col-lg-7">
          <h3 class="fs-5 text-pbx-primary fw-bold text-uppercase mb-2">GENERA GANANCIAS</h3>
          <h2 class="fs-2 fw-bold mb-4 text-dark">Conviértete en Revendedor</h2>
          <p class="fs-5 text-secondary mb-4 w-75">
            Ofrecemos la oportunidad de revender nuestro servicio de
            <strong class="text-pbx-primary">Telefonía IP</strong>, permitiéndote expandir tu
            negocio y ofrecer a tus clientes una solución de comunicaciones de alta calidad y
            rentable.
          </p>

          <ul class="list-unstyled d-flex flex-column gap-4 mt-5">
            <li class="d-flex align-items-center gap-3">
              <div
                class="bg-pbx-orange rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                style="width: 70px; height: 70px"
              >
                <img src="/img/Home/ico-ganancias.png" alt="genera-ganancias" style="width: 40px" />
              </div>
              <div>
                <span class="d-block fw-bold fs-5">Genera Ganancias</span>
                <span class="text-secondary">Tu colocas el precio.</span>
              </div>
            </li>
            <li class="d-flex align-items-center gap-3">
              <div
                class="bg-pbx-orange rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                style="width: 70px; height: 70px"
              >
                <img src="/img/Home/ico-panel.png" alt="panel-revendedor" style="width: 40px" />
              </div>
              <div>
                <span class="d-block fw-bold fs-5">Panel Revendedor</span>
                <span class="text-secondary">Aplica saldo, asigna números, crea planes.</span>
              </div>
            </li>
            <li class="d-flex align-items-center gap-3">
              <div
                class="bg-pbx-orange rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                style="width: 70px; height: 70px"
              >
                <img src="/img/Home/ico-inversion.png" alt="mini-inversion" style="width: 40px" />
              </div>
              <div>
                <span class="d-block fw-bold fs-5">Mínima inversión</span>
                <span class="text-secondary">Inicia con $1000MXN+IVA.</span>
              </div>
            </li>
          </ul>

          <div class="mt-5">
            <a href="/reseller" class="btn bg-pbx-orange text-white fw-bold fs-5 px-5 py-2"
              >Ver más</a
            >
          </div>
        </div>
        <div class="col-lg-5 text-center mt-5 mt-lg-0">
          <img
            src="/img/Home/reseller.png"
            class="reseller-img img-fluid"
            alt="telefonia-ip-pbxhosting"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 mb-5">
    <div class="container">
      <div
        class="bg-gradient-pbx rounded-5 p-4 p-md-5 d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center gap-4"
      >
        <h5 class="text-white display-5 fw-bold mb-0 text-center text-md-start">
          Miembros activos
        </h5>
        <img
          src="/img/Home/wisp.png"
          alt="miembros-wisp"
          class="img-fluid"
          style="max-width: 250px"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>


.bg-pbx-orange {
  background-color: #ff972c !important;
  transition: background-color 0.3s ease;
}
.bg-pbx-orange:hover {
  background-color: #2298ff !important;
}

.reseller-img{
  transform: scale(1.3);

}
@media (min-width: 1350px){
  .reseller-img{
    transform: scale(1);
  }
}
</style>
