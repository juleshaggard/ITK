# In The Kitchen Design System

This file is the source of truth for the site's visual language. It documents the implemented system; it does not replace `public/styles/webflow.css`. Any global brand change—type roles, scale, palette, spacing, component shape, motion, or responsive behavior—must update this file in the same change.

## 1. Brand atmosphere

In The Kitchen is an editorial B2B consultancy site: direct, opinionated, warm, and high-contrast. Large expressive typography carries the story while flat color fields, crisp dividers, and restrained pill shapes keep the experience practical. The visual density is medium-low, the composition is intentionally asymmetric, and motion is restrained and functional.

- Preserve the long-form, section-by-section narrative rhythm.
- Favor flat color, typography, borders, and whitespace over decoration.
- Keep surfaces shadow-free except where the captured source explicitly supplies one.
- Do not introduce gradients, neon glows, glass effects, or generic SaaS dashboard styling.

## 2. Color palette and roles

- **Canvas** (`#FDFCFA`) — default page, testimonial-card, founder, FAQ, and footer surface.
- **Soft Stone** (`#F6F4F1`) — process, partnership, and investor section surface.
- **Ink** (`#222222`) — primary text and dark controls.
- **Deep Ink** (`#1A1A1A`) — dark quote surface, button text, and dark controls.
- **White** (`#FFFFFF`) — text on dark fields.
- **Hero Yellow** (`#FCF387`) — opening brand field.
- **Testimonial Yellow** (`#FFF27B`) — testimonial-grid field.
- **Decision Green** (`#CFFD93`) — decision-framework fields and high-emphasis action fills.
- **Positioning Lavender** (`#E1DBFC`) — Four Cs field.
- **Deep Positioning Lavender** (`#AFA4E0`) — scroll-complete field for the positioning editorial sequence.
- **Signal Pink** (`#F2ACD7`) — client-fit tags and selected accents.
- **Action Blue** (`#2800E8`) — primary action treatment and the closing folder field.
- **Muted Brown-Gray** (`#615B55`) — secondary copy and low-emphasis metadata.

Use these colors as solid fields. Do not invent new brand colors without updating this file and verifying contrast in both light and dark sections.

## 3. Typography

### Font families

- **Narrative display:** Fraunces, loaded locally from `public/assets/fonts/fraunces.woff2`.
- **Emphasis display and all utility/body text:** DM Sans, loaded locally from `public/assets/fonts/dm-sans.ttf`.
- Fallbacks exist for resilience only and are not acceptable substitutes in production.

### Headline pairing rule

The font roles are intentionally reversed from the original source design:

- Regular H1 and H2 headline text is **Fraunces**.
- Emphasized words inside those headlines are **DM Sans**.
- When both appear on the same line, the DM Sans emphasis is slightly smaller: `--type-paired-emphasis-scale: 0.94em`.
- **Fraunces is never bold.** The only approved serif weights are light (`300`) and regular (`400`); weights `500–900` are prohibited everywhere.
- Global CSS explicitly caps serif headings at `400`, preserves intentional `font-weight-300` headings at `300`, and disables synthetic bolding with `font-synthesis: none`.
- Keep the two faces aligned on the same inherited line-height; do not compensate with transforms, relative positioning, or manual baselines.
- Decision-card H3 labels that previously carried the serif utility class also resolve to DM Sans.
- **Founder-profile treatment:** the founder biography and commercial-context headings use Fraunces Light (`300`) throughout. The former oversized DM Sans “Meet the founder” display treatment is retired.
- **Positioning/client-section treatment:** the introductory positioning statement uses Fraunces Light (`300`) at `36 px / 48 px` with `-1.41 px` tracking and synthetic styling disabled. Center the statement as one intrinsic-width block while keeping its lines left-aligned. Preserve its authored four-line desktop composition; below 768 px it uses the available content width and returns to natural wrapping at `32 px / 40 px` with `-1.25 px` tracking.
- **Testimonial-grid exception:** “B2B CEOs and CMOs / love In The Kitchen” is an all-Fraunces composition at light weight (`300`). It uses two authored desktop lines and never introduces a DM Sans emphasis span.

