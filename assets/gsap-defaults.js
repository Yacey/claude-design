/* ========================================================================
   Claude Design System — GSAP Motion Defaults
   Paste before any gsap.timeline() calls.
   ======================================================================== */

// Global defaults — every tween inherits these unless explicitly overridden
gsap.defaults({
  ease: "power3.out",
  duration: 0.7,
  overwrite: "auto",
});

// Named easing palette (for explicit reference)
const CLAUDE_EASE = {
  hero:   "power4.out",   // or "expo.out" — signature smooth landing
  title:  "power3.out",   // section titles, body headings
  body:   "expo.out",     // paragraphs, lists
  micro:  "power2.out",   // dots, icons, small elements
  hover:  "power1.out",   // interaction feedback
  transition: "power2.inOut",  // scene crossfades
};

// Duration palette (in seconds)
const CLAUDE_DUR = {
  hero:       0.9,
  title:      0.8,
  subtitle:   0.7,
  body:       0.6,
  list:       0.7,        // with stagger 0.12
  microElem:  0.4,
  ruleExpand: 0.8,
  transition: 0.4,
  hover:      0.2,
  exitFinal:  0.5,        // only on last scene
};

// Stagger palette
const CLAUDE_STAGGER = {
  default: 0.12,   // list items, chapter rows
  tight:   0.08,   // data stats, dense grids
  loose:   0.16,   // ceremonial / slow reveal
};

// ========================================================================
// Ready-made entrance helpers — call these with a target + start time
// ========================================================================

/**
 * Hero title entrance — big display serif, 60px lift, 0.9s quartic decay
 */
function claudeHero(tl, target, at = 0.3) {
  tl.from(target, {
    y: 60, opacity: 0,
    duration: CLAUDE_DUR.hero,
    ease: CLAUDE_EASE.hero,
  }, at);
}

/**
 * Subtitle / lead paragraph entrance — 30px lift, 0.7s expo decay
 */
function claudeSub(tl, target, at = 0.75) {
  tl.from(target, {
    y: 30, opacity: 0,
    duration: CLAUDE_DUR.subtitle,
    ease: CLAUDE_EASE.body,
  }, at);
}

/**
 * Eyebrow rule — horizontal line expanding from left
 */
function claudeRule(tl, target, at = 0.15) {
  tl.from(target, {
    scaleX: 0,
    transformOrigin: "left center",
    duration: CLAUDE_DUR.ruleExpand,
    ease: CLAUDE_EASE.title,
  }, at);
}

/**
 * Stagger list — chapters, tags, cards
 */
function claudeList(tl, target, at = 0.4, stagger = CLAUDE_STAGGER.default) {
  tl.from(target, {
    y: 40, opacity: 0,
    duration: CLAUDE_DUR.list,
    ease: CLAUDE_EASE.body,
    stagger,
  }, at);
}

/**
 * Micro element — dot, icon, badge (small scale + fade)
 */
function claudeMicro(tl, target, at, stagger = 0.12) {
  tl.from(target, {
    scale: 0, opacity: 0,
    duration: CLAUDE_DUR.microElem,
    ease: CLAUDE_EASE.micro,
    stagger,
  }, at);
}

/**
 * Scene crossfade — outgoing scene opacity → 0 while incoming scene opacity → 1
 */
function claudeCrossfade(tl, outgoingSelector, incomingSelector, at) {
  tl.to(outgoingSelector, {
    opacity: 0,
    duration: CLAUDE_DUR.transition,
    ease: CLAUDE_EASE.transition,
  }, at);
  tl.from(incomingSelector, {
    opacity: 0,
    duration: CLAUDE_DUR.transition,
    ease: CLAUDE_EASE.transition,
  }, at);
}

/**
 * Final scene exit — allowed only on the last scene
 */
function claudeFinalExit(tl, target, at) {
  tl.to(target, {
    opacity: 0,
    y: -15,
    duration: CLAUDE_DUR.exitFinal,
    ease: "power2.in",
    stagger: 0.05,
  }, at);
}

// ========================================================================
// Example usage
// ========================================================================
//
// const tl = gsap.timeline({ paused: true });
//
// // Scene 1 — 0.0–3.4s
// claudeRule(tl, ".s1 .eyebrow-rule", 0.15);
// tl.from(".s1 .eyebrow-text", { x: -20, opacity: 0, duration: 0.5 }, 0.3);
// claudeHero(tl, ".s1 .hero-title", 0.4);
// claudeSub(tl, ".s1 .hero-sub", 0.85);
//
// // Transition 1 → 2 at 3.0s
// claudeCrossfade(tl, "#scene-1", "#scene-2", 3.0);
//
// // Scene 2 — starts just after crossfade
// claudeList(tl, ".s2 .tag-row", 3.45, 0.12);
// claudeMicro(tl, ".s2 .tag-dot", 3.6, 0.12);
//
// // Final fade
// claudeFinalExit(tl, "#scene-3 > *", 9.5);
//
// window.__timelines["my-comp"] = tl;
