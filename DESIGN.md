---
name: "In The Kitchen"
description: "A bold editorial design system for a B2B positioning consultancy."
colors:
  action-blue: "#2800E8"
  hero-yellow: "#FCF387"
  testimonial-yellow: "#FFF27B"
  decision-green: "#CFFD93"
  positioning-lavender: "#E1DBFC"
  positioning-lavender-deep: "#AFA4E0"
  signal-pink: "#F2ACD7"
  canvas: "#FDFCFA"
  paper: "#FFFFFF"
  soft-stone: "#F6F4F1"
  soft-stone-hover: "#F4F2EF"
  ink: "#222222"
  deep-ink: "#1A1A1A"
  secondary-copy: "#625F5A"
  hairline: "#E3E3E3"
typography:
  display-hero:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3.25rem, 6.79vw, 7.5rem)"
    fontWeight: 300
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  display-section:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 4vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline-editorial:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline-statement:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 300
    lineHeight: "3rem"
    letterSpacing: "-1.41px"
  title:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body-large:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.01em"
  body-small:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.38
    letterSpacing: "-0.012em"
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.01em"
rounded:
  subtle: "8px"
  card: "10px"
  panel: "16px"
  folder: "clamp(0.65rem, 0.95vw, 1rem)"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  6: "24px"
  8: "32px"
  12: "48px"
  16: "64px"
  24: "96px"
  32: "128px"
components:
  button-primary:
    backgroundColor: "{colors.deep-ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 19px"
    height: "46px"
  button-accent:
    backgroundColor: "{colors.decision-green}"
    textColor: "{colors.deep-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "43px"
  fit-chip:
    backgroundColor: "{colors.signal-pink}"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  editorial-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "40px 45px 45px"
  process-panel:
    backgroundColor: "{colors.soft-stone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "44px 44px 40px 100px"
    rail: "12% Ink, 1px"
  testimonial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.card}"
    padding: "16–18px"
    height: "12.75rem from 1199px; 13.75rem from 1050–1198px; 14.75rem from 992–1049px; content-driven below 992px"
---

# Design System: In The Kitchen

## Overview

**Creative North Star: "The Strategic Editorial"**

In The Kitchen should feel like a sharply edited independent publication run by an experienced operator: bold, direct, warm, and assured. Typography carries the argument. Flat color fields create chapter breaks. Asymmetric compositions, narrow reading measures, and purposeful whitespace make the page feel authored rather than templated.

The system is medium-low density and deliberately high contrast. It rejects generic SaaS polish in favor of an editorial cadence: large statements, crisp hairlines, lightly rounded paper surfaces, and a small number of saturated brand fields. Motion is restrained and functional. Nothing should compete with the positioning story.

The implementation remains responsive and accessible. The wide layout uses a Webflow-derived 24-column grid inside a centered container that caps near 1408px. Primary breakpoints are desktop at 992px and above, tablet from 768px through 991px, and mobile below 768px; 479px remains a narrow-mobile stress point. Desktop page gutters are approximately 62px at 1440px, while mobile gutters are normally 16–24px. No viewport may scroll horizontally.

**Key Characteristics:**

- Editorial typography with a light serif narrative voice and a clean sans-serif working voice.
- Flat, committed color fields rather than gradients or decorative effects.
- Quiet structure through whitespace, 1px rules, and restrained 8–16px radii.
- Intentional asymmetry on wide screens; one clear reading flow on mobile.
- Functional motion using opacity and transforms, with complete reduced-motion fallbacks.
- A direct path from understanding the offer to booking a call.

**The Source-of-Truth Rule.** Any global change to type roles, scale, palette, spacing, shape, motion, or responsive behavior must update this file and `.impeccable/design.json` in the same change. Build both the root and GitHub Pages base-path variants, then record material visual checks in `design-qa.md`.

**The Normal-Flow Rule.** Sections, folder shapes, and calls to action participate in normal document flow. Sticky or fixed positioning is reserved for the navigation; never pin, scroll-jack, or artificially hold a narrative section.

