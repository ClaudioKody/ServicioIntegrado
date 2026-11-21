import fs from "node:fs";
import path from "node:path";

const root = path.join(process.cwd(), "dist/public");
const services = [
  "mantenimiento-industrial",
  "mecanizado-cnc-y-convencional",
  "soldadura-y-estructuras",
  "cinta-de-transporte",
  "mesa-vibrante",
  "volcadores-hidraulicos",
  "salas-de-bomba",
  "instalacion-de-equipos-de-frio",
  "neumatica",
  "hidraulica",
  "tableros-electricos-y-control",
];
const zones = ["capital", "godoy-cruz", "guaymallen", "las-heras", "maipu", "lujan-de-cuyo", "lavalle"];
const routes = [...services.map((slug) => `/servicios/${slug}`), ...zones.map((slug) => `/zonas/${slug}`)];

function readRoute(route) {
  return fs.readFileSync(path.join(root, route, "index.html"), "utf8");
}

function imagesIn(html, className) {
  const section = html.match(new RegExp(`<div class="${className}[^>]*>([\\s\\S]*?)</div></article>`))?.[1] ?? "";
  return [...section.matchAll(/<img[^>]+src="([^"]+)"/g)].map((match) => match[1]);
}

const report = [];
for (const route of routes) {
  const html = readRoute(route);
  const hero = html.match(/class="service-hero-image"[^>]+src="([^"]+)"/)?.[1];
  if (!hero) throw new Error(`${route}: no se encontró la imagen del hero`);
  const gallery = imagesIn(html, "internal-photo-grid");
  const allImages = [hero, ...gallery];
  const duplicates = allImages.filter((src, index) => allImages.indexOf(src) !== index);
  if (duplicates.length > 0) {
    throw new Error(`${route}: imagen repetida entre hero/galería o dentro de la galería: ${[...new Set(duplicates)].join(", ")}`);
  }
  report.push({ route, hero, gallery });
}

console.log("PHOTO_LAYOUT_OK");
for (const item of report) {
  console.log(`${item.route} | hero: ${item.hero} | galería: ${item.gallery.length ? item.gallery.join(", ") : "sin galería"}`);
}
