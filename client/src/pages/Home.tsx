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
const logoSrc = isWebDevPreview ? "/manus-storage/sint-logo-transparent_c4884d11.png" : "/assets/sint-logo-transparent.png";
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
  { image: portfolioImage("obra-01.webp", "obra-01_2e9a7978.webp"), category: "tableros", label: "Tableros y control", title: "Tablero eléctrico industrial" },
  { image: portfolioImage("obra-02.webp", "obra-02_ba343550.webp"), category: "tableros", label: "Tableros y control", title: "Tablero eléctrico industrial" },
  { image: portfolioImage("obra-03.webp", "obra-03_493209cc.webp"), category: "tableros", label: "Tableros y control", title: "Tablero de comando" },
  { image: portfolioImage("obra-04.webp", "obra-04_84dcf1a6.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Cañerías y conexiones" },
  { image: portfolioImage("obra-05.webp", "obra-05_878f8e48.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Instalación de bombeo" },
  { image: portfolioImage("obra-06.webp", "obra-06_332fd643.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Conjunto de válvulas" },
  { image: portfolioImage("obra-07.webp", "obra-07_0b94e960.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Conjunto de bombeo" },
  { image: portfolioImage("obra-08.webp", "obra-08_af2c1810.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Cañerías de proceso" },
  { image: portfolioImage("obra-09.webp", "obra-09_1559932e.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Instalación exterior" },
  { image: portfolioImage("obra-10.webp", "obra-10_36f35d8e.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Equipos de generación" },
  { image: portfolioImage("obra-11.webp", "obra-11_cb6475d1.webp"), category: "tableros", label: "Tableros y control", title: "Protecciones eléctricas" },
  { image: portfolioImage("obra-12.webp", "obra-12_94f5679b.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Equipamiento industrial" },
  { image: portfolioImage("obra-13.webp", "obra-13_f7637fd1.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Bombas y conexiones" },
  { image: portfolioImage("obra-14.webp", "obra-14_8c7ae667.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Tendido de cañerías" },
  { image: portfolioImage("obra-15.webp", "obra-15_4292f358.webp"), category: "tableros", label: "Tableros y control", title: "Gabinete de control" },
  { image: portfolioImage("obra-16.webp", "obra-16_d54ae3d0.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Sala de máquinas" },
  { image: portfolioImage("obra-17.webp", "obra-17_e23b81a5.webp"), category: "instalaciones", label: "Instalaciones industriales", title: "Conexiones de servicio" },
  { image: portfolioImage("obra-18.webp", "obra-18_47b13200.webp"), category: "tableros", label: "Tableros y control", title: "Tablero de protecciones" },
  { image: portfolioImage("obra-19.webp", "obra-19_9a35da07.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Bomba industrial" },
  { image: portfolioImage("obra-20.webp", "obra-20_32e52a66.webp"), category: "mantenimiento", label: "Mantenimiento en planta", title: "Equipos de bombeo" },
];

const faqs = [
  ["¿En cuánto tiempo responden una consulta?", "Respondemos en menos de 2 horas hábiles. Si el pedido es urgente, podés escribirnos por WhatsApp para coordinar una primera evaluación inmediata."],
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
    const message = `Hola Hugo, vi la web de SINT Electromecánica - Servicio Integrado. Soy ${formData.get("name")} y necesito cotizar: ${formData.get("message")}. Mi WhatsApp es ${formData.get("phone")}.`;
    window.open(`https://wa.me/5492615384243?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div className="site-shell">
      <div className="topline"><div className="container d-flex justify-content-between align-items-center"><span>MENDOZA · SERVICIOS INDUSTRIALES B2B</span><span className="topline-right"><Clock3 size={14} /> Respuesta en menos de 2 horas hábiles</span></div></div>
      <header className="nav-wrap">
        <div className="container nav-inner">
          <a className="brand" href="#inicio" aria-label="SINT Electromecánica - Servicio Integrado"><img className="brand-logo" src={logoSrc} alt="SINT Electromecánica - Servicio Integrado" /></a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <span className="hamburger">☰</span>}</button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#soluciones" onClick={() => setMenuOpen(false)}>Soluciones</a><a href="#proceso" onClick={() => setMenuOpen(false)}>Cómo trabajamos</a><a href="#caso" onClick={() => setMenuOpen(false)}>Caso de éxito</a>
            <a className="nav-cta" href="#cotizar" onClick={() => setMenuOpen(false)}>Cotizar proyecto <ArrowRight size={16} /></a>
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
                <div className="eyebrow light"><span className="eyebrow-line" /> PRECISIÓN QUE MANTIENE TU PLANTA EN MARCHA</div>
                <h1>Fabricación a medida.<br /><span>Mantenimiento</span> sin demoras.</h1>
                <p className="hero-lead">Mecanizado, soldadura y mantenimiento industrial de alta exigencia para reducir paradas de planta en Mendoza.</p>
                <div className="hero-points"><span><Check size={15} /> Diagnóstico técnico</span><span><Check size={15} /> Entregas ágiles</span><span><Check size={15} /> Control de calidad</span></div>
                <a href="#cotizar" className="btn btn-safety btn-lg">Cotizar mi proyecto en 24h <MoveUpRight size={18} /></a>
              </div>
              <div className="col-lg-5" id="cotizar">
                <div className="quote-card">
                  <div className="quote-card-head"><span className="signal-dot" /> <span>Respuesta técnica rápida</span></div>
                  {sent ? <div className="success-state"><div className="success-icon"><Check /></div><h3>Recibimos tu consulta.</h3><p>Un especialista se pondrá en contacto para entender el alcance y darte un próximo paso concreto.</p><button className="text-button" onClick={() => setSent(false)}>Enviar otra consulta</button></div> : <form onSubmit={handleSubmit}>
                    <h2>¿Qué necesitás resolver?</h2><p className="form-intro">Contanos brevemente el problema. Te respondemos con criterio técnico, no con una respuesta genérica.</p>
                    <label>Nombre / Empresa<input required name="name" placeholder="Ej. Juan Pérez · Bodega Norte" /></label>
                    <label>WhatsApp de contacto<input required name="phone" inputMode="tel" placeholder="+54 9 261 555 0182" /></label>
                    <label>Descripción breve<textarea required name="message" rows={3} placeholder="Necesito fabricar / reparar..." /></label>
                    <button className="btn btn-dark w-100" type="submit">Cotizar mi proyecto en 24h <ArrowRight size={17} /></button><small><ShieldCheck size={13} /> Tus datos se usan solo para responder tu consulta.</small>
                  </form>}
                </div>
              </div>
            </div>
          </div>
          <div className="hero-scroll">SCROLL PARA CONOCER MÁS <span>↓</span></div>
        </section>

        <section className="trust-strip"><div className="container trust-inner"><div className="trust-label">CAPACIDAD PARA<br /><strong>INDUSTRIAS EXIGENTES</strong></div><div className="trust-sectors"><span>Vitivinícola</span><span>Petrolera</span><span>Minera</span><span>Alimenticia</span><span>Energética</span></div><div className="trust-note">+ Soluciones a medida<br /><strong>para cada proceso</strong></div></div></section>

        <section className="problem-section section-space"><div className="container"><div className="row g-5 align-items-end"><div className="col-lg-5"><div className="eyebrow"><span className="eyebrow-line" /> EL COSTO DE ESPERAR</div><h2 className="display-title">Cuando una pieza falla, <em>todo se detiene.</em></h2></div><div className="col-lg-6 offset-lg-1"><p className="section-intro">Una parada no es solo una reparación pendiente. Es producción perdida, equipos ociosos y decisiones tomadas a las apuradas. Diseñamos una respuesta técnica para que el problema no vuelva a aparecer.</p><a className="inline-link" href="#soluciones">Ver cómo lo resolvemos <ArrowRight size={17} /></a></div></div><div className="pain-grid row g-3 mt-4"><div className="col-md-4"><div className="pain-card"><span className="pain-number">01</span><h3>Repuestos que demoran semanas</h3><p>Reconstruimos y fabricamos componentes críticos a partir de planos, muestras o relevamiento.</p></div></div><div className="col-md-4"><div className="pain-card"><span className="pain-number">02</span><h3>Fallas imprevistas en planta</h3><p>Intervenimos con diagnóstico, mantenimiento preventivo y una solución que contempla el contexto real.</p></div></div><div className="col-md-4"><div className="pain-card featured"><Zap size={24} /><h3>Respuesta que vuelve a poner todo en marcha</h3><p>Un equipo técnico que entiende urgencias industriales y habla tu mismo idioma.</p></div></div></div></div></section>

        <section id="soluciones" className="solutions-section section-space"><div className="container"><div className="section-heading-row"><div><div className="eyebrow light"><span className="eyebrow-line" /> SOLUCIONES INDUSTRIALES</div><h2 className="display-title light-text">No vendemos horas.<br /><em>Resolvemos procesos.</em></h2></div><span className="section-index">01 / 04</span></div><div className="row g-0 service-grid"><div className="col-lg-4"><article className="service-card"><div className="service-icon"><Wrench /></div><span className="service-tag">01 · DISPONIBILIDAD</span><h3>Mantenimiento<br />industrial</h3><p>Preventivo y correctivo para bajar el riesgo operativo y anticipar la próxima falla.</p><a href="#cotizar">Quiero evitar paradas <ArrowRight size={16} /></a></article></div><div className="col-lg-4"><article className="service-card active"><div className="service-icon"><Gauge /></div><span className="service-tag">02 · PRECISIÓN</span><h3>Mecanizado CNC<br />y convencional</h3><p>Piezas, ejes, bujes y componentes a medida con tolerancias claras y controladas.</p><a href="#cotizar">Necesito una pieza <ArrowRight size={16} /></a></article></div><div className="col-lg-4"><article className="service-card"><div className="service-icon"><HardHat /></div><span className="service-tag">03 · FABRICACIÓN</span><h3>Soldadura y<br />estructuras</h3><p>MIG, TIG, sanitaria y fabricación integral en acero inoxidable y carbono.</p><a href="#cotizar">Hablar con un especialista <ArrowRight size={16} /></a></article></div></div></div></section>

        <section id="proceso" className="process-section section-space"><div className="container"><div className="row"><div className="col-lg-4"><div className="eyebrow"><span className="eyebrow-line" /> SIN VUELTAS</div><h2 className="display-title">Así trabajamos<br /><em>con vos.</em></h2><p className="section-intro">Claridad desde el primer contacto. Te decimos qué podemos hacer, cuánto demora y qué necesitás decidir.</p></div><div className="col-lg-7 offset-lg-1 process-list"><div className="process-item"><span>01</span><div><h3>Diagnóstico inicial <small>15 min</small></h3><p>Entendemos el problema, la pieza o el proceso que necesita atención.</p></div></div><div className="process-item"><span>02</span><div><h3>Presupuesto y plan</h3><p>Recibís una propuesta con alcance, materiales, plazos y próximos pasos.</p></div></div><div className="process-item"><span>03</span><div><h3>Ejecución y control</h3><p>Fabricamos, reparamos o intervenimos con seguimiento y control de calidad.</p></div></div><div className="process-item"><span>04</span><div><h3>Entrega y garantía</h3><p>Entregamos una solución lista para volver a producción con respaldo.</p></div></div></div></div></div></section>

        <section id="caso" className="case-section"><div className="container"><div className="case-label">CASO DE ÉXITO · FORMATO EDITABLE</div><div className="row g-0 case-wrap"><div className="col-lg-6 case-image"><img src={img.maintenance} alt="Mantenimiento de equipo industrial" /></div><div className="col-lg-6 case-copy"><div className="eyebrow light"><span className="eyebrow-line" /> DEL PROBLEMA AL RESULTADO</div><h2>Un eje crítico.<br /><em>Una planta en marcha.</em></h2><div className="case-row"><span>DESAFÍO</span><p>Reconstruir un componente desgastado sin esperar semanas por un repuesto importado.</p></div><div className="case-row"><span>SOLUCIÓN</span><p>Relevamiento, mecanizado de precisión y ajuste final con control dimensional.</p></div><div className="case-result"><strong>48 hs</strong><span>de respuesta técnica para<br />volver a producir.</span></div><a href="#cotizar" className="btn btn-safety">Quiero resolver un caso similar <ArrowRight size={17} /></a></div></div></div></section>

        <section className="gallery-section section-space"><div className="container"><div className="section-heading-row"><div><div className="eyebrow"><span className="eyebrow-line" /> TRABAJOS REALES</div><h2 className="display-title">Lo que hacemos,<br /><em>se puede ver.</em></h2></div><p className="gallery-note">Una selección de trabajos del taller. Las fotos están agrupadas por similitud visual, sin inventar fechas ni etapas de ejecución.</p></div><div className="portfolio-filters" role="group" aria-label="Filtrar trabajos"><button className={portfolioFilter === "todos" ? "active" : ""} onClick={() => setPortfolioFilter("todos")}>Todos</button><button className={portfolioFilter === "tableros" ? "active" : ""} onClick={() => setPortfolioFilter("tableros")}>Tableros y control</button><button className={portfolioFilter === "instalaciones" ? "active" : ""} onClick={() => setPortfolioFilter("instalaciones")}>Instalaciones</button><button className={portfolioFilter === "mantenimiento" ? "active" : ""} onClick={() => setPortfolioFilter("mantenimiento")}>Mantenimiento</button></div><div className="portfolio-grid">{portfolioItems.filter((item) => portfolioFilter === "todos" || item.category === portfolioFilter).map((item) => <figure className="portfolio-card" key={item.image}><img src={item.image} alt={item.title} loading="lazy" /><figcaption><span>{item.label}</span><strong>{item.title}</strong></figcaption></figure>)}</div></div></section>

        <section className="clients-section"><div className="container clients-inner"><div className="clients-copy"><div className="eyebrow"><span className="eyebrow-line" /> CLIENTES</div><h2 className="display-title">Empresas que ya<br /><em>confían en nosotros.</em></h2><p>Una selección de empresas y organizaciones que han confiado en nuestra capacidad técnica y respuesta industrial.</p><div className="clients-proof"><Star size={22} strokeWidth={1.8} aria-hidden="true" /><span>Empresas y organizaciones<br />que confían en nuestro trabajo</span></div></div><div className="client-marquee" aria-label="Empresas clientes"><div className="client-track client-track-forward"><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>AGROISME</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>EDEMSA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>ENER SHOP</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>JUGOS AUSTRALES</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>AGROISME</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>EDEMSA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>ENER SHOP</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>JUGOS AUSTRALES</span></div></div><div className="client-track client-track-reverse"><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>TELECOM</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>BODEGAS PULENTA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>MOLINOS FLORENCIA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>COOPERATIVA TUP</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>TELECOM</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>BODEGAS PULENTA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>MOLINOS FLORENCIA</span></div><div className="client-pill"><Star size={14} strokeWidth={1.8} aria-hidden="true" /><span>COOPERATIVA TUP</span></div></div></div></div></section>

        <section className="faq-section section-space"><div className="container"><div className="row"><div className="col-lg-4"><div className="eyebrow"><span className="eyebrow-line" /> PREGUNTAS FRECUENTES</div><h2 className="display-title">Antes de<br /><em>empezar.</em></h2></div><div className="col-lg-7 offset-lg-1 faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item open" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown size={19} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></div></section>

        <section className="final-cta"><div className="container final-cta-inner"><div><div className="eyebrow light"><span className="eyebrow-line" /> ¿TENÉS UN PROYECTO EN MENTE?</div><h2>Hablemos de cómo<br /><em>ponerlo en marcha.</em></h2></div><a className="btn btn-safety btn-lg" href="#cotizar">Cotizar mi proyecto <ArrowRight size={18} /></a></div></section>
      </main>
      <footer><div className="container footer-inner"><a className="brand footer-brand" href="#inicio"><img className="brand-logo" src={logoSrc} alt="SINT Electromecánica - Servicio Integrado" /></a><p>Fabricación a medida y mantenimiento industrial.<br />Mendoza, Argentina.<br />Hugo David Murua · +54 9 261 538 4243</p><a className="whatsapp-link" href="https://wa.me/5492615384243?text=Hola%2C%20vi%20la%20web%20de%20Servicio%20Integrado%20y%20necesito%20cotizar%20un%20servicio%20industrial." target="_blank" rel="noreferrer"><MessageCircle size={17} /> Urgencias de mantenimiento 24/7</a><span className="footer-copy">© 2026 · Todos los derechos reservados</span></div></footer>
      <a className="whatsapp-float" href="https://wa.me/5492615384243?text=Hola%2C%20vi%20la%20web%20de%20Servicio%20Integrado%20y%20necesito%20cotizar%20un%20servicio%20industrial." target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><MessageCircle size={25} /><span>Urgencias 24/7</span></a>
    </div>
  );
}
