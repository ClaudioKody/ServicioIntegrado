import { ArrowRight, Clock3, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { zonePages } from "../lib/zone-content";

const whatsapp = "https://wa.me/5492615384243?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Zonas%20de%20Servicio%20Integrado%20y%20necesito%20consultar%20un%20trabajo.";
const clients = "AGROISME, EDEMSA, Ener Shop, Jugos Australes, Telecom, Bodegas Pulenta, Molinos Florencia y Cooperativa TUP";

export default function ZonesIndex() {
  return <div className="site-shell service-page">
    <div className="topline"><div className="container d-flex justify-content-between align-items-center"><span>SERVICIO INTEGRADO · MENDOZA</span><span className="topline-right"><Clock3 size={14} /> Consultas por WhatsApp</span></div></div>
    <header className="nav-wrap"><div className="container nav-inner"><a className="brand" href="/" aria-label="Servicio Integrado"><img className="brand-logo" src="/assets/servicios-integrados-mark.png" alt="Servicio Integrado" width="92" height="58" /></a><nav className="nav-links"><a href="/#soluciones">Soluciones</a><a href="/#proceso">Cómo trabajamos</a><a className="nav-cta" href="/#cotizar">Consultar trabajo <ArrowRight size={16} /></a></nav></div></header>
    <main><section className="service-hero-section section-space"><div className="container"><nav className="breadcrumbs" aria-label="Migas de pan"><Link href="/">Inicio</Link><span>›</span><span aria-current="page">Zonas</span></nav><div className="eyebrow"><span className="eyebrow-line" /> COBERTURA</div><h1 className="display-title">Servicios industriales en<br /><em>todo el Gran Mendoza.</em></h1><p className="section-intro">Mecanizado, soldadura, estructuras y mantenimiento para industrias y talleres de Capital, Godoy Cruz, Guaymallén, Las Heras, Maipú, Luján de Cuyo y Lavalle.</p><div className="service-directory-grid">{zonePages.map((zone) => <Link className="service-directory-card" href={`/zonas/${zone.slug}`} key={zone.slug}><span>GRAN MENDOZA</span><h2>{zone.name}</h2><p>{zone.intro}</p><strong>Ver cobertura <ArrowRight size={16} /></strong></Link>)}</div><p className="directory-clients"><strong>Empresas y organizaciones con las que hemos trabajado:</strong> {clients}.</p></div></section></main>
    <footer><div className="container footer-inner"><a className="brand footer-brand" href="/"><img className="brand-logo" src="/assets/servicios-integrados-mark.png" alt="Servicio Integrado" width="92" height="58" /></a><p>Fabricación a medida y mantenimiento industrial.<br />Mendoza, Argentina.<br />Hugo David Murua · +54 9 261 538 4243</p><a className="footer-services-link" href="/zonas">Zonas de cobertura</a><a className="whatsapp-link" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Hablar por WhatsApp</a><span className="footer-copy">© 2026 · Todos los derechos reservados</span></div></footer>
  </div>;
}
