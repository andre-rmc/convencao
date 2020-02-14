<template>
  <header id="header">
    <b-container class="initial" fluid>
      <b-row>
        <!-- <b-col class="image d-none d-lg-block">
          <b-img src="@/assets/REPRESENTANTE-01.png" fluid />
        </!-->
        -->
        <b-col class="text" md="12" sm="12">
          <b-img src="@/assets/logo1.png" fluid />

          <h2>
            Uma grande oportunidade para confraternizar, trocar experiências e
            realizar bons negócios!
          </h2>
          <p>26 de Junho - Ipatinga, MG</p>

          <Timer starttime="2020-06-01 10:00:00" endtime="2020-06-02 10:00:00" :trans="transform" />

          <div class="more">
            <b-button class="rounded-pill" variant="outline-light" @click="goToRegister">Inscreva-se</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <svg
      class="svg-header-bottom"
      data-name="svg-header-bottom"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 100"
      preserveAspectRatio="xMinYMax"
    >
      <defs />
      <title>header-bottom</title>
      <polygon class="header-bottom" points="1920 100 0 100 1920 0 1920 100" />
    </svg>
  </header>
</template>

<script>
import Timer from '@/components/Timer.vue'

export default {
  name: 'Header',
  components: {
    Timer
  },
  data() {
    return {
      transform: {
        day: 'Dias',
        hours: 'Horas',
        minutes: 'Minutos',
        seconds: 'Segundos',
        expired: 'O evento já se encerrou.',
        running: 'Está acontecendo.',
        upcoming: 'Ansiosos para o evento.',
        status: {
          expired: 'Encerrado!',
          running: 'Em Andamento!',
          upcoming: 'Vem aí!'
        }
      }
    }
  },
  methods: {
    goToRegister() {
      window.scrollTo(0, 650)
      return true
    }
  }
}
</script>
