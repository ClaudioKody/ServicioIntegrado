import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { publicRoutes, siteOrigin } from "./site-routes.mjs";

const root = process.cwd();
const templatePath = path.join(root, "dist/public/index.html");
const serverEntry = path.join(root, "dist/server/entry-server.js");
const template = await fs.readFile(templatePath, "utf8");
globalThis.location = { pathname: "/", search: "", hash: "" };
const { render } = await import(pathToFileURL(serverEntry).href);
const buildDate = process.env.DEPLOY_DATE || new Intl.DateTimeFormat("en-CA", { timeZone: "America/Argentina/Mendoza" }).format(new Date());

for (const route of publicRoutes) {
  globalThis.location.pathname = route.path;
  const routeTemplate = route.title
    ? template
        .replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`)
        .replace(/(<meta name="description" content=")[^"]*(")/, `$1${route.description}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${siteOrigin}${route.path}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${route.title}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${route.description}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${siteOrigin}${route.path}$2`)
        .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${route.title}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${route.description}$2`)
    : template;
  const rendered = routeTemplate.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
  const target = route.path === "/" ? templatePath : path.join(root, "dist/public", route.path, "index.html");
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, rendered, "utf8");
}

const urls = publicRoutes.map((route) => `  <url>\n    <loc>${siteOrigin}${route.path === "/" ? "/" : route.path}</loc>\n    <lastmod>${buildDate}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`).join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
await fs.writeFile(path.join(root, "dist/public/sitemap.xml"), sitemap, "utf8");
await fs.writeFile(
  path.join(root, "dist/public/robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteOrigin}/sitemap.xml\n`,
  "utf8",
);
console.log(`Prerendered ${publicRoutes.length} route(s) and generated sitemap.xml`);
