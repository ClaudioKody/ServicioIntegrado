export type ZonePageData = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  places: string;
  photos: Array<{ file: string; alt: string }>;
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
    photos: [{ file: "/assets/portfolio/obra-04.webp", alt: "Bomba, motor y válvulas en mantenimiento" }, { file: "/assets/portfolio/obra-12.webp", alt: "Reductor con engranajes en revisión" }],
    paragraphs: [
      "En Capital podés consultar por una pieza, una reparación, una estructura o una intervención de mantenimiento. Servicio Integrado recibe el pedido con fotos, medidas, un plano o una explicación del problema y conversa el alcance antes de avanzar.",
      "La propuesta puede incluir mecanizado CNC o convencional, soldadura MIG o TIG, estructuras, mantenimiento, cinta de transporte, mesa vibrante, volcadores hidráulicos, salas de bomba, equipos de frío, neumática o hidráulica. El servicio se define según el componente y el uso concreto.",
      "Algunas tareas se resuelven en taller. Cuando hace falta revisar un equipo, entregar una pieza o conocer el lugar, la visita se coordina previamente. Para iniciar una consulta desde la Ciudad de Mendoza, escribí por WhatsApp o llamá de lunes a sábados, de 08:00 a 17:30 hs.; los domingos está cerrado. Si el trabajo se relaciona con una instalación, una foto del conjunto ayuda a separar el componente puntual del resto del equipo. Trabajamos con industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
    ],
    faqs: [
      ["¿Puedo consultar por una pieza desde Capital?", "Sí. Enviá fotos, medidas, un plano o una muestra para orientar el mecanizado o la reparación."],
      ["¿Cómo se coordina una visita en la Ciudad de Mendoza?", "Se acuerda previamente por WhatsApp o teléfono, según el trabajo que necesites revisar."],
      ["¿Qué horario tienen?", "Atendemos de lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado."],
      ["¿Pueden trabajar sobre una estructura existente?", "Sí. La consulta puede incluir reparación, refuerzo o fabricación de una estructura."],
    ],
  },
  {
    slug: "godoy-cruz",
    name: "Godoy Cruz",
    title: "Servicios industriales en Godoy Cruz | Servicio Integrado",
    intro: "Soluciones de mantenimiento, soldadura, estructuras y mecanizado para Godoy Cruz.",
    places: "San Francisco del Monte, Las Tortugas y Villa Hipódromo",
    photos: [{ file: "/assets/portfolio/obra-07.webp", alt: "Conexiones flexibles de circuito hidráulico" }, { file: "/assets/portfolio/obra-30.webp", alt: "Unión soldada de cañería" }],
    paragraphs: [
      "La cobertura de Godoy Cruz incluye referencias como San Francisco del Monte, Las Tortugas y Villa Hipódromo. El pedido puede comenzar con una falla de mantenimiento, una pieza que dejó de funcionar, una estructura para reparar o una adaptación para un equipo.",
      "Para ordenar la consulta, podés enviar una foto general y otra de detalle, junto con las medidas disponibles. Con esa información se conversa si corresponde mecanizado, soldadura, fabricación, mantenimiento, hidráulica, neumática, cinta de transporte o mesa vibrante.",
      "El alcance se define antes del presupuesto: qué se realiza en taller, qué componente se necesita y si hace falta coordinar una visita. También podés consultar por salas de bomba, volcadores hidráulicos o equipos de frío. Escribí o llamá de lunes a sábados, de 08:00 a 17:30 hs.; los domingos no atendemos. En Godoy Cruz, la consulta puede comenzar aunque todavía estés reuniendo todas las medidas: alcanza con explicar el problema y enviar las referencias disponibles. Atendemos pedidos de industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
    ],
    faqs: [
      ["¿Qué puedo enviar por WhatsApp para explicar una falla?", "Una foto del conjunto, una imagen del detalle, las medidas disponibles y una breve descripción del problema."],
      ["¿Atienden consultas de Villa Hipódromo?", "Sí, Villa Hipódromo, Las Tortugas y San Francisco del Monte son referencias de cobertura en Godoy Cruz."],
      ["¿Pueden combinar mecanizado y soldadura?", "Se puede revisar como un mismo trabajo cuando la pieza o la estructura lo requiere."],
      ["¿Cómo se coordina una revisión?", "La visita o entrega del componente se acuerda previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "guaymallen",
    name: "Guaymallén",
    title: "Servicios industriales en Guaymallén | Servicio Integrado",
    intro: "Mecanizado, mantenimiento y fabricación para talleres e industrias de Guaymallén.",
    places: "Dorrego, Villa Nueva y Bermejo",
    photos: [{ file: "/assets/portfolio/obra-11.webp", alt: "Equipo de proceso en acero inoxidable" }, { file: "/assets/portfolio/obra-19.webp", alt: "Red de tuberías y válvulas de proceso" }],
    paragraphs: [
      "En Guaymallén, la consulta puede llegar desde Dorrego, Villa Nueva, Bermejo o cualquier otro punto del departamento. Servicio Integrado atiende pedidos concretos: fabricar una pieza, reparar una unión soldada, mantener un equipo o resolver un componente de una instalación.",
      "El trabajo puede relacionarse con mecanizado CNC y convencional, soldadura MIG o TIG, estructuras, mantenimiento, hidráulica y neumática. También podés consultar por cintas de transporte, mesas vibratorias, salas de bomba, volcadores hidráulicos e instalación de equipos de frío.",
      "Fotos generales y de detalle ayudan a ubicar el componente. Si tenés medidas, una muestra o un plano, sumalos al mensaje. Después se conversa el alcance, los materiales y la modalidad: taller, entrega del componente o visita coordinada previamente. El horario es de lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados. La explicación del uso permite distinguir una pieza aislada de una intervención sobre el conjunto. La experiencia publicada incluye trabajos para industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
    ],
    faqs: [
      ["¿Atienden en Dorrego, Villa Nueva y Bermejo?", "Sí, son referencias de Guaymallén incluidas dentro del área de cobertura."],
      ["¿Qué datos necesitan para revisar una pieza?", "Fotos, medidas, una muestra o un plano, además de una explicación de cómo se usa el componente."],
      ["¿Puedo consultar por una sala de bomba?", "Sí. Podés enviar imágenes generales y de detalle de la instalación y sus componentes."],
      ["¿Cómo coordinan una visita en Guaymallén?", "Se acuerda previamente por WhatsApp o teléfono, según el componente o equipo que haya que revisar."],
    ],
  },
  {
    slug: "las-heras",
    name: "Las Heras",
    title: "Servicios industriales en Las Heras | Servicio Integrado",
    intro: "Mantenimiento industrial, soldadura y mecanizado para Las Heras y sus talleres.",
    places: "El Challao, El Plumerillo y Panquehua",
    photos: [{ file: "/assets/portfolio/obra-25.webp", alt: "Motorreductor montado en equipo" }, { file: "/assets/portfolio/obra-28.webp", alt: "Mantenimiento de equipo en planta" }],
    paragraphs: [
      "Las Heras forma parte de la cobertura de Servicio Integrado, con referencias como El Challao, El Plumerillo y Panquehua. Podés consultar por un buje, una unión, una estructura, una sala de bomba o un equipo que necesita mantenimiento.",
      "El primer mensaje puede explicar qué dejó de funcionar y qué resultado necesitás recuperar. Las fotos, medidas, una muestra o un plano permiten orientar el pedido hacia mecanizado, soldadura, estructuras, mantenimiento, hidráulica o neumática.",
      "Cuando el componente está desmontado, se puede conversar el trabajo de taller a partir de sus medidas y materiales. Si todavía está instalado, se evalúa la información disponible y se coordina previamente una visita cuando corresponda. Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos no hay atención. La descripción de la falla ayuda a decidir si alcanza con una referencia o si conviene revisar el equipo. Recibimos consultas de industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
    ],
    faqs: [
      ["¿Puedo enviar un componente desmontado?", "Sí. Las fotos, medidas y una muestra ayudan a orientar una reparación o fabricación."],
      ["¿Trabajan con estructuras metálicas?", "Sí, la soldadura y la fabricación de estructuras forman parte de las soluciones disponibles."],
      ["¿Qué pasa si el equipo sigue instalado?", "Podés enviar fotos del conjunto y describir la falla para coordinar el siguiente paso."],
      ["¿Cuál es el horario de atención?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
  {
    slug: "maipu",
    name: "Maipú",
    title: "Servicios industriales en Maipú | Servicio Integrado",
    intro: "Mecanizado, estructuras y mantenimiento para industrias y talleres de Maipú.",
    places: "Coquimbito, Luzuriaga y Rodeo del Medio",
    photos: [{ file: "/assets/portfolio/obra-14.webp", alt: "Tolva y canal de descarga en acero inoxidable" }, { file: "/assets/portfolio/obra-23.webp", alt: "Tolva y carcasa de acero inoxidable" }],
    paragraphs: [
      "En Maipú, una pieza, un soporte, una reparación o una instalación puede requerir una respuesta de taller. Servicio Integrado recibe consultas de Coquimbito, Luzuriaga, Rodeo del Medio y otras zonas del departamento.",
      "El pedido puede corresponder a mecanizado, soldadura y estructuras, mantenimiento industrial, hidráulica o neumática. También se pueden revisar trabajos vinculados con cintas de transporte, mesas vibratorias, volcadores hidráulicos, salas de bomba y equipos de frío.",
      "Para empezar, enviá una imagen de la pieza o del conjunto y contá qué función debe cumplir. Si existe un plano, una muestra o una estructura previa, esa referencia ayuda a conversar medidas, materiales y alcance. Las consultas se reciben de lunes a sábados, de 08:00 a 17:30 hs.; los domingos permanecemos cerrados. Las visitas se coordinan previamente. También podés indicar si el componente está separado o sigue instalado en el equipo. Trabajamos con industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
    ],
    faqs: [
      ["¿Qué localidades de Maipú están incluidas?", "La cobertura contempla Maipú y referencias como Coquimbito, Luzuriaga y Rodeo del Medio."],
      ["¿Qué puedo enviar si no tengo un plano?", "Fotos, medidas aproximadas, una muestra y una explicación del uso del componente."],
      ["¿Puedo consultar por una cinta de transporte?", "Sí. Podés describir qué parte necesita reparación, fabricación o revisión y adjuntar imágenes."],
      ["¿Cómo se agenda una visita?", "Se coordina previamente por WhatsApp o teléfono, de acuerdo con el alcance del trabajo."],
    ],
  },
  {
    slug: "lujan-de-cuyo",
    name: "Luján de Cuyo",
    title: "Servicios industriales en Luján de Cuyo | Servicio Integrado",
    intro: "Trabajos de taller, mantenimiento y fabricación para Luján de Cuyo.",
    places: "Chacras de Coria, Carrodilla y Vistalba",
    photos: [{ file: "/assets/portfolio/obra-24.webp", alt: "Transportador inclinado con accionamiento" }, { file: "/assets/portfolio/obra-27.webp", alt: "Cinta de transporte en proceso" }],
    paragraphs: [
      "Luján de Cuyo incluye Chacras de Coria, Carrodilla y Vistalba dentro de la cobertura que podés consultar con Servicio Integrado. El punto de partida puede ser una pieza para mecanizar, una soldadura, una estructura, un mantenimiento o una adaptación.",
      "La información inicial no necesita tener un formato único: podés compartir una foto, una medida, una muestra o un plano. También sirve explicar en qué parte del equipo se usa el componente y qué dificultad aparece. Así se puede conversar una solución de taller o la necesidad de coordinar una visita.",
      "Además de mecanizado CNC y convencional, soldadura y estructuras, se reciben consultas por mantenimiento, cinta de transporte, mesa vibrante, volcadores hidráulicos, salas de bomba, equipos de frío, neumática e hidráulica. El contacto es de lunes a sábados de 08:00 a 17:30 hs.; los domingos no atendemos. La información de la pieza y del lugar donde trabaja permite ordenar una fabricación o una reparación. Atendemos a industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
    ],
    faqs: [
      ["¿La cobertura incluye Chacras de Coria, Carrodilla y Vistalba?", "Sí, son referencias de Luján de Cuyo incluidas dentro del área de cobertura."],
      ["¿Qué información sirve para una pieza a medida?", "Un plano, una muestra, medidas disponibles y fotos del componente o del lugar donde trabaja."],
      ["¿Pueden relacionar mecanizado y mantenimiento?", "Sí, el alcance se conversa según la pieza y el equipo donde debe funcionar."],
      ["¿Cómo se coordina la entrega o una visita?", "Se acuerda previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "lavalle",
    name: "Lavalle",
    title: "Servicios industriales en Lavalle | Servicio Integrado",
    intro: "Mantenimiento, mecanizado, soldadura y estructuras para Lavalle.",
    places: "Lavalle y localidades del departamento",
    photos: [{ file: "/assets/portfolio/obra-03.webp", alt: "Cañerías de servicio en exterior" }, { file: "/assets/portfolio/obra-31.webp", alt: "Cañerías en canal técnico" }],
    paragraphs: [
      "Lavalle forma parte de la cobertura del Gran Mendoza. La consulta puede empezar con una fotografía, una medida, una muestra o una explicación del equipo. Con esos datos se conversa una reparación, una pieza, una estructura o una tarea de mantenimiento.",
      "Servicio Integrado recibe pedidos de mecanizado CNC y convencional, soldadura MIG y TIG, estructuras, mantenimiento industrial, cinta de transporte, mesa vibrante, volcadores hidráulicos, salas de bomba, equipos de frío, neumática e hidráulica.",
      "El alcance se define antes de avanzar: qué componente se revisa, qué materiales intervienen y si el trabajo se realiza en taller o requiere coordinar una visita. Podés escribir por WhatsApp o llamar de lunes a sábados, de 08:00 a 17:30 hs.; los domingos está cerrado. Si la pieza sigue instalada, indicá su ubicación y la dificultad observada; si está desmontada, sumá sus medidas. Las consultas incluyen industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
    ],
    faqs: [
      ["¿Lavalle forma parte de la cobertura?", "Sí, Lavalle está incluido dentro del área de cobertura de Servicio Integrado."],
      ["¿Qué conviene mostrar en una consulta de mantenimiento?", "Una foto del equipo, una imagen del detalle y una descripción de la dificultad que presenta."],
      ["¿Puedo consultar por una pieza que sigue instalada?", "Sí. Indicá dónde está montada y qué sucede para conversar cómo revisarla."],
      ["¿Cómo se coordina la entrega de un componente?", "Se acuerda previamente por WhatsApp o teléfono."],
    ],
  },
];

export const zoneBySlug = new Map(zonePages.map((zone) => [zone.slug, zone]));