This `0.94em` scale is a global brand rule. If it changes, update the CSS variable and this document together.

### Implemented scale

Desktop values are fluid and resolve approximately as follows at a 1440 px viewport:

- **Hero H1:** `clamp(3.25rem, 6.79vw, 7.5rem)` with `0.92` desktop line-height and `1` mobile line-height. The paired DM Sans emphasis remains `0.94em`, so both headline faces scale together.
- **Large H2:** Fraunces 61.7 px / 1.05 line-height / 300 weight; paired emphasis approximately 58 px.
- **Smaller H2:** Fraunces 50.1 px / 1.05 line-height; paired emphasis approximately 47.1 px.
- **Jumbo process H2:** Fraunces 77.1 px / 1.05 line-height; paired emphasis approximately 72.5 px.
- **Small H3:** DM Sans 30.8 px / 1.05 line-height.
- **Body large:** DM Sans 23.1 px.
- **Body medium:** DM Sans 19.3 px / 1.5 line-height.
- **Body small:** DM Sans 15.4 px / 1.5 line-height.
- **Metadata / labels:** DM Sans 13.5 px.

At 390 px:

- **Hero H1:** 52 px / 52 px; paired emphasis 48.88 px.
- **Smaller H2:** 32 px / 33.6 px.
- **Jumbo H2:** 48 px / 50.4 px.
- **Body large:** 18 px minimum.
- **Body medium:** 20 px / 30 px.
- **Body small:** 16 px / 24 px.

Display copy uses tight negative tracking, generally around `-0.01em`; body copy remains neutral and readable. Preserve authored line breaks when they are part of the composition, but never allow mobile overflow.

## 4. Layout and spacing

- The main container is centered and maxes out at approximately 1408 px.
- The hero is the exception to the full-width section rhythm: it uses `clamp(1rem, 1.8vw, 2rem)` side gutters and `clamp(1.5rem, 2.2vw, 2rem)` below the yellow folder field.
- Desktop container gutters resolve to approximately 62 px at 1440 px; mobile gutters are 24 px.
- The page uses a 24-column Webflow-derived grid for wide compositions and collapses cleanly at the existing breakpoints.
- Primary responsive breakpoints are 991 px, 767 px, and 479 px.
- Mobile multi-column content becomes a single readable flow. Horizontal page scrolling is a critical defect.
- Sections use generous vertical separation. Typical desktop section padding is approximately 96–154 px, depending on narrative role; mobile hero padding is 160 px top and 96 px bottom.
- Maintain existing max-width classes for readable copy. Long body text should remain visually narrow even when its section spans the viewport.
- Do not center layouts that are currently left-aligned or rebalance asymmetric compositions without an explicit redesign request.

## 5. Components

### Hero folder

- The yellow hero is an inset folder panel rather than a full-bleed rectangle.
- Preserve Canvas-colored space around the yellow silhouette using `--hero-folder-gutter` on the left and right and `--hero-folder-bottom-gap` below it. At the 1311 px reference width these resolve to approximately 24 px and 29 px.
- The existing `yellow-tab.svg` is the tab geometry. It uses its native 338:71 ratio and resolves to approximately 270 × 57 px at the 1311 px reference width. The tab is inset approximately 11 px from the folder body's left edge and starts approximately 36 px below the viewport top.
- The yellow folder body is a dedicated layer beginning at approximately 90 px in the reference viewport. The tab overlaps this edge by roughly 2 px to prevent an antialiasing seam. The body's four corners use `clamp(0.75rem, 0.95vw, 1rem)`—the radius belongs to the yellow body, not the transparent outer hero container.
- The tab and body must touch without a white seam so they read as one continuous folder. The navigation logo remains centered over the tab.
- The hero participates in normal document flow (`position: relative`). Never make the hero or folder body sticky, fixed, or scroll-jacked.
- Keep the folder-tab layer visible above the body; do not add `overflow: hidden` or `overflow: clip` to the hero container.

