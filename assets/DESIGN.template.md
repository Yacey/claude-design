# DESIGN.md — Claude Design System

> This document is auto-derived from the `claude-design` skill. Replace `[PROJECT NAME]` and tweak the palette if you diverge from defaults.

## Style Prompt

A thoughtful essay printed on fine paper, with occasional rust-inked marks. Warm cream background, deep ink text, restrained rust-orange accents. Display serif headlines (Fraunces) set against neutral sans body (Inter). Generous whitespace. Every element earns its place. Motion is restrained, deliberate, and respectful of the type — exponential ease-out, small translations, no bounces. Inspired by Claude / Anthropic's public visual language.

## Colors

### Light (default)

| Token             | Hex       | Role                                 |
| ----------------- | --------- | ------------------------------------ |
| `--bg`            | `#F0EEE5` | Primary paper background             |
| `--bg-soft`       | `#FAF9F5` | Elevated / secondary surface         |
| `--bg-code`       | `#F5F2EA` | Code block background                |
| `--ink`           | `#141413` | Display headings, bold text          |
| `--text`          | `#3D3929` | Body copy                            |
| `--muted`         | `#6E6A5F` | Secondary / meta text (WCAG AA)      |
| `--muted-soft`    | `#8A8577` | Decorative lines only (not text)     |
| `--border`        | `#E5E1D8` | 1px dividers                         |
| `--accent`        | `#CC785C` | Rust — decorative (rules, dots)      |
| `--accent-text`   | `#A84F32` | Rust — text-safe (links, emphasis)   |
| `--accent-soft`   | `#E8C5A0` | Warm peach — soft backgrounds        |

### Dark (optional)

| Token             | Hex       | Role                                |
| ----------------- | --------- | ----------------------------------- |
| `--bg`            | `#1A1915` | Deep ink paper                      |
| `--ink`           | `#F5F2EA` | Display / headings                  |
| `--text`          | `#C8C2B4` | Body                                |
| `--muted`         | `#9A9486` | Secondary text                      |
| `--accent`        | `#D97757` | Rust (brightened for dark)          |
| `--accent-text`   | `#E08A6F` | Rust text-safe on dark              |

## Typography

- **Display**: `Fraunces` — variable serif with optical-size. Weight 400 for hero, 500 for section titles. Italic used sparingly for emphasis ("How Claude *thinks*").
- **Body / UI**: `Inter` — weight 400 / 500 / 600. Primary UI + body text.
- **Mono**: `JetBrains Mono` — code, numeric callouts.
- **Numerics**: `font-variant-numeric: tabular-nums` on all data contexts.

### Sizing (video 1920×1080)

- Hero display: **160–240px**, line-height 0.95, letter-spacing -0.03em
- Chapter title: **72–120px**, line-height 1.05, letter-spacing -0.02em
- Subtitle / lead: **32–40px**, line-height 1.3
- Body: **24–28px**, line-height 1.55
- Eyebrow label: **22px** uppercase, letter-spacing 0.22em, weight 500
- Meta / caption: **18–20px**

## Motion

- Default ease: **`power3.out`** (CSS: `cubic-bezier(0.23, 1, 0.32, 1)`)
- Hero ease: **`power4.out`** / **`expo.out`** — the signature "superb smooth landing"
- Entrance duration: **0.6–0.9s**
- Stagger: **0.10–0.14s**
- Y translation: **20–60px** (more for display, less for labels)
- Scene transition: **0.4s** crossfade with `power2.inOut`
- Exit animation: **forbidden except on final scene** (transitions handle exits)
- No `bounce`, no `elastic`, no `back`, no `repeat: -1`

## What NOT to Do

- ❌ `#FFFFFF` backgrounds or `#000000` text
- ❌ Material/Tailwind blue `#3B82F6`, green `#10B981`, or any neon hue
- ❌ Roboto, Open Sans, Poppins, or any Bootstrap-era font
- ❌ `box-shadow: 0 4px 12px rgba(0,0,0,0.1)` drop shadows
- ❌ `border-radius: 24px+` pill shapes (except true circles)
- ❌ Bold text as primary emphasis — use italic instead
- ❌ Full-screen linear gradients on dark (H.264 banding)
- ❌ Emoji, gradients on buttons, neon glows
- ❌ `letter-spacing` > 0.05em on non-uppercase text
- ❌ Exit animations before scene transitions
- ❌ More than 5 `--accent` instances per screen (rust must stay scarce)
