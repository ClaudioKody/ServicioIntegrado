export const siteOrigin = "https://serviciointegrado.com.ar";

const services = [
  ["mantenimiento-industrial", "Mantenimiento industrial en Mendoza", "Mantenimiento preventivo y correctivo para equipos e instalaciones de industrias y talleres de Mendoza."],
  ["mecanizado-cnc-y-convencional", "Mecanizado CNC y convencional en Mendoza", "Piezas, ejes, bujes y componentes a medida según plano, muestra o medidas tomadas."],
  ["soldadura-y-estructuras", "Soldadura y estructuras en Mendoza", "Soldadura MIG, TIG y fabricación de estructuras en acero inoxidable y acero al carbono."],
  ["cinta-de-transporte", "Cinta de transporte en Mendoza", "Fabricación, reparación y revisión de componentes vinculados con cintas de transporte."],
  ["mesa-vibrante", "Mesa vibrante en Mendoza", "Revisión y fabricación de componentes para mesas vibratorias según el trabajo requerido."],
  ["volcadores-hidraulicos", "Volcadores hidráulicos en Mendoza", "Mantenimiento y fabricación de componentes para volcadores hidráulicos según medidas y uso."],
  ["salas-de-bomba", "Salas de bomba en Mendoza", "Mantenimiento, estructuras y componentes para salas de bomba de industrias y talleres."],
  ["instalacion-de-equipos-de-frio", "Instalación de equipos de frío en Mendoza", "Trabajos de instalación y adecuación de equipos de frío dentro de procesos industriales."],
  ["neumatica", "Neumática en Mendoza", "Mantenimiento y trabajos vinculados con soluciones neumáticas para industrias y talleres."],
  ["hidraulica", "Hidráulica en Mendoza", "Mantenimiento y fabricación de componentes vinculados con instalaciones hidráulicas."],
];

export const serviceRoutes = services.map(([slug, title, description]) => ({ slug, title, description, path: `/servicios/${slug}` }));

export const publicRoutes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/servicios", priority: "0.8", changefreq: "monthly", title: "Servicios industriales en Mendoza | Servicio Integrado", description: "Mecanizado, soldadura, estructuras y mantenimiento para industrias y talleres de Mendoza." },
  ...serviceRoutes.map((route) => ({ path: route.path, priority: "0.8", changefreq: "monthly", title: route.title, description: route.description })),
];
