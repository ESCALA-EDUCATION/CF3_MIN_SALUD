<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .contenido_curso
    .mn.py-0 
      .titulo-principal.mb-5
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      
    .row.justify-content-center.align-items-center
      .col-lg-2.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/1.svg' alt='')
      .col-lg-10(data-aos="fade-left")
        p.mb-0 Aprendices, reciban un cálido saludo del #[span.color-acento-botones Ministerio de Salud y Protección Social]. Se les da la bienvenida al tercer y último componente formativo relacionado con la atención de las personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas, teniendo en cuenta el enfoque de derechos, diferencial, trato humanizado, modelo afirmativo, pautas para la atención en salud, garantía de derechos y generalidades de la política de participación social en salud.
    
    .bg-tema-intro.mn
      .row.tarjeta.bg-gray-dark.p-4.mb-5 
        .col-lg-1.col-6.mb-lg-0.mb-3.d-none.d-lg-flex: img(src='@/assets/curso/intro/1.svg' alt='')
        .col-lg-11
          p.mb-0.text-white Es importante recordar la importancia de comprender los enfoques para el proceso de atención en salud. Por ejemplo, según lo estipulado en el 'Plan Decenal de Salud Pública 2022-2031', el cual apunta a la garantía del derecho fundamental a la salud, el fortalecimiento del bienestar y la calidad de vida de las personas.
      
      .row.mb-5 
        .col-lg-7.mb-3
          p Para la prestación del servicio en salud bajo un modelo afirmativo (ver sección 1.1.), se hace necesario sumar los enfoques revisados en el componente 2, que hacen énfasis en lo dispuesto en la Política Pública para la garantía del ejercicio efectivo de los derechos de las personas que forman parte de los sectores sociales LGBTIQ+ y de personas con orientaciones sexuales e identidades de género diversas, el Plan Decenal de Salud Pública 2022-2031 y los lineamientos de transversalización del enfoque de género en el sector salud para el cierre de brechas por razones de sexo, género, identidad de género y orientación sexual: enfoque de derechos humanos, enfoque de orientaciones sexuales e identidades de género diversas, enfoque de igualdad de género, enfoque diferencial, enfoque interseccional, enfoque de desarrollo humano, enfoque territorial, enfoque étnico diferencial, enfoque de curso de vida, enfoque de prevención, enfoque de salud familiar y comunitaria, enfoque psicosocial y enfoque de acción sin daño.
        .col-lg-5(data-aos="fade-right"): img(src='@/assets/curso/intro/3.png' alt='')

      p.mb-5 #[span.color-primario El objetivo del presente componente es contribuir a la realización efectiva de las acciones en salud que están dispuestas para las personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas; ya que, como describe el plan decenal de salud pública 2022-2031, persisten los casos de dificultades para el acceso a servicios de salud con calidad.]

      .row.mb-5.align-items-center
        .col-lg-4(data-aos="fade-right").mb-3: img(src='@/assets/curso/intro/4.png' alt='')
        .col-lg-8
          .tarjeta.p-5.bg-gray-dark.text-white
            p “Para el caso de la población transgénero, se ha identificado que las principales necesidades en materia de salud sexual y reproductiva se relacionan con el acceso a consultas obstétricas, controles prenatales, atención a abortos, mamografías, histerectomías, ecografías transvaginales y consultas con especialistas en sexología, urología y anticoncepción. #[span.color-verde (Profamilia 2019)”]. 
            p.mb-0 “En la población transgénero se ha caracterizado que el sometimiento a tratamientos hormonales, a partir de la aplicación de estrógeno y testosterona sin supervisión médica, pueden desembocar en problemas cardiacos y afectaciones por el sometimiento a procedimientos quirúrgicos de manera clandestina en lugares no autorizados, derivadas de procedimientos, en el caso de las mujeres trans, como aumento de mamas, vaginoplastia y labioplasfia, orquiectomía, afeitado de tráquea, reducción de huesos faciales, rinoplastia, entre otros; en el caso de los hombres trans, masculinización del pecho, histerectomía, faloplastia, uretroplastia, prótesis testiculares, entre otros.
            p.mb-0 #[span.color-verde (Colombia Diversa y Gobernación del Cesar 2010)”].
      
      .row 
        .col-lg-7.mb-3
          p Acorde con lo anterior, el presente componente busca aportar herramientas para que el talento humano en salud pueda realizar un proceso de atención integral a las personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas. Basado en los enfoques de atención revisados en el componente 2, este incluye atención humanizada y de calidad, aplicación de los principios del modelo afirmativo, atención respetuosa y sin discriminación, confidencialidad y confianza, protección de niñas, niños y adolescentes, generación de espacios inclusivos y el fomento de la participación de personas de los sectores LGBTIQ+ en los espacios de participación en salud.
        .col-lg-5(data-aos="fade-right"): img(src='@/assets/curso/intro/5.png' alt='')

 
    
    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
