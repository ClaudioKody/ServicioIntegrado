export const siteOrigin = "https://serviciointegrado.com.ar";

const services = [
  ["mantenimiento-industrial", "Mantenimiento industrial en Mendoza | Servicio Integrado", "Mantenimiento preventivo y correctivo para equipos e instalaciones de industrias y talleres de Mendoza."],
  ["mecanizado-cnc-y-convencional", "Mecanizado en Mendoza | Servicio Integrado", "Piezas, ejes, bujes y componentes a medida según plano, muestra o medidas tomadas."],
  ["soldadura-y-estructuras", "Soldadura y estructuras en Mendoza | Servicio Integrado", "Soldadura MIG, TIG y fabricación de estructuras en acero inoxidable y acero al carbono."],
  ["cinta-de-transporte", "Cinta de transporte en Mendoza | Servicio Integrado", "Fabricación, reparación y revisión de componentes vinculados con cintas de transporte."],
  ["mesa-vibrante", "Mesa vibrante en Mendoza | Servicio Integrado", "Revisión y fabricación de componentes para mesas vibratorias según el trabajo requerido."],
  ["volcadores-hidraulicos", "Volcadores hidráulicos en Mendoza | Servicio Integrado", "Mantenimiento y fabricación de componentes para volcadores hidráulicos según medidas y uso."],
  ["salas-de-bomba", "Salas de bomba en Mendoza | Servicio Integrado", "Mantenimiento, estructuras y componentes para salas de bomba de industrias y talleres."],
  ["instalacion-de-equipos-de-frio", "Equipos de frío en Mendoza | Servicio Integrado", "Trabajos de instalación y adecuación de equipos de frío dentro de procesos industriales."],
  ["neumatica", "Neumática en Mendoza | Servicio Integrado", "Mantenimiento y trabajos vinculados con soluciones neumáticas para industrias y talleres."],
  ["hidraulica", "Hidráulica en Mendoza | Servicio Integrado", "Mantenimiento y fabricación de componentes vinculados con instalaciones hidráulicas."],
];

const zones = [
  ["capital", "Servicios industriales en Capital | Servicio Integrado", "Mantenimiento, soldadura y mecanizado para industrias y talleres de la Ciudad de Mendoza."],
  ["godoy-cruz", "Servicios industriales en Godoy Cruz | Servicio Integrado", "Soluciones de mantenimiento, soldadura, estructuras y mecanizado para Godoy Cruz."],
  ["guaymallen", "Servicios industriales en Guaymallén | Servicio Integrado", "Mecanizado, mantenimiento y fabricación para talleres e industrias de Guaymallén."],
  ["las-heras", "Servicios industriales en Las Heras | Servicio Integrado", "Mantenimiento industrial, soldadura y mecanizado para Las Heras y sus talleres."],
  ["maipu", "Servicios industriales en Maipú | Servicio Integrado", "Mecanizado, estructuras y mantenimiento para industrias y talleres de Maipú."],
  ["lujan-de-cuyo", "Servicios industriales en Luján de Cuyo | Servicio Integrado", "Trabajos de taller, mantenimiento y fabricación para Luján de Cuyo."],
  ["lavalle", "Servicios industriales en Lavalle | Servicio Integrado", "Mantenimiento, mecanizado, soldadura y estructuras para Lavalle."],
];

export const serviceRoutes = services.map(([slug, title, description]) => ({ slug, title, description, path: `/servicios/${slug}` }));
export const zoneRoutes = zones.map(([slug, title, description]) => ({ slug, title, description, path: `/zonas/${slug}` }));

export const publicRoutes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/servicios", priority: "0.8", changefreq: "monthly", title: "Servicios industriales en Mendoza | Servicio Integrado", description: "Mecanizado, soldadura, estructuras y mantenimiento para industrias y talleres de Mendoza." },
  ...serviceRoutes.map((route) => ({ path: route.path, priority: "0.8", changefreq: "monthly", title: route.title, description: route.description })),
  { path: "/zonas", priority: "0.7", changefreq: "monthly", title: "Zonas de cobertura | Servicio Integrado", description: "Servicios industriales para Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle." },
  ...zoneRoutes.map((route) => ({ path: route.path, priority: "0.7", changefreq: "monthly", title: route.title, description: route.description })),
];
