const updateSection = (html, sectionPattern, update) => {
  const pattern = new RegExp(
    `<section(?=[^>]*${sectionPattern})[^>]*>[\\s\\S]*?<\\/section>`,
  );
  const match = html.match(pattern);

  if (!match) {
    throw new Error(`Unable to find copy section: ${sectionPattern}`);
  }

  return html.replace(pattern, update(match[0]));
};

const replaceOnce = (html, from, to, label = from) => {
  if (!html.includes(from)) {
    throw new Error(`Unable to replace copy: ${label}`);
  }

  return html.replace(from, to);
};

const replaceMatch = (html, pattern, replacement, label) => {
  if (!pattern.test(html)) {
    throw new Error(`Unable to replace copy: ${label}`);
  }

  pattern.lastIndex = 0;
  return html.replace(pattern, replacement);
};

const testimonials = [
  {
    quote:
      '“We knew our brand was not reflecting our aspirations to be a generational company. Jon spent the time to deeply understand our origin, vision, and positioning. We also loved that when we met Jon in the selection process, we met exactly who would do the work for us.”',
    author: 'Johannes Jaeckle, CEO &amp; Co-founder, Heron',
  },
  {
    quote:
      '“Jon has the rare ability to completely immerse himself in a world—a product, an ecosystem—and provide piercing clarity in how you communicate what you do, who you are, and the value you add.”',
    author: 'Holly Ransom, CEO &amp; Founder, Emergent',
  },
  {
    quote:
      '“Jon helped us craft positioning that truly resonated. The results speak for themselves: our win rate among target customers more than tripled. Jon also played a key role in rewriting our website copy, which contributed to a 31% lift in session-to-demo conversion after launch.”',
    author: 'Alison Gonzalez, VP Marketing, Pulley',
  },
  {
    quote:
      '“Jon came strongly recommended through our investors at First Round Capital and helped us nail our new positioning, website revamp (and my personal confidence and excitement) in 6 weeks flat.”',
    author: 'Troy Sultan, CEO &amp; Founder, Guide',
  },
  {
    quote:
      '“Jon quickly grasped our business needs and helped us develop a powerful brand strategy. His insights and collaborative approach were invaluable.”',
    author: 'Ashwin Krishnan, CEO &amp; Founder, Clarity RCM',
  },
  {
    quote:
      '“Jon has been invaluable in helping us develop our brand position at Mojo Crowe. He is insightful, creative, pragmatic, and he genuinely cares.”',
    author: 'Alex Ksugas, CEO, Mojo Crowe',
  },
  {
    quote:
      '“Jon’s combination of strategic thinking, facilitation skills, and bias toward execution was exactly what we needed in a positioning consultant.”',
    author: 'Sherri Johnson, Director of Product Marketing, SEON',
  },
  {
    quote:
      '“Jon helped us execute a crucial strategic repositioning and build a message that we fully own. Within weeks of launching, we closed our first enterprise deal and built a deep pipeline. The ideas and language we co-created are pulling the company forward.”',
    author: 'Alex Gallego, CEO, Redpanda',
  },
  {
    quote:
      '“This was a definite turning point for our business and sent a signal loud and clear to employees, customers, partners and the market in general.”',
    author: 'Heather Bliss, CMO, Flimp',
  },
  {
    quote:
      '“Jon’s work was instrumental in our ability to accelerate our pipeline and raise a funding round at a $1.3 billion valuation.”',
    author: 'Jamie Grenney, 4× CMO',
  },
  {
    quote:
      '“Jon creates cut-through messaging that drives impact, and most importantly, sales.”',
    author: 'Eleanor Treharne-Jones, 2× CEO',
  },
];