## Colors

The palette combines warm editorial neutrals with highly committed single-color fields. Saturated colors own whole sections or singular actions; they are not scattered as decoration.

### Primary

- **Action Blue** (`{colors.action-blue}`): closing folder field and the strongest branded action surface.
- **Ink** (`{colors.ink}`): primary copy, rules expressed through opacity, outlines, and most controls.
- **Deep Ink** (`{colors.deep-ink}`): dark quote surface and dark filled actions. Use this instead of pure black.

### Secondary

- **Hero Yellow** (`{colors.hero-yellow}`): the opening folder field only.
- **Testimonial Yellow** (`{colors.testimonial-yellow}`): the rotating testimonial-grid field and the closing CTA hover.
- **Decision Green** (`{colors.decision-green}`): the closing folder action and decision-oriented emphasis.
- **Signal Pink** (`{colors.signal-pink}`): best-fit client chips.

### Tertiary

- **Positioning Lavender** (`{colors.positioning-lavender}`): the initial background of the positioning editorial sequence.
- **Deep Positioning Lavender** (`{colors.positioning-lavender-deep}`): the sequence's scroll-complete background after the dark quote enters.

### Neutral

- **Canvas** (`{colors.canvas}`): default page, founder, FAQ, footer, and testimonial-card surface.
- **Paper** (`{colors.paper}`): contained editorial and investor cards; also the approved text color on Action Blue and Deep Ink.
- **Soft Stone** (`{colors.soft-stone}`): investor proof panel.
- **Soft Stone Hover** (`{colors.soft-stone-hover}`): quiet hover/pressed surface for the Listen control only.
- **Secondary Copy** (`{colors.secondary-copy}`): reading metadata and intentionally subdued copy.
- **Hairline** (`{colors.hairline}`): neutral dividers when an opacity-based Ink rule is not used.

**The Solid-Field Rule.** Brand colors are solid. Gradients, glows, transparent color washes, and glass effects are prohibited.

**The One-Field Rule.** Give each saturated color a clear job. Never mix multiple bright accents inside one component or use them as arbitrary highlights.

**The Warm-Neutral Rule.** Canvas is the default white. Paper is reserved for explicit contained surfaces. Pure black and cool gray page backgrounds are forbidden.

## Typography

**Display Font:** Fraunces, loaded locally from `public/assets/fonts/fraunces.woff2`, with Georgia and serif fallbacks.

**Body Font:** DM Sans, loaded locally from `public/assets/fonts/dm-sans.ttf`, with Arial and sans-serif fallbacks.

**Character:** Fraunces supplies intelligence, specificity, and editorial pacing. DM Sans supplies clarity, confidence, and utility. Their contrast should feel intentional but calm, never decorative.

### Hierarchy

| Role | Family / weight | Size | Line height | Tracking | Primary use |
| --- | --- | --- | --- | --- | --- |
| Hero display | Fraunces Light 300 | `clamp(52px, 6.79vw, 120px)` | `0.92` desktop, `1` mobile | about `-0.01em` | Hero H1 only |
| Section display | Fraunces Light 300 | `clamp(48px, 4vw, 72px)` | `1.08` | `-0.02em` | Investor proof headline |
| Editorial headline | Fraunces Light 300 | `40px` | `1.05` | `-0.025em` | Four Cs and decisions statements |
| Positioning statement | Fraunces Light 300 | `36px` desktop; `32px` mobile | `48px`; `40px` mobile | `-1.41px`; `-1.25px` mobile | Centered intrinsic-width client statement, left-aligned internally |
| Advantage title | Fraunces Light 300 | `36px` | `36px` | `-1.41px` | Capability, Credibility, Convenience, Cost |
| Process thesis | Fraunces Light 300 | `clamp(42.4px, 2.95vw, 44px)` | `0.92` | `-0.04em` | Two-column process introduction |
| Founder title | Fraunces Light 300 | `40px` | `0.98` | `-0.04em` | Founder biography heading |
| Commercial title | Fraunces Light 300 | `38px` | `0.98` | `-0.04em` | Cost and investment headings |
| Testimonial center | Fraunces Light 300 | `clamp(40px, 3.45vw, 56px)` | `0.94` | `-0.045em` | Center cell of the testimonial grid |
| Closing display | Fraunces Light 300 | `64px` | `0.92` | `-0.055em` | Closing folder headline |
| FAQ display | Fraunces Light 300 | `clamp(48px, 4.85vw, 62px)` | `clamp(50px, 5vw, 64px)` | `-2px` | “Questions, answered.” |
| Title | DM Sans Regular 400 | `22px` | `1.15` | `-0.025em` | Process row titles and large utility headings |
| Body large | DM Sans Regular 400 | `18px` | `1.35` | `-0.015em` | Introductory and closing copy |
| Body | DM Sans Regular 400 | `16px` | `1.45` | `-0.01em` | Standard paragraphs, FAQ answers, biographies |
| Body small | DM Sans Regular 400 | `15px` | `1.38` | `-0.012em` | Testimonial copy and compact editorial text |
| Label | DM Sans Medium/Semibold 500–600 | `12–14px` | `1–1.35` | `-0.01em` or neutral | Buttons, counts, metadata, attributions |

