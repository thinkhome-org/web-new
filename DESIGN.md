---
version: alpha
name: ThinkHome
description: Design system for the ThinkHome Czech IT services website.
colors:
  primary: "#002BFF"
  brand-blue: "#042EFF"
  dark: "#0F172A"
  surface: "#FFFFFF"
  surface-muted: "#F8FAFC"
  surface-blue-tint: "#EFF6FF"
  border: "#E2E8F0"
  border-subtle: "#F1F5F9"
  text: "#0F172A"
  text-muted: "#475569"
  text-soft: "#64748B"
  on-primary: "#FFFFFF"
  on-dark: "#FFFFFF"
  warning-surface: "#FFFBEB"
  warning-border: "#FDE68A"
  warning-text: "#92400E"
typography:
  headline-display:
    fontFamily: Manrope
    fontSize: 72px
    fontWeight: 800
    lineHeight: "1.05"
    letterSpacing: 0px
  headline-mobile:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: 800
    lineHeight: "1.05"
    letterSpacing: 0px
  headline-page:
    fontFamily: Manrope
    fontSize: 60px
    fontWeight: 800
    lineHeight: "1.1"
    letterSpacing: 0px
  heading-section:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: 800
    lineHeight: "1.15"
    letterSpacing: 0px
  heading-card:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: 0px
  body-lg:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: 0px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: "1.75"
    letterSpacing: 0px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 400
    lineHeight: "1.7"
    letterSpacing: 0px
  label-lg:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 800
    lineHeight: "1.2"
    letterSpacing: 0px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: 0px
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "0.12em"
rounded:
  none: 0
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  4xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    height: 56px
    padding: 0 32px
  button-blue:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.sm}"
    height: 56px
    padding: 0 24px
  button-quiet:
    backgroundColor: transparent
    textColor: "rgba(255, 255, 255, 0.7)"
    typography: "{typography.label-lg}"
    rounded: "{rounded.sm}"
    height: 56px
    padding: 0 32px
  navbar:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    height: 104px
    padding: 24px 48px
  mobile-menu:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.md}"
  text-field:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 16px
  table-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: 24px
  icon-badge:
    backgroundColor: "{colors.surface-blue-tint}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 48px
  warning-callout:
    backgroundColor: "{colors.warning-surface}"
    textColor: "{colors.warning-text}"
    rounded: "{rounded.lg}"
    padding: 16px
  brand-mark-blue:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand-blue}"
  muted-copy:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.body-md}"
  soft-copy:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-soft}"
    typography: "{typography.body-sm}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  subtle-divider:
    backgroundColor: "{colors.border-subtle}"
    height: 1px
  warning-divider:
    backgroundColor: "{colors.warning-border}"
    height: 1px
---

## Overview

ThinkHome is a practical technology partner for Czech businesses and households. The design should feel direct, modern, and competent: a clean IT service website with one strong brand color, clear service information, and no decorative clutter.

The first impression is blue, full-screen, and confident. The homepage hero uses the ThinkHome white logo, white Czech copy, and a soft luminous technology beam from the Figma reference. Interior pages stay more operational: blue page headers, white content areas, slate text, compact legal and pricing information, and simple contact workflows.

Use real product language from the repository. Primary messages include "Kompletní IT pod jednou střechou.", "Vše okolo IT bez starostí", "Kontaktujte nás", "Zjistit více", "Kontakt", "Legal", "Ceník služeb", "Obchodní podmínky", and "Ochrana osobních údajů". Do not invent placeholder marketing copy when existing service, price, legal, or contact labels are available.

## Colors

The palette is deliberately tight. The website is mainly electric blue, white, and slate.