### Hero content proportions

- On desktop, hero content begins at `--hero-content-gutter: clamp(1.5rem, 8.85vw, 8rem)` inside the yellow body; this places the text at approximately x=140 px in the 1311 px reference viewport.
- Preserve the responsive headline scale and the `0.94em` sans-serif pairing. The approved 1311 px reference resolves the headline to approximately 89 px with a 0.92 line-height.
- Desktop supporting copy is intentionally larger at `1.6875rem / 1.25` and may occupy up to ten grid columns so it reads as one continuous statement where space permits.
- The headline and supporting-copy blocks use a tight `0.25rem` section gap. The supporting copy and CTA use a wider `2.75rem` row gap.
- The desktop hero CTA is approximately 9.8125rem wide and 3.25rem tall. Mobile restores the established compact copy and spacing scale.

### Navigation

- The desktop navigation is light, horizontally arranged, and visually secondary to the page narrative.
- The canonical navigation lockup is `public/assets/itk-logo.svg`. Use the supplied vector directly at its native 160:20 (8:1) aspect ratio; do not rebuild the wordmark from live type or substitute the previous inline mark.
- Link underlines are hidden at rest and expand to full width on hover or keyboard focus.
- At 991 px and below, navigation becomes an absolute full-width menu beneath the header.
- The hamburger transitions into a close icon. Opening the menu locks document scrolling; closing it restores scrolling.
- The logo has two vertical states. Over the hero it remains centered in the yellow folder tab; once the hero has scrolled beyond the fixed navigation, it translates upward until its visible lockup shares the navigation-link centerline.
- The logo movement uses only `transform`, lasts 240 ms, and follows the established strong ease-in-out curve (`cubic-bezier(0.77, 0, 0.175, 1)`). It must reverse cleanly when returning to the hero and becomes instantaneous under `prefers-reduced-motion`.
- On desktop, the right navigation cluster also responds to the post-hero state. It translates inward by the calculated distance between the page gutter and the visible logo edge, giving the two sides matching optical insets. It uses the same 240 ms transform timing as the logo and does not alter mobile-menu positioning.
- After the user scrolls downward beyond the navigation's own height, the entire fixed navigation exits above the viewport using only a vertical transform. Any upward scroll reveals it again on a solid Canvas-white (`#FDFCFA`) background. Returning to the top restores the original transparent hero state. Keyboard focus and an open mobile menu always keep the navigation visible.
- The directional hide/reveal transition lasts 280 ms with `cubic-bezier(0.16, 1, 0.3, 1)`; the background fades in over 180 ms. Both transitions become instantaneous under `prefers-reduced-motion`.
- **Cross-page continuity:** “Book a call” routes to the local `/contact-us/` page. That route reuses the homepage navigation and keeps the logo in its compact, vertically aligned post-hero state. “How it works” and “Clients” return to their homepage anchors; “FAQ” targets the contact page’s shared FAQ.

### Buttons

- CTAs are compact horizontal pills with a very large radius, DM Sans semibold labels, and approximately 13 px vertical / 19 px horizontal padding on desktop.
- Preserve the source-defined light, dark, transparent, and blue modes.
- Use one concise action label consistently: **Book a call**.
- The closing folder is the approved exception: its lime CTA reads **Get In The Kitchen →** to match the selected composition.
- In the hero, the primary CTA sits directly below and left-aligned with the supporting paragraph at every breakpoint; it never occupies a separate far-right grid column.
- Provide a visible `2px solid currentColor` focus outline with a 4 px offset.
- No glow, gradient, or oversized shadow treatment.

### Tags

- Client-fit tags are compact pills with Signal Pink backgrounds, dark text, and approximately 10 px vertical / 15 px horizontal padding.
- At wide desktop sizes, the eight client-fit tags form one centered rail with a 16 px gap and approximately 20 px of viewport-edge breathing room at the 1305 px reference width.
- Tags wrap naturally below 992 px. Keep capitalization and hyphenation intentional.

