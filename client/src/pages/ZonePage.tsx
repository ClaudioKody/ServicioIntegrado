import { useEffect } from "react";
import { ArrowRight, ChevronDown, Clock3, MessageCircle, Phone, Wrench } from "lucide-react";
import { Link, useRoute } from "wouter";
import { servicePages } from "../lib/service-content";
import { zoneBySlug, zonePages, type ZonePageData } from "../lib/zone-content";

const origin = "https://serviciointegrado.com.ar";
const phone = "5492615384243";
const displayPhone = "+54 9 261 538 4243";
const departmentNames = zonePages.map((zone) => zone.name);

function metadata(zone: ZonePageData) {
  return { title: zone.title, description: `${zone.intro} Consultá a Servicio Integrado y coordiná previamente tu trabajo.` };
}

function updateBrowserMetadata(zone: ZonePageData) {
  const { title, description } = metadata(zone);
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
  document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", `${origin}/zonas/${zone.slug}`);
}

function zoneJsonLd(zone: ZonePageData) {
  const { description } = metadata(zone);
  return [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${origin}/#business`,
      name: "Servicio Integrado",
      description: "Mecanizado, soldadura, estructuras y mantenimiento para industrias y talleres de Mendoza.",
      url: origin,
      telephone: displayPhone,
      areaServed: departmentNames.map((name) => ({ "@type": "AdministrativeArea", name })),
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "17:30" }],
    },
    { "@context": "https://schema.org", "@type": "WebPage", name: zone.title, description, url: `${origin}/zonas/${zone.slug}` },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: zone.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "Zonas", item: `${origin}/zonas` },
      { "@type": "ListItem", position: 3, name: zone.name, item: `${origin}/zonas/${zone.slug}` },
    ] },
  ];
}

export default function ZonePage() {
  const [, params] = useRoute<{ slug: string }>("/zonas/:slug");
  const zone = params?.slug ? zoneBySlug.get(params.slug) : undefined;
  useEffect(() => {
    if (zone) updateBrowserMetadata(zone);
  }, [zone]);

  if (!zone) return null;
  const { title } = metadata(zone);
  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(`Hola, vi la página de Servicio Integrado en ${zone.name} y necesito consultar un trabajo industrial.`)}`;

  return <div className="site-shell service-page zone-page">
    <div className="topline"><div className="container d-flex justify-content-between align-items-center"><span>SERVICIO INTEGRADO · MENDOZA</span><span className="topline-right"><Clock3 size={14} /> Consultas por WhatsApp</span></div></div>
    <header className="nav-wrap"><div className="container nav-inner"><a className="brand" href="/" aria-label="Servicio Integrado"><img className="brand-logo" src="/assets/servicios-integrados-mark.png" alt="Servicio Integrado" width="92" height="58" /></a><nav className="nav-links"><a href="/#soluciones">Soluciones</a><a href="/#proceso">Cómo trabajamos</a><a className="nav-cta" href="#consultar">Consultar trabajo <ArrowRight size={16} /></a></nav></div></header>
    <main>
      <section className="service-hero-section section-space"><div className="container"><nav className="breadcrumbs" aria-label="Migas de pan"><Link href="/">Inicio</Link><span>›</span><Link href="/zonas">Zonas</Link><span>›</span><span aria-current="page">{zone.name}</span></nav><div className="row align-items-center g-5"><div className="col-lg-7"><div className="eyebrow"><span className="eyebrow-line" /> COBERTURA · GRAN MENDOZA</div><h1 className="display-title">Servicios industriales<br /><em>en {zone.name}.</em></h1><p className="section-intro">{zone.intro}</p><div className="service-actions"><a className="btn btn-safety btn-lg" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Consultar por WhatsApp</a><a className="btn btn-dark btn-lg" href={`tel:${phone}`}><Phone size={17} /> Llamar</a></div></div><div className="col-lg-5"><img className="service-hero-image" src={zone.photos[0].file} alt={zone.photos[0].alt} width="900" height="650" /></div></div></div></section>
      <section className="service-content-section section-space"><div className="container"><div className="row g-5"><article className="col-lg-8 service-copy"><p className="zone-places"><strong>Referencias de cobertura:</strong> {zone.places}.</p>{zone.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="internal-photo-grid" aria-label={`Trabajos reales en ${zone.name}`}>{zone.photos.map((item) => <figure key={item.file}><img src={item.file} alt={item.alt} loading="lazy" decoding="async" width="900" height="650" /><figcaption>{item.alt}</figcaption></figure>)}</div></article><aside className="col-lg-4 service-aside" id="consultar"><div className="service-aside-card"><Wrench size={25} /><h2>¿Tenés un trabajo en {zone.name}?</h2><p>Mandanos fotos, medidas o una descripción breve. Revisamos la consulta y coordinamos previamente el próximo paso.</p><a className="btn btn-safety w-100" href={whatsapp} target="_blank" rel="noreferrer">Enviar consulta <ArrowRight size={17} /></a><a className="service-phone" href={`tel:+${phone}`}><Phone size={15} /> {displayPhone}</a></div></aside></div></div></section>
      <section className="service-faq-section section-space"><div className="container"><div className="row"><div className="col-lg-4"><div className="eyebrow"><span className="eyebrow-line" /> PREGUNTAS FRECUENTES</div><h2 className="display-title">Antes de<br /><em>consultar.</em></h2></div><div className="col-lg-7 offset-lg-1 faq-list">{zone.faqs.map(([question, answer]) => <details className="service-faq" key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></div></div></section>
      <section className="service-links-section section-space"><div className="container"><div className="eyebrow light"><span className="eyebrow-line" /> SERVICIOS</div><h2 className="display-title light-text">Soluciones para tu<br /><em>trabajo industrial.</em></h2><div className="internal-link-grid">{servicePages.map((service) => <Link href={`/servicios/${service.slug}`} key={service.slug}>{service.name}<ArrowRight size={16} /></Link>)}</div></div></section>
      <section className="service-directory section-space"><div className="container"><div className="eyebrow"><span className="eyebrow-line" /> OTRAS ZONAS</div><h2 className="display-title">También estamos en<br /><em>el Gran Mendoza.</em></h2><div className="other-services-grid">{zonePages.filter((item) => item.slug !== zone.slug).map((item) => <Link href={`/zonas/${item.slug}`} key={item.slug}>{item.name}<ArrowRight size={16} /></Link>)}</div></div></section>
    </main>
    <footer><div className="container footer-inner"><a className="brand footer-brand" href="/"><img className="brand-logo" src="/assets/servicios-integrados-mark.png" alt="Servicio Integrado" width="92" height="58" /></a><p>Fabricación a medida y mantenimiento industrial.<br />Mendoza, Argentina.<br />Hugo David Murua · {displayPhone}</p><a className="footer-services-link" href="/zonas">Zonas de cobertura</a><a className="whatsapp-link" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Hablar por WhatsApp</a><span className="footer-copy">© 2026 · Todos los derechos reservados</span></div></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><MessageCircle size={25} /><span>WhatsApp</span></a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(zoneJsonLd(zone)) }} />
  </div>;
}
