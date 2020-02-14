<template>
  <div id="app" ref="content">
    <Navbar @scrollToEl="scrollIntoView" />
    <Header />
    <SubHeader />
    <Description />
    <Agenda />
    <Prizes />
    <!-- <Prizess /> -->
    <Location />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import SubHeader from './components/SubHeader.vue'
import Header from './pages/Header.vue'
import Description from './pages/Description.vue'
import Agenda from './pages/Agenda.vue'
import Prizes from './pages/Prizes.vue'
// import Prizess from './components/Prizess'
import Location from './pages/Location.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Header,
    SubHeader,
    Description,
    Agenda,
    Prizes,
    // Prizess,
    Location,
    Footer
  },
  methods: {
    scrollIntoView(val) {
      window.scrollTo(0, val - 125)
    }
  }
}
</script>