Body copy should normally remain between 45ch and 70ch. Preserve authored desktop line breaks where they are part of a composition, but return to natural wrapping below 768px. Never permit a forced line break to create overflow.

### Paired headline rule

Regular headline language is Fraunces. Emphasized language inside a mixed headline is DM Sans at `0.94em`, inheriting the same line height. The sans-serif emphasis is intentionally a touch smaller so the two faces feel optically balanced. Do not use transforms, relative positioning, or hand-tuned baselines to align them.

The hero and closing folder follow this pattern. The testimonial-grid headline is an approved all-Fraunces exception. Process row titles and decision utility labels are DM Sans rather than serif.

**The Never-Bold-Serif Rule.** Fraunces is only Light 300 or Regular 400. Bold, semibold, synthetic bold, and faux italic Fraunces are prohibited. Keep `font-synthesis: none` on display treatments.

**The Sans-Is-Slightly-Smaller Rule.** Paired DM Sans emphasis remains `0.94em` unless a future global brand change explicitly replaces the ratio in both code and this specification.

**The Upright-Quote Rule.** The dark Redpanda quote uses upright DM Sans Regular, not italics. Its attribution is warm white and follows the quote in normal flow.

## Elevation

The system is flat. It uses no box-shadow vocabulary in production. Depth and hierarchy come from committed color fields, nested paper surfaces, whitespace, 1px dividers, and subtle corner changes. A component should never appear to float above the page.

Hairlines are either Hairline or Ink at 14–18% opacity. Content cards use gently curved edges: 8px for folders and compact controls, 10px for editorial/testimonial cards, and up to 16px for the large investor panel. Only buttons, chips, count badges, and the Listen control use full pill radii.

**The Flat-by-Default Rule.** No shadows at rest, on hover, or on focus. Use a color change, underline, opacity, or a 2px translation for feedback.

**The Quiet-Structure Rule.** If the border becomes the first thing you notice, it is too strong. Rules divide content; they do not frame it.

## Components

### Buttons and links

- **Primary action:** Deep Ink pill with Paper text, DM Sans 600, approximately 52px tall and 24px horizontal padding. The canonical label is **Book a call**.
- **Outline navigation action:** Canvas fill, 1px Deep Ink border, 46px tall, approximately 19px horizontal padding.
- **Closing action:** Decision Green pill, 43px tall, minimum width 182px, with the approved label **Get In The Kitchen →**. Hover moves up 2px over 180ms and changes to Testimonial Yellow.
- **Focus:** every link and button receives a visible `2px solid currentColor` outline with a 4px offset; the compact Listen button uses a 3px offset.
- **Text links:** visibly underlined, 1px thickness, `0.12em` underline offset, and inherited Ink color.
- **Prohibited:** gradients, glows, oversized shadows, icon-only primary actions, and inconsistent CTA copy.

