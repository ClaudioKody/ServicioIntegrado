export type ServicePageData = {
  slug: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  paragraphs: string[];
  faqs: Array<[string, string]>;
};

const hours = "Atendemos de lunes a sábados de 08:00 a 17:30 hs. Los domingos permanecemos cerrados. Las visitas y los trabajos se coordinan previamente.";

const rawServicePages: ServicePageData[] = [
  {
    slug: "mantenimiento-industrial",
    name: "Mantenimiento industrial",
    eyebrow: "01 · MANTENIMIENTO",
    shortDescription: "Mantenimiento preventivo y correctivo para equipos e instalaciones de industrias y talleres de Mendoza.",
    paragraphs: [
      "El mantenimiento industrial es una forma concreta de evitar que una falla pequeña termine frenando un equipo o una línea de trabajo. En Servicio Integrado revisamos el problema que estás teniendo, entendemos cómo trabaja la instalación y definimos con vos si hace falta reparar, ajustar, adaptar o fabricar una pieza. El objetivo es resolver la necesidad real, sin sumar tareas que no corresponden.",
      "Podés consultar cuando un equipo pierde rendimiento, aparece un ruido o una vibración, una unión se deteriora, una bomba necesita atención o una instalación requiere una intervención puntual. También cuando querés revisar un conjunto antes de que vuelva a entrar en producción. Trabajamos a partir de una descripción, fotografías, medidas, una muestra o una visita coordinada previamente.",
      "La tarea puede incluir revisión del componente, definición del alcance, selección de materiales y ejecución en taller o en el lugar que se acuerde. Cuando el trabajo requiere mecanizado, soldadura, estructuras, hidráulica o neumática, coordinamos la solución como un conjunto para evitar reparaciones aisladas que no resuelvan el problema de fondo.",
      "El proceso comienza con un relevamiento inicial y una conversación clara sobre el uso del equipo. Después se confirma el trabajo, se prepara el presupuesto y se avanza con seguimiento directo. Es una alternativa para industrias, talleres y organizaciones que necesitan volver a trabajar con una reparación entendible y una entrega revisada.",
      "Si estás en Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo o Lavalle, podés enviar los datos del equipo por WhatsApp. La cobertura y la modalidad se definen según el alcance del trabajo y siempre se coordinan previamente.",
    ],
    faqs: [
      ["¿Qué información conviene enviar?", "Una descripción de la falla, fotos, medidas, modelo si está disponible y cómo se usa el equipo."],
      ["¿Trabajan en taller o en planta?", "La modalidad se define según el trabajo y se coordina previamente."],
      ["¿Cuándo atienden?", hours],
      ["¿Cómo solicito una cotización?", "Podés escribir por WhatsApp o llamar para coordinar la revisión inicial."],
    ],
  },
  {
    slug: "mecanizado-cnc-y-convencional",
    name: "Mecanizado CNC y convencional",
    eyebrow: "02 · MECANIZADO",
    shortDescription: "Piezas, ejes, bujes y componentes a medida según plano, muestra o medidas tomadas.",
    paragraphs: [
      "Cuando una pieza deja de cumplir su función, conseguir un repuesto estándar no siempre es posible ni conveniente. El mecanizado permite recuperar una medida, fabricar un componente específico o adaptar una solución a un equipo existente. En Servicio Integrado partimos del plano, la muestra, las fotografías técnicas o las medidas disponibles para entender qué debe hacer la pieza antes de definir el trabajo.",
      "La consulta puede estar relacionada con un eje, un buje, una placa, una pieza de transmisión u otro componente que necesite una medida particular. También podés acercarte si la pieza original está desgastada y necesitás revisar qué dimensiones conservar y cuáles recuperar. La información disponible se analiza junto con el uso previsto y las condiciones del conjunto.",
      "El trabajo se organiza en etapas simples: relevamiento, confirmación de medidas y materiales, presupuesto y ejecución. Si la pieza forma parte de un equipo con soldadura, estructura, bomba, reductor o circuito hidráulico, podemos considerar esa relación para que el componente fabricado no quede aislado del problema general.",
      "El mecanizado CNC y convencional se consulta especialmente cuando una industria o taller necesita una pieza a medida, una reparación de componente o una reposición que no encuentra en el mercado. No hace falta llegar con toda la solución definida: podés enviar fotos, una muestra o explicar qué dejó de funcionar para coordinar el siguiente paso.",
      "Atendemos consultas de Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. El contacto inicial se realiza por WhatsApp o teléfono y cualquier visita se coordina previamente, de acuerdo con el trabajo.",
    ],
    faqs: [
      ["¿Puedo consultar con una muestra?", "Sí. También podés enviar un plano, medidas o fotografías técnicas para evaluar el componente."],
      ["¿Hacen piezas únicas?", "La consulta se analiza según la pieza, sus medidas y el uso que tendrá dentro del equipo."],
      ["¿Cuándo atienden?", hours],
      ["¿Cómo envío la información?", "Por WhatsApp podés enviar fotos, medidas y una descripción breve de la necesidad."],
    ],
  },
  {
    slug: "soldadura-y-estructuras",
    name: "Soldadura y estructuras",
    eyebrow: "03 · SOLDADURA",
    shortDescription: "Soldadura MIG, TIG y fabricación de estructuras en acero inoxidable y acero al carbono.",
    paragraphs: [
      "Una estructura o una reparación soldada debe responder al uso para el que fue pensada. En Servicio Integrado revisamos qué se necesita fabricar, unir, reforzar o recuperar y trabajamos con la información disponible: medidas, fotografías, planos, una pieza existente o un relevamiento coordinado. La conversación inicial ayuda a definir una solución firme y funcional.",
      "Podés consultar por una base, un bastidor, una estructura de soporte, una protección, una reparación de conjunto o una pieza que deba integrarse a un equipo. También por trabajos en acero inoxidable o acero al carbono cuando el material y la terminación forman parte de la necesidad del proceso. Cada caso se define a partir de sus medidas y condiciones de uso.",
      "La ejecución comienza con la confirmación del diseño, los materiales y las uniones que hacen falta. Cuando la estructura se vincula con una cinta de transporte, una mesa vibrante, una sala de bomba o una instalación, se consideran esas relaciones para que el conjunto pueda montarse y trabajar como corresponde.",
      "La soldadura MIG y TIG aparece en distintos tipos de trabajos, pero la elección y el alcance se confirman en cada consulta. Por eso es útil enviar imágenes, medidas aproximadas y una explicación de dónde se usará la pieza. Con esa información se puede orientar la revisión y preparar un presupuesto concreto.",
      "Servicio Integrado recibe consultas de industrias y talleres de todo el Gran Mendoza: Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Las visitas, entregas y trabajos que requieran coordinación previa se acuerdan por WhatsApp o teléfono.",
    ],
    faqs: [
      ["¿Qué materiales y procesos puedo consultar?", "La página de Inicio menciona soldadura MIG y TIG, además de estructuras en acero inoxidable y acero al carbono."],
      ["¿Puedo enviar una foto antes de acercarme?", "Sí. Las fotos, medidas y el uso previsto ayudan a ordenar la consulta inicial."],
      ["¿Cuándo atienden?", hours],
      ["¿La visita se coordina?", "Sí. Cualquier visita se coordina previamente según el alcance del trabajo."],
    ],
  },
  {
    slug: "cinta-de-transporte",
    name: "Cinta de transporte",
    eyebrow: "04 · ESPECIALIDAD",
    shortDescription: "Fabricación, reparación y revisión de componentes vinculados con cintas de transporte.",
    paragraphs: [
      "Las cintas de transporte forman parte de procesos donde una interrupción afecta el movimiento de materiales y el ritmo de trabajo. En Servicio Integrado podés consultar por una estructura, un soporte, un componente deteriorado o una intervención que necesite combinar fabricación, soldadura, mecanizado y mantenimiento. El primer paso es entender qué transporta la cinta y qué parte necesita atención.",
      "La consulta puede incluir fotografías del conjunto, medidas, una descripción del desgaste o una referencia de dónde se encuentra el problema. A partir de esos datos se puede orientar la fabricación de una parte, la reparación de una unión, el ajuste de una pieza o una revisión más amplia. El uso y el estado del conjunto ayudan a elegir el camino más adecuado.",
      "La fabricación o reparación se organiza con un alcance claro. Se confirman medidas y materiales, se prepara el presupuesto y se avanza con seguimiento directo. Cuando la cinta está relacionada con una mesa vibrante, una estructura metálica, un motor, un reductor o una instalación, esa relación se toma en cuenta para que el trabajo pueda integrarse.",
      "Es una alternativa para industrias y talleres que necesitan recuperar una cinta de transporte, construir una parte o revisar una solución existente. La modalidad puede variar entre taller y trabajo coordinado en el lugar, de acuerdo con el componente y la intervención necesaria.",
      "Atendemos consultas en Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Mandá fotos y medidas por WhatsApp para coordinar previamente el próximo paso.",
    ],
    faqs: [
      ["¿Qué conviene enviar para consultar?", "Fotos generales y de detalle, medidas aproximadas y una explicación de qué parte de la cinta necesita atención."],
      ["¿Pueden fabricar una estructura?", "La posibilidad se revisa según las medidas, el uso y la relación con el conjunto existente."],
      ["¿Cuándo atienden?", hours],
      ["¿Dónde se realiza el trabajo?", "Se define según el componente y se coordina previamente."],
    ],
  },
  {
    slug: "mesa-vibrante",
    name: "Mesa vibrante",
    eyebrow: "05 · ESPECIALIDAD",
    shortDescription: "Revisión y fabricación de componentes para mesas vibratorias según el trabajo requerido.",
    paragraphs: [
      "Una mesa vibrante combina una estructura, componentes de transmisión y un uso específico dentro del proceso. Si aparece desgaste, una unión necesita reparación o una parte debe fabricarse, conviene analizar el conjunto para elegir una solución adecuada. Servicio Integrado recibe consultas con fotografías, medidas y una descripción del funcionamiento para orientar el trabajo.",
      "Podés consultar por una mesa vibrante existente, por una estructura en proceso o por un componente que necesite revisión. La información útil incluye qué parte se observa, qué cambió en el funcionamiento y si la intervención se vincula con un motor, un reductor, una base o una instalación. Cada caso se ordena a partir de lo que efectivamente se puede revisar.",
      "El trabajo puede requerir soldadura, fabricación de estructura, mecanizado de una pieza o mantenimiento de un conjunto. Por eso se confirma primero el alcance, los materiales y las medidas. Después se prepara un presupuesto y se coordina la ejecución en taller o la revisión que corresponda.",
      "La consulta es útil cuando necesitás recuperar una mesa vibrante, reemplazar una parte o avanzar con una fabricación que debe integrarse a un proceso. Unas fotos claras, medidas aproximadas y una explicación breve permiten ordenar el próximo paso.",
      "Servicio Integrado trabaja con consultas del Gran Mendoza, incluyendo Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Las visitas y entregas se coordinan previamente por WhatsApp o teléfono.",
    ],
    faqs: [
      ["¿Qué parte de una mesa vibrante pueden revisar?", "Podés consultar por la estructura, una unión, una pieza o un componente que necesite reparación o fabricación."],
      ["¿El trabajo puede combinar soldadura y mecanizado?", "Se evalúa según el conjunto y el alcance confirmado en la consulta."],
      ["¿Cuándo atienden?", hours],
      ["¿Cómo coordino una revisión?", "Escribí por WhatsApp o llamá para acordar previamente la modalidad."],
    ],
  },
  {
    slug: "volcadores-hidraulicos",
    name: "Volcadores hidráulicos",
    eyebrow: "06 · ESPECIALIDAD",
    shortDescription: "Mantenimiento y fabricación de componentes para volcadores hidráulicos según medidas y uso.",
    paragraphs: [
      "Los volcadores hidráulicos trabajan con movimiento, estructura y componentes que deben mantenerse relacionados. Cuando una parte se desgasta, una unión se daña o el conjunto deja de responder como antes, la consulta necesita contemplar el equipo completo. En Servicio Integrado podés enviar fotos, medidas y una descripción de lo que ocurre para definir una revisión inicial.",
      "La necesidad puede estar en una estructura, un soporte, una pieza, una conexión o un componente que requiere mantenimiento. Las fotos, las medidas y el uso del equipo ayudan a definir si conviene fabricar, reparar o adaptar una parte. Si el trabajo requiere soldadura, mecanizado, hidráulica o una combinación de tareas, se organiza dentro del mismo proyecto.",
      "El proceso empieza por entender el uso del volcador y el punto donde se presenta el problema. Después se revisan medidas y materiales, se define la tarea y se prepara un presupuesto antes de avanzar. Esta forma de trabajo permite separar una reparación puntual de una intervención mayor y evita prometer una solución sin revisar.",
      "Podés consultar tanto por mantenimiento como por la fabricación de una parte o una estructura vinculada al volcador. Las imágenes generales y de detalle ayudan a conversar sobre el estado real. Cuando sea necesario, se coordina previamente una visita o la entrega del componente.",
      "La cobertura incluye Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Escribí por WhatsApp para contar qué necesita el equipo y acordar el siguiente paso.",
    ],
    faqs: [
      ["¿Qué se puede consultar sobre un volcador hidráulico?", "Mantenimiento, reparación o fabricación de una parte, estructura, soporte o conexión según las medidas y el uso del equipo."],
      ["¿Qué conviene mostrar en las fotos?", "El conjunto completo, el componente involucrado y el punto donde aparece el desgaste o la dificultad."],
      ["¿Cuándo atienden?", hours],
      ["¿Se puede coordinar una visita?", "Sí, las visitas se coordinan previamente por WhatsApp o teléfono."],
    ],
  },
  {
    slug: "salas-de-bomba",
    name: "Salas de bomba",
    eyebrow: "07 · ESPECIALIDAD",
    shortDescription: "Mantenimiento, estructuras y componentes para salas de bomba de industrias y talleres.",
    paragraphs: [
      "Una sala de bomba reúne equipos, cañerías, válvulas, soportes y conexiones que deben trabajar dentro de una instalación. Cuando hay una pérdida, un componente deteriorado o una estructura que necesita atención, conviene revisar cómo se relacionan las partes. Servicio Integrado recibe la consulta a partir de fotografías, medidas y una descripción del problema.",
      "Podés escribir por una reparación, una adaptación, una pieza, una estructura o una tarea de mantenimiento vinculada con la sala de bomba. La información inicial permite ordenar si el trabajo se puede resolver en taller, si hace falta fabricar un componente o si se requiere coordinar una revisión en el lugar. El alcance se confirma antes de presupuestar.",
      "La intervención puede incluir soldadura, estructuras, mecanizado, mantenimiento, hidráulica o revisión de componentes. Primero se identifica qué parte está afectada y qué debe volver a funcionar; después se conversan materiales, medidas, plazos y próximos pasos.",
      "Es una opción para industrias y talleres que necesitan mantener una instalación operativa o reparar una parte sin perder de vista el conjunto. Enviá fotos generales y de detalle, indicando qué equipo o conexión genera la consulta. Si tenés planos o medidas, también podés compartirlos.",
      "Servicio Integrado atiende consultas en el Gran Mendoza: Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Las visitas y cualquier intervención se coordinan previamente.",
    ],
    faqs: [
      ["¿Qué parte de una sala de bomba pueden revisar?", "Podés consultar por bombas, cañerías, válvulas, soportes y otros componentes vinculados con la instalación."],
      ["¿Qué fotos sirven?", "Fotos generales de la sala y detalles de la bomba, cañerías, válvulas o soporte involucrado."],
      ["¿Cuándo atienden?", hours],
      ["¿Cómo coordino una revisión?", "Llamá o escribí por WhatsApp para acordar previamente la modalidad."],
    ],
  },
  {
    slug: "instalacion-de-equipos-de-frio",
    name: "Instalación de equipos de frío",
    eyebrow: "08 · ESPECIALIDAD",
    shortDescription: "Trabajos de instalación y adecuación de equipos de frío dentro de procesos industriales.",
    paragraphs: [
      "La instalación de un equipo de frío no termina en ubicarlo: debe integrarse al espacio, a los soportes y a las conexiones que correspondan. En Servicio Integrado podés consultar por una instalación, una adaptación o una estructura necesaria para incorporar el equipo a una industria o taller. El primer paso es conocer el equipo, el lugar y la necesidad concreta.",
      "Para orientar la consulta sirven las fotografías del espacio, las medidas disponibles y una descripción del equipo de frío. También ayuda indicar si hay una estructura existente, si se necesita fabricar un soporte o si el trabajo forma parte de una instalación más amplia. Con esos datos se define qué información falta y cómo coordinar la revisión.",
      "El alcance puede relacionarse con fabricación, soldadura, estructuras, mantenimiento, hidráulica o neumática, según lo que requiera el trabajo. Se revisan medidas y materiales, se prepara un presupuesto y se acuerda la ejecución.",
      "Esta página es para industrias y talleres que necesitan ordenar una instalación o adaptar un equipo de frío a una condición existente. Mandá fotos generales y de detalle para que la conversación empiece sobre el espacio real. Si hace falta una visita, se coordina previamente.",
      "La cobertura contempla Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Contactá a Servicio Integrado por WhatsApp o teléfono para describir el trabajo.",
    ],
    faqs: [
      ["¿Qué se necesita para consultar una instalación de frío?", "Fotos del lugar, medidas disponibles, datos del equipo y una descripción de la instalación o adaptación necesaria."],
      ["¿También fabrican soportes?", "La posibilidad se revisa según las medidas, el material y la integración con el equipo."],
      ["¿Cuándo atienden?", hours],
      ["¿Se coordinan las visitas?", "Sí. Toda visita o intervención se coordina previamente."],
    ],
  },
  {
    slug: "neumatica",
    name: "Neumática",
    eyebrow: "09 · ESPECIALIDAD",
    shortDescription: "Mantenimiento y trabajos vinculados con soluciones neumáticas para industrias y talleres.",
    paragraphs: [
      "Cuando una instalación neumática pierde respuesta, presenta una conexión dañada o necesita una adaptación, es importante mirar el componente dentro del proceso donde trabaja. Servicio Integrado recibe consultas de industrias y talleres que necesitan revisar una parte, reparar una instalación o coordinar un trabajo relacionado con neumática. La orientación comienza con una descripción clara del problema.",
      "Podés enviar fotografías de la instalación, detalles de las conexiones, medidas y una explicación de cuándo aparece la falla. También es útil contar qué equipo depende de esa parte y si el problema es permanente o aparece durante el uso. Con esa información se puede orientar la revisión y definir el próximo paso.",
      "Según el caso, el trabajo puede vincularse con mantenimiento, soldadura, estructuras, mecanizado o hidráulica. El alcance siempre se confirma antes de presupuestar. Se revisan los materiales y las medidas disponibles, se define la tarea y se coordina la ejecución en taller o en el lugar que corresponda.",
      "La consulta es conveniente cuando necesitás recuperar el funcionamiento de una parte o adaptar una solución existente. Fotos y una descripción breve ayudan a iniciar la conversación, incluso si todavía estás reuniendo las medidas del equipo.",
      "Atendemos consultas de Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Las visitas se coordinan previamente por WhatsApp o teléfono.",
    ],
    faqs: [
      ["¿Qué problema neumático puedo consultar?", "Podés consultar por una conexión, una adaptación o una parte de la instalación que perdió respuesta o necesita mantenimiento."],
      ["¿La neumática puede vincularse con otros trabajos?", "Sí, se evalúa si el trabajo también requiere mantenimiento, mecanizado, soldadura o estructuras."],
      ["¿Cuándo atienden?", hours],
      ["¿Cómo solicito una revisión?", "Escribí o llamá para explicar el trabajo y coordinar previamente."],
    ],
  },
  {
    slug: "hidraulica",
    name: "Hidráulica",
    eyebrow: "10 · ESPECIALIDAD",
    shortDescription: "Mantenimiento y fabricación de componentes vinculados con instalaciones hidráulicas.",
    paragraphs: [
      "Una instalación hidráulica necesita que sus componentes, conexiones y soportes respondan al uso que tiene el equipo. Si aparece una pérdida, un desgaste, una pieza dañada o una adaptación pendiente, Servicio Integrado puede revisar la consulta a partir de fotos, medidas y una explicación del problema. El objetivo es definir un trabajo posible y claro antes de avanzar.",
      "La consulta puede estar relacionada con un volcador hidráulico, una sala de bomba, una máquina, una conexión o una estructura que debe integrarse a la instalación. Para empezar sirven imágenes generales y de detalle, el lugar donde se encuentra el componente y una referencia de cuándo comenzó la dificultad. Si hay planos o medidas, también se pueden compartir.",
      "El alcance puede incluir mantenimiento, mecanizado, soldadura, estructuras o fabricación de una pieza, según lo que se confirme en el relevamiento. Primero se ordenan las necesidades y los materiales; después se prepara el presupuesto y se coordina la ejecución. La modalidad depende del componente y del trabajo real.",
      "Es una alternativa para talleres e industrias que necesitan reparar, adaptar o fabricar una parte vinculada con hidráulica. En lugar de enviar una descripción genérica, conviene contar qué equipo se detuvo, qué parte se observa y qué resultado necesitás recuperar. Así la primera respuesta puede ser más concreta.",
      "La cobertura incluye Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle. Contactá a Servicio Integrado por WhatsApp o teléfono; las visitas y trabajos se coordinan previamente.",
    ],
    faqs: [
      ["¿Qué trabajos hidráulicos puedo consultar?", "Mantenimiento, adaptación o fabricación de componentes vinculados con bombas, volcadores, máquinas e instalaciones hidráulicas."],
      ["¿Pueden fabricar una pieza hidráulica?", "Se analiza según el componente, las medidas, los materiales y el uso dentro del equipo."],
      ["¿Cuándo atienden?", hours],
      ["¿La visita tiene que coordinarse?", "Sí. Las visitas se coordinan previamente por WhatsApp o teléfono."],
    ],
  },
];