### Positioning and client proof

- The first section after the hero combines the positioning statement, client-fit tags, and selected-client logos into one continuous Canvas field.
- At the 1305 × 893 desktop reference, the section uses approximately 90 px of top space and 80 px of bottom space. Its four-line statement is 776 px wide; the supporting line follows after 104 px.
- The logo field is a 4 × 3 grid on desktop. Logo image boxes resolve to approximately 192 × 58 px with 80 px column gaps and 32 px row gaps, preserving the transparent padding and visual weight built into each supplied asset.
- Preserve the supplied logo order: Meta, Summation, MoneyLion, Latent; Valence, Every, Pulley, Thunder; Genesys, CrewAI, Exclaimer, Redpanda.
- At 767 px and below, the logo field becomes two columns and all statement line breaks return to natural reflow.

### Investor proof panel

- The third section is an inset Soft Stone panel on the Canvas background with a 16 px corner radius. At the 1783 × 774 reference, the outer frame uses approximately 31 px side gutters, 39 px above, and 48 px below.
- The section headline is light Fraunces, never bold, at approximately 72 px / 1.08 line-height on the wide reference.
- The lower proof area begins well below the headline and divides into two nearly equal columns: two tall partnership cards on the left and a 3 × 2 portfolio-company card grid on the right.
- Partnership cards are White, 276 px tall at the wide reference, with the supplied logo aligned top-left and the role aligned bottom-left. Portfolio cards are White and approximately 230 × 122 px.
- Use the supplied First Round, Norwest, GV, Insight Partners, Bessemer Venture Partners, Salesforce Ventures, Y Combinator, and Sequoia assets directly. Their embedded whitespace is part of their visual sizing and must not be cropped.
- Below 992 px, the two main proof groups stack so their cards retain useful width. Below 768 px, both card grids also collapse to a single readable column. The inset panel and its hierarchy remain intact, and the page must not scroll horizontally.

### Positioning editorial sequence

- The Four Cs, Redpanda testimonial, and compact Decision-Based Positioning explanation form one continuous centered editorial card. The dark testimonial is an inset content block inside the White panel rather than a detached band, and the decision explanation continues on White directly beneath it.
- The outer card is approximately half the viewport width on desktop and caps at 726 px with a restrained 10 px radius. The testimonial aligns to the Four Cs content rail and keeps a clear White gutter on its top, left, right, and bottom edges. Neither surface uses a border or shadow.
- The outer field begins with Positioning Lavender (`#E1DBFC`) and scroll-shifts to Deep Positioning Lavender (`#AFA4E0`) while the quote band moves through the viewport. GSAP ScrollTrigger uses a linear color tween with a `0.65` scrub catch-up from `top 72%` to `bottom 42%`, reverses naturally when scrolling upward, and never pins or scroll-jacks content.
- Under `prefers-reduced-motion`, the field switches colors discretely when the quote crosses the trigger rather than interpolating.
- The Four Cs panel's internal content rail is approximately 632 px wide and begins about 45 px from the left edge.
- The two opening statements use Fraunces at light weight (`300`) only, approximately 40 px / 1.05 line-height on the wide reference. Preserve their authored two-line desktop breaks and return them to natural wrapping below 768 px.
- A quiet neutral divider separates the opening statement from the explanatory copy. Body copy remains DM Sans at approximately 18 px, with a readable measure and compact 23 px line height.
- The four advantage sources form a 2 × 2 grid with 24 px between columns. Each item begins with a 1 px top rule; the Capability, Credibility, Convenience, and Cost titles use Fraunces Light (`300`) at `36 px / 36 px` with `-1.41 px` tracking and synthetic styling disabled at every breakpoint. Descriptions use the DM Sans body scale. The grid becomes one column below 768 px.
- The dark quote panel uses DM Sans italic copy at a restrained 24 px maximum on desktop and tablet, stepping down to 22 px on mobile. Its green attribution follows the quote in the normal text flow with an approximately 24 px gap; never pin the attribution to the panel bottom. The panel height is content-driven with no fixed or minimum height, so it grows naturally with the quote while retaining its responsive inner padding. It has no oversized or decorative quotation marks; only the quotation punctuation authored into the testimonial copy remains.
- The restored decision block uses two light-Fraunces statements: “Marketing copy doesn’t make you a category leader.” and “Decisions do.” A quiet divider leads into three DM Sans paragraphs explaining Decision-Based Positioning.
- “Decisions to win:” introduces eight compact ruled rows in this order: Intentions, Playing Field, Market Segment, Buyer, Problem, Alternatives, Advantages, and How You Win. Each row ends with a small outlined count pill; Buyer uses 4 decisions in the approved composition.
- This sequence is editorial grouping, not elevation: never add a shadow, gradient, border chrome, or decorative iconography.