### Navigation

The supplied `public/assets/itk-logo.svg` is the only approved navigation and footer lockup. Render it at its native 160:20 ratio; never recreate it with live type.

The desktop navigation is fixed, visually quiet, and transparent over the hero. The logo begins centered in the yellow tab. After the hero, it translates upward over 240ms with `cubic-bezier(0.77, 0, 0.175, 1)`, while the right cluster moves inward by the calculated logo-side inset. Downward scrolling beyond the navigation height hides the whole bar with a transform. Upward scrolling reveals it on Canvas over 280ms with `cubic-bezier(0.16, 1, 0.3, 1)`; the background fades over 180ms. Keyboard focus and an open mobile menu always keep it visible.

Links show no underline at rest. A 200ms underline expands to full width on hover and focus. At 991px and below, the navigation becomes a full-width menu under the header and the hamburger morphs into a close icon. Opening the menu locks page scrolling.

### Hero folder

The opening field is an inset yellow folder, not a full-bleed rectangle. It uses side gutters of `clamp(16px, 1.8vw, 32px)` and a bottom gap of `clamp(24px, 2.2vw, 32px)`. The yellow body begins below the supplied `hero-yellow-tab.svg`; tab and body overlap by about 2px so no Canvas seam appears. The absolute tab rail stays transparent so the overlapping yellow body can fill SVG anti-aliasing and fractional-pixel edges. The body's responsive corner radius must optically match the tab shoulders.

Hero content begins at `clamp(24px, 8.85vw, 128px)` inside the body. Desktop padding is 228px top and 128px bottom; mobile uses 160px top and 96px bottom. The hero remains in normal flow and approximates one viewport in height. Supporting copy is 27px / 1.25 on desktop and 16px / 1.5 on mobile. The CTA sits directly below and left-aligned with the copy.

### Fit chips and client logos

Best-fit chips are 36px tall Signal Pink pills with 14px horizontal padding and DM Sans 15px / 18px. The eight-chip rail is centered with a 16px gap and wraps below 992px.

Client logos form a 4 × 3 desktop grid with 80px column gaps and 32px row gaps. Each logo box is approximately 192 × 58px and preserves the supplied asset's transparent padding. Below 768px the grid becomes two columns. Never crop, stretch, recolor, or equalize logos by force.

### Investor proof

Investor proof is an inset Soft Stone panel on Canvas with a responsive 12–16px radius. The wide composition has two partnership cards on the left and a 3 × 2 portfolio grid on the right. Partnership cards are Paper, up to 276px tall, with logo at top-left and role at bottom-left. Portfolio cards are Paper and approximately 230 × 122px. Use the supplied assets without cropping their embedded whitespace. Stack the two groups below 992px and collapse internal grids to one column below 768px.

### Positioning editorial card

The Four Cs, Redpanda quote, and decision explanation form one continuous Paper card centered on a lavender field. The outer card is `min(49.76vw, 726px)`, uses a 10px radius, and has no border or shadow. Its inner rail uses approximately 40px top, 45px side, and 45px bottom padding on wide screens.

The background shifts from Positioning Lavender to Deep Positioning Lavender as the quote passes through the viewport. GSAP ScrollTrigger uses a linear tween, `0.65` scrub catch-up, `top 72%` start, and `bottom 42%` end. It reverses naturally, never pins, and becomes a discrete color switch under reduced motion.

The article metadata row places “4 min read” and a compact outlined Listen/Stop control on the left, with a centered, unscaled 40px circular crop of the approved square `jon-itkin-byline.png` headshot and “By Jon Itkin” on the right. The portrait reduces to 36px on mobile. The browser speech-synthesis control hides when unsupported and exposes pressed state.

The four advantage sources use a 2 × 2 ruled grid with 24px between columns; below 768px they become one column. The dark quote is inset inside the Paper card, uses Deep Ink, upright DM Sans up to 24px, content-driven height, and responsive padding. It has no decorative quotation marks. The attribution is Paper-colored, approximately 24px below the quote, and never pinned to the bottom.

