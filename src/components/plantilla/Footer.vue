<template>
  <footer
    class="container-fluid footer tarjeta"
    :class="[allRound && 'footer__all-round']"
  >
    <div class="d-flex align-items-center justify-content-center">
      <div class="logo-container">
        <img
          class="logo"
          src="@/assets/template/logo_min_salud_fondo_blanco.png"
        />
        <div class="text-center">Recursos Educativos Digitales</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    allRound: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    versiones() {
      return {
        base: this.$package.version,
        pkg: this.$package.dependencies['ecored-base-pkg'],
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.logo-container
  transform: translateY(-25px)

.logo
  width: 290px

.footer
  background-color: $color-sistema-g
  border-bottom-right-radius: 0 !important
  border-bottom-left-radius:  0 !important
  &__all-round
    border-bottom-right-radius: 20px !important
    border-bottom-left-radius:  20px !important
  p
    color: $color-sistema-b
    line-height: 1.2em
</style>
