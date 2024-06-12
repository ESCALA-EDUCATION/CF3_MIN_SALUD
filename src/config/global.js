export default {
  global: {
    componenteFormativo:
      'Atención en salud para la atención a las personas de los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegemónicas.',
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
        'Constitución política de Colombia. (1991). Título II, de Los Derechos Sociales, Económicos y Culturales Artículos 48 y 49. ',
      link: 'https://pdba.georgetown.edu/Constitutions/Colombia/colombia91.pdf',
    },
    {
      referencia:
        'Decreto 762 de 2018. Por el cual se adiciona un capítulo al Título 4 a la Parte 4, del Libro 2, del Decreto 1066 de 2015, Único Reglamentario del Sector Interior, para adoptar la Política Pública para la garantía del ejercicio efectivo de los derechos de las personas que hacen parte de los sectores sociales LGBTI y de personas con orientaciones sexuales e identidades de género diversas. 07 de mayo 2018. D.O. 50.586.',
    },
    {
      referencia:
        'Decreto 780 de 2016 Sector Salud y Protección Social. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. 06 mayo 2016 con última actualización el 05 agosto de 2022.',
    },
    {
      referencia:
        'Naciones Unidas. (2023). Informe de los objetivos de desarrollo sostenible, edición especial, “Por un plan de rescate para las personas y el planeta”. ',
      link: 'https://www.un.org/sustainabledevelopment/es/development-agenda/',
    },
    {
      referencia:
        'Ley 100 de 1993. Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. 23 diciembre de 1993, D.O. 41.148.',
    },
    {
      referencia:
        'Ley 1122 de 2007. Por la cual se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones. 09 enero 2007. D.O. 46.506. ',
    },
    {
      referencia:
        'Ley 1438 de 2011. Por medio de la cual se reforma el Sistema General de Seguridad Social en Salud y se dictan otras disposiciones. 19 enero 2011. D.O. 47957.',
    },
    {
      referencia:
        'Ley Estatutaria 1751 de 2015, por medio de la cual se consagra el derecho fundamental a la salud, dando lineamientos al Ministerio de Salud y Protección Social para realizar reformas significativas al sistema general de seguridad social en salud. 16 de febrero de 2015. D.O. 49427.',
    },
    {
      referencia:
        'Fondo de Población de las Naciones Unidas - UNFPA (2019). Lineamientos de Atención en los Servicios de Salud que Consideran el Enfoque Diferencial, de Género y No Discriminación para Personas LGBTI. – Colombia.',
    },
    {
      referencia:
        'Fondo de Población de las Naciones Unidas - UNFPA. (2010). Política Nacional de Derechos Sexuales y Derechos Reproductivos –PNSDSDR. Ministerio de Salud y Protección Social, Profamilia, Organización Internacional para las Migraciones.',
    },
    {
      referencia:
        'Resolución 2138 de 2023. Por la cual se adoptan los lineamientos de transversalización del enfoque de género en el sector salud para el cierre de brechas por razones de sexo, género, identidad de género y orientación sexual. ',
    },
    {
      referencia:
        'Resolución 2367 de 2023, Por la cual se modifican los artículos 1, 2 y 3 de la Resolución 1035 de 2022 y los capítulos 3, 4, 5, 6, 8, 9, 10 y 11 del anexo técnico "Plan Decenal de Salud Pública 2022-2031".',
    },
    {
      referencia:
        'Resolución 429 de 2016. Por medio de la cual se adopta la Política de Atención Integral en Salud.  D.O. 49.794.',
    },
    {
      referencia:
        'Organización Panamericana de la Salud y Organización Mundial de la Salud. (2013).  Resolución CD52.R6, Abordar las causas de las disparidades en cuanto al acceso y la utilización de los servicios de salud por parte de las personas lesbianas, homosexuales, bisexuales y TRANS, 52° Consejo Directivo.',
      link:
        'https://iris.paho.org/bitstream/handle/10665.2/4434/CD52-R6-esp.pdf?sequence=2&isAllowed=y',
    },
    {
      referencia:
        'Rocha-Buelvas, Anderson. (2015,). El riesgo suicida y los significados de las minorías sexuales: un nuevo reto para la salud pública. rev.fac.med. [online]. vol.63, n.3, pp.537-544. ISSN 0120-0011.',
      link: 'https://doi.org/10.15446/revfacmed.v63n3.43219',
    },
  ],
  glosario: [
    {
      termino: 'Autonomía progresiva:',
      significado:
        'es el principio que habilita la toma de decisiones por si solas de las niñas, niños y adolescentes.',
    },
    {
      termino: 'Arquetipo',
      significado:
        'modelo que sirve como línea para imitarlo, reproducirlo o copiarlo. Es algo que sirve como ejemplo de perfección de algo. ',
    },
    {
      termino: 'Cosmovisión',
      significado:
        'es el grupo de opiniones y creencias que conforman la imagen o concepto general del mundo que tiene una persona, época o cultura, partiendo de la interpretación de su propia naturaleza y la de todo lo existente.',
    },
    {
      termino: 'Cultura de seguridad',
      significado:
        'es el producto de valores, actitudes, percepciones, competencias y patrones de comportamiento desde lo individual y grupal, lo cual ayuda a determinar el compromiso, el estilo y el desempeño de una institución.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'en medicina, el diagnóstico o propedéutica clínica es el procedimiento por el cual se identifica una enfermedad, entidad nosológica, síndrome, o cualquier condición de salud- enfermedad (el "estado de salud" también se diagnostica).',
    },
    {
      termino: 'Igualdad',
      significado:
        'es el acceso a la Seguridad Social en salud que garantiza no incurrir en discriminación a las personas residentes en el territorio colombiano; por razones de cultura, sexo, raza, origen nacionalidad, orientación sexual, religión, edad o capacidad económica. ',
    },
    {
      termino: 'ITS / Infección de Transmisión sexual',
      significado:
        'son las infecciones que pasan de una persona a otra por medio de una relación sexual (vaginal, anal u oral) y pueden producir enfermedades.',
    },
    {
      termino: 'ETS /  Enfermedades de transmisión sexual',
      significado:
        'son conocidas como infecciones de transmisión sexual (ITS). Las ETS son infecciones que se propagan de una persona a otra por medio de la actividad sexual, incluso por otras vías como anal, vaginal u oral. ',
    },
    {
      termino: 'Participación Social',
      significado:
        'se refiere a la intervención de la comunidad en la organización, control, gestión y fiscalización de las instituciones y del sistema en conjunto.',
    },
    {
      termino: 'Programático',
      significado: 'perteneciente o relativo al programa. ',
    },
    {
      termino: 'Prestador',
      significado:
        'corresponde a cualquier persona natural o jurídica, establecimiento o institución, que se encuentre autorizada para otorgar prestaciones de salud, tales como: consulta, consultorio, hospital, clínica, centro médico, centro de diagnóstico terapéutico, centro de referencia de salud, laboratorio y otros de cualquier naturaleza, incluidas ambulancias y otros vehículos adaptados para atención extrahospitalaria. ',
    },
    {
      termino: 'Prevención',
      significado:
        'es el enfoque de orientado a la precaución que se aplica a la gestión del riesgo, en el marco de la evaluación de los procedimientos y la prestación de los servicios de salud.',
    },
    {
      termino: 'Observatorio Nacional de Salud',
      significado:
        'es el responsable de hacer el monitoreo a los indicadores de salud pública para cada municipio y departamento, lo cual permite tener información desagregada de resultados por Asegurador, Prestador y Ente Territorial.',
    },
    {
      termino: 'Transectorial en salud',
      significado:
        'es el resultado de la interacción de las condiciones biológicas, psíquicas, sociales y culturales del individuo, con el entorno y la sociedad.',
    },
    {
      termino: 'VIH / (virus de la inmunodeficiencia humana)',
      significado: 'es un virus que ataca el sistema inmunitario del cuerpo.',
    },
  ],
  complementario: [
    {
      tema:
        '2.2 Normativa nacional establecida para la atención a las personas que componen los sectores LGBTIQ+ y orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'Resolución 2367, Por la cual se modifican los artículos 1, 2 y 3 de la Resolución 1035 de 2022 y los capítulos 3, 4, 5, 6, 8, 9, 10 y 11 del anexo técnico "Plan Decenal de Salud Pública 2022-2031". (29 diciembre de 2023).',
      tipo: 'Norma',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur//normas/Norma1.jsp?i=152662&dt=S',
    },
    {
      tema:
        '2.2 Normativa nacional establecida para la atención a las personas que componen los sectores LGBTIQ+ y orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'Resolución 2138, Por la cual se adoptan los lineamientos de transversalización del enfoque de género en el sector salud para el cierre de brechas por razones de sexo, género, identidad de género y orientación sexual. (19 diciembre de 2023).',
      tipo: 'Norma',
      link:
        'https://www.minsalud.gov.co/Paginas/MinSalud-fortalece-medidas-con-enfoque-de-genero-en-entidades-territoriales-de-salud.aspx',
    },
    {
      tema:
        '2.2 Normativa nacional establecida para la atención a las personas que componen los sectores LGBTIQ+ y orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'Decreto 762 de 2018. Por el cual se adiciona un capítulo al Título 4 a la Parte 4, del Libro 2, del Decreto 1066 de 2015, Único Reglamentario del Sector Interior, para adoptar la Política Pública para la garantía del ejercicio efectivo de los derechos de las personas que hacen parte de los sectores sociales LGBTI y de personas con orientaciones sexuales e identidades de género diversas. 07 de mayo 2018. D.O. 50.586.',
      tipo: 'Norma',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=86303',
    },
    {
      tema:
        '2.2 Normativa nacional establecida para la atención a las personas que componen los sectores LGBTIQ+ y orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'Política Nacional de Derechos Sexuales y Derechos Reproductivos –PNSDSDR. Ministerio de Salud y Protección Social, Profamilia, Organización Internacional para las Migraciones – OIM, Fondo de Población de las Naciones Unidas – UNFPA. ',
      tipo: 'Política',
      link:
        'https://consensomontevideo.cepal.org/es/instrumento/politica-nacional-de-sexualidad-derechos-sexuales-y-derechos-reproductivos-pnsdsdr',
    },
    {
      tema:
        '2.2 Normativa nacional establecida para la atención a las personas que componen los sectores LGBTIQ+ y orientaciones sexuales e identidades de género no hegemónicas.',
      referencia:
        'Documento CONPES D.C. 16 de 2021 Consejo Distrital de Política Económica y Social del Distrito Capital - CONPES D.C. y PPLGBTI Decreto 762 de 2018',
      tipo: 'Documento',
      link:
        'https://sisjur.bogotajuridica.gov.co/sisjur/normas/Norma1.jsp?i=120224',
    },
    {
      tema:
        '5. Orientaciones técnicas para las personas que componen los sectores LGBTIQ+ y con orientaciones sexuales e identidades de género no hegémonicas. ',
      referencia:
        'Lineamientos de Atención en los Servicios de Salud que Consideran el Enfoque Diferencial, de Género y No Discriminación para Personas LGBTI. Fondo de Población de las Naciones Unidas - UNFPA – Colombia. 1 octubre de 2019. ',
      tipo: 'Documento',
      link:
        'https://colombia.unfpa.org/es/publications/lineamientos-atencion-servicios-salud-enfoque-genero',
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
