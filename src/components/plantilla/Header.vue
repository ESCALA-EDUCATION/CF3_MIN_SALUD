<template>
  <header class="header container-fluid">
    <div class="row align-items-center justify-content-between">
      <div
        class="col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"
      >
        <img
          class="header__logo me-2 me-sm-3  "
          src="@/assets/template/logo_min_salud_fondo_blanco.png"
        />
        <div v-if="isInicio" class="d-none d-md-flex align-items-center">
          <a class="me-5" href="#contenidos">Contenidos</a>
        </div>
        <div v-else class="header__componente-formativo">
          <span v-html="globalData.componenteFormativo"></span>
        </div>
      </div>
      <div v-if="isInicio" class="col-auto">
        <router-link class="boton" :to="{ name: iniciarLnk.nombreRuta }">
          <span class="me-1">Ver contenido</span>
          <i class="fas fa-angle-right"></i>
        </router-link>
      </div>
      <div v-else class="col-auto">
        <div
          v-if="$route.name !== 'inicio'"
          class="header__menu"
          @click="toggleMenu"
        >
          <div
            class="header__menu__btn"
            :class="{ 'header__menu__btn--open': menuOpen }"
          >
            <div class="line-2"></div>
            <div class="line-1"></div>
            <div class="line-3"></div>
          </div>
          <span>MENÚ</span>
        </div>
        <AsideMenu />
      </div>
    </div>
  </header>
</template>

<script>
import plantillaMixins from '../../mixins/plantillaMixins'
export default {
  name: 'Header',
  mixins: [plantillaMixins],
  computed: {
    globalData() {
      return this.$config && this.$config.global
    },
    isInicio() {
      return this.$route.name === 'inicio'
    },
    menuOpen() {
      return this.$store.getters.isMenuOpen
    },
  },
  methods: {
    toggleMenu() {
      this.$store.dispatch('toggleMenu', !this.menuOpen)
    },
  },
}
</script>

<style lang="sass" scoped>
.header
  position: sticky
  top: 0
  padding-top: 10px
  padding-bottom: 10px
  background-color: $white
  z-index: 10010
  line-height: 1.1em
  &__logo
    width: 245px
  &__componente-formativo
    @media (max-width: $bp-max-xs)
      font-size: 0.8em


.header__menu
  cursor: pointer
  position: relative
  span
    font-size: 0.7em
    display: block
    line-height: 1em
    text-align: center
    color: $color-sistema-a
  &__btn
    width: 30px
    height: 30px
    position: relative
    margin-bottom: 4px
    .line-1,.line-2,.line-3
      height: 4px
      width: 30px
      background-color: $color-sistema-a
      transform-origin: center center
      position: absolute
      left: 0
      border-radius: 2px
    .line-1
      top: 4px
      animation: line-1-inactive 0.5s ease-in-out forwards
    .line-2
      top: 13px
      animation: line-2-inactive 0.5s ease-in-out forwards
    .line-3
      top: 22px
      animation: line-3-inactive 0.5s ease-in-out forwards
    &:hover
      cursor: pointer

    &--open
      .line-1
        animation: line-1-active 0.5s ease-in-out forwards
      .line-2
        animation: line-2-active 0.5s ease-in-out forwards
      .line-3
        animation: line-3-active 0.5s ease-in-out forwards

@keyframes line-1-active
  0%
    transform: translate(0, 0) rotate(0)
  50%
    transform: translate(0, 9px) rotate(0)
  100%
    transform: translate(0, 9px) rotate(45deg)

@keyframes line-2-active
  0%
    transform: scale(1)
  100%
    transform: scale(0)

@keyframes line-3-active
  0%
    transform: translate(0, 0) rotate(0)
  50%
    transform: translate(0, -9px) rotate(0)
  100%
    transform: translate(0, -9px) rotate(-45deg)

@keyframes line-1-inactive
  0%
    transform: translate(0, 9px) rotate(45deg)
  50%
    transform: translate(0, 9px) rotate(0)
  100%
    transform: translate(0, 0) rotate(0)

@keyframes line-2-inactive
  0%
    transform: scale(0)
  100%
    transform: scale(1)

@keyframes line-3-inactive
  0%
    transform: translate(0, -9px) rotate(-45deg)
  50%
    transform: translate(0, -9px) rotate(0)
  100%
    transform: translate(0, 0) rotate(0)
</style>
