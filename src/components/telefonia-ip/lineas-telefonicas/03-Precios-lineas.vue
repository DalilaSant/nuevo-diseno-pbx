<script setup lang="ts"></script>

<template>
  <section id="precios-linea ">
    <div class="row justify-content-center align-items-center">
      <div class="col-12">
        <h3 class="text-center fw-bold fs-2" style="color: #ff972c">Líneas Telefónicas</h3>
        <h2 class="text-center fw-bold display-5 text-pbx-primary">Precios Líneas Telefónicas</h2>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center align-items-stretch mt-5 g-1">
        <!-- Tarjeta 1 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="plan-linea text-center h-100 w-75 mx-auto d-flex flex-column">
            <img
              src="/img/telefonia-ip/linea-sip-mundial.png"
              alt=""
              class="mx-auto d-block"
            />
            <div class="cont-t-linea d-flex flex-column flex-grow-1">
              <img
                src="/img/telefonia-ip/bandera-mx.svg"
                alt=""
                class="mx-auto d-block mb-2"
              />
              <h6 class="mb-3">
                Línea Telefónica de México <br />
                <span class="text-pbx-primary fw-bold">2 Canales </span>
              </h6>
              <div class="precio-voip justify-content-center mb-0">
                <p class="fw-bold fs-2 mb-0">$840</p>
                <p class="iva mb-0">+IVA<br />MXN</p>
              </div>
              <p class="periodo pt-3">Anual</p>
              <div class="mt-auto pt-4">
                <a href="https://wa.link/11ltwy" class="btn-deg">Comprar</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Tarjeta 2 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="plan-linea text-center h-100 w-75 mx-auto d-flex flex-column">
            <img
              src="/img/telefonia-ip/linea-sip-mundial.png"
              alt=""
              class="mx-auto d-block"
            />
            <div class="cont-t-linea d-flex flex-column flex-grow-1">
              <img
                src="/img/telefonia-ip/bandera-mx.svg"
                alt=""
                class="mx-auto d-block mb-2"
              />
              <h6 class="mb-3">
                Línea Telefónica de México <br />
                <span class="text-pbx-primary fw-bold">10 Canales </span>
              </h6>
              <div class="precio-voip justify-content-center mb-0">
                <p class="fw-bold fs-2 mb-0">$1,680</p>
                <p class="iva mb-0">+IVA<br />MXN</p>
              </div>
              <p class="periodo pt-3">Anual</p>
              <div class="mt-auto pt-4">
                <a href="https://wa.link/11ltwy" class="btn-deg">Comprar</a>
              </div>
            </div>
          </div>
        </div>
        <!-- Tarjeta 3 -->
        <div class="col-12 col-md-6 col-lg-4">
          <div class="plan-linea text-center h-100 w-75 mx-auto d-flex flex-column">
            <img
              src="/img/telefonia-ip/linea-sip-mundial.png"
              alt=""
              class="mx-auto d-block"
            />
            <div class="cont-t-linea d-flex flex-column flex-grow-1">
              <img
                src=" /img/telefonia-ip/bandera-ua.svg"
                alt=""
                class="mx-auto d-block mb-2"
              />
              <h6 class="mb-3">
                Línea Telefónica <br />
                <span class="text-pbx-primary fw-bold">2 Canales </span><br /><b>País: </b>Estados
                Unidos
              </h6>
              <div class="precio-voip justify-content-center mb-0">
                <p class="fw-bold fs-2 mb-0">$1,056</p>
                <p class="iva mb-0">+IVA<br />MXN</p>
              </div>
              <p class="periodo pt-3">Anual</p>
              <div class="mt-auto pt-4">
                <a href="https://wa.link/11ltwy" class="btn-deg">Comprar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="parrafo-extra text-center mt-4 text-muted">
      Las líneas telefónicas no cuentan con saldo inicial, es necesario una recarga para poder
      realizar llamadas.
    </p>
  </section>

  <section id="pbx-ip" class="py-5">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-6">
          <img
            src="/img/telefonia-ip/conmtuador-pbx-conmutador-virtual.png"
            alt=""  
            class="img-fluid mx-auto d-block"
          />
        </div>
        <div class="col-12 col-lg-6">
          <h6 class="fs-4 lh-1 m-0">Conmutador IP</h6>
          <h2 class="text-pbx-primary fw-bold display-2">PBX CLOUD</h2>
          <p class="w-75">
            Nuestro conmutador en la nube te brinda una completa flexibilidad y libertad al eliminar
            la necesidad de tener equipos físicos en tus instalaciones. Todo el sistema se encuentra
            alojado en la nube, lo que significa que puedes acceder a él desde cualquier lugar y en
            cualquier momento, simplemente con una conexión a Internet.
          </p>
          <div class="">
            <a href="https://www.pbxhosting.com.mx/conmutador-en-la-nube/" class="btn bg-pbx-orange text-white fw-bold fs-5 px-4 py-2">Ver más</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.plan-linea {
  border: 5px solid #2298ff;
  border-radius: 20px;
  padding: 20px;
}
.plan-linea img {
  width: 200px;
  margin-bottom: 20px;
}
.cont-t-linea img {
  width: 30px;
}
.precio-voip {
  display: flex;
  gap: 10px;
  text-align: left;
  align-items: center;
  color: #2298ff;
}
.iva {
  line-height: 0.9;
  font-size: 20px;
  font-weight: 700;
}

.periodo {
  color: #000;
  font-size: 20px !important;
  margin-top: -20px;
  font-weight: 600;
}
</style>
