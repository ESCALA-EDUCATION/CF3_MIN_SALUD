(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50f1484a"],{"03e5":function(t,e,s){},c3de:function(t,e,s){"use strict";s("03e5")},d6e4:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header container-fluid"},[n("div",{staticClass:"row align-items-center justify-content-between"},[n("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-start"},[n("img",{staticClass:"header__logo me-2 me-sm-3  ",attrs:{src:s("7b52")}}),t.isInicio?n("div",{staticClass:"d-none d-md-flex align-items-center"},[n("a",{staticClass:"me-5",attrs:{href:"#contenidos"}},[t._v("Contenidos")])]):n("div",{staticClass:"header__componente-formativo"},[n("span",{domProps:{innerHTML:t._s(t.globalData.componenteFormativo)}})])]),t.isInicio?n("div",{staticClass:"col-auto"},[n("router-link",{staticClass:"boton",attrs:{to:{name:t.iniciarLnk.nombreRuta}}},[n("span",{staticClass:"me-1"},[t._v("Ver contenido")]),n("i",{staticClass:"fas fa-angle-right"})])],1):n("div",{staticClass:"col-auto"},["inicio"!==t.$route.name?n("div",{staticClass:"header__menu",on:{click:t.toggleMenu}},[n("div",{staticClass:"header__menu__btn",class:{"header__menu__btn--open":t.menuOpen}},[n("div",{staticClass:"line-2"}),n("div",{staticClass:"line-1"}),n("div",{staticClass:"line-3"})]),n("span",[t._v("MENÚ")])]):t._e(),n("AsideMenu")],1)])])},i=[],a=(s("b0c0"),s("ff6a")),o={name:"Header",mixins:[a["a"]],computed:{globalData:function(){return this.$config&&this.$config.global},isInicio:function(){return"inicio"===this.$route.name},menuOpen:function(){return this.$store.getters.isMenuOpen}},methods:{toggleMenu:function(){this.$store.dispatch("toggleMenu",!this.menuOpen)}}},c=o,l=(s("c3de"),s("2877")),r=Object(l["a"])(c,n,i,!1,null,"40413995",null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-50f1484a.99dcb319.js.map