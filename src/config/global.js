export default {
  global: {
    componenteFormativo:
      'Orientaciones para la atención en salud a las personas que hacen parte de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género diversas.',
    descripcionCurso:
      'La atención integral para personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género diversas se debe hacer de manera humanizada, aplicando los modelos afirmativos y de acuerdo a las necesidades específicas de las personas que pertenecen a estos grupos sociales. sí mismo se hace necesario identificar las principales dificultades de los prestadores en torno al proceso de atención y la forma en cómo dichas dificultades puede ser superadas para que la atención se haga de manera respetuosa, sin discriminación y garantizando la aplicación de los enfoques diferencial, de género y otros que sean pertinentes para la atención integral en salud.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/portada/interno.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/a4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        subTitulo: 'Introducción',
        img: require('@/assets/curso/portada/intro.png'),
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Atención en salud de las personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.',
        subTitulo:
          '1. Atención en salud de las personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.',
        img: require('@/assets/curso/portada/1.png'),
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Humanización de los servicios de salud para  la  atención de población LGTBIQ+ y con orientaciones sexuales e identidades de género no hegemónicas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Modelos de atención: no afirmativos y afirmativos para la población LGTBIQ+ y con orientaciones sexuales e identidades de género no hegemónicas. ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Tipos de intervenciones: poblacionales, colectivas e individuales.',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Problemas asociados a las y los prestadores de servicios de salud.',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Concepto y definiciones de las categorías:  sexo, género, Orientación sexual, Identidad de género, intersexualidad en el marco de la Política Púbica, Decreto 762 de 2018 y la Resolución 2138 de 2023, por la cual se adoptan los lineamientos de transversalización del enfoque de género',
        subTitulo:
          '2. Concepto y definiciones de las categorías: sexo, género, Orientación sexual, Identidad...',
        img: require('@/assets/curso/portada/2.png'),
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Pautas generales',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Barreras en el proceso de atención para las personas que componen los sectores  LGBTIQ+ y orientaciones sexuales e identidades de género no hegemónicas',
        subTitulo:
          '3. Barreras en el proceso de atención para las personas que componen los sectores  LGBTIQ+...',
        img: require('@/assets/curso/portada/3.png'),
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Política participación en salud',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Intervención a las personas que componen los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas en su estado de salud: Mecanismos para la exigibilidad de derechos.',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        subTitulo: 'Síntesis',
        img: require('@/assets/curso/portada/5.png'),
        desarrolloContenidos: false,
      },

      //{
      //  nombreRuta: 'actividad',
      //  icono: 'fas fa-info-circle',
      //  titulo: 'Actividad didáctica',
      //  subTitulo: 'Vigilancia en Salud',
      //  img: require('@/assets/curso/portada/p6.png'),
      //  desarrolloContenidos: false,
      //},
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá, Dirección de Provisión de Servicios de Salud. (2021). Lineamiento para la atención en salud de las personas Trans y No Binarias en Bogotá D.C.: aproximaciones iniciales.',
    },
    {
      referencia:
        'Díaz Amado, E. (Il.). (2017). La humanización de la salud: conceptos, críticas y perspectivas (ed.). Editorial Pontificia Universidad Javeriana.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/123301?page=1',
    },
    {
      referencia:
        'Fondo de Población de las Naciones Unidas - UNFPA – Colombia. (2019). Lineamientos de Atención en los Servicios de Salud que Consideran el Enfoque Diferencial, de Género y No Discriminación para Personas LGBTI.',
    },
    {
      referencia:
        'Gobernación del César. (2010). Provisión de servicios afirmativos de salud para personas LGBT (Lesbianas, Gays, Bisexuales y Transgeneristas). Colombia diversa.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social, Oficina de Promoción Social. (2020). Lineamientos para la mitigación del riesgo de contagio, acceso a los servicios en salud y articulación con servicios sociales dispuestos para los sectores sociales LGBTI o con identidades y expresiones de género diversas en el marco de la emergencia por coronavirus (COVID-19).',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2021). Orientaciones para eliminar el estigma y la discriminación hacia personas que consumen sustancias psicoactivas, con enfoque de género y población LGBTI.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2023). Resolución 2366, por la cual se establecen los servicios y tecnologías de salud financiados con recursos de la Unidad de Pago por Capitación (UPC).',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s.f.). Rutas integrales de atención en salud (RIAS). ',
      link:
        'https://www.minsalud.gov.co/paginas/rutas-integrales-de-atencion-en-salud.aspx',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2010). Diretrizes para Atenção Integral à Saúde de Adolescentes e Jovens Lésbicas, Gays, Bissexuais, Travestis e Transexuais. Washington.',
    },
    {
      referencia:
        'Real Academia Española. (2024). Diccionario de la lengua española (23.ª ed., versión 23.7 en línea).',
      link: 'https://dle.rae.es',
    },
    {
      referencia:
        'Rodríguez Riesco, L. et al. (2022). El proceso de aceptación y adaptación a la bisexualidad a través de la terapia cognitivo-conductual con enfoque afirmativo: Estudio de caso único. Revista de Psicoterapia, 33(123), 235-250.',
      link: 'https://doi.org/10.33898/rdp.v33i123.1140',
    },
    {
      referencia:
        'Rueda Castro, L., et al. (2018). Humanizar la medicina: un desafío conceptual y actitudinal. Revista Iberoamericana De Bioética, (8), 01–15',
      link: 'https://doi.org/10.14422/rib.i08.y2018.002',
    },
  ],
  glosario: [
    {
      termino: 'Alianzas o Asociaciones de Usuarios',
      significado:
        'grupo de afiliados que tienen como función la de velar por la calidad en la prestación del servicio, así como la defensa de los derechos de los usuarios.',
    },
    {
      termino: 'Audiencias públicas',
      significado:
        'se hace con el fin de evaluar la formulación, ejecución o evaluación de diversas políticas y programas a cargo de una entidad; en conclusión, este mecanismo sirve para conocer y discutir los resultados de la operación de los proyectos.',
    },
    {
      termino: 'Cabildo abierto',
      significado:
        'este tipo de mecanismo democrático consiste en la reunión de concejos distritales, municipales y de las juntas administradoras de tipo local, con el fin que los ciudadanos puedan estar inmersos en los temas de asunto común.',
    },
    {
      termino: 'Comités de Ética Hospitalaria',
      significado:
        'está conformado por los usuarios, delegados de la comunidad y los representantes de las instituciones que prestan servicios de salud IPS.',
    },
    {
      termino: 'Comités de Participación Comunitaria (COPACOS)',
      significado:
        'espacio de comunicación entre diversos actores de la comunidad con el estado y tiene como objetivo intervenir en la ejecución de las actividades y control del gasto en el Sistema General de Seguridad Social en Salud.',
    },
    {
      termino: 'Comunicación incluyente',
      significado:
        'se refiere a la comunicación emitida mediante el lenguaje hablado, escrito o visual, libre de códigos y significados sexistas que discriminen y atenten contra la libertad y dignidad.',
    },
    {
      termino: 'Consultas públicas',
      significado:
        'mecanismo permite entregar y recibir diversos comentarios, sugerencias y demás comentarios en el marco de la construcción de nuevos proyectos, políticas, planes, programas, y demás normas de competencia relacionadas con el ambiente.',
    },
    {
      termino: 'Disidente de género',
      significado:
        'persona que rechaza la “norma” de cómo debe comportarse en sentido de su género.',
    },
    {
      termino: 'Iniciativa popular',
      significado:
        'consiste en el derecho que tienen los grupos de personas de formular y presentar proyectos en el marco del desarrollo de diversas normas (ley, resolución, ordenanza); para que se puedan debatir y se tenga respuesta de aprobación, modificación o negación por en la entidad pública competente.',
    },
    {
      termino: 'Lenguaje sexista',
      significado:
        'el lenguaje sexista ha ayudado a legitimar y reproducir relaciones injustas entre los sexos que invisibilizan a las mujeres, prevaleciendo formas de expresión colectiva que excluyen a las mujeres con formas lingüísticas androcéntricas y subordinan lo femenino a lo masculino.',
    },
    {
      termino: 'MhGAP',
      significado:
        'el Programa de acción para superar las brechas en salud mental, o mhGAP (del inglés, Mental Health Global Action Programme), es un programa de la OMS que se ocupa de la falta de atención para personas con trastornos mentales, neurológicos y por uso de sustancias.',
    },
    {
      termino: 'Referendo',
      significado:
        'es una convocatoria dirigida a los ciudadanos para que puedan aprobar o rechazar algún tipo de proyecto de norma jurídica, o que sea derogada alguna norma que se encuentre vigente.',
    },
    {
      termino: 'Servicio de Atención a la Comunidad (SAC)',
      significado:
        'es el servicio a la comunidad que se organiza por medio de las diversas dependencias de participación social con el fin de canalizar y dar solución a las peticiones e inquietudes en salud de los ciudadanos.',
    },
    {
      termino: 'Servicio de Atención al Usuario (SIAU)',
      significado:
        'es el sistema que se encarga de dar información y atención a los usuarios por medio de: oficina de SIAU.',
    },
    {
      termino: 'UPC',
      significado: 'Unidad de Pago por Capitación. ',
    },
    {
      termino: 'Veedurías ciudadanas',
      significado:
        'Es la estrategia que le permite a los ciudadanos realizar supervisión en todo el proceso de gestión pública o vigilancia a una entidad encargada de la prestación de servicios.',
    },
  ],
  complementario: [
    {
      tema:
        '1.2.	Modelos de atención: no afirmativos y afirmativos para la población LGTBIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'UNFPA Colombia. (2019). Lineamientos en atención LGBTI (versión digital). Bogotá: UNFPA Colombia.',
      tipo: 'Documento',
      descarga: '/downloads/LINEAMIENTOS EN ATENCION LGBTI-VERSION DIGITAL.pdf',
    },
    {
      tema:
        '1.2.	Modelos de atención: no afirmativos y afirmativos para la población LGTBIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'Alcaldía Mayor de Bogotá, Dirección de Provisión de Servicios de Salud. (2021). Lineamiento para la atención en salud de las personas Trans y No Binarias en Bogotá D.C.: aproximaciones iniciales. Bogotá: Alcaldía Mayor de Bogotá.',
      tipo: 'Documento',
      descarga: '/downloads/AT_INT_CARACTERIZACION.pdf',
    },
    {
      tema:
        '1.4	Problemas asociados a las y los prestadores de servicios de salud.',
      referencia:
        'Gobernación del César. (2010). Provisión de servicios afirmativos de salud para personas LGBT (Lesbianas, Gays, Bisexuales y Transgeneristas). Colombia Diversa.',
      tipo: 'Documento',
      descarga: '/downloads/provision-de-servicios-salud.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