### Positioning process list

- The positioning process follows the positioning editorial sequence on a Canvas (`#FDFCFA`) field and remains the destination for the navigation's “How it works” link.
- On wide screens it is a quiet two-column editorial spread: the light-Fraunces thesis and DM Sans method statement form the left column, while the five ordered steps form a ruled list on the right.
- The left column begins lower than the first process rule so the thesis aligns with the body of the step list rather than its top edge. On wide screens the thesis holds the authored four-line wrap shown in the approved reference; it returns to natural wrapping on mobile. The serif remains weight `300` and never uses bold emphasis.
- Process rows use only quiet 14%-Ink horizontal rules, DM Sans Regular titles, and compact explanatory copy. Do not add numbers, timeline nodes, alternating offsets, cards, shadows, or ornamental illustrations.
- The closing takeaway is centered beneath both columns in DM Sans Regular at the body-display scale. It has no divider, badge, or card treatment.
- Below 992 px, the columns become one linear flow with the thesis first, the five ruled steps second, and the centered outcome last. The exact step order and semantic ordered list are preserved.

### Cards and tab rows

- Testimonial cards use the Canvas surface, 8 px rounded corners, approximately 23 px padding, and no decorative elevation.
- FAQ items use borders, spacing, and flat fields to express hierarchy.
- Do not convert the site's structured rows into generic elevated SaaS cards.

### Rotating testimonial grid

- The Testimonial Yellow field is a 3 × 3 desktop composition: eight equal White/Canvas quote cards occupy the perimeter cells and the light-Fraunces heading occupies the exact center cell.
- Preserve the authored two-line desktop heading: “B2B CEOs and CMOs” followed by “love In The Kitchen.” It is an intrinsic-width block placed in the exact center of its grid cell, with both lines center-aligned. It uses Fraunces `300`, tight tracking, and no synthetic styling. On mobile, keep the heading block centered and allow the two lines to wrap naturally within its responsive measure.
- Perimeter cards are equal-height within the desktop grid and use compact `17rem` rows with approximately 18–20 px of internal padding, avoiding excess empty space while preserving room for the longest approved quote. Quote copy uses DM Sans Regular at `0.9375rem`; attribution copy uses `0.8125rem` with a compact `0.75rem` inset above its quiet top rule. Cards retain a restrained 10 px radius and no shadow.
- The complete approved pool remains 11 testimonials. Eight are visible at once; every 2.2 seconds one perimeter card crossfades to the next quote so the field changes briskly and incrementally rather than flashing as a whole.
- Each swap is a 220 ms opacity and 8 px vertical-transform transition. Rotation pauses while the field is hovered or keyboard-focused, while it is outside the viewport, and while the document is hidden. The focusable testimonial region receives a restrained inset outline. Under `prefers-reduced-motion`, the first eight testimonials remain static.
- Below 992 px, the heading moves above a two-column card grid and each row follows its content rather than retaining the desktop fixed height. Below 768 px, the field becomes one column with content-driven natural card height. The center-cell desktop composition must never force horizontal overflow on smaller screens.

### Founder profile and commercial context

