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
const buildDate = new Date().toISOString().slice(0, 10);

for (const route of publicRoutes) {
  const rendered = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);
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
