<template>
  <section id="location">
    <b-container>
      <b-row>
        <b-col md="12">
          <h2>Localização</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" order="2" class="px-0 d-none d-lg-block">
          <GmapMap
            :center="{lat:-19.4624549, lng:-42.5633207}"
            :zoom="15"
            map-type-id="roadmap"
            style="width: 100%; height: 100%"
          >
            <GmapMarker
              :key="1"
              :position="{lat:-19.4624549, lng:-42.5633207}"
              :clickable="true"
              :draggable="true"
              @click="center={lat:-19.4624549, lng:-42.5633207}"
            />
          </GmapMap>
        </b-col>
        <b-col md="6" order="1">
          <b-row>
            <b-col md="12">
              <h3>Local do Evento</h3>
              <p>
                <span class="location-icons ti-location-pin"></span>
                R. Graciliano Ramos, 600 - Cid. Nobre, Ipatinga - MG
              </p>
              <p>
                <span class="location-icons ti-mobile"></span>
                (31) 9 7111-0886, (31) 9 9880-0546, (31) 9 9833-4151
              </p>
              <p class="contact-email">
                <span class="location-icons ti-email"></span>
                <a href="mailto:contato@redemelhorcompra.com.br">contato@redemelhorcompra.com.br</a>
              </p>
              <p class="contact-website">
                <span class="location-icons ti-world"></span>
                <a href="http://www.redemelhorcompra.com.br">www.redemelhorcompra.com.br</a>
              </p>
            </b-col>
            <b-col md="12">
              <h3>Hoteis do Evento</h3>
              <b-row>
                <b-col md="4">
                  <a href="http://hoteispanorama.com.br/panorama-tower-hotel/" target="_blank">
                    <b-img-lazy
                      class="center-block"
                      src="@/assets/location/panorama-tower.jpg"
                      alt="Panorama Tower"
                      fluid
                    />
                  </a>
                  <p class="accommodation-description">
                    <a
                      href="http://hoteispanorama.com.br/panorama-tower-hotel/"
                      target="_blank"
                    >Panorama Tower</a>
                  </p>
                </b-col>
                <b-col md="4">
                  <a href="http://grandehotelipatinga.com.br/" target="_blank">
                    <b-img-lazy
                      class="center-block"
                      src="@/assets/location/grande-hotel.jpg"
                      alt="Panorama Tower"
                      fluid
                    />
                  </a>
                  <p class="accommodation-description">
                    <a href="http://grandehotelipatinga.com.br/" target="_blank">Grande Hotel</a>
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <svg
      id="svg-location-top"
      data-name="svg-location-top"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 100"
      preserveAspectRatio="xMinYMin"
    >
      <defs></defs>
      <title>location-top</title>
      <polygon class="location-top" points="0 0 1920 0 0 100 0 0"></polygon>
    </svg>
    <svg
      id="svg-location-bottom"
      data-name="svg-location-bottom"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 100"
      preserveAspectRatio="xMinYMax"
    >
      <defs></defs>
      <title>location-bottom</title>
      <polygon class="location-bottom" points="1920 100 0 100 1920 0 1920 100"></polygon>
    </svg>
  </section>
</template>

<script>
export default {
  name: 'Location'
}
</script>
