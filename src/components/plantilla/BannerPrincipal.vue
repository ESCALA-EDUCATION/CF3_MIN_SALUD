<template>
  <div class="container banner-principal">
    <div class="row banner-principal__row">
      <div
        class="col-lg-7 col-xxl-7 ps-4 ps-sm-5 py-4 py-sm-5 banner-principal__info"
      >
        <div class="banner-principal__componente">
          <h1 class="mb-0" v-html="globalData.componenteFormativo"></h1>
        </div>
        <div class="banner-principal__descripcion">
          <p class="mb-0" v-html="globalData.descripcionCurso"></p>
        </div>
        <div class="banner-principal__accion">
          <router-link class="boton" :to="{ name: iniciarLnk.nombreRuta }">
            <span class="me-1">Ver más</span>
            <i class="fas fa-angle-right"></i>
          </router-link>
        </div>
      </div>
      <div class="d-none d-lg-block col-lg-5 px-0 banner-principal__img">
        <img :src="globalData.imagenBannerPrincipal" />
        <div
          v-for="(img, idx) in extraImgs"
          :key="`img-key-${idx}`"
          :class="img.clases"
        >
          <img :src="img.imagen" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '../../mixins/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
    extraImgs() {
      return this.$config.global.imagenesDecorativasBanner
    },
  },
}
</script>

<style lang="sass">
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text

  &__img
    position: relative
    &>div
      position: absolute

  &__info
    display: flex
    flex-direction: column
    justify-content: center

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px

  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em

  &__descripcion
    margin-bottom: 20px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important

  &__img
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
</style>
