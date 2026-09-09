import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Gauge,
  HardHat,
  MessageCircle,
  MoveUpRight,
  ShieldCheck,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react";

const isWebDevPreview = typeof window !== "undefined" && window.location.hostname.includes("manus.computer");
const logoSrc = "/assets/servicios-integrados-mark.png";
const img = isWebDevPreview
  ? {
      hero: "/manus-storage/metal-hero_7f5c0c50.jpg",
      cnc: "/manus-storage/metal-cnc_f52a6140.jpg",
      maintenance: "/manus-storage/metal-maintenance_23869f7c.jpg",
      fabrication: "/manus-storage/metal-fabrication_ff45b2d7.jpg",
    }
  : {
      hero: "/assets/metal-hero.jpg",
      cnc: "/assets/metal-cnc.jpg",
      maintenance: "/assets/metal-maintenance.jpg",
      fabrication: "/assets/metal-fabrication.jpg",
    };

const portfolioImage = (fileName: string, storageFileName: string) => isWebDevPreview ? `/manus-storage/${storageFileName}` : `/assets/portfolio/${fileName}`;

const portfolioItems = [
  { image: portfolioImage("obra-01.webp", "obra-01_1a4b99af.webp"), category: "tableros", label: "Tableros y control", title: "Tablero eléctrico industrial" },
  { image: portfolioImage("obra-02.webp", "obra-02_5802d7d1.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Cañerías y conexiones" },
  { image: portfolioImage("obra-03.webp", "obra-03_e05930a8.webp"), category: "tableros", label: "Tableros y control", title: "Gabinete de control" },
  { image: portfolioImage("obra-04.webp", "obra-04_a85a91fb.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Tendido de cañerías" },
  { image: portfolioImage("obra-05.webp", "obra-05_43d9cbef.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Bomba industrial" },
  { image: portfolioImage("obra-06.webp", "obra-06_c9390aa3.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Conjunto de bombeo" },
  { image: portfolioImage("obra-07.webp", "obra-07_6f5ff259.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Mantenimiento hidráulico" },
  { image: portfolioImage("obra-08.webp", "obra-08_d864d2fa.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Equipo hidráulico" },
  { image: portfolioImage("obra-09.webp", "obra-09_fc1876a9.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Instalación de servicio" },
  { image: portfolioImage("obra-10.webp", "obra-10_b02ca974.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Rejilla y canal de servicio" },
  { image: portfolioImage("obra-11.webp", "obra-11_5892cc6c.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Mantenimiento de equipo" },
  { image: portfolioImage("obra-12.webp", "obra-12_4684b4b9.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Mantenimiento de generador" },
  { image: portfolioImage("obra-13.webp", "obra-13_beaf7189.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Conexiones de proceso" },
  { image: portfolioImage("obra-14.webp", "obra-14_3cc34af2.webp"), category: "tableros", label: "Tableros y control", title: "Tablero eléctrico" },
  { image: portfolioImage("obra-15.webp", "obra-15_f05c5b03.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Sala de máquinas" },
  { image: portfolioImage("obra-16.webp", "obra-16_408262e1.webp"), category: "fabricacion", label: "Fabricación y montaje", title: "Estructura metálica" },
  { image: portfolioImage("obra-17.webp", "obra-17_fe2f3d77.webp"), category: "fabricacion", label: "Fabricación y montaje", title: "Estructura para equipo" },
  { image: portfolioImage("obra-18.webp", "obra-18_1d9fdff9.webp"), category: "fabricacion", label: "Fabricación y montaje", title: "Cinta de transporte" },
  { image: portfolioImage("obra-19.webp", "obra-19_227fe27f.webp"), category: "fabricacion", label: "Fabricación y montaje", title: "Equipo de proceso" },
  { image: portfolioImage("obra-20.webp", "obra-20_fc40aaf8.webp"), category: "fabricacion", label: "Fabricación y montaje", title: "Mesa vibrante" },
  { image: portfolioImage("obra-21.webp", "obra-21_08fd4466.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Mantenimiento de generador" },
  { image: portfolioImage("obra-22.webp", "obra-22_6877b0e5.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Equipo de elevación y montaje" },
  { image: portfolioImage("obra-23.webp", "obra-23_53ec0a83.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Línea de proceso en planta" },
  { image: portfolioImage("obra-24.webp", "obra-24_5ead9aaf.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Equipo de lavado industrial" },
  { image: portfolioImage("obra-25.webp", "obra-25_36a4ebad.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Mantenimiento de grupo electrógeno" },
  { image: portfolioImage("obra-26.webp", "obra-26_78b67f1e.webp"), category: "mecanizado", label: "Mecanizado y reparación", title: "Reparación de conjunto mecánico" },
  { image: portfolioImage("obra-27.webp", "obra-27_692ce33f.webp"), category: "fabricacion", label: "Fabricación y montaje", title: "Estructura para proceso" },
  { image: portfolioImage("obra-28.webp", "obra-28_43e74e14.webp"), category: "fabricacion", label: "Fabricación y montaje", title: "Fabricación en acero inoxidable" },
  { image: portfolioImage("obra-29.webp", "obra-29_96e04e67.webp"), category: "fabricacion", label: "Fabricación y montaje", title: "Estructura metálica" },
  { image: portfolioImage("obra-30.webp", "obra-30_9dfd7005.webp"), category: "fabricacion", label: "Fabricación y montaje", title: "Fabricación de piezas" },
  { image: portfolioImage("obra-31.webp", "obra-31_6503a53c.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Mantenimiento de motor" },
  { image: portfolioImage("obra-32.webp", "obra-32_5b683917.webp"), category: "mecanizado", label: "Mecanizado y reparación", title: "Reparación de transmisión" },
];

const faqs = [
  ["¿En cuánto tiempo responden una consulta?", "Revisamos cada pedido y te respondemos por WhatsApp con una orientación inicial y los datos que necesitamos para presupuestar."],
  ["¿Trabajan con industrias fuera de Mendoza?", "Sí. Coordinamos relevamientos, fabricación y entregas para proyectos regionales. La cobertura se define según la complejidad y el alcance del trabajo."],
  ["¿Pueden fabricar una pieza a partir de una muestra?", "Sí. Podemos trabajar con planos, muestras físicas, fotografías técnicas o un relevamiento en planta para reconstruir y mejorar componentes críticos."],
  ["¿Qué garantía tienen los trabajos?", "Cada entrega incluye control dimensional y revisión de calidad acorde a la especificación del proyecto. La garantía se detalla en cada presupuesto."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState("todos");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = `Hola Hugo, vi la web de Servicios Integrados. Soy ${formData.get("name")} y necesito consultar: ${formData.get("message")}. Mi WhatsApp es ${formData.get("phone")}.`;
    window.open(`https://wa.me/5492615384243?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="site-shell">
      <div className="topline"><div className="container d-flex justify-content-between align-items-center"><span>SERVICIOS INTEGRADOS · MENDOZA</span><span className="topline-right"><Clock3 size={14} /> Consultas por WhatsApp</span></div></div>
      <header className="nav-wrap">
        <div className="container nav-inner">
          <a className="brand" href="#inicio" aria-label="Servicios Integrados"><img className="brand-logo" src={logoSrc} alt="Servicios Integrados" /></a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <span className="hamburger">☰</span>}</button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#soluciones" onClick={() => setMenuOpen(false)}>Soluciones</a><a href="#proceso" onClick={() => setMenuOpen(false)}>Cómo trabajamos</a>
            <a className="nav-cta" href="#cotizar" onClick={() => setMenuOpen(false)}>Consultar trabajo <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-image" style={{ backgroundImage: `url(${img.hero})` }} />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="row align-items-center g-5">
              <div className="col-lg-7 hero-copy">
                <div className="eyebrow light"><span className="eyebrow-line" /> MECANIZADO · SOLDADURA · MANTENIMIENTO</div>
                <h1>Electromecánica<br /><span>Soluciones</span> a medida.</h1>
                <p className="hero-lead">Mecanizado, soldadura, estructuras y mantenimiento para industrias y talleres de Mendoza.</p>
                <div className="hero-points"><span><Check size={15} /> Trabajo en taller</span><span><Check size={15} /> Presupuesto claro</span><span><Check size={15} /> Seguimiento directo</span></div>
                <a href="#cotizar" className="btn btn-safety btn-lg">Consultar un trabajo <MoveUpRight size={18} /></a>
              </div>
              <div className="col-lg-5" id="cotizar">
                <div className="quote-card">
                  <div className="quote-card-head"><span className="signal-dot" /> <span>Consulta por WhatsApp</span></div>
                  {sent ? <div className="success-state"><div className="success-icon"><Check /></div><h3>Recibimos tu consulta.</h3><p>Revisamos los datos y te contactamos para definir el próximo paso del trabajo.</p><button className="text-button" onClick={() => setSent(false)}>Enviar otra consulta</button></div> : <form onSubmit={handleSubmit}>
                    <h2>¿Qué trabajo necesitás hacer?</h2><p className="form-intro">Mandanos una descripción, fotos, medidas o un plano. Te respondemos con una orientación concreta.</p>
                    <label>Nombre / Empresa<input required name="name" placeholder="Ej. Juan Pérez · Bodega Norte" /></label>
                    <label>WhatsApp de contacto<input required name="phone" inputMode="tel" placeholder="+54 9 261 555 0182" /></label>
                    <label>Descripción breve<textarea required name="message" rows={3} placeholder="Necesito fabricar / reparar..." /></label>
                    <button className="btn btn-dark w-100" type="submit">Consultar un trabajo <ArrowRight size={17} /></button><small><ShieldCheck size={13} /> Usamos tus datos únicamente para responderte.</small>
                  </form>}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll">SCROLL PARA CONOCER MÁS <span>↓</span></div>
        </section>

        <section className="trust-strip"><div className="container trust-inner"><div className="trust-label">CAPACIDAD PARA<br /><strong>INDUSTRIAS EXIGENTES</strong></div><div className="trust-sectors"><span>Vitivinícola</span><span>Petrolera</span><span>Minera</span><span>Alimenticia</span><span>Energética</span></div><div className="trust-note">+ Soluciones a medida<br /><strong>para cada proceso</strong></div></div></section>

        <section className="problem-section section-space"><div className="container"><div className="row g-5 align-items-end"><div className="col-lg-5"><div className="eyebrow"><span className="eyebrow-line" /> TRABAJOS DE TALLER</div><h2 className="display-title">Piezas, reparaciones y estructuras <em>para seguir trabajando.</em></h2></div><div className="col-lg-6 offset-lg-1"><p className="section-intro">Resolvemos trabajos que necesitan medidas claras, materiales adecuados y una ejecución prolija: desde una pieza hasta una intervención en planta.</p><a className="inline-link" href="#soluciones">Ver cómo lo resolvemos <ArrowRight size={17} /></a></div></div><div className="pain-grid row g-3 mt-4"><div className="col-md-4"><div className="pain-card"><span className="pain-number">01</span><h3>Piezas y repuestos</h3><p>Fabricamos o recuperamos piezas a partir de planos, muestras y medidas tomadas en el lugar.</p></div></div><div className="col-md-4"><div className="pain-card"><span className="pain-number">02</span><h3>Mantenimiento y reparación</h3><p>Reparamos, mantenemos y adaptamos equipos según el problema real de cada instalación.</p></div></div><div className="col-md-4"><div className="pain-card featured"><Zap size={24} /><h3>Trabajo bien resuelto</h3><p>Un taller al que podés consultar directamente y explicar el trabajo sin vueltas.</p></div></div></div></div></section>

        <section id="soluciones" className="solutions-section section-space"><div className="container"><div className="section-heading-row"><div><div className="eyebrow light"><span className="eyebrow-line" /> SOLUCIONES INDUSTRIALES</div><h2 className="display-title light-text">Lo que hacemos en el taller.<br /><em>Sin vueltas.</em></h2></div><span className="section-index">01 / 03</span></div><div className="row g-0 service-grid"><div className="col-lg-4"><article className="service-card"><div className="service-icon"><Wrench /></div><span className="service-tag">01 · MANTENIMIENTO</span><h3>Mantenimiento<br />industrial</h3><p>Mantenimiento preventivo y correctivo para equipos e instalaciones.</p><a href="#cotizar">Consultar mantenimiento <ArrowRight size={16} /></a></article></div><div className="col-lg-4"><article className="service-card active"><div className="service-icon"><Gauge /></div><span className="service-tag">02 · MECANIZADO</span><h3>Mecanizado CNC<br />y convencional</h3><p>Piezas, ejes, bujes y componentes a medida según plano o muestra.</p><a href="#cotizar">Necesito una pieza <ArrowRight size={16} /></a></article></div><div className="col-lg-4"><article className="service-card"><div className="service-icon"><HardHat /></div><span className="service-tag">03 · SOLDADURA</span><h3>Soldadura y<br />estructuras</h3><p>Soldadura MIG, TIG y fabricación de estructuras en acero inoxidable y carbono.</p><a href="#cotizar">Consultar soldadura <ArrowRight size={16} /></a></article></div></div><div className="service-extra" aria-label="Otros trabajos y especialidades"><span>Cinta de transporte</span><span>Mesa vibrante</span><span>Volcadores hidráulicos</span><span>Salas de bomba</span><span>Instalación de equipos de frío</span><span>Neumática</span><span>Hidráulica</span></div></div></section>

        <section id="proceso" className="process-section section-space"><div className="container"><div className="row"><div className="col-lg-4"><div className="eyebrow"><span className="eyebrow-line" /> CÓMO TRABAJAMOS</div><h2 className="display-title">Cómo encaramos cada<br /><em>trabajo.</em></h2><p className="section-intro">Revisamos el trabajo, confirmamos medidas y materiales, y te pasamos un presupuesto antes de empezar.</p></div><div className="col-lg-7 offset-lg-1 process-list"><div className="process-item"><span>01</span><div><h3>Relevamiento inicial</h3><p>Entendemos el problema, la pieza o el proceso que necesita atención.</p></div></div><div className="process-item"><span>02</span><div><h3>Presupuesto y plan</h3><p>Recibís una propuesta con alcance, materiales, plazos y próximos pasos.</p></div></div><div className="process-item"><span>03</span><div><h3>Ejecución y control</h3><p>Fabricamos, reparamos o intervenimos con seguimiento y control de calidad.</p></div></div><div className="process-item"><span>04</span><div><h3>Entrega y revisión</h3><p>Entregamos una solución lista para volver a producción con respaldo.</p></div></div></div></div></div></section>

        <section className="gallery-section section-space"><div className="container"><div className="section-heading-row"><div><div className="eyebrow"><span className="eyebrow-line" /> TRABAJOS REALES</div><h2 className="display-title">Lo que hacemos,<br /><em>se puede ver.</em></h2></div></div><div className="portfolio-filters" role="group" aria-label="Filtrar trabajos"><button type="button" aria-pressed={portfolioFilter === "todos"} className={portfolioFilter === "todos" ? "active" : ""} onClick={() => setPortfolioFilter("todos")}>Todos</button><button type="button" aria-pressed={portfolioFilter === "tableros"} className={portfolioFilter === "tableros" ? "active" : ""} onClick={() => setPortfolioFilter("tableros")}>Tableros y control</button><button type="button" aria-pressed={portfolioFilter === "instalaciones"} className={portfolioFilter === "instalaciones" ? "active" : ""} onClick={() => setPortfolioFilter("instalaciones")}>Instalaciones</button><button type="button" aria-pressed={portfolioFilter === "mantenimiento"} className={portfolioFilter === "mantenimiento" ? "active" : ""} onClick={() => setPortfolioFilter("mantenimiento")}>Mantenimiento</button><button type="button" aria-pressed={portfolioFilter === "mecanizado"} className={portfolioFilter === "mecanizado" ? "active" : ""} onClick={() => setPortfolioFilter("mecanizado")}>Mecanizado</button><button type="button" aria-pressed={portfolioFilter === "fabricacion"} className={portfolioFilter === "fabricacion" ? "active" : ""} onClick={() => setPortfolioFilter("fabricacion")}>Fabricación y montaje</button></div><div className="portfolio-grid">{portfolioItems.filter((item) => portfolioFilter === "todos" || item.category === portfolioFilter).map((item) => <figure className="portfolio-card" key={item.image}><img src={item.image} alt={item.title} loading="lazy" /><figcaption><span>{item.label}</span><strong>{item.title}</strong></figcaption></figure>)}</div></div></section>

        <section className="clients-section"><div className="container clients-inner"><div className="clients-copy"><div className="eyebrow"><span className="eyebrow-line" /> CLIENTES</div><h2 className="display-title">Trabajos para empresas<br /><em>y organizaciones.</em></h2><p>Algunas empresas y organizaciones con las que hemos trabajado.</p><div className="clients-proof"><Star size={22} strokeWidth={1.8} aria-hidden="true" /><span>Empresas y organizaciones<br />que confían en nuestro trabajo</span></div></div><div className="client-marquee" aria-label="Empresas clientes"><div className="client-track client-track-forward"><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>AGROISME</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>EDEMSA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>ENER SHOP</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>JUGOS AUSTRALES</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>AGROISME</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>EDEMSA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>ENER SHOP</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>JUGOS AUSTRALES</span></div></div><div className="client-track client-track-reverse"><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>TELECOM</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>BODEGAS PULENTA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>MOLINOS FLORENCIA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>COOPERATIVA TUP</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>TELECOM</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>BODEGAS PULENTA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>MOLINOS FLORENCIA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>COOPERATIVA TUP</span></div></div></div></div></section>

        <section className="faq-section section-space"><div className="container"><div className="row"><div className="col-lg-4"><div className="eyebrow"><span className="eyebrow-line" /> PREGUNTAS FRECUENTES</div><h2 className="display-title">Antes de<br /><em>empezar.</em></h2></div><div className="col-lg-7 offset-lg-1 faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item open" : "faq-item"} key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></div></section>

        <section className="final-cta"><div className="container final-cta-inner"><div><div className="eyebrow light"><span className="eyebrow-line" /> ¿TENÉS UN TRABAJO PARA CONSULTAR?</div><h2>Mandanos los datos del trabajo.<br /><em>Lo revisamos juntos.</em></h2></div><a className="btn btn-safety btn-lg" href="#cotizar">Consultar trabajo <ArrowRight size={18} /></a></div></section>
      </main>
      <footer><div className="container footer-inner"><a className="brand footer-brand" href="#inicio"><img className="brand-logo" src={logoSrc} alt="Servicios Integrados" /></a><p>Fabricación a medida y mantenimiento industrial.<br />Mendoza, Argentina.<br />Hugo David Murua · +54 9 261 538 4243</p><a className="whatsapp-link" href="https://wa.me/5492615384243?text=Hola%2C%20vi%20la%20web%20de%20Servicio%20Integrado%20y%20necesito%20cotizar%20un%20servicio%20industrial." target="_blank" rel="noreferrer"><MessageCircle size={17} /> Hablar por WhatsApp</a><span className="footer-copy">© 2026 · Todos los derechos reservados</span></div></footer>
      <a className="whatsapp-float" href="https://wa.me/5492615384243?text=Hola%2C%20vi%20la%20web%20de%20Servicio%20Integrado%20y%20necesito%20cotizar%20un%20servicio%20industrial." target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><MessageCircle size={25} /><span>WhatsApp</span></a>
    </div>
  );
}