The decision module continues on Paper beneath the quote. It ends with eight compact ruled rows in this order: Intentions, Playing Field, Market Segment, Buyer, Problem, Alternatives, Advantages, How You Win. Count badges are outlined pills; Buyer has 4 decisions.

### Process list

The process section is a quiet two-column editorial spread capped near 1028px. The left column vertically centers a light-Fraunces thesis, DM Sans method copy, and an italic 15px outcome inset on a 14%-Ink vertical rule. The right column is a 16px-radius Soft Stone panel with five DM Sans steps connected by a 12%-Ink one-pixel arrow rail. The panel uses approximately 44px top, 44px side, 40px bottom, and 100px left padding on wide screens. Do not add step numbers, shadows, gradients, illustrations, or alternating offsets. Below 992px, the section becomes one linear flow with the panel following the complete left-hand argument; below 768px, panel padding and rail offsets tighten while the copy remains content-driven.

### Rotating testimonial grid

The Testimonial Yellow field uses a 3 × 3 desktop grid. Eight equal Canvas cards occupy the perimeter and the all-Fraunces Deep Ink heading spans the full center cell with center-aligned text, rather than centering an intrinsic-width text box. Rows are `12.75rem` from 1199px up, `13.75rem` from 1050–1198px, and `14.75rem` from 992–1049px so the approved quotes can wrap without clipping as the columns narrow; below 992px the cards are content-driven. The grid uses 28–44px gaps. Cards use 16–18px padding, a 10px radius, DM Sans 15px quote copy, and 13px attribution copy separated by a quiet top rule. The footer begins 0.75rem after the quote and uses 0.5rem top padding.

The approved pool contains 11 testimonials. Eight are visible; every 2.2 seconds one perimeter card crossfades and moves 8px over 220ms. Rotation pauses on hover, keyboard focus, viewport exit, and document hide. Under reduced motion, the first eight remain static. Below 992px the heading moves above a two-column grid; below 768px cards become a one-column, content-driven list.

### Founder profile

The founder section uses one Canvas field with two editorial bands. The upper band pairs the supplied 4:5 `jon-itkin.avif` portrait with a vertically centered biography. At the desktop reference the portrait is approximately 362 × 452px with a 10px radius. The lower band presents cost and investment context in two equal columns separated internally by one quiet divider each.

The upper composition sits slightly left of mathematical center. On desktop, the investment headline preserves the authored three-line rag: “This is an investment in / changing the trajectory / of your business.” Below 1100px it returns to natural wrapping. Below 768px portrait, biography, cost, and investment context become one reading flow.

On fine-pointer devices, the founder portrait uses a restrained tvOS-style depth response: cursor position drives at most `±2deg` of 3D rotation, the frame scales to `1.008`, and the image counter-shifts by no more than 5px while scaling to `1.022`. `gsap.quickTo()` reuses transform tweens with `expo.out` easing. The effect introduces no shadow, glow, or layout movement and is completely disabled on touch devices and under `prefers-reduced-motion`.

### Closing folder

The closing CTA is a centered Action Blue folder on Canvas. Its height is content-driven and follows the compact contact-folder proportion instead of a landscape aspect ratio. The content receives `3.15rem` vertical padding on desktop, `3.5rem` from 480–991px, and `1.625rem` below 480px. The smallest layout uses `0.75rem` side padding so the first headline line remains intact. On wide screens it caps at 56rem. The shell is `min(58%, 56rem)` on desktop, `min(86%, 40rem)` below 992px, and 92% below 768px.

The body uses an 8px radius and a compact tab rising 25px. The headline/action group is vertically centered by balanced vertical padding, with 78px desktop side padding. The first line is Fraunces Light; the second is DM Sans Regular at `0.94em`. The only action is the Decision Green pill.

### FAQ, contact, and footer

