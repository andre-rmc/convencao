<template>
  <b-navbar
    ref="navbar"
    fixed="top"
    type="dark"
    variant="primary"
    :class="{'d-none': scrollPos < 150}"
    v-scroll="handleScroll"
  >
    <b-navbar-nav class="mx-auto" fill v-b-scrollspy="125">
      <b-nav-item href="#subheader" @click="scrollIntoView">Inscreva-se</b-nav-item>
      <b-nav-item href="#description" @click="scrollIntoView">Descrição</b-nav-item>
      <b-nav-item href="#agenda" @click="scrollIntoView">Programação</b-nav-item>
      <b-nav-item href="#prizes" @click="scrollIntoView">Prêmios</b-nav-item>
      <b-nav-item href="#location" @click="scrollIntoView">Localização</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      scrollPos: 0,
      baseClassList: 'navbar navbar-dark bg-primary fixed-top navbar-expand'
    }
  },
  mounted() {},
  methods: {
    handleScroll(evt, el) {
      const scroll = window.scrollY
      const elClasses = this.$refs.navbar.classList
      const collapsed = _.find(elClasses, ['top-nav-collapse'])

      this.scrollPos = window.scrollY

      if (scroll > 150) {
        if (typeof collapsed === 'undefined') {
          elClasses.value = this.baseClassList + ' top-nav-collapse'
        }
      } else {
        if (typeof collapsed !== 'undefined') {
          elClasses.value = this.baseClassList + ' d-none'
        }
      }
      return false
    },
    scrollIntoView(evt) {
      evt.preventDefault()
      const href = evt.target.getAttribute('href')
      const el = href ? document.querySelector(href) : null
      if (el) {
        this.$emit('scrollToEl', el.offsetTop)
      }
    }
  }
}
</script>