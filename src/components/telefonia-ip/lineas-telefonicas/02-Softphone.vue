<script setup lang="ts"></script>

<template>
  <section id="softphone">
    <div class="container">
      <div class="row justify-content-center align-items-center mb-5">
        <div class="col-12">
          <h2 class="display-5 text-center fw-bold">¿Qué hace un softphone?</h2>
        </div>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-lg-4 text-center text-lg-end">
          <div class="mb-4">
            <div class="w-75 mx-auto me-lg-0">
              <h6 class="text-pbx-primary fw-bold fs-4">Identificador de llamadas</h6>
              <p>Te permitirá saber quién está al otro lado antes de contestar.</p>
            </div>
          </div>
          <div class="mb-4">
            <div class="w-75 mx-auto me-lg-0">
              <h6 class="text-pbx-primary fw-bold fs-4">Multiplataforma</h6>
              <p>
                Nuestra línea virtual es compatible con una variedad de dispositivos y sistemas
                operativos.
              </p>
            </div>
          </div>
          <div class="mb-4">
            <div class="w-75 mx-auto me-lg-0">
              <h6 class="text-pbx-primary fw-bold fs-4">Contactos</h6>
              <p>Mantenga su lista de contactos organizada y accesible desde cualquier lugar.</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <img
            src="/img/telefonia-ip/celular-softphone-linea-virtual.png"
            alt=""
            class="img-fluid mx-auto d-block"
          />
        </div>
        <div class="col-12 col-lg-4 text-center text-lg-start">
          <div class="mt-4 mt-lg-0 mb-4">
            <div class="w-75 mx-auto ms-lg-0">
              <h6 class="text-pbx-primary fw-bold fs-4">Buzon de voz</h6>
              <p>
                Con nuestro eficiente buzón de voz, puede recibir y revisar mensajes incluso cuando
                no puede contestar el teléfono.
              </p>
            </div>
          </div>
          <div class="mb-4">
            <div class="w-75 mx-auto ms-lg-0">
              <h6 class="text-pbx-primary fw-bold fs-4">Utilice su número</h6>
              <p>Mantenga su número actual al portarlo con nosotros.</p>
            </div>
          </div>
          <div class="mb-4">
            <div class="w-75 mx-auto ms-lg-0">
              <h6 class="text-pbx-primary fw-bold fs-4">Flexibilidad</h6>
              <p>
                Nuestra línea virtual le brinda la libertad de adaptar su experiencia según sus
                necesidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="datos-extra">
    <div class="container">
      <div class="row justify-content-center align-items-stretch g-4 mb-5">
        <div class="col-12 col-lg-6">
          <div class="bg-light rounded-4 h-100 p-4">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="color-x">
                <img src="/img/telefonia-ip/canales-entrada.svg" alt="" class="" />
              </div>
              <h6 class="mb-0  fw-bold fs-2">
                Canales <br />
                de entrada
              </h6>
            </div>
            <p class="mb-0">
              Es por donde se puede emitir una llamada, un canal permite una llamada, si tu número
              virtual cuenta con 2 canales entrada únicamente podrá recibir hasta 2 llamadas de
              manera simultánea y las siguientes serán rebotadas.
            </p>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="bg-light rounded-4 h-100 p-4">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="color-x">
                <img src="/img/telefonia-ip/saldo-voip.svg" alt="" />
              </div>
              <h6 class="mb-0 fw-bold fs-2">
                Saldo <br />
                Voip
              </h6>
            </div>
            <p class="mb-0">
              Crédito virtual que permite realizar llamadas por internet a diferentes destinos,
              tantos fijos como móviles, a un excelente costo a diferencia de otras compañías de
              telefonía análoga.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#softphone {
  background-color: #ebf2fa;
  padding: 4rem;
  margin-bottom: 100px;
}

.color-x{
    background-color: #2298FF;
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.color-x img{
    max-width: 50%;
    max-height: 50%;
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
}
</style>
