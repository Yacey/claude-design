# DESIGN.md — Claude Design System (v0.2 · 官方对齐)

> This document is auto-derived from the `claude-design` skill. Values sampled
> from `anthropic.com` and `claude.com` `:root` CSS variables.

## Style Prompt

A thoughtful essay printed on fine paper, with occasional rust-inked marks.
Warm ivory background, deep ink text, restrained rust-orange accents. Display
serif headlines (Anthropic Serif / Fraunces) set against neutral sans body
(Anthropic Sans / Inter). Generous whitespace. Every element earns its place.
Motion is restrained, deliberate, and respectful of the type — exponential
ease-out, small translations, no bounces. Inspired by Claude / Anthropic's
public visual language.

## Mode — Editorial(default)or Product

Pick one up front:

- **Editorial** (brand narrative, essays, hero landing pages): ivory bg, serif
  body, serif or heavy-sans h1, ink-filled buttons. Default choice.
- **Product** (app UI, dashboards, documentation): dark gray-900 bg, sans body,
  sans h1, clay-filled buttons.

## Colors

### Light(Editorial · default)

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#FAF9F5` | Primary paper (ivory-light / gray-050) |
| `--bg-soft` | `#F0EEE6` | Secondary panel (ivory-medium / gray-150) |
| `--bg-elevated` | `#E8E6DC` | Cards (ivory-dark / gray-200) |
| `--ink` | `#141413` | Display headings (slate-dark / gray-950) |
| `--text` | `#3D3D3A` | Body (slate-medium / gray-700) |
| `--muted` | `#5E5D59` | Secondary (slate-light / gray-600) WCAG AA |
| `--border` | `#E8E6DC` | 1px dividers |
| `--accent` | `#D97757` | Clay — decorative rust |
| `--accent-hover` | `#C96442` | Clay-interactive — button hover |
| `--accent-text` | `#C6613F` | Accent — text-safe on ivory (AA) |
| `--accent-soft` | `#EBC9B7` | Peach — soft bg |

### Dark(Product · claude-code style)

| Token | Hex | Role |
|---|---|---|
| `--bg` | `#1A1918` | Deep ink paper (gray-900) |
| `--bg-soft` | `#262624` | Secondary panel (gray-800) |
| `--bg-elevated` | `#30302E` | Cards (gray-750) |
| `--ink` | `#FAF9F5` | Display / headings (gray-050) |
| `--text` | `#B0AEA5` | Body (gray-400 / cloud-medium) |
| `--muted` | `#87867F` | Secondary (gray-500 / cloud-dark) AA |
| `--border` | `#3D3D3A` | Subtle dividers (gray-700) |
| `--accent` | `#D97757` | Clay — same hex as light, AA on dark |
| `--accent-text` | `#E08B6D` | Brightened clay for dark-bg text (AA) |

### Secondary Brand Swatches(editorial / illustration)

Use **sparingly**, at most 3 combined per screen. See
[references/brand-swatches.md](references/brand-swatches.md) for recipes.

`olive #788C5D` · `cactus #BCD1CA` · `mineral #629987` · `sky #6A9BCC` ·
`heather #CBCADB` · `plum #827DBD` · `fig #C46686` · `coral #EBCECE` ·
`peach #EBC9B7` · `oat #E3DACC` · `kraft #D4A27F` · `manilla #EBDBBC`

## Typography

- **Display**: `"Anthropic Serif"`(official) → Tiempos → Fraunces → Georgia.
  Variable serif with optical-size. Weight 400 for hero, 500 for section titles.
  Italic used sparingly for emphasis ("How Claude *thinks*").
- **Body / UI**: `"Anthropic Sans"`(official) → Styrene → Inter → system sans.
  Weight 400 / 500 / 600.
- **Mono**: `"Anthropic Mono"`(official) → Söhne Mono → JetBrains Mono →
  ui-monospace. Used for code, numeric callouts, eyebrow label chapter numbers.
- **Numerics**: `font-variant-numeric: tabular-nums` on all data contexts.
- **CJK fallback**: `"Noto Sans"` / `"PingFang SC"` / `"Source Han Sans SC"`.

### H1 — Editorial vs Product

```css
.heading-editorial {
  font-family: var(--font-display);
  font-weight: 400;       /* serif, light */
  letter-spacing: -0.03em;
}
.heading-product {
  font-family: var(--font-body);
  font-weight: 700;       /* sans, heavy — anthropic.com homepage uses this */
  letter-spacing: -0.02em;
}
```

### Sizing(video 1920×1080)

- Hero display: **160–240px**, line-height 0.95, letter-spacing -0.03em
- Chapter title: **72–120px**, line-height 1.05, letter-spacing -0.02em
- Subtitle / lead: **32–40px**, line-height 1.3
- Body: **24–28px**, line-height 1.55
- Eyebrow label: **22px** uppercase, letter-spacing 0.22em, weight 500
- Meta / caption: **18–20px**

## Motion

- Default ease: **`power3.out`**(CSS: `cubic-bezier(0.23, 1, 0.32, 1)`)
- Hero ease: **`power4.out`** / **`expo.out`** — signature "smooth landing"
- Entrance duration: **0.6–0.9s**
- Stagger: **0.10–0.14s**
- Y translation: **20–60px**(display > body > meta)
- Scene transition: **0.4s** crossfade with `power2.inOut`
- Exit animation: **forbidden except on final scene** — transitions handle exits
- No `bounce`, no `elastic`, no `back`, no `repeat: -1`

## Button / CTA

```css
/* Editorial primary — ink filled (anthropic.com pattern) */
.cta-editorial   { background: var(--ink);          color: var(--bg); }

/* Product primary — clay-interactive filled (claude.com pattern) */
.cta-product     { background: var(--accent-hover); color: var(--bg); }

/* Text-only tertiary */
.cta-text        { color: var(--accent-text); border-bottom: 1px solid currentColor; }
```

All buttons: padding `14px 24-28px`, radius `6px`, font-weight `500`, no gradient, no drop shadow.

## What NOT to Do

- ❌ `#FFFFFF` backgrounds or `#000000` text
- ❌ Material/Tailwind blue `#3B82F6`, green `#10B981`, red `#EF4444`, neon hues
- ❌ Roboto, Open Sans, Poppins, or any Bootstrap-era font
- ❌ `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` drop shadows
- ❌ `border-radius: 24px+` pill shapes (except true circles)
- ❌ Bold text as primary emphasis — use italic instead
- ❌ Full-screen linear gradients on dark (H.264 banding)
- ❌ Emoji, gradients on buttons, neon glows
- ❌ `letter-spacing` > 0.05em on non-uppercase text
- ❌ Exit animations before scene transitions
- ❌ More than 5 `--accent` instances per screen (rust must stay scarce)
- ❌ More than 3 secondary brand swatches per screen (keep tonal, avoid clash)
- ❌ Secondary swatches used as body-text color (they fail AA)
