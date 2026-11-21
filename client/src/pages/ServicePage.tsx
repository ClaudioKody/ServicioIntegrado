import { useEffect } from "react";
import { ArrowRight, ChevronDown, Clock3, Home, MessageCircle, Phone, Wrench } from "lucide-react";
import { Link, useRoute } from "wouter";
import { serviceBySlug, servicePages, type ServicePageData } from "../lib/service-content";

const origin = "https://serviciointegrado.com.ar";
const phone = "+5492615384243";
const displayPhone = "+54 9 261 538 4243";
const zoneSlugs = ["capital", "godoy-cruz", "guaymallen", "las-heras", "maipu", "lujan-de-cuyo", "lavalle"];
const zoneNames = ["Capital", "Godoy Cruz", "Guaymallén", "Las Heras", "Maipú", "Luján de Cuyo", "Lavalle"];

function metadata(service: ServicePageData) {
  const titleName = service.slug === "mecanizado-cnc-y-convencional" ? "Mecanizado" : service.slug === "instalacion-de-equipos-de-frio" ? "Equipos de frío" : service.name;
  return {
    title: `${titleName} en Mendoza | Servicio Integrado`,
    description: `${service.shortDescription} Consultá a Servicio Integrado en el Gran Mendoza.`,
  };
}

function updateBrowserMetadata(service: ServicePageData) {
  const { title, description } = metadata(service);
  document.title = title;
  const setMeta = (selector: string, attributes: Record<string, string>) => {
    let element = document.head.querySelector<HTMLMetaElement>(selector);
    if (!element) { element = document.createElement("meta"); document.head.appendChild(element); }
    Object.entries(attributes).forEach(([key, value]) => element!.setAttribute(key, value));
  };
  setMeta('meta[name="description"]', { name: "description", content: description });
  setMeta('meta[property="og:title"]', { property: "og:title", content: title });
  setMeta('meta[property="og:description"]', { property: "og:description", content: description });
  setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
  setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
  const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  canonical?.setAttribute("href", `${origin}/servicios/${service.slug}`);
}

function serviceJsonLd(service: ServicePageData) {
  const { title, description } = metadata(service);
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${origin}/#business`,
      name: "Servicio Integrado",
      description: "Mecanizado, soldadura, estructuras y mantenimiento para industrias y talleres de Mendoza.",
      url: origin,
      telephone: displayPhone,
      areaServed: zoneNames.map((name) => ({ "@type": "AdministrativeArea", name })),
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "17:30" }],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.shortDescription,
      provider: { "@id": `${origin}/#business` },
      areaServed: zoneNames,
      url: `${origin}/servicios/${service.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${origin}/` },
        { "@type": "ListItem", position: 2, name: "Servicios", item: `${origin}/servicios` },
        { "@type": "ListItem", position: 3, name: service.name, item: `${origin}/servicios/${service.slug}` },
      ],
    },
  ];
}