FAQ uses Canvas with Ink type and 14%-Ink row rules. “Questions, answered.” is an all-Fraunces Light display at `62px / 64px` with `-2px` tracking on wide screens; both lines share the same face, weight, and size. The ten-item source is shared by homepage and contact page; the first item is open by default. Headers are keyboard-operable and expose expanded state. Answers animate to measured height over 300ms, and the plus rotates 45 degrees. Recalculate open heights after fonts load and on resize.

The contact page keeps the shared navigation, a centered Action Blue contact folder, the shared FAQ, and the shared compact footer. Retired legacy interstitials, marquees, and alternate footers must not return.

The footer reuses `itk-logo.svg` at 160:20. Its descriptor is case-sensitive: **Positioning for B2B tech** always uses a capital P.

### Motion and accessibility

Motion is feedback, not ornament. Prefer opacity and transform. Core timings are 160–180ms for small state changes, 200–220ms for underlines and card swaps, 240–280ms for navigation movement, and 300ms for accordion height. Smooth anchor scrolling is allowed. Every hover state needs a keyboard-focus equivalent.

The hero headline uses one immediate, continuous movement with no introductory delay or stepped midpoint. It begins in the compact “Take the position” state: all four letters of `lead` are hidden while `position` is translated left into their inline space. Over 320ms with `expo.out`, all four letters reveal together while `position` resolves directly to its natural inline position, producing “Take the lead position.” The supporting line and CTA remain stationary throughout.

There is no letter stagger, hold, or vertical motion in the desktop animation. At mobile sizes, preserve the final inline headline and use one immediate 400ms opacity-and-y reveal with `expo.out`. Under reduced motion, render the final state immediately with no interpolation. Hero animation must use transforms and opacity only, clear its temporary inline styles after completion, and never alter document flow.

Under `prefers-reduced-motion`, disable smooth scrolling, testimonial rotation, animated navigation movement, accordion transitions, and nonessential hover translations. Preserve state changes without interpolation.

## Do's and Don'ts

### Do:

- **Do** preserve the recognizable identity and treat the implemented site and supplied references as the primary visual authority.
- **Do** let typography carry hierarchy through contrast, scale, pacing, and authored line breaks.
- **Do** use Fraunces only at weight 300 or 400 and DM Sans for body, utility, controls, and paired emphasis.
- **Do** center text blocks by their container when requested while preserving the intended internal text alignment.
- **Do** use Canvas as the default surface, Deep Ink instead of pure black, and 1px quiet rules for structure.
- **Do** keep calls to action concise, visible, and consistent: **Book a call**, except for the approved closing-folder label.
- **Do** use supplied local fonts, logos, and photography at their native proportions.
- **Do** preserve keyboard operability, visible focus states, semantic reading order, meaningful alternative text, WCAG 2.2 AA contrast, and reduced-motion behavior.
- **Do** verify at 1440 × 1000, 768 × 900, and 390 × 844. Horizontal overflow, clipped copy, broken assets, inaccessible menus, and stale FAQ heights are release blockers.

### Don't:

- **Don't** create “Generic SaaS landing pages with interchangeable card grids and stock visual language.”
- **Don't** use “Timid typography or neutralized styling that weakens the existing identity.”
- **Don't** add “Decorative complexity that competes with the positioning story.”
- **Don't** make “Unnecessary departures from the supplied site's established visual language.”
- **Don't** introduce new fonts, swap type roles, or bold Fraunces without an explicit brand decision.
- **Don't** use Inter, pure black, neon accents, gradients, glassmorphism, outer glows, heavy shadows, custom cursors, or emoji decoration.
- **Don't** inflate border radii. Pills are reserved for actions, chips, Listen, and counts; editorial cards remain subtly rounded.
- **Don't** turn structured editorial rows into elevated SaaS cards or add decorative timeline nodes.
- **Don't** use stock imagery, fake statistics, filler prompts, or AI-marketing clichés.
- **Don't** pin folder shapes, fix narrative sections, scroll-jack the page, or animate layout properties when transform/opacity will work.
- **Don't** crop, stretch, recolor, hotlink, or replace supplied image and logo assets.
- **Don't** disguise a layout or brand change as a copy-only edit.
