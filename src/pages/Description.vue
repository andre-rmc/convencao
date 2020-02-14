<template>
  <section id="description">
    <b-container>
      <b-row>
        <b-col md="6">
          <h2>
            <span>Você Está</span>
            Convidado
          </h2>
          <p>
            Este ano, o
            <strong>evento</strong> terá grandes novidades, proporcionando uma grande oportunidade para
            <strong>confraternizar</strong>, trocar
            <strong>experiências</strong> e realizar bons
            <strong>negócios</strong>.
          </p>
          <p>
            A Convenção começará com uma palestra ministrada pelo Sr. Fábio Centeno,
            depois teremos a nossa Rodada de Negócios, onde estarão presentes os principais parceiros da Rede,
            trazendo grandes descontos e oportunidades especiais! Serão mais de 30 Stands diferentes,
            além de uma Drogaria Modelo, área para descanso e um espaço especialmente preparado
            para receber as crianças, sob o cuidado de monitores.
          </p>
          <p>
            E para tornar toda essa experiência ainda mais agradável e estreitar laços entre a nossa equipe,
            nossos associados e fornecedores parceiros, teremos um delicioso Jantar de Confraternização,
            com diversidade de petiscos e bebidas, boate e música ao vivo.
            Durante o jantar também serão realizados os sorteios e a entrega dos prêmios preparados exclusivamente
            para o evento.
          </p>
          <p>
            Não perca essa grande oportunidade e
            <a href>
              <strong>Inscreva-se Já</strong>
            </a>.
          </p>
        </b-col>
        <b-col md="6" align-self="center">
          <b-carousel id="carousel-fade" fade controls img-width="600" img-height="400">
            <b-carousel-slide img-src="@/assets/event/1.png" />
            <b-carousel-slide img-src="@/assets/event/2.png" />
            <b-carousel-slide img-src="@/assets/event/3.png" />
            <b-carousel-slide img-src="@/assets/event/4.png" />
            <b-carousel-slide img-src="@/assets/event/5.png" />
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Description'
}
</script>