export default function ServicePage() {
  const [, params] = useRoute<{ slug: string }>("/servicios/:slug");
  const service = params?.slug ? serviceBySlug.get(params.slug) : undefined;
  useEffect(() => {
    if (service) updateBrowserMetadata(service);
  }, [service]);

  if (!service) return null;
  const { title, description } = metadata(service);
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(`Hola, vi la página de ${service.name} de Servicio Integrado y necesito consultar un trabajo.`)}`;

  return (
    <div className="site-shell service-page">
      <div className="topline"><div className="container d-flex justify-content-between align-items-center"><span>SERVICIO INTEGRADO · MENDOZA</span><span className="topline-right"><Clock3 size={14} /> Consultas por WhatsApp</span></div></div>
      <header className="nav-wrap"><div className="container nav-inner"><a className="brand" href="/" aria-label="Servicio Integrado"><img className="brand-logo" src="/assets/servicios-integrados-mark.png" alt="Servicio Integrado" width="92" height="58" /></a><nav className="nav-links"><a href="/#soluciones">Soluciones</a><a href="/#proceso">Cómo trabajamos</a><a className="nav-cta" href="#consultar">Consultar trabajo <ArrowRight size={16} /></a></nav></div></header>
      <main>
        <section className="service-hero-section section-space"><div className="container"><nav className="breadcrumbs" aria-label="Migas de pan"><Link href="/">Inicio</Link><span>›</span><Link href="/servicios">Servicios</Link><span>›</span><span aria-current="page">{service.name}</span></nav><div className="row align-items-center g-5"><div className="col-lg-7"><div className="eyebrow"><span className="eyebrow-line" /> {service.eyebrow}</div><h1 className="display-title">{service.name}<br /><em>en Mendoza.</em></h1><p className="section-intro">{service.shortDescription}</p><div className="service-actions"><a className="btn btn-safety btn-lg" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar por WhatsApp</a><a className="btn btn-dark btn-lg" href={`tel:${phone}`}><Phone size={17} /> Llamar</a></div></div><div className="col-lg-5"><img className="service-hero-image" src="/assets/metal-hero.jpg" alt={`Trabajo de ${service.name.toLowerCase()} en taller industrial`} width="900" height="650" /></div></div></div></section>
        <section className="service-content-section section-space"><div className="container"><div className="row g-5"><article className="col-lg-8 service-copy">{service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article><aside className="col-lg-4 service-aside" id="consultar"><div className="service-aside-card"><Wrench size={25} /><h2>¿Necesitás este trabajo?</h2><p>Mandanos fotos, medidas o una descripción breve. Revisamos la consulta y coordinamos previamente el próximo paso.</p><a className="btn btn-safety w-100" href={whatsapp} target="_blank" rel="noreferrer">Enviar consulta <ArrowRight size={17} /></a><a className="service-phone" href={`tel:${phone}`}><Phone size={15} /> {displayPhone}</a></div></aside></div></div></section>
        <section className="service-faq-section section-space"><div className="container"><div className="row"><div className="col-lg-4"><div className="eyebrow"><span className="eyebrow-line" /> PREGUNTAS FRECUENTES</div><h2 className="display-title">Antes de<br /><em>consultar.</em></h2></div><div className="col-lg-7 offset-lg-1 faq-list">{service.faqs.map(([question, answer]) => <details className="service-faq" key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></div></div></section>
        <section className="service-links-section section-space"><div className="container"><div className="eyebrow light"><span className="eyebrow-line" /> COBERTURA</div><h2 className="display-title light-text">También trabajamos en<br /><em>todo el Gran Mendoza.</em></h2><div className="internal-link-grid">{zoneNames.map((zone, index) => <Link href={`/zonas/${zoneSlugs[index]}`} key={zone}>{zone}<ArrowRight size={16} /></Link>)}</div></div></section>
        <section className="service-directory section-space"><div className="container"><div className="eyebrow"><span className="eyebrow-line" /> MÁS SERVICIOS</div><h2 className="display-title">Otras soluciones<br /><em>del taller.</em></h2><div className="other-services-grid">{servicePages.filter((item) => item.slug !== service.slug).map((item) => <Link href={`/servicios/${item.slug}`} key={item.slug}>{item.name}<ArrowRight size={16} /></Link>)}</div></div></section>
      </main>
      <footer><div className="container footer-inner"><a className="brand footer-brand" href="/"><img className="brand-logo" src="/assets/servicios-integrados-mark.png" alt="Servicio Integrado" width="92" height="58" /></a><p>Fabricación a medida y mantenimiento industrial.<br />Mendoza, Argentina.<br />Hugo David Murua · {displayPhone}</p><a className="footer-services-link" href="/zonas">Zonas de cobertura</a><a className="whatsapp-link" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Hablar por WhatsApp</a><span className="footer-copy">© 2026 · Todos los derechos reservados</span></div></footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><MessageCircle size={25} /><span>WhatsApp</span></a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(service)) }} />
    </div>
  );
}
