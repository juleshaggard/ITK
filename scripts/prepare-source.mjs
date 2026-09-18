import { mkdir, readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const sourceHtmlPath = new URL('../.capture/source-original.html', import.meta.url);
const sourceCssPath = new URL('../.capture/source.css', import.meta.url);
const bodyOutputPath = new URL('../src/content/source-body.html', import.meta.url);
const cssOutputPath = new URL('../public/styles/webflow.css', import.meta.url);

const assetMap = new Map([
  ['6a47adcf14ecce4744ed2e64_Yellow%20Tab.svg', 'yellow-tab.svg'],
  ['67df08d5050dd1d0889ca3a5_Frame%202147225110.svg', 'meta.svg'],
  ['6a745f24c83039285bf0ef60_summation.webp', 'summation.webp'],
  ['67df08d5fb7338475eceb207_Frame%202147225113.svg', 'moneylion.svg'],
  ['6a47a02afb0c19543f38e912_Frame%202147225119.png', 'latent.png'],
  ['6a47a05ff0fe9d63224feaa5_Frame%202147225111.png', 'valence.png'],
  ['6a47a0b111ce0c2578ef04dc_Frame%202147225117.png', 'every.png'],
  ['67df08d53e8845b9aebe1c43_Frame%202147225114.svg', 'thunder.svg'],
  ['6a47a0ed417e8f5aecb71fa4_Frame%202147225120.svg', 'pulley.svg'],
  ['6a47a1140c860ca0bb75eb67_Genesys.png', 'genesys.png'],
  ['6a71af9cfb21547090286284_Crewai%20Logo.png', 'crewai.png'],
  ['6a47a179587989bd6ca42147_Exclaimer.svg', 'exclaimer.svg'],
  ['6a47a192c8447c9b1456844a_Frame%202147225121.png', 'redpanda.png'],
  ['6a4618b5d396d3d4a38cb223_First%20Round.svg', 'first-round.svg'],
  ['6a461934c187e7b2afb53f6c_Norwest.svg', 'norwest.svg'],
  ['6a461ac0af667aadb199aabc_GV%20Logo.svg', 'gv.svg'],
  ['6a461b13c739cbb0566d3d04_Insight%20Partners.png', 'insight-partners.png'],
  ['6a461b6ae6e10a4b3500f2cb_Bessemer%20Venture%20Partners.png', 'bessemer.png'],
  ['6a461bbfcea6ca713d96093f_Salesforce%20Ventures.svg', 'salesforce-ventures.svg'],
  ['6a461c09851544be17d37dbc_Y%20Combinator.svg', 'y-combinator.svg'],
  ['6a461c5f92801e71532c3ce8_Sequoia.svg', 'sequoia.svg'],
  ['6a4666c0e242083a90fa444a_eea8c5c9b883c19d8cd30bd4803caf44_DSC05858%201%20%281%29.avif', 'jon-itkin.avif'],
]);

const html = await readFile(sourceHtmlPath, 'utf8');
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

if (!bodyMatch) {
  throw new Error('Unable to find the captured source body.');
}

let body = bodyMatch[1]
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  .replace(/<feedbucket-app\b[^>]*>[\s\S]*?<\/feedbucket-app>/gi, '')
  .replace(/\s+srcset="[^"]*"/gi, '')
  .replace(/href="\/home-new#clients"/g, 'href="#clients"')
  .replace(/href="\/home-new#faqs"/g, 'href="#faqs"')
  .replace(/href="\/contact-us"/g, 'href="https://in-the-kitchen.webflow.io/contact-us"')
  .replace(/href="\/"/g, 'href="./"');

for (const [sourceName, localName] of assetMap) {
  const sourceUrl = `https://cdn.prod.website-files.com/67df04d46053f45e9138de87/${sourceName}`;
  body = body.split(sourceUrl).join(`assets/${localName}`);
}

// The source relies on Webflow's lazy-loading runtime. Loading the small,
// local asset set eagerly keeps every section complete in a static build.
body = body.replace(/loading="lazy"/g, 'loading="eager"');

const remainingRemoteAssets = [...body.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/67df04d46053f45e9138de87\/[^"')\s]+/g)].map((match) => match[0]);
if (remainingRemoteAssets.length > 0) {
  throw new Error(`Unlocalized source assets remain:\n${[...new Set(remainingRemoteAssets)].join('\n')}`);
}

let css = await readFile(sourceCssPath, 'utf8');
css = css
  .replace(
    'https://cdn.prod.website-files.com/67df04d46053f45e9138de87/6a452f7df6e90c804dc97449_Fraunces-VariableFont_SOFT%2CWONK%2Copsz%2Cwght.woff2',
    '../assets/fonts/fraunces.woff2',
  )
  .replace(
    'https://cdn.prod.website-files.com/67df04d46053f45e9138de87/67df061f3ddd1753d72a9b02_DMSans-VariableFont_opsz%2Cwght.ttf',
    '../assets/fonts/dm-sans.ttf',
  );

await mkdir(new URL('../src/content/', import.meta.url), { recursive: true });
await mkdir(new URL('../public/styles/', import.meta.url), { recursive: true });
await writeFile(bodyOutputPath, body);
await writeFile(cssOutputPath, css);

console.log(`Prepared ${body.length.toLocaleString()} bytes of captured body markup.`);
