import { build } from 'esbuild';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('..', import.meta.url));
const dir = await mkdtemp(path.join(tmpdir(), 'shubham-profile-check-'));
try {
  const output = path.join(dir, 'checks.mjs');
  await build({ stdin: { contents: `
    import assert from 'node:assert/strict';
    import React from 'react';
    import { renderToStaticMarkup } from 'react-dom/server';
    import App from './src/App';
    import { profile } from './src/data/profile';
    const render = () => renderToStaticMarkup(React.createElement(App));
    const original = render();
    assert.equal((original.match(/class="biodata-sheet"/g) || []).length, 1);
    assert.equal((original.match(/<h2/g) || []).length, 7);
    assert.equal((original.match(/<img /g) || []).length, 1);
    const originalPhoto = profile.photo.src;
    profile.photo.src = '';
    assert.ok(render().includes('aria-label="Profile photograph placeholder"'));
    profile.photo.src = originalPhoto;
    const required = [
      'Shubham Kumar', '18 August 1998', 'Bhumihar (Pilichbar)', 'Kashyap',
      'Kanya (Virgo)', 'BITS Pilani, Goa Campus', 'M.Sc. (Honours)', 'Jawahar Vidya Mandir',
      'Software Development Engineer 3 (SDE3)', 'GreyOrange Robotics',
      'Sanjay Kumar', 'Retired Government Bank Officer (Indian Bank)', 'Reena Sharma', 'Shivam Kumar',
      'gardening', 'patient listener', 'personal freedom',
      'sharing the journey of marriage', 'equal partner', 'room for both of us to grow',
      '9905580183', '898677459', 'Makchund Toli', 'Partner Preference',
      'shubham.codes', 'linkedin.com/in/schwiftycold', 'instagram.com/schwiftycold'
    ];
    for (const fact of required) assert.ok(original.includes(fact), fact);
    assert.ok(!original.includes('9905 580 183'));
    assert.ok(original.includes('5&#x27;9&quot;'));
    assert.ok(!original.includes('<details'));
    assert.ok(!original.includes('<nav'));
    const originalAddress = profile.contact[1].value;
    profile.contact[1].value = '<script>alert(1)</script>';
    assert.ok(!render().includes('<script>alert(1)</script>'));
    profile.contact[1].value = originalAddress;
    profile.photo.src = './images/example.jpg';
    assert.equal((render().match(/<img /g) || []).length, 1);
    console.log('Passed: single sheet, required facts, original-photo configuration, placeholder fallback, and text escaping.');
  `, resolveDir: root, loader: 'tsx' }, bundle: true, platform: 'node', format: 'esm', outfile: output, define: { 'process.env.NODE_ENV': '"production"' }, banner: { js: "import { createRequire } from 'node:module'; const require = createRequire(import.meta.url);" } });
  await import(pathToFileURL(output));
} finally { await rm(dir, { recursive: true, force: true }); }
