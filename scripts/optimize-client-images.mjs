import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const sourceDirectory = path.join(process.cwd(), "public", "images", "cliente");
const files = (await readdir(sourceDirectory)).filter((file) => file.endsWith(".png"));

const widthByFile = {
  "hero.png": 1920,
  "sobre.png": 1600,
  "reclassificacao.png": 1200,
  "pericia.png": 1200,
  "assessoria-tecnica.png": 1200,
  "nosso-diferencial.png": 1600,
  "duvidas-frequentes.png": 1400,
  "faq-1.png": 1000,
  "faq-2.png": 1000,
};

for (const file of files) {
  const input = path.join(sourceDirectory, file);
  const output = path.join(sourceDirectory, file.replace(/\.png$/, ".webp"));
  await sharp(input)
    .resize({ width: widthByFile[file] ?? 1400, withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90, effort: 5 })
    .toFile(output);
  console.log(`${file} -> ${path.basename(output)}`);
}