const faqItems = [
  {
    question: 'How much does it cost to work with In The Kitchen?',
    answer:
      'Minimums start at $25,000. Add-ons like deeper qualitative research or travel-intensive live working sessions can add to the cost. Combined brand and positioning processes start at $60,000.',
  },
  {
    question: 'We’re early stage. Are we a fit?',
    answer:
      'Probably not. If you’re still trying to figure out what the market wants from you and don’t yet have product-market fit, we recommend doing lightweight positioning work on your own, with shorter tests and faster cycles. A freelancer could be a great person to help you with this, but our consultancy is probably not the best choice.',
  },
  {
    question: 'Do you talk to our customers?',
    answer:
      'We want to talk to your customers. Positioning without buyer input is like a house with three walls. You can build it, but it leaves you exposed. At a minimum, we will ask to talk to a small handful of your best customers. When necessary, we will do deeper buyer research in partnership with you and your team, or potentially a third-party research partner.',
  },
  {
    question: 'Who needs to be involved on our side?',
    answer:
      'We recommend having the senior-most person in your organization be the executive sponsor for positioning work. Positioning requires decisive leadership and close participation at the very top of the organization. If your CEO isn’t planning to pay attention, we’re happy to have a conversation with them about why it’s important.',
  },
  {
    question: 'What if our leadership team doesn’t agree?',
    answer:
      'We built our decision-based positioning methodology after personally witnessing executive teams struggle with alignment. The only way out of deep misalignment is through it, with clarity on the threshold for “disagree and commit.” Sometimes that means taking the time to fully interrogate one specific decision with major implications. We have built our entire process and engagement style to allow for that time and to facilitate the conversations that matter.',
  },
  {
    question: 'Can we do this with AI?',
    answer:
      'AI is a useful tool for positioning. But AI cannot make decisions that fully belong to human beings. The most valuable contribution that In The Kitchen makes through positioning work is helping executive teams fully map, understand, agree on, and then act on critical decisions. This is and will always be a fundamentally human act.',
  },
  {
    question: 'Do you use AI?',
    answer:
      'Yes, we do. We use AI in many small ways and in some big ones to help with positioning. We use AI to create a backdrop for every engagement, where our decision-based positioning methodology functions as a referee and backstop to ensure we surface and land every key positioning decision. It does not do the thinking for us. It helps ensure the positioning team’s thinking has integrity. Otherwise, it is very useful for synthesizing insights from across large numbers of buyer interviews and call transcripts, helping with the grunt work of category research, and simple things like capturing meeting notes and action items.',
  },
  {
    question: 'How soon can you start?',
    answer:
      'We are often booked weeks to months to full quarters in advance. If you want our help, we want you to have it. But please give us advance notice.',
  },
  {
    question: 'Do you have references?',
    answer: 'Yes, many. Just ask.',
  },
  {
    question: 'How do you get brand work done?',
    answer:
      'We maintain a list of the strongest, most active independent creatives in B2B technology, and curate the right creative team for every creative project. This gives us access to the best talent without the overhead of an agency.',
  },
];

const renderFaqItem = ({ question, answer }) => `<div role="listitem" class="w-dyn-item"><div class="faq-item"><div class="faq-header-new"><h3 class="paragraph-l font-weight-400">${question}</h3><div class="plus-icon-faq"><div>+</div></div></div><div style="height:0px" class="faq-answer-wrapper"><div class="faq-answer-inner"><p class="paragraph-s letter-spacing-0 line-height-150">${answer}</p></div></div></div></div>`;

