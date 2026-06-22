<script setup lang="ts"></script>

<template>
  <section id="funcionamiento">
    <div class="container">
      <div class="">
        <div class="text-center">
          <h3 class="fs-2 fw-bold m-0 lh-1" style="color: #ff972c">
            ¿Cómo funciona una Troncal SIP?
          </h3>
          <h2 class="display-5 fw-bold text-pbx-primary">Funcionamiento Troncal SIP</h2>
        </div>
      </div>
      <div class="row justify-content-center align-items-center py-5">
        <div class="col-12">
          <img
            src="/img/telefonia-ip/funcionamiento-sip.svg"
            alt="funcionamiento troncal sip"
            class="img-fluid d-none d-lg-block mx-auto"
          />
        </div>
      </div>
      <div class="row g-4 pt-5">
        <div class="col-12 col-md-6">
          <ul class="p-0">
            <li class="rounded-4 py-4 px-4 mb-4 fw-medium" style="background: #ebf2fa">
              <b class="text-pbx-primary">1. Inicio de la llamada</b> Un usuario inicia una llamada
              desde un teléfono conectado a una centralita telefónica (PBX).
            </li>
            <li class="rounded-4 py-4 px-4 mb-4 fw-medium" style="background: #ebf2fa">
              <b class="text-pbx-primary">2. Enrutamiento Interno</b> Si la llamada es interna (por
              ejemplo, entre dos extensiones de la misma empresa), la PBX enruta la llamada
              directamente al teléfono de destino.
            </li>
            <li class="rounded-4 py-4 px-4 mb-4 fw-medium" style="background: #ebf2fa">
              <b class="text-pbx-primary">3. Enrutamiento Externo</b> Si la llamada es externa, la
              PBX decide cómo manejarla. Puede enviarla a través de una troncal SIP o hacia la red
              PSTN, dependiendo de la configuración.
            </li>
            <li class="rounded-4 py-4 px-4 mb-4 fw-medium" style="background: #ebf2fa">
              <b class="text-pbx-primary">4. Comunicación con la PSTN</b> Si la llamada se dirige a
              un número fuera de la red de la empresa, la PBX la envía a la red PSTN, la cual
              conecta la llamada al destinatario final.
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-6">
          <ul class="p-0">
            <li class="rounded-4 py-4 px-4 mb-4 fw-medium" style="background: #ebf2fa">
              <b class="text-pbx-primary">5. Comunicación a través de la Troncal SIP</b> Si la
              llamada se realiza a través de una troncal SIP, la PBX utiliza esta conexión basada en
              SIP para enrutar la llamada hacia la red VoIP o Internet.
            </li>
            <li class="rounded-4 py-4 px-4 mb-4 fw-medium" style="background: #ebf2fa">
              <b class="text-pbx-primary">6. Conexión a la Red PSTN</b> Si la llamada se origina en
              una red VoIP y se dirige a un número en la red PSTN, la troncal SIP actúa como un
              puente, conectando la llamada a través de la PSTN.
            </li>
            <li class="rounded-4 py-4 px-4 mb-4 fw-medium" style="background: #ebf2fa">
              <b class="text-pbx-primary">7. Comunicación a través de la Internet</b> En el caso de
              llamadas VoIP puras, la comunicación se realiza a través de la infraestructura de
              Internet utilizando protocolos VoIP como SIP.
            </li>
            <li class="rounded-4 py-4 px-4 mb-4 fw-medium" style="background: #ebf2fa">
              <b class="text-pbx-primary">8. Conversación y Finalización</b> Una vez que la llamada
              se ha enrutado adecuadamente, los usuarios pueden hablar entre sí. La conversación
              continúa hasta que uno de ellos cuelga, momento en el cual la llamada se finaliza.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* funcionamiento */
#funcionamiento {
  margin-bottom: 100px;
}
</style>