- **Primary (#002BFF):** UI blue from `src/app/globals.css`. Use for hero backgrounds, page headers, active links, primary submit buttons, and price highlights.
- **Brand blue (#042EFF):** Logo asset blue. Use only when reproducing the supplied brand mark or matching exported logo files.
- **Dark (#0F172A):** Deep slate for body text and the footer/mobile menu background.
- **White (#FFFFFF):** Main content surface and text on blue or dark backgrounds.
- **Slate neutrals:** Use slate-900, slate-700, slate-600, slate-500, slate-400, and slate-200 equivalents for hierarchy, secondary text, placeholders, dividers, and table borders.
- **Blue tint (#EFF6FF):** Small icon badge backgrounds only. Keep it sparse so the page does not become a pale-blue UI.
- **Amber warning:** Reserved for pricing disclaimers or legal caution blocks.

Avoid adding secondary accent colors unless the content requires status semantics. New decorative gradients should not replace the core blue/white/slate identity.

## Typography

Use Manrope with Latin Extended support across the site. Czech diacritics must render cleanly and the tone should stay service-oriented rather than editorial.

Hero headlines are extra-bold, tightly set, and large: 48px on mobile, 72px on desktop, with 1.05 line-height. Page headings use 32px mobile and 60px desktop. Section headings are 24px to 32px, extra-bold, and compact.

Body copy should be readable and restrained: 14px to 16px for dense legal/pricing content, 20px only for hero supporting copy. Keep line-height generous for Czech paragraphs, usually 1.6 to 1.75. Labels and table headers use bold Manrope; uppercase micro-labels may use 0.12em letter spacing. Do not use negative letter spacing.

## Layout

The site uses a centered max width of 1440px with 24px mobile side padding and 48px desktop side padding. Keep layouts simple and scan-friendly.

The homepage hero is a full-viewport blue field with centered content, a fixed or transparent navbar, and a small scroll cue at the bottom. It should leave the brand and primary claim as the dominant first-viewport signals.

Interior pages use a consistent shell: blue header band, breadcrumbs, large white title, short subtitle, optional updated date, then a white content section. Preserve the diagonal white divider at the bottom of the blue header when generating page concepts.

Content density matters. Pricing and legal pages should use tables, dividers, and structured lists instead of marketing cards. Contact pages use a two-column desktop grid: form first, company details to the side. On mobile, stack content with clear vertical rhythm.

## Elevation & Depth

Depth is minimal. Prefer borders, dividers, and whitespace over shadows. The footer has a subtle upward shadow to separate it from white content. Forms and pricing tables use flat white surfaces with slate borders.

The Figma hero reference uses atmospheric light as part of the brand impression. This belongs in the blue hero only: a soft, horizontal, luminous beam or aurora-like glow, never generic blobs, bokeh, or ornamental gradient orbs.

## Shapes

Default interactive corners are 8px. Pricing tables and larger form containers may use 16px. Icon badges are circular. Keep shapes crisp and modern; avoid pill-heavy layouts except for circular icon containers.

Buttons are 56px tall and stable across viewports. Text fields use 8px corners, subtle borders, and light slate fill. Tables use 16px outer corners with clipped overflow so the header and rows feel like one unit.

## Components

**Logo:** Use the supplied ThinkHome SVGs. White primary logo belongs on blue or dark backgrounds. Blue or black variants are for white surfaces only. Maintain the primary logo width around 132px on mobile and 159px on desktop.

**Navigation:** Desktop navigation is text-only, white, and horizontally spaced. Active links are white and semibold; inactive links are white at about 70% opacity. Mobile navigation is a dark full-screen menu with Lucide icons, 12px rounded rows, and clear close control.

**Hero:** Use the actual Czech value proposition. Place the eyebrow above the headline, keep the headline centered, and keep calls to action directly below. The primary CTA is a white button with blue text. The quiet secondary CTA is text-like on blue.

**Page shell:** Breadcrumbs are small and low-contrast. Page titles are white, bold, and left-aligned inside the 1440px container. Subtitles are short and no wider than about 760px.

**Forms:** Labels sit above fields. Field icons are Lucide, slate, and small. Placeholders use a light slate tone around `#94A3B8`. Focus state changes the border to primary blue and background to white. The submit button spans full width in the form column.

**Pricing:** Pricing sections are tables, not card grids. Desktop uses three columns: service, description, price. Mobile rows expose compact uppercase labels for each field. Prices use primary blue and semibold weight.

**Contact details:** Use circular blue-tint icon badges with primary blue Lucide icons. Keep company details factual and compact: ThinkHome s.r.o., IČ, DIČ, email, phone, bank account, and address.

**Footer:** Dark slate background, white logo, white contact links, low-contrast legal links, and compact copyright line. Keep it utilitarian.

## Do's and Don'ts

Do:

- Use Czech source copy from the repo before writing new text.
- Keep blue as the dominant brand moment and slate/white as the operational content system.
- Use Lucide icons for navigation, contact, form, and utility icons.
- Prefer tables, lists, and dividers for service/legal content.
- Preserve strong contrast on blue and dark backgrounds.

Don't:

- Do not invent a broad multi-color palette.
- Do not turn legal, pricing, or contact pages into marketing card collections.
- Do not use generic SaaS gradients, decorative blobs, or stock-style tech imagery outside the hero atmosphere.
- Do not use rounded pills for ordinary commands when square 8px buttons match the system.
- Do not shrink Czech legal text below 14px or crowd long paragraphs.
