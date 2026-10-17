import { build } from 'esbuild';
import { compile } from '@tailwindcss/node';
import { Scanner } from '@tailwindcss/oxide';
import { readFile, writeFile, mkdir, cp, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('..', import.meta.url));
export async function buildSite() {
  await mkdir(path.join(root, 'dist/assets'), { recursive: true });
  await build({ absWorkingDir: root, entryPoints: ['src/main.tsx'], bundle: true, minify: true, format: 'iife', target: ['es2022'], outfile: 'dist/assets/app.js', define: { 'process.env.NODE_ENV': '"production"' } });
  const css = await readFile(path.join(root, 'src/styles.css'), 'utf8');
  const compiler = await compile(css, { base: path.join(root, 'src'), onDependency() {} });
  const scanner = new Scanner({ sources: [{ base: path.join(root, 'src'), pattern: '**/*.{tsx,ts}', negated: false }] });
  await writeFile(path.join(root, 'dist/assets/app.css'), compiler.build(scanner.scan()));
  const html = (await readFile(path.join(root, 'index.html'), 'utf8')).replace('<script type="module" src="/src/main.tsx"></script>', '<link rel="stylesheet" href="./assets/app.css"/><script defer src="./assets/app.js"></script>');
  await writeFile(path.join(root, 'dist/index.html'), html);
  let bundledJs = await readFile(path.join(root, 'dist/assets/app.js'), 'utf8');
  // Embed local photos so the single-file edition is genuinely portable.
  const imageTypes = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
  for (const file of await readdir(path.join(root, 'public'), { recursive: true })) {
    const mime = imageTypes[path.extname(file).toLowerCase()];
    const reference = './' + file.split(path.sep).join('/');
    if (mime && bundledJs.includes(reference)) {
      const image = await readFile(path.join(root, 'public', file));
      bundledJs = bundledJs.replaceAll(reference, `data:${mime};base64,${image.toString('base64')}`);
    }
  }
  const bundledCss = await readFile(path.join(root, 'dist/assets/app.css'), 'utf8');
  const standalone = html.replace('<link rel="icon" type="image/svg+xml" href="./favicon.svg"/>', '')
    .replace('<link rel="stylesheet" href="./assets/app.css"/>', () => `<style>${bundledCss}</style>`)
    .replace('<script defer src="./assets/app.js"></script>', () => `<script>${bundledJs.replace(/<\/script/gi, '<\\/script')}</script>`);
  await writeFile(path.join(root, 'dist/shubham-biodata.html'), standalone);
  await cp(path.join(root, 'public'), path.join(root, 'dist'), { recursive: true });
  console.log('Built dist/ (React + TypeScript + Tailwind CSS)');
}
if (process.argv[1] === fileURLToPath(import.meta.url)) await buildSite();