- The founder section is a single Canvas field with two editorial bands. The upper band pairs the supplied 4:5 Jon Itkin portrait with a compact biography; the lower band presents minimum engagement cost and investment context in two equal columns.
- At the 1409 × 1066 reference, the portrait resolves to approximately 362 × 452 px with a restrained 10 px radius. Use `public/assets/jon-itkin.avif` at its natural 4:5 crop; do not generate, substitute, stretch, or crop away the supplied image.
- The upper composition is intentionally narrower than the lower band and sits slightly left of mathematical center, matching the reference. The biography aligns to the portrait’s vertical center rather than its top edge.
- “Meet the person behind your positioning” and both lower commercial headings use Fraunces Light (`300`), tight tracking, and no synthetic bold. Biography and explanatory copy use DM Sans Regular (`400`) at approximately 16 px with compact, readable line height.
- At desktop widths, the right commercial headline uses the authored three-line lockup `This is an investment in / changing the trajectory / of your business` to maintain an even rag. Below 1100 px, those spans return to natural inline wrapping.
- The lower band begins after a generous editorial pause. Each column uses a single quiet divider between its heading and body; there are no cards, shadows, tinted panels, or decorative illustrations.
- Text links remain visibly underlined and inherit the surrounding Ink color. The final calendar link uses the existing contact destination.
- Below 992 px, the upper band remains a balanced two-column composition and the lower columns tighten their gap. Below 768 px, portrait, biography, cost, and investment context become one linear reading flow with natural headline wrapping and no horizontal overflow.

### Closing folder call to action

- The closing CTA is an inset Action Blue folder on the Canvas surface, replacing the former full-bleed Deep Ink section. It remains in normal document flow and introduces no sticky or scroll-linked behavior.
- At the 1110 × 647 reference, the folder body is approximately 733 × 444 px and centered with about 188 px side margins. A compact tab begins roughly 28 px inside its left edge and rises 26 px above the body.
- The folder body and tab share the same solid `#2800E8` fill, restrained 8 px radii, and no border, shadow, gradient, or decorative imagery.
- The headline-and-action group is vertically centered inside the rectangular folder body, excluding the raised tab from the centering calculation, and begins approximately 78 px from the body’s left edge. The first authored line, “It’s time to take,” is Fraunces Light (`300`); “a position.” is the smaller paired DM Sans Regular (`400`) emphasis. Both lines are White and preserve the global no-bold-serif rule.
- The only supporting action is a Decision Green pill labeled “Get In The Kitchen →” that links to the existing contact destination. It uses DM Sans semibold text and the standard visible focus outline.
- Below 992 px, the folder expands to the available content width while retaining the inset white frame. Below 768 px, it becomes a tall mobile panel with natural headline scaling, a full-width-safe content inset, and no horizontal overflow.

### FAQ

- The FAQ uses the Canvas (`#FDFCFA`) surface with Ink (`#222222`) type and controls, matching the site's restrained editorial sections rather than a saturated color field.
- The FAQ heading uses Fraunces Light (`300`) at `62 px / 64 px` with `-2 px` tracking on desktop. “answered.” remains the paired DM Sans Regular (`400`) emphasis at `0.94em`; the two faces share the same inherited line-height. The heading scales down to `48 px / 50 px` on narrow screens.
- The canonical FAQ contains ten items and is generated once for both the homepage and contact page so question order, copy, and behavior remain synchronized.
- Accordion rows are separated by quiet Ink hairlines at 14% opacity. Do not introduce cards, shadows, tinted row fills, or high-contrast rules.
- The first item is open by default.
- Headers are keyboard-operable and expose expanded state to assistive technology.
- Answers animate by measured height over 300 ms; the plus rotates 45 degrees when open.
- Recalculate open height after fonts load and on resize so copy changes never clip.

### Contact page

- Preserve the established contact hero: a centered Action Blue folder on Canvas with a light-Fraunces “Contact us” heading, the email prompt, and an underlined Calendly “Book a call” action.
- The contact folder remains a normal-flow section. It uses the same restrained rounded corners and folder-tab silhouette as the rest of the site, without a shadow, gradient, or scroll effect.
- The legacy “Ready to fix your positioning?” interstitial, Tailor illustration, green testimonial marquee, and legacy footer are retired.
- The contact hero flows directly into the same Canvas FAQ and compact footer used on the homepage. FAQ content and behavior must stay synchronized with the homepage source.