export const applySiteCopy = (sourceBody) => {
  let body = sourceBody;

  body = body.replace(
    /<section(?=[^>]*home-testimonial-section)[^>]*>[\s\S]*?<\/section>/g,
    '',
  );

  body = updateSection(body, 'home-hero-section', (section) => {
    let next = replaceMatch(
      section,
      /(<h1 class="h1-home-hero font-weight-300">)[\s\S]*?(<\/h1>)/,
      '$1Take the <span class="font-fraunces home-hero-span">lead position</span>$2',
      'hero headline',
    );
    next = replaceMatch(
      next,
      /(<p class="paragraph-s line-height-150 letter-spacing-0 text-wrap-balance">)[\s\S]*?(<\/p>)/,
      '$1Only one company will be the leader in your category. Let’s make it you.$2',
      'hero description',
    );
    return next;
  });

  body = updateSection(body, 'id="clients"', (section) => {
    let next = replaceMatch(
      section,
      /(<h2 class="font-weight-300 margin-48 letter-spacing-0">)[\s\S]*?(<\/h2>)/,
      '$1Ready to <span class="font-fraunces h2-span">change</span>$2',
      'client fit headline',
    );
    next = replaceOnce(next, 'Sales led', 'Sales-led');
    next = replaceOnce(next, 'Growth stage', 'Growth-stage');
    return next;
  });

  body = updateSection(body, 'lean-in-section', (section) => {
    let next = replaceMatch(
      section,
      /(<h2 class="h2-smaller font-weight-300">)[\s\S]*?(<\/h2>)/,
      '$1Investor <span class="font-fraunces h2-smaller-span">partnerships</span>$2',
      'investor headline',
    );
    next = replaceOnce(next, 'Investor partnerships', 'First Round · Norwest');
    return next;
  });

  body = updateSection(body, 'reinventing-section', (section) => {
    let next = replaceMatch(
      section,
      /(<h2 class="h2-smaller font-weight-400">)[\s\S]*?(<\/h2>)/,
      '$1People will tell you positioning is a game of inches. <span class="font-fraunces h2-smaller-span font-weight-300">Category leaders disagree</span>.$2',
      'Four Cs headline',
    );

    const items = [
      ['Cat herding', 'Capability', 'You did your own positioning and never landed it. Now there’s a messaging reset every month.', 'What your buyers can do (and not do) as a result of your product.'],
      ['Sprints to nowhere', 'Credibility', 'You did quick positioning work and got smart-<br/>sounding words and not much else.', 'What makes you exceptionally trustworthy.'],
      ['Evaporating workshops', 'Convenience', 'You ran an expensive workshop, and the consensus disappeared before the consultant got their Uber.', 'Why it’s easier to buy from you.'],
      ['White-knuckling it', 'Cost', 'You outgrew your positioning, and it has to change. You’re “just doing it,” but unsure if what you’re doing is right.', 'Why you deliver outstanding value relative to investment.'],
    ];

    for (const [oldTitle, title, oldBody, copy] of items) {
      next = replaceOnce(next, oldTitle, title);
      next = replaceOnce(next, oldBody, copy);
    }

    return next;
  });

  body = updateSection(body, 'deciding-section', (section) => {
    let next = replaceMatch(
      section,
      /(<h2 class="h2-smaller font-weight-400">)[\s\S]*?(<\/h2>)/,
      '$1Decision-Based <span class="font-fraunces h2-smaller-span">Positioning</span>$2',
      'Decision-Based Positioning headline',
    );
    next = replaceOnce(
      next,
      'The positioning industry runs on two broken models.',
      'After more than 45 deep-dive positioning exercises, we’ve learned that the most important factor behind positioning success is the integrity of the decisions beneath it.',
    );
    next = replaceOnce(
      next,
      'Workshop positioning is alignment theater.',
      'Decisions are a first-class deliverable',
    );
    next = replaceOnce(
      next,
      'The loud voices win the room, everyone nods, but the momentum doesn&#x27;t hold up after the show&#x27;s over.',
      'So we developed Decision-Based Positioning: a methodology that treats decisions as a first-class deliverable of the positioning process.',
    );
    next = replaceOnce(
      next,
      'Copy-based positioning is a word change without real conviction.',
      'Executives debate crucial decisions',
    );
    next = replaceOnce(
      next,
      'You get a new homepage, and six weeks later, there&#x27;s a rewrite based on the most recent sales call.',
      'With us, executives spend time debating crucial decisions, not splitting hairs over headlines. You leave with conviction about the path you’re taking, not just what you will say.',
    );
    next = replaceOnce(
      next,
      'Workshops and copy sprints don’t force the <br/>hard choices that create category leaders. <br/>Decision-based positioning does.',
      'We built our Decision-Based Positioning methodology after personally witnessing executive teams struggle with alignment. The only way out of deep misalignment is through it, with clarity on the threshold for “disagree and commit.” Sometimes that means taking the time to fully interrogate one specific decision with major implications. We have built our entire process and engagement style to allow for that time and to facilitate the conversations that matter.',
    );
    return next;
  });

  body = updateSection(body, 'home-three-items-section', (section) => {
    let next = replaceOnce(
      section,
      'Positioning is the sum of 31 decisions a leadership team has to make. Decision-based positioning is how we help a founder-led team to make those calls with conviction, drive genuine alignment, and build the muscle to evolve them as the market shifts.',
      'This isn’t overdressed copywriting. It’s not an over-engineered workshop. It’s a methodical process to gather the right information, have the right conversations, take full ownership of your ideas, and get them in market with full fidelity.',
    );

    const tabCopy = [
      ['Intentions', '7 Decisions'],
      ['Playing Field', '4 Decisions'],
      ['Market Segment', '3 Decisions'],
      ['Buyer', '3 Decisions'],
      ['Problem', '3 Decisions'],
      ['Alternatives', '3 Decisions'],
      ['Advantages', '5 Decisions'],
      ['How You Win', '2 Decisions'],
    ];
    let tabIndex = 0;
    next = next.replace(
      /(<div class="tab-item-inner [^"]+">\s*<h3 class="h3-smaller font-weight-300 font-fraunces letter-spacing-negative-005">)[\s\S]*?(<\/h3>\s*<p class="paragraph-s letter-spacing-negative-005 font-weight-300">)[\s\S]*?(<\/p>)/g,
      (match, beforeTitle, between, after) => {
        const copy = tabCopy[tabIndex++];
        if (!copy) return match;
        return `${beforeTitle}${copy[0]}${between}${copy[1]}${after}`;
      },
    );
    if (tabIndex !== tabCopy.length) {
      throw new Error(`Expected ${tabCopy.length} decision tabs, found ${tabIndex}.`);
    }

    next = replaceMatch(
      next,
      /(<h2 class="h2-jumbo font-weight-400">)One\.[\s\S]*?(<\/h2>)/,
      '$1First <span class="font-fraunces h2-jumbo-span">we learn</span>$2',
      'first process heading',
    );
    next = replaceOnce(
      next,
      'We guide your leadership team through 30+ explicit positioning decisions, grounded in agenuine understanding of your business, product, customers, and category. Work happens insmall group sessions and asynchronously, with enough time to build real conviction.',
      'The underlying truths that matter about your company, category, and buyers.<br/><br/>Then we talk<br/>Genuine working conversations with the people who hold a stake in positioning.<br/><br/>Then we craft<br/>Simply expressed, unadorned definition of your positioning.',
    );
    next = replaceOnce(
      next,
      '$25,000 one-time · 4 weeks',
      'Positioning decisions you fully own',
    );
    next = replaceMatch(
      next,
      /(<h2 class="h2-jumbo font-weight-400">)Two:[\s\S]*?(<\/h2>)/,
      '$1Then <span class="font-fraunces">we build</span>$2',
      'second process heading',
    );
    next = replaceOnce(
      next,
      'We turn decisions into a series of high-leverage marketing and sales assets your wholecompany can use across marketing, sales, and thought leadership. In the first month, you geta new homepage, sales deck, executive narrative, and thought leadership strategy, plus apackage of AI skills to help you think and create. As the market responds, we synthesizebuyer signals, refine decisions, and produce the content that builds your brand.',
      'Core GTM assets that make positioning shippable.<br/><br/>Then we scale<br/>For select clients, we take on limited brand-level creative work.<br/><br/>You walk away with a set of positioning decisions your leadership team fully owns, plus the homepage, sales deck, and executive narrative that get them in market.',
    );
    next = replaceOnce(
      next,
      'Starting at $10,000 / month',
      'Homepage · sales deck · executive narrative',
    );
    return next;
  });

  body = updateSection(body, 'b2b-ceos-section', (section) => {
    let testimonialIndex = 0;
    const next = section.replace(
      /(<div id="[^"]+" class="b2b-card-home">\s*<p class="paragraph-s line-height-150 letter-spacing-0 max-width-300">)[\s\S]*?(<\/p>\s*<div class="b2b-card-footer">\s*<h3 class="paragraph-xs font-medium">)[\s\S]*?(<\/h3>)/g,
      (match, beforeQuote, between, after) => {
        const copy = testimonials[testimonialIndex++];
        if (!copy) return match;
        return `${beforeQuote}${copy.quote}${between}${copy.author}${after}`;
      },
    );

    if (testimonialIndex !== testimonials.length) {
      throw new Error(
        `Expected ${testimonials.length} testimonial cards, found ${testimonialIndex}.`,
      );
    }
    return next;
  });

  body = updateSection(body, 'meet-founder-section', (section) =>
    replaceMatch(
      section,
      /(<div class="meet-the-founder-paragraph-wrapper">\s*<p class="paragraph-xs line-height-150 relative z2">)[\s\S]*?(<\/p>\s*<\/div>)/,
      '$1Jon Itkin has 20 years of experience in B2B technology, from Google and Salesforce to seed-stage startups, and has led more than 45 deep positioning engagements for companies from $$10 million to $$1 billion+ in revenue.<br/><br/>Jon shares ideas on <a href="https://www.linkedin.com/in/jonitkin/" target="_blank" class="underline-link">LinkedIn</a>, in his <a href="https://in-the-kitchen.webflow.io/home-new?feedbucketKey=itk-feedback#" class="underline-link">newsletter</a>, and in the <a href="https://in-the-kitchen.webflow.io/home-new?feedbucketKey=itk-feedback#" class="underline-link">articles section</a> of this site.$2',
      'founder bio',
    ),
  );

  body = updateSection(body, 'why-leaders-choose', () => '');

  body = updateSection(body, 'own-your-strategy-section', (section) => {
    let next = replaceMatch(
      section,
      /(<h1 class="h1-home-hero font-weight-300">)[\s\S]*?(<\/h1>)/,
      '$1It’s time to<br/>take a position.<br/><span class="font-fraunces home-hero-span smaller-span">Get In The Kitchen</span>.$2',
      'closing headline',
    );
    next = replaceMatch(
      next,
      /(<p class="paragraph-m line-height-150 font-weight-400 letter-spacing-0">)[\s\S]*?(<\/p>)/,
      '$1Get on the calendar, and we’ll walk you through the work and the stories behind it.$2',
      'closing description',
    );
    return next;
  });

  body = updateSection(body, 'id="faqs"', (section) => {
    let faqIndex = 0;
    let next = section.replace(
      /(<div class="faq-header-new">\s*<h3 class="paragraph-l font-weight-400">)[\s\S]*?(<\/h3>[\s\S]*?<div class="faq-answer-inner">\s*<p class="paragraph-s letter-spacing-0 line-height-150">)[\s\S]*?(<\/p>)/g,
      (match, beforeQuestion, between, after) => {
        const copy = faqItems[faqIndex++];
        if (!copy) return match;
        return `${beforeQuestion}${copy.question}${between}${copy.answer}${after}`;
      },
    );

    if (faqIndex === 0 || faqIndex > faqItems.length) {
      throw new Error(`Unable to populate FAQ items; found ${faqIndex} source rows.`);
    }

    const lastSourceAnswer = faqItems[faqIndex - 1].answer;
    const lastSourceItemEnd = `${lastSourceAnswer}</p></div></div></div></div>`;
    const additionalItems = faqItems.slice(faqIndex).map(renderFaqItem).join('');

    if (!next.includes(lastSourceItemEnd)) {
      throw new Error('Unable to locate the final source FAQ item.');
    }

    next = next.replace(lastSourceItemEnd, `${lastSourceItemEnd}${additionalItems}`);
    return next;
  });

  body = body
    .replace(/>Book a call(?: with Jon)?(?: →)?\s*</g, '>Book a call<')
    .replace('· positioning for B2B tech', '· Positioning for B2B tech')
    .replace(
      'Alex Gallego, CEO, Redpanda</p></div></div></section><section class="section deciding-section"',
      'Alex Gallego, Founder &amp; CEO, Redpanda</p></div></div></section><section class="section deciding-section"',
    )
    .replace(/Alison Gonzalez · VP Marketing, Pulley/g, 'Alison Gonzalez, VP Marketing, Pulley');

  return body;
};
