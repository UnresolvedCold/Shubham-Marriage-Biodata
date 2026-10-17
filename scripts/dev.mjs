import { watch } from 'node:fs';
import { buildSite } from './build.mjs';
import { serve } from './serve.mjs';
await buildSite();
serve();
let timer, building = false, pending = false;
async function rebuild() {
  if (building) { pending = true; return; }
  building = true;
  try { await buildSite(); console.log('Updated. Refresh your browser.'); }
  catch (error) { console.error(error); }
  finally { building = false; if (pending) { pending = false; void rebuild(); } }
}
for (const dir of ['src', 'public']) watch(new URL('../' + dir, import.meta.url), { recursive: true }, () => { clearTimeout(timer); timer = setTimeout(rebuild, 120); });
watch(new URL('../index.html', import.meta.url), () => { clearTimeout(timer); timer = setTimeout(rebuild, 120); });