### Images and logos

- Production images and fonts are local. Do not add hotlinked visual assets.
- Logos retain their native aspect ratio and visual weight. Do not add card chrome unless a supplied composition explicitly calls for it; the investor proof panel is the approved exception and uses flat White cards without borders or shadows.
- The shared homepage/contact footer uses the same supplied `public/assets/itk-logo.svg` vector as the navigation, rendered at its native 160:20 (8:1) aspect ratio. Do not use the retired 150:29 inline footer mark or recreate the lockup with live type.
- The compact footer descriptor is case-sensitive: `Positioning for B2B tech` uses a capital **P** on every route.
- The founder portrait remains editorial, uses the supplied `jon-itkin.avif`, and sits in the documented 4:5 profile composition.

## 6. Motion and interaction

- Motion is functional, not ornamental.
- Use smooth anchor scrolling, a 200 ms navigation underline, and 300 ms FAQ transitions.
- Prefer `transform` and `opacity` for new motion. Color interpolation is allowed only for the documented light-to-deep lavender positioning-story transition. Avoid scroll-jacking and gratuitous entrance sequences.
- Respect `prefers-reduced-motion`: disable smooth scrolling and nonessential transitions.
- Every hover interaction must have an equivalent keyboard-focus treatment.

## 7. Content architecture

- `src/content/source-body.html` preserves the captured source structure.
- `src/content/site-copy.mjs` owns the approved copy replacement and validates structural counts in the preserved source capture, including source-only decision tabs, testimonials, and FAQs. It also removes the superseded “What you see, you get.” partnership section and the duplicate full-width client testimonials before rendering.
- `src/pages/index.astro` assembles the page and contains only the minimal behavioral and global-brand overrides needed by the recreation.
- Copy revisions may change natural section height, but they must not silently add, remove, or redesign layout primitives.

Current structural contract: 10 top-level rendered sections (the former client-fit/logo bands are one section, the Four Cs/testimonial/decision sequence is one continuous card with three modules, and the positioning process timeline is one section). The superseded source decision/process section, its eight colored decision tabs, both duplicate full-width client testimonials, and the “What you see, you get.” partnership section are not rendered. The compact eight-row decision list remains inside the positioning editorial card. The remaining page includes 11 testimonial cards and 10 shared FAQ items.

## 8. Accessibility and responsive requirements

- All interactive controls need visible focus states and keyboard support.
- Preserve semantic headings and logical reading order.
- Keep meaningful image alternative text; decorative imagery should use empty alternative text.
- Verify at minimum at 1440 × 1000, 768 × 900, and 390 × 844.
- A release fails if it introduces horizontal overflow, clipped copy, broken images, inaccessible menus, or stale FAQ heights.

## 9. Banned patterns

- No new fonts or font-role swaps without an explicit brand decision.
- No generic system serif in production; Fraunces is the only display serif.
- No bold, semibold, or synthetic-bold Fraunces. Serif weight must remain `300` or `400`.
- No `Inter`, neon color, gradients, glassmorphism, outer glows, custom cursors, or emoji decoration.
- No pure black; use Ink or Deep Ink.
- No arbitrary border-radius inflation; pills are reserved for actions and tags, while content cards stay subtly rounded.
- No generic stock imagery, fake statistics, filler UI prompts, or AI-marketing clichés.
- No design changes disguised as copy work.

## 10. Change-management rule

For every global brand or design-system change:

1. Update the implementation and this `DESIGN.md` together.
2. Build both the normal site and the GitHub Pages project-path variant.
3. Verify desktop, tablet, and mobile behavior.
4. Record material visual or interaction checks in `design-qa.md`.

Copy-only changes do not require a design-system revision unless they establish a reusable voice, content, or component rule.
