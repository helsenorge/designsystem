#!/usr/bin/env node
import fs from "fs";
import path from "path";

const PKG_PATH = path.resolve("package.json");
const LIB_COMPONENTS = path.resolve("lib", "components");

if (!fs.existsSync(LIB_COMPONENTS)) {
  console.error(`No ${LIB_COMPONENTS} folder yet. Run build first.`);
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(PKG_PATH, "utf8"));
pkg.exports ||= {};

const EXCLUDE_PATTERNS = [
  /\.test\.d\.ts$/i,
  /\.spec\.d\.ts$/i,
  /\.story\.d\.ts$/i,
  /\.stories\.d\.ts$/i,
  /\.mdx\.d\.ts$/i,
  /\.module\.scss\.d\.ts$/i,
];

const isPascalCase = (s) => /^[A-Z][A-Za-z0-9]*$/.test(s);

let added = 0;

for (const dirent of fs.readdirSync(LIB_COMPONENTS, { withFileTypes: true })) {
  if (!dirent.isDirectory()) continue;

  const compDir = dirent.name;
  const dirPath = path.join(LIB_COMPONENTS, compDir);
  const jsIndex = path.join(dirPath, "index.js");
  if (!fs.existsSync(jsIndex)) continue;

  for (const f of fs.readdirSync(dirPath)) {
    if (!f.endsWith(".d.ts")) continue;
    if (f === "index.d.ts") continue;
    if (EXCLUDE_PATTERNS.some((re) => re.test(f))) continue;

    const base = f.replace(/\.d\.ts$/, "");
    if (!isPascalCase(base)) continue;

    const exportKey = `./components/${compDir}/${base}`;
    if (pkg.exports[exportKey]) continue;

    pkg.exports[exportKey] = {
      types: `./lib/components/${compDir}/${base}.d.ts`,
      import: `./lib/components/${compDir}/index.js`,
      require: `./lib/components/${compDir}/index.js`,
      default: `./lib/components/${compDir}/index.js`,
    };

    added++;
  }
}

fs.writeFileSync(PKG_PATH, JSON.stringify(pkg, null, 2) + "\n", "utf8");
console.log(`Added/updated ${added} deep export entries under "exports".`);
