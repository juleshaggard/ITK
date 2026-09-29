import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as parse5 from 'parse5';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputFile = path.join(projectRoot, 'src/content/deep-reads.generated.json');
const assetDirectory = path.join(projectRoot, 'public/assets/deep-reads');
const archiveUrl = 'https://www.inthekitchen.is/deep-reads';

const attributes = (node) =>
  Object.fromEntries((node.attrs || []).map(({ name, value }) => [name, value]));

const classNames = (node) => (attributes(node).class || '').split(/\s+/).filter(Boolean);
const hasClass = (node, name) => classNames(node).includes(name);
const textContent = (node) =>
  node?.nodeName === '#text'
    ? node.value
    : (node?.childNodes || []).map(textContent).join('');

function findAll(node, predicate, matches = []) {
  if (predicate(node)) matches.push(node);
  for (const child of node.childNodes || []) findAll(child, predicate, matches);
  return matches;
}

function findFirst(node, predicate) {
  if (predicate(node)) return node;
  for (const child of node.childNodes || []) {
    const match = findFirst(child, predicate);
    if (match) return match;
  }
  return undefined;
}

function setAttribute(node, name, value) {
  node.attrs ||= [];
  const existing = node.attrs.find((attribute) => attribute.name === name);
  if (existing) existing.value = value;
  else node.attrs.push({ name, value });
}

function cleanArticleNode(node) {
  if (!node.childNodes) return;

  node.childNodes = node.childNodes.filter((child) => {
    const copy = textContent(child).replace(/[\s\u200d\u200b\u00a0]/g, '');
    if (child.tagName === 'p' && !copy && !findFirst(child, (item) => item.tagName === 'img')) {
      return false;
    }
    if (hasClass(child, 'quote-block') && !copy) return false;
    return true;
  });

  for (const child of node.childNodes) cleanArticleNode(child);
}

function safeExtension(url) {
  const extension = path.extname(new URL(url).pathname).toLowerCase();
  return /^\.(avif|gif|jpe?g|png|svg|webp)$/.test(extension) ? extension : '.webp';
}

async function downloadAsset(url, filename) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Unable to download ${url}: ${response.status}`);
  await fs.writeFile(path.join(assetDirectory, filename), Buffer.from(await response.arrayBuffer()));
  return `__BASE__assets/deep-reads/${filename}`;
}

async function fetchDocument(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Unable to fetch ${url}: ${response.status}`);
  return parse5.parse(await response.text());
}

await fs.mkdir(assetDirectory, { recursive: true });

const archiveDocument = await fetchDocument(archiveUrl);
const archiveItems = findAll(archiveDocument, (node) => hasClass(node, 'blog-item'));

const archiveEntries = archiveItems.map((item) => {
  const anchor = findFirst(
    item,
    (node) => node.tagName === 'a' && attributes(node).href?.startsWith('/deep-reads/'),
  );
  const image = findFirst(item, (node) => node.tagName === 'img');
  const heading = findFirst(item, (node) => /^h[1-6]$/.test(node.tagName || ''));
  const description = findFirst(item, (node) => node.tagName === 'p');
  return {
    slug: attributes(anchor).href.split('/').filter(Boolean).at(-1),
    title: textContent(heading).trim(),
    description: textContent(description).trim(),
    thumbnailUrl: attributes(image).src,
  };
});

const articles = [];

for (const [articleIndex, entry] of archiveEntries.entries()) {
  const document = await fetchDocument(`${archiveUrl}/${entry.slug}`);
  const header = findFirst(document, (node) => hasClass(node, 'blog-header-wrap'));
  const title = textContent(findFirst(header, (node) => node.tagName === 'h1')).trim();
  const dek = textContent(findFirst(header, (node) => node.tagName === 'p')).trim();
  const metadata = findAll(document, (node) => hasClass(node, 'text-block-2'))
    .map((node) => textContent(node).trim())
    .filter(Boolean);
  const bottomLine = findFirst(
    document,
    (node) => hasClass(node, 'hero-frame-2') && hasClass(node, 'yellow') && hasClass(node, 'blog'),
  );
  const articleBody = findFirst(document, (node) => hasClass(node, 'div-block-4'));

  if (!articleBody) throw new Error(`Unable to find the article body for ${entry.slug}.`);
  cleanArticleNode(articleBody);

  const thumbnailFilename = `${String(articleIndex + 1).padStart(2, '0')}-${entry.slug}-card${safeExtension(entry.thumbnailUrl)}`;
  const thumbnail = await downloadAsset(entry.thumbnailUrl, thumbnailFilename);

  const bodyImages = findAll(articleBody, (node) => node.tagName === 'img');
  for (const [imageIndex, image] of bodyImages.entries()) {
    const source = attributes(image).src;
    if (!source?.startsWith('http')) continue;
    const filename = `${String(articleIndex + 1).padStart(2, '0')}-${entry.slug}-${String(imageIndex + 1).padStart(2, '0')}${safeExtension(source)}`;
    setAttribute(image, 'src', await downloadAsset(source, filename));
    setAttribute(image, 'loading', 'lazy');
    image.attrs = image.attrs.filter(({ name }) => name !== 'srcset' && name !== 'sizes');
  }

  for (const link of findAll(articleBody, (node) => node.tagName === 'a')) {
    const href = attributes(link).href;
    if (href?.startsWith('/deep-reads/')) setAttribute(link, 'href', `__BASE__${href.slice(1)}/`);
  }

  articles.push({
    ...entry,
    title,
    dek,
    date: metadata[0] || '',
    readTime: metadata[1] || '',
    bottomLine: bottomLine ? textContent(bottomLine).trim() : '',
    thumbnail,
    bodyHtml: parse5.serialize(articleBody),
  });
}

await fs.writeFile(outputFile, `${JSON.stringify(articles, null, 2)}\n`);
console.log(`Imported ${articles.length} Deep Reads articles.`);
