<template>
  <section id="agenda">
    <b-container>
      <b-row>
        <b-col md="12">
          <h2>
            <span>Programação</span>
            Do Evento
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="10" offset-md="1" role="tablist">
          <b-row>
            <b-col md="3">
              <div class="event-time first">
                <h3>A partir das 9:00</h3>
              </div>
            </b-col>
            <b-col md="9">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <a href="#agendaCheckIn" v-b-toggle.agendaCheckIn @click.prevent>Check-In no Hotel</a>
                </b-card-header>
                <b-collapse id="agendaCheckIn" accordion="agenda" role="tabpanel">
                  <b-card-body>
                    <p>
                      Hora de acomodar os associados para o início da programação do evento.
                      Uma equipe da Rede Melhor Compra estará no hotel para lhe receber e lhe dar as orientações
                      necessárias durante o check-in*. O traslado do hotel até o local do evento, e do local do
                      evento até o hotel, será feito por carros conduzidos por motoristas particulares, siga as
                      orientações da equipe e respeite os horários de saída.
                    </p>
                    <p>*: Para mais informações, entre em contato com o Atendimento Dedicado.</p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="3">
              <div class="event-time first">
                <h3>10:00 - 11:00</h3>
              </div>
            </b-col>
            <b-col md="9">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <a class="no-details">Credenciamento das Drogarias</a>
                </b-card-header>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="3">
              <div class="event-time first">
                <h3>11:00 - 13:00</h3>
              </div>
            </b-col>
            <b-col md="9">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="#agendaLecture"
                    v-b-toggle.agendaLecture
                    @click.prevent
                  >Palestra de abertura: Como transformar sua perfumaria em uma máquina de vendas!</a>
                </b-card-header>
                <b-collapse id="agendaLecture" accordion="agenda" role="tabpanel">
                  <b-card-body>
                    <p>A palestra será ministrada pelo Sr. Fábio Centeno, Diretor Executivo da Nexicon Consultoria, que trabalha há mais de 13 anos com projetos focados em fazer as drogarias aumentarem suas vendas no setor de perfumaria.</p>
                    <p>Centeno já soma mais de 5.000 horas de treinamentos para farmácias, atuando como consultor, palestrante e coaching de equipes de vendas, sempre no segmento de cosméticos, higiene e beleza. Ele também é autor do livro “Manual do Farmacista” e criador do método exclusivo “Treinando em 360ª”.</p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="3">
              <div class="event-time">
                <h3>13:00 - 18:00</h3>
              </div>
            </b-col>
            <b-col md="9">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="#agendaBusiness"
                    v-b-toggle.agendaBusiness
                    @click.prevent
                  >Rodada de Negócios</a>
                </b-card-header>
                <b-collapse id="agendaBusiness" accordion="agenda" role="tabpanel">
                  <b-card-body>
                    <p>
                      Teremos mais de 30 stands diferentes, que trarão condições comerciais diferenciadas e
                      brindes para os associados. Um espaço especial será dedicado a nossa Drogaria Modelo, e os
                      participantes ainda poderão aproveitar dos preços especiais nos produtos exclusivos.
                      A presença dos associados é fundamental nesta etapa do evento, pois trata-se de uma
                      oportunidade única para estreitar relacionamentos profissionais e aproveitar condições
                      comerciais que não estarão disponíveis fora da Convenção.
                    </p>
                    <p>
                      Este é o momento para efetuarmos negociações significativas que são essenciais para alavancarmos a força comercial da rede, e
                      para expandir o nosso poder de negociação no varejo farmacêutico. Para os empresários que
                      quiserem descansar da viagem ou que optaram por trazer seus filhos, haverá uma área para
                      descanso e um espaço com monitores especialmente preparado para receber as crianças.
                    </p>
                    <p>
                      Os empresários que fecharem negócios durante o evento receberão um cupom para participar dos
                      sorteios que serão realizados durante o Jantar de Confraternização. Finalizadas as negociações
                      os motoristas estarão à disposição para levá-los de volta ao hotel.
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="3">
              <div class="event-time first">
                <h3>21:00 - 01:00</h3>
              </div>
            </b-col>
            <b-col md="9">
              <b-card no-body class="mb-1">
                <b-card-header header-tag="header" role="tab">
                  <a
                    href="#agendaDinner"
                    v-b-toggle.agendaDinner
                    @click.prevent
                  >Jantar de Confraternização</a>
                </b-card-header>
                <b-collapse id="agendaDinner" accordion="agenda" role="tabpanel">
                  <b-card-body>
                    <p>
                      A confraternização será regada por um jantar delicioso e preparado especialmente para os
                      associados com diversidade de petiscos, open-bar de bebidas, boate e música ao vivo.
                      Para participar do jantar será necessário apresentar obrigatoriamente o convite entregue
                      durante o credenciamento. Os sorteios e as entregas dos prêmios serão realizados durante o
                      Jantar de Confraternização.
                    </p>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Agenda'
}
</script>