const scheduleVariants = [
  "Atendemos de lunes a sábados, de 08:00 a 17:30 hs. Los domingos está cerrado y las visitas se acuerdan con anticipación.",
  "El horario de atención es de lunes a sábados de 08:00 a 17:30 hs. Los domingos no atendemos; para visitar el taller coordinamos previamente.",
  "Podés contactarnos de lunes a sábados entre las 08:00 y las 17:30 hs. Los domingos permanecemos cerrados y toda visita se coordina previamente.",
  "Las consultas se reciben de lunes a sábados, de 08:00 a 17:30 hs. Los domingos está cerrado; el encuentro se coordina previamente.",
  "El taller atiende lunes a sábados de 08:00 a 17:30 hs. Los domingos no hay atención y cualquier visita se coordina antes.",
  "Podés escribir o llamar de lunes a sábados, entre las 08:00 y las 17:30 hs. Los domingos permanecemos cerrados; las visitas se coordinan previamente.",
  "Nuestro horario es de lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado y la atención presencial se coordina previamente.",
  "Atendemos durante la semana de lunes a sábados, de 08:00 a 17:30 hs. Los domingos no atendemos; el trabajo se coordina previamente.",
  "Las consultas se responden de lunes a sábados entre las 08:00 y las 17:30 hs. Los domingos permanecemos cerrados y las visitas se coordinan previamente.",
  "El horario es lunes a sábados de 08:00 a 17:30 hs. Los domingos está cerrado; para revisar el equipo en persona coordinamos previamente.",
];

export const servicePages = rawServicePages.map((service, index) => ({
  ...service,
  faqs: service.faqs.map(([question, answer], faqIndex) => faqIndex === 2 ? [question, scheduleVariants[index]] as [string, string] : [question, answer] as [string, string]),
}));

export const serviceBySlug = new Map(servicePages.map((service) => [service.slug, service]));
