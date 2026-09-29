const howItWorksLinkPattern =
  /<a(?=[^>]*class="nav-link-new w-inline-block")[^>]*>\s*<div>How it works<\/div>\s*<div class="nav-link-underline">\s*<\/div>\s*<\/a>/;
const clientsLinkPattern =
  /<a(?=[^>]*class="nav-link-new w-inline-block")[^>]*>\s*<div>Clients<\/div>\s*<div class="nav-link-underline">\s*<\/div>\s*<\/a>/;
const faqLinkPattern =
  /<a(?=[^>]*class="nav-link-new w-inline-block")[^>]*>\s*<div>FAQ<\/div>\s*<div class="nav-link-underline">\s*<\/div>\s*<\/a>/;

export function applyPrimaryNavigation(markup, deepReadsUrl) {
  if (!deepReadsUrl) {
    throw new Error('A local Deep Reads URL is required.');
  }

  const deepReadsLink = `<a href="${deepReadsUrl}" class="nav-link-new w-inline-block"><div>Deep Reads</div><div class="nav-link-underline"></div></a>`;
  const requiredLinks = [
    ['How it works', howItWorksLinkPattern],
    ['Clients', clientsLinkPattern],
    ['FAQ', faqLinkPattern],
  ];

  for (const [label, pattern] of requiredLinks) {
    if (!pattern.test(markup)) {
      throw new Error(`Unable to locate the ${label} navigation link.`);
    }
  }

  return markup
    .replace(howItWorksLinkPattern, deepReadsLink)
    .replace(clientsLinkPattern, '')
    .replace(faqLinkPattern, '');
}
