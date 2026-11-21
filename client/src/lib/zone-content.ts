export type ZonePageData = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  places: string;
  paragraphs: string[];
  faqs: Array<[string, string]>;
};

export const zonePages: ZonePageData[] = [
  {
    slug: "capital",
    name: "Capital",
    title: "Servicios industriales en Capital | Servicio Integrado",
    intro: "Mantenimiento, soldadura y mecanizado para industrias y talleres de la Ciudad de Mendoza.",
    places: "Ciudad de Mendoza",
    paragraphs: [
      "En Capital, las consultas industriales suelen necesitar una respuesta ordenada: una pieza para recuperar un equipo, una reparación, una estructura o una intervención de mantenimiento. Servicio Integrado recibe la descripción del trabajo, fotos, medidas o un plano y conversa el alcance antes de avanzar.",
      "La ubicación en la Ciudad de Mendoza puede ser el punto de coordinación para trabajos de mecanizado CNC y convencional, soldadura MIG o TIG, estructuras y mantenimiento industrial. También podés consultar por cintas de transporte, mesas vibratorias, salas de bomba, equipos de frío, neumática e hidráulica, siempre según el componente y el uso concreto.",
      "El trabajo comienza con un relevamiento de la necesidad y sigue con la confirmación de medidas, materiales y próximos pasos. Algunas piezas se resuelven en taller; otras requieren coordinar previamente una visita o la entrega del componente. La modalidad se define con la información disponible y el alcance real.",
      "Si estás en Capital y necesitás resolver un trabajo para un taller o una industria, escribí por WhatsApp o llamá. Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados y las visitas se coordinan previamente. El contacto directo permite explicar el problema con palabras simples y sumar imágenes del equipo para definir el próximo paso. También podés indicar si buscás una reparación, una fabricación o una revisión, para que la consulta comience enfocada en el servicio adecuado. Esa primera orientación ayuda a reunir la información más útil y preparar la conversación técnica.",
    ],
    faqs: [
      ["¿Atienden consultas de la Ciudad de Mendoza?", "Sí, Capital forma parte del área de cobertura de Servicio Integrado."],
      ["¿Puedo consultar por una pieza desde Capital?", "Sí. Podés enviar fotos, medidas, plano o una muestra para orientar el mecanizado."],
      ["¿Cómo coordinan una visita?", "La visita se acuerda previamente por WhatsApp o teléfono."],
      ["¿Cuál es el horario?", "Lunes a sábados de 08:00 a 17:30 hs. Domingos cerrado."],
    ],
  },
  {
    slug: "godoy-cruz",
    name: "Godoy Cruz",
    title: "Servicios industriales en Godoy Cruz | Servicio Integrado",
    intro: "Soluciones de mantenimiento, soldadura, estructuras y mecanizado para Godoy Cruz.",
    places: "San Francisco del Monte, Las Tortugas y Villa Hipódromo",
    paragraphs: [
      "Servicio Integrado trabaja con consultas de Godoy Cruz y sus distintos sectores, entre ellos San Francisco del Monte, Las Tortugas y Villa Hipódromo. El pedido puede comenzar con una falla de mantenimiento, una estructura que debe reforzarse, una pieza que ya no funciona o una adaptación para un equipo existente.",
      "Para ordenar cada trabajo pedimos una explicación simple y, cuando sea posible, fotos, medidas o un plano. Con esa información se conversa si la tarea corresponde a mecanizado, soldadura, fabricación, mantenimiento o a una combinación de especialidades. También se pueden consultar trabajos vinculados con hidráulica, neumática, cintas de transporte y mesas vibratorias.",
      "La propuesta se prepara después de revisar el alcance, los materiales y la relación de la pieza con el equipo. El seguimiento directo permite acordar qué se realiza en taller y qué requiere una coordinación previa. Así la consulta mantiene el foco en el resultado que necesita la industria o el taller.",
      "Para solicitar una orientación desde Godoy Cruz, podés escribir por WhatsApp o llamar a Servicio Integrado. El horario es de lunes a sábados de 08:00 a 17:30 hs.; los domingos no atendemos y toda visita se coordina previamente. Una fotografía del conjunto y otra del detalle ayudan a ubicar el trabajo desde el primer mensaje. Si el pedido involucra una estructura o una pieza, conviene sumar las medidas disponibles y explicar qué función debe cumplir al finalizar. Así se puede ordenar la consulta desde el comienzo y definir qué información conviene enviar primero.",
    ],
    faqs: [
      ["¿Qué zonas de Godoy Cruz mencionan?", "La cobertura incluye Godoy Cruz; como referencias locales se pueden mencionar San Francisco del Monte, Las Tortugas y Villa Hipódromo."],
      ["¿Pueden reparar una estructura existente?", "Podés enviar fotos y medidas para revisar una reparación, refuerzo o fabricación relacionada."],
      ["¿Trabajan con hidráulica?", "Sí, hidráulica figura entre las especialidades que se pueden consultar en el sitio."],
      ["¿Atienden los domingos?", "No. El horario informado es de lunes a sábados de 08:00 a 17:30 hs."],
    ],
  },
  {
    slug: "guaymallen",
    name: "Guaymallén",
    title: "Servicios industriales en Guaymallén | Servicio Integrado",
    intro: "Mecanizado, mantenimiento y fabricación para talleres e industrias de Guaymallén.",
    places: "Dorrego, Villa Nueva y Bermejo",
    paragraphs: [
      "En Guaymallén, una consulta puede llegar desde Dorrego, Villa Nueva, Bermejo o cualquier otro punto del departamento. Servicio Integrado atiende necesidades concretas de talleres e industrias: reparar un componente, fabricar una pieza, resolver una unión soldada o revisar un equipo que necesita mantenimiento.",
      "El contacto inicial se puede hacer con fotos generales y de detalle. También ayudan las medidas, el plano, una muestra y una breve explicación del uso. Esa información permite orientar el trabajo hacia mecanizado CNC o convencional, soldadura MIG o TIG, estructuras, mantenimiento, hidráulica o neumática.",
      "Cuando el trabajo involucra una cinta de transporte, una mesa vibrante, una sala de bomba o un equipo de frío, se analiza la relación entre el componente y la instalación. El presupuesto se conversa antes de la ejecución y cualquier visita o entrega se coordina previamente.",
      "Si necesitás consultar un trabajo industrial en Guaymallén, comunicate por WhatsApp o teléfono. Atendemos de lunes a sábados de 08:00 a 17:30 hs. Los domingos permanecemos cerrados. La consulta puede avanzar con una imagen del conjunto, una medida y una explicación del resultado que necesitás recuperar. Cuando se trata de una pieza, también sirve señalar si existe una muestra o un plano; cuando se trata de un equipo, una foto general ayuda a entender su ubicación. Esos datos hacen más clara la conversación inicial y permiten describir mejor el pedido. El objetivo es que cada consulta tenga una referencia concreta desde el primer contacto y desde el inicio.",
    ],
    faqs: [
      ["¿Atienden en Dorrego, Villa Nueva y Bermejo?", "Sí, son localidades y referencias de Guaymallén incluidas dentro de la cobertura del departamento."],
      ["¿Qué puedo mandar para una reparación?", "Fotos, medidas y una descripción del componente o del equipo que necesita atención."],
      ["¿Pueden fabricar una pieza a medida?", "Sí, el sitio contempla piezas, ejes, bujes y componentes según plano o muestra."],
      ["¿Cómo se coordinan los trabajos?", "Se revisa el pedido, se conversa el alcance y se acuerda previamente la modalidad."],
    ],
  },
  {
    slug: "las-heras",
    name: "Las Heras",
    title: "Servicios industriales en Las Heras | Servicio Integrado",
    intro: "Mantenimiento industrial, soldadura y mecanizado para Las Heras y sus talleres.",
    places: "El Challao, El Plumerillo y Panquehua",
    paragraphs: [
      "Las Heras forma parte de la cobertura de Servicio Integrado, incluyendo referencias como El Challao, El Plumerillo y Panquehua. El trabajo puede ser tan puntual como fabricar un buje o reparar una unión, o involucrar una estructura, una sala de bomba o un equipo que necesita mantenimiento.",
      "La mejor forma de iniciar la consulta es contar qué dejó de funcionar y qué resultado necesitás recuperar. Fotos, medidas, una muestra o un plano ayudan a definir si corresponde un trabajo de mecanizado, una soldadura, una estructura o una intervención de mantenimiento. En la conversación también se puede ordenar una necesidad de hidráulica o neumática.",
      "Servicio Integrado prepara el trabajo a partir de un relevamiento inicial, la confirmación de materiales y un presupuesto. Si el componente debe revisarse en el lugar, la visita se coordina previamente. Cuando puede resolverse en taller, se acuerdan las medidas, la entrega y el seguimiento.",
      "Para consultar desde Las Heras, podés enviar la información por WhatsApp o llamar. Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos está cerrado. Si el componente está desmontado, una foto y sus medidas permiten preparar mejor la conversación técnica. En piezas instaladas, una imagen del conjunto y una descripción de la falla ayudan a decidir si hace falta coordinar una revisión o trabajar con una referencia. La información se suma al relevamiento del caso y ayuda a ordenar las alternativas de trabajo para el taller y la consulta.",
    ],
    faqs: [
      ["¿Qué referencias de Las Heras pueden mencionarse?", "El Challao, El Plumerillo y Panquehua son referencias locales incluidas en esta página de cobertura."],
      ["¿Pueden revisar un equipo en mantenimiento?", "Sí, podés contar la falla y enviar imágenes para ordenar la revisión y el presupuesto."],
      ["¿Trabajan con estructuras metálicas?", "Sí, la fabricación de estructuras y la soldadura forman parte de las soluciones publicadas en Inicio."],
      ["¿Cuándo puedo comunicarme?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos no hay atención."],
    ],
  },
  {
    slug: "maipu",
    name: "Maipú",
    title: "Servicios industriales en Maipú | Servicio Integrado",
    intro: "Mecanizado, estructuras y mantenimiento para industrias y talleres de Maipú.",
    places: "Coquimbito, Luzuriaga y Rodeo del Medio",
    paragraphs: [
      "Para una industria o un taller de Maipú, una demora puede estar relacionada con una pieza, un soporte, una reparación o una instalación. Servicio Integrado recibe consultas de Coquimbito, Luzuriaga, Rodeo del Medio y otras zonas del departamento para ordenar ese trabajo y definir el próximo paso.",
      "El pedido puede vincularse con mecanizado de una pieza, soldadura y estructuras, mantenimiento industrial, hidráulica o neumática. También se pueden consultar trabajos sobre cintas de transporte, mesas vibratorias, volcadores hidráulicos, salas de bomba y equipos de frío. La información se revisa con base en el equipo y en el uso que tendrá.",
      "Mandá fotografías de la pieza o del conjunto, medidas aproximadas y una explicación breve. Si existe un plano, una muestra o una estructura previa, esa referencia ayuda a conversar materiales y alcance. La ejecución se coordina en taller o mediante una visita acordada previamente.",
      "El contacto se realiza por WhatsApp o teléfono, de lunes a sábados entre las 08:00 y las 17:30 hs. Los domingos permanecemos cerrados. Si estás en Maipú y necesitás una solución a medida, podés iniciar la consulta con los datos que tengas disponibles y acordar previamente la modalidad de trabajo. Una descripción del entorno de uso, junto con fotos del componente, permite ordenar mejor una consulta de taller y separar la pieza del resto de la instalación. De esa manera, el intercambio inicial resulta más preciso y se puede revisar mejor el alcance previsto del trabajo completo.",
    ],
    faqs: [
      ["¿Qué localidades de Maipú se incluyen?", "La página menciona Coquimbito, Luzuriaga y Rodeo del Medio como referencias del departamento."],
      ["¿Puedo consultar por una cinta de transporte?", "Sí, cinta de transporte figura entre los trabajos y especialidades visibles en Inicio."],
      ["¿Qué pasa si no tengo un plano?", "Podés enviar fotos, una muestra o medidas para orientar la consulta del componente."],
      ["¿Las visitas son espontáneas?", "No; se coordinan previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "lujan-de-cuyo",
    name: "Luján de Cuyo",
    title: "Servicios industriales en Luján de Cuyo | Servicio Integrado",
    intro: "Trabajos de taller, mantenimiento y fabricación para Luján de Cuyo.",
    places: "Chacras de Coria, Carrodilla y Vistalba",
    paragraphs: [
      "Luján de Cuyo incluye zonas como Chacras de Coria, Carrodilla y Vistalba dentro de la cobertura que podés consultar con Servicio Integrado. El punto de partida es la necesidad concreta: una pieza que debe mecanizarse, una soldadura, una estructura, un mantenimiento o una adaptación para que un equipo vuelva a trabajar.",
      "La información inicial puede ser una foto, una medida, una muestra o un plano. También es importante contar en qué parte del proceso se usa el componente y qué dificultad aparece. Con esos datos se conversa una solución de taller y, cuando corresponde, la coordinación de una visita o una entrega.",
      "Además de mecanizado CNC y convencional, soldadura y estructuras, la página de Inicio presenta mantenimiento, cinta de transporte, mesa vibrante, volcadores hidráulicos, salas de bomba, instalación de equipos de frío, neumática e hidráulica. Cada pedido se organiza según el servicio que realmente necesita.",
      "Podés comunicarte desde Luján de Cuyo por WhatsApp o teléfono. El taller atiende lunes a sábados de 08:00 a 17:30 hs.; los domingos no atiende. Las visitas se coordinan previamente y el primer mensaje puede incluir una foto del lugar o del componente. Si el trabajo parte de una pieza existente, contar con una muestra, un croquis o medidas aproximadas facilita la evaluación inicial y la conversación sobre el alcance. El material disponible se revisa junto con la necesidad concreta para orientar el siguiente paso y organizar la consulta con claridad de manera sencilla hoy.",
    ],
    faqs: [
      ["¿La cobertura incluye Chacras de Coria, Carrodilla y Vistalba?", "Sí, son referencias de Luján de Cuyo incluidas en esta página de cobertura."],
      ["¿Qué tipo de pieza puedo consultar?", "Piezas, ejes, bujes y componentes a medida según plano, muestra o medidas."],
      ["¿Pueden combinar servicios?", "Sí, un trabajo puede relacionar mecanizado, soldadura, estructuras o mantenimiento según su alcance."],
      ["¿Cuál es el horario de atención?", "Lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
  {
    slug: "lavalle",
    name: "Lavalle",
    title: "Servicios industriales en Lavalle | Servicio Integrado",
    intro: "Mantenimiento, mecanizado, soldadura y estructuras para Lavalle.",
    places: "Lavalle y localidades del departamento",
    paragraphs: [
      "Servicio Integrado incluye Lavalle dentro de la cobertura del Gran Mendoza. Para consultar un trabajo desde el departamento, podés comenzar con una explicación del equipo, una fotografía, una medida o una muestra. Esa información permite conversar una reparación, una pieza, una estructura o una tarea de mantenimiento.",
      "El taller trabaja con mecanizado CNC y convencional, soldadura MIG y TIG, estructuras y mantenimiento industrial. También recibe consultas por cinta de transporte, mesa vibrante, volcadores hidráulicos, salas de bomba, equipos de frío, neumática e hidráulica, siempre con el alcance definido para cada caso.",
      "La coordinación parte de entender dónde está la dificultad y qué necesita volver a funcionar. Después se revisan las medidas y materiales, se prepara un presupuesto y se acuerda si el trabajo se realiza en taller o requiere una visita previamente coordinada. El contacto directo ayuda a evitar pasos innecesarios.",
      "Si estás en Lavalle y necesitás consultar un trabajo industrial, escribí por WhatsApp o llamá. Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados. La visita se coordina previamente y podés indicar si la pieza está fuera del equipo o todavía instalada. Una explicación breve del problema, acompañada por fotos y medidas, permite comenzar la conversación con una referencia concreta y acordar cómo seguir. Así el pedido puede pasar rápidamente a una revisión ordenada y a una conversación clara sobre el trabajo, con los datos disponibles para evaluar la consulta de forma ordenada y precisa.",
    ],
    faqs: [
      ["¿Lavalle forma parte de la cobertura?", "Sí, Lavalle está incluido dentro de los departamentos del Gran Mendoza atendidos por Servicio Integrado."],
      ["¿Puedo consultar por mantenimiento?", "Sí, el mantenimiento preventivo y correctivo figura entre los servicios de Inicio."],
      ["¿Cómo envío una pieza para revisar?", "Podés comenzar por WhatsApp con fotos, medidas o una muestra y coordinar previamente la entrega."],
      ["¿Atienden los sábados?", "Sí, el horario es de lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
];

export const zoneBySlug = new Map(zonePages.map((zone) => [zone.slug, zone]));
