<template>
  <section id="prizess">
    <b-container>
      <b-row>
        <b-col md="12">
          <h2>
            <span>Prêmios</span>
            A Sortear
          </h2>
          <p>Imagens meramente ilustrativas.</p>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <carousel>
          <slide>
            <b-img-lazy src="@/assets/prizes/moto.png" rounded fluid />
            <h3 class="center-block">01 Moto Zero KM</h3>
          </slide>
          <slide>
            <b-img-lazy src="@/assets/prizes/s10.png" rounded fluid />
            <h3 class="center-block">01 SmartPhone Samsung Galaxy S10</h3>
          </slide>
          <slide>
            <b-img-lazy src="@/assets/prizes/ps4.png" rounded fluid />
            <h3 class="center-block">01 Console Sony PlayStation 4</h3>
          </slide>
          <slide>
            <b-img-lazy src="@/assets/prizes/tvs-led1.png" rounded fluid />
            <h3 class="center-block">04 Smart TV Led 32 Polegadas</h3>
          </slide>
          <slide>
            <b-img-lazy src="@/assets/prizes/jbl.png" rounded fluid />
            <h3 class="center-block">04 Caixas de Som Bluetooth JBL Flip</h3>
          </slide>
          <slide>
            <b-img-lazy src="@/assets/prizes/cafeteira.png" rounded fluid />
            <h3 class="center-block">04 Cafeteiras Expresso Arno Dolce Gusto</h3>
          </slide>
        </carousel>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Prizess'
}
</script>

<style scoped></style>
