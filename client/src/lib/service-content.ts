export type ServicePhoto = {
  file: string;
  alt: string;
};

export type ServicePageData = {
  slug: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  photos: ServicePhoto[];
  paragraphs: string[];
  faqs: Array<[string, string]>;
};

const photo = (number: string, alt: string): ServicePhoto => ({ file: `/assets/portfolio/obra-${number}.webp`, alt });

const rawServicePages: ServicePageData[] = [
  {
    slug: "mantenimiento-industrial",
    name: "Mantenimiento industrial",
    eyebrow: "01 · MANTENIMIENTO",
    shortDescription: "Mantenimiento preventivo y correctivo para equipos e instalaciones de industrias y talleres de Mendoza.",
    photos: [
      photo("12", "Reductor con engranajes en revisión"),
      photo("13", "Reductor y engranajes de transmisión"),
      photo("25", "Motorreductor montado en equipo"),
    ],
    paragraphs: [
      "Las fotos de esta página muestran reductores con engranajes en revisión y un motorreductor montado en equipo. Son trabajos de mantenimiento sobre componentes que forman parte de una transmisión y que deben volver a integrarse al conjunto.",
      "También aparecen tareas en planta sobre bombas, motores, válvulas y equipos de proceso. La revisión puede comenzar con una falla puntual, una reparación pendiente o la necesidad de intervenir un equipo antes de volver a usarlo.",
      "El alcance puede relacionarse con una pieza, una bomba, una estructura, una unión, hidráulica, neumática, mecanizado o soldadura. Servicio Integrado atiende a industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Podés enviar fotos, medidas y una descripción del equipo desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle. Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados.",
    ],
    faqs: [
      ["¿Qué muestran las fotos de mantenimiento?", "Reductores, engranajes, un motorreductor y equipos de planta con bombas, motores y válvulas."],
      ["¿Qué información necesitan para revisar un equipo?", "Una descripción de la falla, fotos, medidas disponibles y cómo se usa el equipo."],
      ["¿El mantenimiento se realiza en taller o en el lugar?", "La modalidad se define según el equipo y se coordina previamente."],
      ["¿Cuál es el horario de atención?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
  {
    slug: "mecanizado-cnc-y-convencional",
    name: "Mecanizado CNC y convencional",
    eyebrow: "02 · MECANIZADO",
    shortDescription: "Piezas, ejes, bujes y componentes a medida según plano, muestra o medidas tomadas.",
    photos: [
      photo("18", "Piñón y cadena de transmisión"),
      photo("29", "Placa circular mecanizada"),
    ],
    paragraphs: [
      "El portfolio muestra un piñón junto a una cadena de transmisión y una placa circular mecanizada. Son componentes que se entienden por su forma, sus medidas y la función que cumplen dentro de un equipo.",
      "El mecanizado puede partir de un plano, una muestra, fotografías técnicas o medidas tomadas sobre la pieza. La consulta puede referirse a ejes, bujes, placas, piñones u otros componentes que necesitan conservar dimensiones de trabajo.",
      "La relación con una transmisión, una bomba, una estructura o una instalación hidráulica se conversa al definir el alcance. Trabajamos para industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas de Mendoza.",
      "Servicio Integrado recibe consultas de Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Escribí de lunes a sábados de 08:00 a 17:30 hs.; los domingos no atendemos y las visitas se coordinan previamente.",
    ],
    faqs: [
      ["¿Qué piezas aparecen en las fotos?", "Un piñón con cadena de transmisión y una placa circular mecanizada."],
      ["¿Puedo llevar una muestra?", "Sí. También podés enviar un plano, medidas o fotografías técnicas."],
      ["¿Qué datos ayudan a mecanizar un componente?", "La función de la pieza, sus medidas, una muestra o un plano y fotos del conjunto."],
      ["¿Cuándo puedo comunicarme?", "Las consultas se reciben de lunes a sábados, de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
  {
    slug: "soldadura-y-estructuras",
    name: "Soldadura y estructuras",
    eyebrow: "03 · SOLDADURA",
    shortDescription: "Soldadura MIG, TIG y fabricación de estructuras en acero inoxidable y acero al carbono.",
    photos: [
      photo("06", "Base estructural soldada para equipo"),
      photo("17", "Bastidor metálico para equipo"),
      photo("30", "Unión soldada de cañería"),
    ],
    paragraphs: [
      "Las imágenes muestran una base estructural soldada para equipo, un bastidor metálico y una unión soldada de cañería. Son ejemplos de piezas y conjuntos donde la soldadura forma parte de una solución industrial concreta.",
      "El trabajo puede abarcar una reparación, una base, un bastidor, un soporte o una unión. Servicio Integrado trabaja con soldadura MIG y TIG y con estructuras en acero inoxidable y acero al carbono.",
      "Cuando la estructura se relaciona con una cinta de transporte, una mesa vibrante, una sala de bomba o una instalación, se conversa también cómo encajan las partes. Atendemos industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Podés consultar desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Atendemos lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados.",
    ],
    faqs: [
      ["¿Qué trabajos muestran las fotos?", "Una base estructural soldada, un bastidor metálico y una unión soldada de cañería."],
      ["¿Qué procesos de soldadura trabajan?", "La información confirmada incluye soldadura MIG y TIG."],
      ["¿Qué materiales puedo consultar?", "Se pueden consultar estructuras en acero inoxidable y acero al carbono."],
      ["¿Cómo se coordinan las visitas?", "Se acuerdan previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "cinta-de-transporte",
    name: "Cinta de transporte",
    eyebrow: "04 · ESPECIALIDAD",
    shortDescription: "Fabricación, reparación y revisión de componentes vinculados con cintas de transporte.",
    photos: [
      photo("27", "Cinta de transporte en proceso"),
      photo("24", "Transportador inclinado con accionamiento"),
    ],
    paragraphs: [
      "En el portfolio se ve una cinta de transporte en proceso y un transportador inclinado con accionamiento. Las imágenes permiten identificar el conjunto, su estructura y la parte que debe continuar fabricándose o revisándose.",
      "Una cinta puede requerir una reparación, un soporte, una estructura o un componente vinculado con su accionamiento. Para ordenar el pedido sirven fotos generales y de detalle, medidas y una descripción del desgaste o de la dificultad.",
      "Si la cinta está vinculada con una mesa vibrante, un motor, un reductor o una instalación, esa relación se toma en cuenta al definir el trabajo. Servicio Integrado atiende a industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos está cerrado. Las consultas de Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle se coordinan por WhatsApp o teléfono.",
    ],
    faqs: [
      ["¿Qué fotos conviene enviar para una cinta?", "Una imagen del conjunto, otra del detalle y las medidas aproximadas de la parte involucrada."],
      ["¿Qué muestran las fotos de este servicio?", "Una cinta de transporte en proceso y un transportador inclinado con accionamiento."],
      ["¿La consulta puede incluir mantenimiento?", "Sí, el mantenimiento forma parte de los servicios que se pueden conversar."],
      ["¿Cuál es el horario?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos no atendemos."],
    ],
  },
  {
    slug: "mesa-vibrante",
    name: "Mesa vibrante",
    eyebrow: "05 · ESPECIALIDAD",
    shortDescription: "Revisión y fabricación de componentes para mesas vibratorias según el trabajo requerido.",
    photos: [photo("26", "Mesa vibrante")],
    paragraphs: [
      "La foto publicada en Inicio muestra una mesa vibrante como conjunto de fabricación. La estructura y sus componentes se observan como una unidad, por eso la consulta comienza por el equipo y por la parte que necesita atención.",
      "Si una unión necesita reparación, una parte se desgasta o hay que fabricar un componente, podés enviar fotos, medidas y una explicación de qué cambió. También sirve indicar si el trabajo se vincula con un motor, un reductor o una base.",
      "Según el caso, el pedido puede incluir soldadura, fabricación de estructura, mecanizado o mantenimiento. Servicio Integrado trabaja para industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Recibimos consultas del Gran Mendoza de lunes a sábados, entre las 08:00 y las 17:30 hs.; los domingos permanecemos cerrados y las visitas se coordinan previamente.",
    ],
    faqs: [
      ["¿Qué muestra la foto de este servicio?", "Una mesa vibrante como conjunto de fabricación."],
      ["¿Qué parte de una mesa vibrante puedo consultar?", "La estructura, una unión, una pieza o un componente que necesite reparación o fabricación."],
      ["¿Puede combinarse soldadura con mecanizado?", "Se evalúa según el conjunto y el alcance confirmado en la consulta."],
      ["¿Cuándo atienden?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
  {
    slug: "volcadores-hidraulicos",
    name: "Volcadores hidráulicos",
    eyebrow: "06 · ESPECIALIDAD",
    shortDescription: "Mantenimiento y fabricación de componentes para volcadores hidráulicos según medidas y uso.",
    photos: [photo("07", "Conexiones flexibles de circuito hidráulico")],
    paragraphs: [
      "La foto vinculada con este servicio muestra conexiones flexibles de un circuito hidráulico. El componente se entiende dentro de una instalación y de un equipo que necesita mantener sus conexiones en condiciones de trabajo.",
      "En un volcador hidráulico, una estructura, un soporte, una pieza o una conexión puede requerir mantenimiento o fabricación. Las fotos generales y de detalle, las medidas y el uso del equipo ayudan a conversar el alcance.",
      "Cuando el pedido incluye soldadura, mecanizado o hidráulica, se organiza dentro de la misma consulta. Servicio Integrado atiende a industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Podés comunicarte desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle. Atendemos lunes a sábados de 08:00 a 17:30 hs.; los domingos no hay atención.",
    ],
    faqs: [
      ["¿Qué muestra la foto del servicio?", "Conexiones flexibles de un circuito hidráulico."],
      ["¿Qué se puede consultar sobre un volcador hidráulico?", "Mantenimiento, reparación o fabricación de una parte, estructura, soporte o conexión."],
      ["¿Qué conviene mostrar en las fotos?", "El conjunto completo, el componente involucrado y el punto donde aparece el desgaste o la dificultad."],
      ["¿Cómo se coordina una visita?", "Se acuerda previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "salas-de-bomba",
    name: "Salas de bomba",
    eyebrow: "07 · ESPECIALIDAD",
    shortDescription: "Mantenimiento, estructuras y componentes para salas de bomba de industrias y talleres.",
    photos: [
      photo("04", "Bomba, motor y válvulas en mantenimiento"),
      photo("32", "Bomba y válvulas en mantenimiento"),
    ],
    paragraphs: [
      "Las fotos muestran una bomba, un motor y válvulas en mantenimiento, además de otra bomba con sus válvulas. En una sala de bomba, estos componentes se leen como parte de una instalación que debe revisarse en conjunto.",
      "La consulta puede referirse a una reparación, una adaptación, una pieza, una estructura o una tarea de mantenimiento. Fotos generales y de detalle, medidas y planos ayudan a conversar si el trabajo se resuelve en taller o requiere coordinar una revisión.",
      "El alcance puede incluir soldadura, estructuras, mecanizado, mantenimiento, hidráulica o fabricación de una pieza. Servicio Integrado trabaja para industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Escribí por WhatsApp o llamá desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle. El horario es de lunes a sábados de 08:00 a 17:30 hs.; los domingos está cerrado.",
    ],
    faqs: [
      ["¿Qué muestran las fotos de salas de bomba?", "Bombas, motores y válvulas en mantenimiento."],
      ["¿Qué parte de una sala de bomba pueden revisar?", "Bombas, cañerías, válvulas, soportes y otros componentes vinculados con la instalación."],
      ["¿Qué fotos sirven para iniciar la consulta?", "Fotos generales de la sala y detalles de la bomba, las cañerías, las válvulas o el soporte."],
      ["¿Cuándo puedo comunicarme?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos no atendemos."],
    ],
  },
  {
    slug: "instalacion-de-equipos-de-frio",
    name: "Instalación de equipos de frío",
    eyebrow: "08 · ESPECIALIDAD",
    shortDescription: "Trabajos de instalación y adecuación de equipos de frío dentro de procesos industriales.",
    photos: [
      photo("08", "Equipos de proceso en planta"),
      photo("15", "Instalación industrial en planta"),
    ],
    paragraphs: [
      "El portfolio muestra equipos de proceso en planta y una instalación industrial. Para una instalación de equipos de frío, esas referencias ayudan a observar el lugar, los equipos cercanos y la relación con la estructura existente.",
      "La consulta puede incluir una estructura, una adaptación o una revisión del espacio donde se incorpora el equipo. Podés enviar fotos, medidas disponibles y una descripción de la parte de la instalación que debe resolverse.",
      "Según la necesidad, el pedido puede relacionarse con fabricación, soldadura, estructuras, mantenimiento, hidráulica o neumática. Servicio Integrado recibe trabajos de industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Atendemos consultas del Gran Mendoza de lunes a sábados, de 08:00 a 17:30 hs.; los domingos permanecemos cerrados. Las visitas se acuerdan por WhatsApp o teléfono.",
    ],
    faqs: [
      ["¿Qué muestran las fotos de esta página?", "Equipos de proceso en planta y una instalación industrial."],
      ["¿Qué necesito enviar para consultar una instalación de frío?", "Fotos del lugar, medidas disponibles, datos del equipo y una descripción de la adaptación necesaria."],
      ["¿Pueden fabricar un soporte?", "Se revisa según las medidas, el material y la integración con el equipo."],
      ["¿Cómo se coordinan las visitas?", "Se acuerdan previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "neumatica",
    name: "Neumática",
    eyebrow: "09 · ESPECIALIDAD",
    shortDescription: "Mantenimiento y trabajos vinculados con soluciones neumáticas para industrias y talleres.",
    photos: [photo("19", "Red de tuberías y válvulas de proceso")],
    paragraphs: [
      "La foto muestra una red de tuberías y válvulas de proceso. Es una referencia visual de una instalación donde las conexiones, los recorridos y las válvulas forman parte del conjunto que debe revisarse.",
      "Una instalación neumática puede necesitar una revisión, una conexión o una adaptación. Enviá fotos de la instalación, medidas disponibles y una explicación de cuándo aparece la dificultad o qué parte del equipo depende de ella.",
      "Según el caso, el trabajo puede relacionarse con mantenimiento, soldadura, estructuras, mecanizado o hidráulica. Servicio Integrado atiende a industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Atendemos consultas de Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle de lunes a sábados, entre las 08:00 y las 17:30 hs. Los domingos está cerrado.",
    ],
    faqs: [
      ["¿Qué muestra la foto de esta página?", "Una red de tuberías y válvulas de proceso."],
      ["¿Qué información sirve para revisar una instalación?", "Fotos de las conexiones, medidas, el equipo relacionado y una descripción de cuándo aparece la dificultad."],
      ["¿Puede vincularse con mecanizado o estructuras?", "Sí, se evalúa si el trabajo requiere mantenimiento, mecanizado, soldadura o estructuras."],
      ["¿Cómo solicito una revisión?", "Escribí o llamá para explicar el trabajo y coordinar previamente la modalidad."],
    ],
  },
  {
    slug: "hidraulica",
    name: "Hidráulica",
    eyebrow: "10 · ESPECIALIDAD",
    shortDescription: "Mantenimiento y fabricación de componentes vinculados con instalaciones hidráulicas.",
    photos: [photo("07", "Conexiones flexibles de circuito hidráulico")],
    paragraphs: [
      "Las conexiones flexibles de circuito hidráulico que aparecen en el portfolio muestran un componente integrado a una instalación. La foto sirve para ubicar la relación entre la conexión, el equipo y el recorrido del circuito.",
      "Una instalación hidráulica puede presentar una pérdida, desgaste, una pieza dañada o una adaptación pendiente. Para revisar el pedido sirven fotos, medidas y una explicación de qué equipo está involucrado.",
      "La consulta puede relacionarse con un volcador hidráulico, una sala de bomba, una máquina, una conexión o una estructura. Servicio Integrado trabaja para industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Podés escribir por WhatsApp o teléfono desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle. Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados.",
    ],
    faqs: [
      ["¿Qué muestran las fotos hidráulicas?", "Conexiones flexibles de un circuito hidráulico integradas a una instalación."],
      ["¿Qué datos ayudan a identificar el problema?", "El equipo involucrado, fotos generales y de detalle, medidas y una descripción de lo que sucede."],
      ["¿Pueden fabricar una pieza hidráulica?", "Se analiza según el componente, las medidas, los materiales y su uso dentro del equipo."],
      ["¿La visita se coordina previamente?", "Sí, las visitas se acuerdan por WhatsApp o teléfono antes de realizarlas."],
    ],
  },
  {
    slug: "tableros-electricos-y-control",
    name: "Tableros eléctricos y control",
    eyebrow: "11 · TABLEROS Y CONTROL",
    shortDescription: "Tableros de distribución, gabinetes eléctricos y tableros de control documentados en trabajos del taller.",
    photos: [
      photo("01", "Tablero de distribución con protecciones"),
      photo("02", "Gabinete eléctrico con señalización"),
      photo("09", "Tablero de control con cableado"),
      photo("22", "Gabinete eléctrico de instalación"),
    ],
    paragraphs: [
      "Las fotos de Inicio muestran un tablero de distribución con protecciones, un gabinete eléctrico con señalización, un tablero de control con cableado y otro gabinete eléctrico de instalación.",
      "La página reúne esos trabajos documentados bajo la categoría Tableros y control. Para conversar una consulta sirven imágenes del tablero o gabinete, las medidas disponibles y una descripción de la instalación donde se encuentra.",
      "El pedido puede formar parte de una instalación industrial y relacionarse con mantenimiento, estructuras o fabricación según el componente que se deba revisar. Servicio Integrado trabaja para industrias vitivinícolas, petroleras, mineras, alimenticias y energéticas.",
      "Podés consultar desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle. Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados.",
    ],
    faqs: [
      ["¿Qué trabajos aparecen en las fotos?", "Un tablero de distribución con protecciones, gabinetes eléctricos y un tablero de control con cableado."],
      ["¿Qué conviene enviar para consultar un tablero?", "Fotos generales y de detalle, medidas disponibles y una descripción de la instalación."],
      ["¿La consulta puede relacionarse con una instalación industrial?", "Sí. El tablero o gabinete puede revisarse dentro del conjunto donde está instalado."],
      ["¿Cuál es el horario de atención?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
];

export const servicePages = rawServicePages;
export const serviceBySlug = new Map(servicePages.map((service) => [service.slug, service]));
