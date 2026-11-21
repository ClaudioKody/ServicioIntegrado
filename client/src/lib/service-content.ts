export type ServicePageData = {
  slug: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  paragraphs: string[];
  faqs: Array<[string, string]>;
};

const rawServicePages: ServicePageData[] = [
  {
    slug: "mantenimiento-industrial",
    name: "Mantenimiento industrial",
    eyebrow: "01 · MANTENIMIENTO",
    shortDescription: "Mantenimiento preventivo y correctivo para equipos e instalaciones de industrias y talleres de Mendoza.",
    paragraphs: [
      "El mantenimiento industrial puede comenzar con una falla puntual, una reparación pendiente o la necesidad de revisar un equipo antes de volver a usarlo. Servicio Integrado recibe la descripción del problema, fotos, medidas o una visita coordinada previamente para entender qué trabajo hace falta.",
      "La intervención puede relacionarse con una pieza, una bomba, una estructura, una unión o una instalación. Cuando el caso requiere mecanizado, soldadura, hidráulica, neumática o fabricación, esas tareas se conversan como parte del mismo alcance.",
      "Después del relevamiento se confirman medidas, materiales y próximos pasos. Algunas reparaciones se realizan en taller; otras requieren coordinar previamente la revisión o la entrega del componente. El presupuesto se prepara antes de avanzar.",
      "Escribí por WhatsApp o llamá si estás en Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle. Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados.",
    ],
    faqs: [
      ["¿Qué información necesitan para revisar un equipo?", "Una descripción de la falla, fotos, medidas disponibles y cómo se usa el equipo."],
      ["¿El mantenimiento se realiza en taller o en el lugar?", "La modalidad se define según el equipo y se coordina previamente."],
      ["¿Cómo solicito un presupuesto?", "Podés escribir por WhatsApp o llamar para conversar el alcance inicial."],
      ["¿Cuál es el horario de atención?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
  {
    slug: "mecanizado-cnc-y-convencional",
    name: "Mecanizado CNC y convencional",
    eyebrow: "02 · MECANIZADO",
    shortDescription: "Piezas, ejes, bujes y componentes a medida según plano, muestra o medidas tomadas.",
    paragraphs: [
      "Una pieza puede necesitar mecanizado cuando se desgasta, deja de ajustarse o no existe un repuesto estándar. Para orientar el trabajo sirven un plano, una muestra, fotografías técnicas o las medidas disponibles.",
      "La consulta puede referirse a ejes, bujes, placas y otros componentes a medida. También podés enviar una pieza usada para conversar qué dimensiones deben conservarse y qué función tiene dentro del equipo.",
      "El proceso se ordena con el relevamiento, la confirmación de medidas y materiales, el presupuesto y la ejecución. Si el componente forma parte de una estructura, una transmisión, una bomba o una instalación hidráulica, esa relación se considera al definir el alcance.",
      "Servicio Integrado atiende consultas de Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Escribí de lunes a sábados de 08:00 a 17:30 hs.; los domingos no atendemos y las visitas se coordinan previamente.",
    ],
    faqs: [
      ["¿Puedo llevar una muestra?", "Sí. También podés enviar un plano, medidas o fotografías técnicas."],
      ["¿Trabajan piezas únicas?", "La consulta se revisa según la pieza, sus medidas y el uso que tendrá."],
      ["¿Qué datos ayudan a mecanizar un componente?", "La función de la pieza, sus medidas, una muestra o un plano y fotos del conjunto."],
      ["¿Cuándo puedo comunicarme?", "Las consultas se reciben de lunes a sábados, de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
  {
    slug: "soldadura-y-estructuras",
    name: "Soldadura y estructuras",
    eyebrow: "03 · SOLDADURA",
    shortDescription: "Soldadura MIG, TIG y fabricación de estructuras en acero inoxidable y acero al carbono.",
    paragraphs: [
      "Soldadura y estructuras abarca desde una reparación de conjunto hasta la fabricación de una base, un bastidor, un soporte o una protección. Para conversar el trabajo se pueden enviar medidas, fotografías, planos o una pieza existente.",
      "Servicio Integrado trabaja con soldadura MIG y TIG y con estructuras en acero inoxidable y acero al carbono. El material, las dimensiones y el uso de la estructura se revisan antes de confirmar el alcance.",
      "Cuando la estructura se integra con una cinta de transporte, una mesa vibrante, una sala de bomba o una instalación, se conversa también la relación entre las partes. La ejecución puede coordinarse en taller o mediante una visita previamente acordada.",
      "Podés consultar desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Atendemos lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados.",
    ],
    faqs: [
      ["¿Qué procesos de soldadura trabajan?", "La información confirmada incluye soldadura MIG y TIG."],
      ["¿Qué materiales puedo consultar?", "Se pueden consultar estructuras en acero inoxidable y acero al carbono."],
      ["¿Puedo enviar una foto antes de acercarme?", "Sí. Las fotos, medidas y el uso previsto ayudan a ordenar la consulta."],
      ["¿Cómo se coordinan las visitas?", "Se acuerdan previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "cinta-de-transporte",
    name: "Cinta de transporte",
    eyebrow: "04 · ESPECIALIDAD",
    shortDescription: "Fabricación, reparación y revisión de componentes vinculados con cintas de transporte.",
    paragraphs: [
      "Una cinta de transporte puede requerir una reparación, una estructura, un soporte o la fabricación de un componente. El primer paso es identificar qué parte necesita atención y cómo se relaciona con el conjunto.",
      "Para la consulta sirven fotos generales y de detalle, medidas y una descripción del desgaste o de la dificultad. Con esa información se conversa si el pedido necesita soldadura, mecanizado, fabricación o mantenimiento.",
      "Si la cinta está vinculada con una mesa vibrante, una estructura, un motor, un reductor o una instalación, esa relación se toma en cuenta al definir el trabajo. Las medidas y los materiales se confirman antes del presupuesto.",
      "Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos está cerrado. Las consultas de Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle se coordinan por WhatsApp o teléfono.",
    ],
    faqs: [
      ["¿Qué fotos conviene enviar?", "Una imagen del conjunto, otra del detalle y las medidas aproximadas de la parte involucrada."],
      ["¿Pueden fabricar una estructura para la cinta?", "Se revisa según las medidas, el uso y la relación con el conjunto existente."],
      ["¿La consulta puede incluir mantenimiento?", "Sí, el mantenimiento forma parte de los servicios que se pueden conversar."],
      ["¿Cuál es el horario?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos no atendemos."],
    ],
  },
  {
    slug: "mesa-vibrante",
    name: "Mesa vibrante",
    eyebrow: "05 · ESPECIALIDAD",
    shortDescription: "Revisión y fabricación de componentes para mesas vibratorias según el trabajo requerido.",
    paragraphs: [
      "Una mesa vibrante reúne una estructura y componentes que trabajan juntos. Si una unión necesita reparación, una parte se desgasta o hay que fabricar un componente, la consulta debe comenzar por el conjunto y su funcionamiento.",
      "Podés enviar fotos, medidas y una explicación de qué cambió. También sirve indicar si la intervención se vincula con un motor, un reductor, una base o una instalación. Esa información permite ordenar el relevamiento.",
      "Según el caso, el trabajo puede incluir soldadura, fabricación de estructura, mecanizado o mantenimiento. Primero se confirman las medidas, los materiales y el alcance; después se prepara el presupuesto y se coordina la ejecución.",
      "Servicio Integrado recibe consultas del Gran Mendoza. Escribí o llamá de lunes a sábados, entre las 08:00 y las 17:30 hs.; los domingos permanecemos cerrados y las visitas se coordinan previamente.",
    ],
    faqs: [
      ["¿Qué parte de una mesa vibrante puedo consultar?", "La estructura, una unión, una pieza o un componente que necesite reparación o fabricación."],
      ["¿Qué información ayuda a revisar el conjunto?", "Fotos generales y de detalle, medidas y una explicación del funcionamiento o de la dificultad."],
      ["¿Puede combinarse soldadura con mecanizado?", "Se evalúa según el conjunto y el alcance confirmado en la consulta."],
      ["¿Cuándo atienden?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado."],
    ],
  },
  {
    slug: "volcadores-hidraulicos",
    name: "Volcadores hidráulicos",
    eyebrow: "06 · ESPECIALIDAD",
    shortDescription: "Mantenimiento y fabricación de componentes para volcadores hidráulicos según medidas y uso.",
    paragraphs: [
      "En un volcador hidráulico, una estructura, un soporte, una pieza o una conexión puede necesitar mantenimiento o fabricación. Para entender el pedido conviene mostrar el conjunto y el punto donde aparece la dificultad.",
      "Las fotos generales y de detalle, las medidas y el uso del equipo ayudan a conversar si hace falta reparar, fabricar o adaptar una parte. Cuando el alcance incluye soldadura, mecanizado o hidráulica, se organiza dentro de la misma consulta.",
      "El trabajo se define después de revisar el componente, los materiales y la relación con el equipo. Según el caso se coordina la entrega de una pieza, un trabajo de taller o una visita previamente acordada.",
      "Podés comunicarte desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle. Atendemos lunes a sábados de 08:00 a 17:30 hs.; los domingos no hay atención.",
    ],
    faqs: [
      ["¿Qué se puede consultar sobre un volcador hidráulico?", "Mantenimiento, reparación o fabricación de una parte, estructura, soporte o conexión."],
      ["¿Qué conviene mostrar en las fotos?", "El conjunto completo, el componente involucrado y el punto donde aparece el desgaste o la dificultad."],
      ["¿Puedo enviar medidas aproximadas?", "Sí. Las medidas disponibles ayudan a orientar la conversación inicial."],
      ["¿Cómo se coordina una visita?", "Se acuerda previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "salas-de-bomba",
    name: "Salas de bomba",
    eyebrow: "07 · ESPECIALIDAD",
    shortDescription: "Mantenimiento, estructuras y componentes para salas de bomba de industrias y talleres.",
    paragraphs: [
      "Una sala de bomba reúne equipos, cañerías, válvulas, soportes y conexiones. Cuando una parte necesita atención, conviene describir qué componente está involucrado y cómo se relaciona con la instalación.",
      "La consulta puede referirse a una reparación, una adaptación, una pieza, una estructura o una tarea de mantenimiento. Fotos generales y de detalle, medidas y planos permiten conversar si el trabajo se resuelve en taller o requiere coordinar una revisión.",
      "El alcance puede incluir soldadura, estructuras, mecanizado, mantenimiento, hidráulica o fabricación de una pieza. Primero se identifica qué parte debe volver a funcionar; luego se revisan materiales, medidas y próximos pasos.",
      "Escribí por WhatsApp o llamá desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle. El horario es de lunes a sábados de 08:00 a 17:30 hs.; los domingos está cerrado.",
    ],
    faqs: [
      ["¿Qué parte de una sala de bomba pueden revisar?", "Bombas, cañerías, válvulas, soportes y otros componentes vinculados con la instalación."],
      ["¿Qué fotos sirven para iniciar la consulta?", "Fotos generales de la sala y detalles de la bomba, las cañerías, las válvulas o el soporte."],
      ["¿Puedo consultar por una estructura o soporte?", "Sí. Enviá imágenes y medidas para conversar fabricación, reparación o adaptación."],
      ["¿Cuándo puedo comunicarme?", "De lunes a sábados de 08:00 a 17:30 hs. Los domingos no atendemos."],
    ],
  },
  {
    slug: "instalacion-de-equipos-de-frio",
    name: "Instalación de equipos de frío",
    eyebrow: "08 · ESPECIALIDAD",
    shortDescription: "Trabajos de instalación y adecuación de equipos de frío dentro de procesos industriales.",
    paragraphs: [
      "La instalación de un equipo de frío puede requerir una estructura, una adaptación o una revisión del espacio donde se incorpora. Para orientar el trabajo se necesita conocer el equipo, el lugar y qué parte de la instalación debe resolverse.",
      "Podés enviar fotos del espacio, medidas disponibles y una descripción del equipo. También ayuda indicar si existe una estructura o si hace falta fabricar un soporte. Con esos datos se conversa el alcance y la modalidad de trabajo.",
      "Según la necesidad, el pedido puede relacionarse con fabricación, soldadura, estructuras, mantenimiento, hidráulica o neumática. Se revisan medidas y materiales, se prepara el presupuesto y se coordina previamente la ejecución o la visita.",
      "Servicio Integrado atiende consultas del Gran Mendoza. Escribí de lunes a sábados, de 08:00 a 17:30 hs.; los domingos permanecemos cerrados. Las visitas se acuerdan por WhatsApp o teléfono.",
    ],
    faqs: [
      ["¿Qué necesito enviar para consultar una instalación de frío?", "Fotos del lugar, medidas disponibles, datos del equipo y una descripción de la adaptación necesaria."],
      ["¿Pueden fabricar un soporte?", "Se revisa según las medidas, el material y la integración con el equipo."],
      ["¿La consulta puede incluir soldadura o estructuras?", "Sí, el alcance se conversa según lo que requiera la instalación."],
      ["¿Cómo se coordinan las visitas?", "Se acuerdan previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "neumatica",
    name: "Neumática",
    eyebrow: "09 · ESPECIALIDAD",
    shortDescription: "Mantenimiento y trabajos vinculados con soluciones neumáticas para industrias y talleres.",
    paragraphs: [
      "Una instalación neumática puede necesitar revisión cuando pierde respuesta, presenta una conexión dañada o requiere una adaptación. La consulta comienza con una descripción de la parte involucrada y del equipo que depende de ella.",
      "Enviá fotos de la instalación y de las conexiones, medidas disponibles y una explicación de cuándo aparece la dificultad. También podés indicar si el problema es permanente o aparece durante el uso.",
      "Según el caso, el trabajo puede relacionarse con mantenimiento, soldadura, estructuras, mecanizado o hidráulica. El alcance se confirma antes de presupuestar y la ejecución se coordina en taller o mediante una visita previamente acordada.",
      "Atendemos consultas de Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle de lunes a sábados, entre las 08:00 y las 17:30 hs. Los domingos está cerrado.",
    ],
    faqs: [
      ["¿Qué problema neumático puedo consultar?", "Una conexión, una adaptación o una parte de la instalación que perdió respuesta o necesita mantenimiento."],
      ["¿Qué información sirve para revisar la instalación?", "Fotos de las conexiones, medidas, el equipo relacionado y una descripción de cuándo aparece la dificultad."],
      ["¿Puede vincularse con mecanizado o estructuras?", "Sí, se evalúa si el trabajo requiere mantenimiento, mecanizado, soldadura o estructuras."],
      ["¿Cómo solicito una revisión?", "Escribí o llamá para explicar el trabajo y coordinar previamente la modalidad."],
    ],
  },
  {
    slug: "hidraulica",
    name: "Hidráulica",
    eyebrow: "10 · ESPECIALIDAD",
    shortDescription: "Mantenimiento y fabricación de componentes vinculados con instalaciones hidráulicas.",
    paragraphs: [
      "Una instalación hidráulica puede presentar una pérdida, desgaste, una pieza dañada o una adaptación pendiente. Para revisar el pedido sirven fotos, medidas y una explicación de qué equipo está involucrado y qué resultado necesitás recuperar.",
      "La consulta puede relacionarse con un volcador hidráulico, una sala de bomba, una máquina, una conexión o una estructura. Las imágenes generales y de detalle ayudan a ubicar el componente dentro de la instalación.",
      "El alcance puede incluir mantenimiento, mecanizado, soldadura, estructuras o fabricación de una pieza. Primero se ordenan las necesidades y los materiales; después se prepara el presupuesto y se coordina la ejecución según el componente.",
      "Podés escribir por WhatsApp o teléfono desde Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle. Atendemos de lunes a sábados de 08:00 a 17:30 hs.; los domingos permanecemos cerrados.",
    ],
    faqs: [
      ["¿Qué trabajos hidráulicos puedo consultar?", "Mantenimiento, adaptación o fabricación de componentes vinculados con bombas, volcadores, máquinas e instalaciones hidráulicas."],
      ["¿Qué datos ayudan a identificar el problema?", "El equipo involucrado, fotos generales y de detalle, medidas y una descripción de lo que sucede."],
      ["¿Pueden fabricar una pieza hidráulica?", "Se analiza según el componente, las medidas, los materiales y su uso dentro del equipo."],
      ["¿La visita se coordina previamente?", "Sí, las visitas se acuerdan por WhatsApp o teléfono antes de realizarlas."],
    ],
  },
];

export const servicePages = rawServicePages;
export const serviceBySlug = new Map(servicePages.map((service) => [service.slug, service]));
