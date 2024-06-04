<template>
  <section class="inicio">
    <div
      class="banner-background"
      :style="{
        'background-image': globalData.fondoBannerPrincipal
          ? `url(${globalData.fondoBannerPrincipal})`
          : 'none',
      }"
    >
      <BannerPrincipal />
    </div>

    <div class="contenido">
      <div class="container">
        <div class="row justify-content-center">
          <div
            v-for="item of desarrolloContenidosData"
            :key="'desarrollo-' + item.nombreRuta"
            class="col-md-6 col-xl-3 mb-4"
          >
            <router-link :to="{ name: item.nombreRuta }">
              <div class="contenido__tarjeta tarjeta shadow h-100">
                <div
                  class="contenido__tarjeta__img"
                  :style="{
                    'background-image': item.img ? `url(${item.img})` : 'none',
                  }"
                />
                <div
                  class="p-3 text-center d-flex flex-column justify-content-center"
                >
                  <div
                    class="contenido__tarjeta__sub-titulo "
                    v-html="item.subTitulo"
                  />
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </section>
</template>
<script>
import BannerPrincipal from '../components/plantilla/BannerPrincipal'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Inicio',
  components: {
    BannerPrincipal,
    Footer,
  },
  computed: {
    globalData() {
      return this.$config.global
    },
    menuPrincipalData() {
      return this.$config.menuPrincipal
    },
    creditosInicio() {
      return this.$config.creditosInicio
    },
    desarrolloContenidosData() {
      const allMenuData = [
        ...this.menuPrincipalData.menu,
        ...this.menuPrincipalData.subMenu,
      ]
      return allMenuData.filter(item => item.desarrolloContenidos)
    },
  },
}
</script>

<style lang="sass">
.banner-background
  background-color: $color-banner-fondo
  background-size: cover
  background-position: center
  padding-bottom: 100px

.contenido
  transform: translateY(-100px)
  &__tarjeta
    overflow: hidden
    &__img
      height: 100px
      background-size: cover
      background-position: center
      background-repeat: no-repeat


.inicio
  .footer
    border-radius: 0 !important
.resultados-aprendizaje
  &__item
    margin-bottom: 20px
    &:last-child
      margin-bottom: 0

.desarrollo-contenidos
  &__item
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 25px
    padding: 5px
    border-radius: $base-border-radius

    &__texto
      display: flex
      align-items: center
      color: $color-sistema-texto

    &__icono
      display: block
      background-color: $color-sistema-g
      font-size: 20px
      font-weight: $base-black-font-weight
      text-align: center
      padding: 10px
      line-height: 1em
      width: 40px
      margin-right: 15px

    &:last-child
      margin-bottom: 0

    &:hover
      background-color: $color-sistema-g
      font-weight: $base-black-font-weight
      color: $color-sistema-a

.creditos-inicio
  border-bottom-left-radius: 0 !important
  border-bottom-right-radius: 0 !important
  &__container
    hr
      margin: 15px 0
  &__titulo
    display: flex
    align-items: center
  &__item
  &__imagenes
    display: flex
    flex-wrap: wrap
    img
      width: auto
      max-height: 60px
      margin-right: 15px
      margin-top: 5px
      margin-bottom: 5px
</style>
