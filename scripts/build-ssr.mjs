import { build } from "esbuild";

await build({
  entryPoints: ["client/src/entry-server.tsx"],
  bundle: true,
  format: "esm",
  platform: "node",
  packages: "external",
  outfile: "dist/server/entry-server.js",
  tsconfig: "tsconfig.json",
  jsx: "automatic",
});
