# Patterns — 组件模式库

全部以 Claude 美学为前提。每个 pattern 给出 HTML + CSS，可直接粘贴。

## 1. Eyebrow Label（无处不在的小标签）

```html
<div class="eyebrow">
  <span class="eyebrow-rule"></span>
  <span>A Personal Blog</span>
</div>
```
```css
.eyebrow {
  display: flex; align-items: center; gap: 20px;
  color: var(--muted);
  font-size: 22px; font-weight: 500;
  letter-spacing: 0.22em; text-transform: uppercase;
}
.eyebrow-rule {
  display: inline-block; width: 88px; height: 1px;
  background: var(--accent);
}
```

## 2. Hero Title（斜体点题三段式）

```html
<header class="hero">
  <div class="eyebrow"> … </div>
  <h1 class="hero-title">
    How Claude <em>thinks</em>.
  </h1>
  <p class="hero-sub">A careful look at reasoning, judgment, and conversation.</p>
  <p class="hero-meta">Essays · Notes · Experiments</p>
</header>
```
```css
.hero { display: flex; flex-direction: column; gap: 24px; }
.hero-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(96px, 12vw, 240px);
  line-height: 0.95;
  color: var(--ink);
  letter-spacing: -0.03em;
}
.hero-title em {
  font-style: italic;
  color: var(--accent-text);
}
.hero-sub {
  font-family: var(--font-body);
  font-size: clamp(24px, 2.4vw, 34px);
  line-height: 1.4;
  color: var(--text);
  max-width: 720px;
}
.hero-meta {
  color: var(--muted);
  font-size: 20px;
  letter-spacing: 0.05em;
}
```

## 3. Numbered Chapter List

```html
<section class="chapters">
  <div class="chapter">
    <span class="chapter-num">01</span>
    <div class="chapter-body">
      <h3 class="chapter-title">Design</h3>
      <p class="chapter-meta">视觉与交互</p>
    </div>
  </div>
  <!-- 02 … 03 … -->
</section>
```
```css
.chapters { display: flex; flex-direction: column; gap: 28px; }
.chapter {
  display: grid; grid-template-columns: 88px 1fr;
  gap: 32px; align-items: baseline;
  padding-bottom: 28px; border-bottom: 1px solid var(--divider);
}
.chapter-num {
  font-family: var(--font-mono);
  font-size: 18px;
  color: var(--accent-text);
  font-variant-numeric: tabular-nums;
}
.chapter-title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 72px; line-height: 1;
  color: var(--ink);
  letter-spacing: -0.02em;
}
.chapter-meta {
  color: var(--muted);
  font-size: 22px; margin-top: 8px;
}
```

## 4. Blockquote / Pull Quote

```html
<blockquote class="pull-quote">
  <p>The tools we build shape the way we think —
     and the way we think shapes the tools we build.</p>
  <cite>— an old programming saying</cite>
</blockquote>
```
```css
.pull-quote {
  border-left: 2px solid var(--accent);
  padding: 8px 0 8px 28px;
  margin: 32px 0;
}
.pull-quote p {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 32px; line-height: 1.4;
  color: var(--ink);
}
.pull-quote cite {
  display: block; margin-top: 12px;
  font-family: var(--font-body); font-style: normal;
  font-size: 18px; color: var(--muted);
}
```

## 5. Inline Code & Code Block

```html
<p>Use <code>@media (prefers-reduced-motion)</code> for accessibility.</p>
<pre class="code-block"><code>function greet(name) {
  return `Hello, ${name}.`;
}</code></pre>
```
```css
code, .code-block {
  font-family: var(--font-mono);
  font-feature-settings: "liga" 0;   /* mono 禁连字 */
}
:not(pre) > code {
  background: var(--bg-code);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 0.9em;
  color: var(--ink);
}
.code-block {
  background: var(--bg-code);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 20px 24px;
  font-size: 15px; line-height: 1.6;
  color: var(--text);
  overflow-x: auto;
}
```

## 6. Button / CTA 三档

```html
<button class="btn-primary">Start reading</button>
<button class="btn-secondary">Learn more</button>
<a class="btn-text" href="#">Read notes →</a>
```
```css
.btn-primary, .btn-secondary {
  font-family: var(--font-body);
  font-weight: 500; font-size: 16px;
  padding: 14px 24px;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16,1,0.3,1);
}
.btn-primary {
  background: var(--ink);
  color: var(--bg);
}
.btn-primary:hover {
  background: var(--accent-text);
}
.btn-secondary {
  background: transparent;
  color: var(--ink);
  border-color: var(--border);
}
.btn-secondary:hover {
  background: var(--bg-soft);
  border-color: var(--border-hover);
}
.btn-text {
  color: var(--accent-text);
  border-bottom: 1px solid currentColor;
  padding-bottom: 2px;
}
.btn-text:hover { color: var(--accent-text-hover); }
```

## 7. Data Stat（数字卡片）

```html
<div class="stat-grid">
  <div class="stat">
    <div class="stat-num">2.3M</div>
    <div class="stat-label">Daily readers</div>
  </div>
</div>
```
```css
.stat-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px;
}
.stat { border-top: 1px solid var(--accent); padding-top: 20px; }
.stat-num {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 84px; line-height: 1;
  color: var(--ink);
  font-variant-numeric: tabular-nums lining-nums;
  letter-spacing: -0.02em;
}
.stat-label {
  color: var(--muted);
  font-size: 18px; margin-top: 12px;
  letter-spacing: 0.05em;
}
```

## 8. Navigation（顶部导航）

```html
<nav class="nav">
  <a class="nav-brand" href="/">Claude</a>
  <ul class="nav-links">
    <li><a href="/about">About</a></li>
    <li><a href="/writing">Writing</a></li>
    <li><a href="/docs">Docs</a></li>
  </ul>
  <a class="btn-primary" href="/try">Try Claude</a>
</nav>
```
```css
.nav {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 48px;
  border-bottom: 1px solid var(--divider);
}
.nav-brand {
  font-family: var(--font-display);
  font-size: 22px; font-weight: 500;
  color: var(--ink); letter-spacing: -0.01em;
}
.nav-links {
  display: flex; gap: 32px; list-style: none;
}
.nav-links a {
  color: var(--text); font-size: 16px; text-decoration: none;
  transition: color 0.15s;
}
.nav-links a:hover { color: var(--accent-text); }
```

## 9. Footer（低调的尾巴）

```html
<footer class="site-footer">
  <div class="footer-rule"></div>
  <div class="footer-grid">
    <div class="footer-brand">Claude Design · Yacey</div>
    <nav class="footer-nav">
      <a href="/rss">RSS</a>
      <a href="/twitter">Twitter</a>
      <a href="/github">GitHub</a>
    </nav>
    <div class="footer-note">© 2026 · Paper · Ink · Rust.</div>
  </div>
</footer>
```
```css
.site-footer { padding: 96px 48px 48px; }
.footer-rule { height: 1px; background: var(--accent); margin-bottom: 48px; }
.footer-grid {
  display: grid; grid-template-columns: 1fr auto 1fr;
  gap: 32px; align-items: center;
  font-size: 15px; color: var(--muted);
}
.footer-nav { display: flex; gap: 24px; }
.footer-nav a { color: var(--text); text-decoration: none; border-bottom: 1px solid transparent; transition: border 0.2s; }
.footer-nav a:hover { border-bottom-color: var(--accent); }
.footer-note { text-align: right; }
```

## 10. Article Prose（长文正文模版）

```html
<article class="prose">
  <h1>Notes on calm software</h1>
  <p class="lead">First line is a lead paragraph — one size up, sets the tone.</p>
  <p>Regular paragraphs follow. <em>Emphasis</em> via italics, <a href="#">links</a> underlined only on hover.</p>
  <h2>A section heading</h2>
  <p>…</p>
  <blockquote>…</blockquote>
  <h3>Sub section</h3>
  <ul><li>…</li></ul>
</article>
```
```css
.prose {
  max-width: 680px; margin: 0 auto;
  font-family: var(--font-body);
  font-size: 19px; line-height: 1.7;
  color: var(--text);
}
.prose .lead { font-size: 24px; color: var(--ink); margin-bottom: 1.5em; }
.prose h1 {
  font-family: var(--font-display); font-weight: 400;
  font-size: 56px; line-height: 1.1; color: var(--ink);
  letter-spacing: -0.02em; margin: 0 0 24px;
}
.prose h2 {
  font-family: var(--font-display); font-weight: 500;
  font-size: 36px; line-height: 1.2; color: var(--ink);
  margin: 2em 0 0.5em;
}
.prose h3 {
  font-family: var(--font-body); font-weight: 600;
  font-size: 22px; color: var(--ink);
  margin: 2em 0 0.5em; letter-spacing: 0;
}
.prose p { margin: 0 0 1.25em; }
.prose em { font-style: italic; color: var(--ink); }
.prose a { color: var(--ink); border-bottom: 1px solid var(--border); padding-bottom: 1px; text-decoration: none; transition: border-color 0.2s; }
.prose a:hover { border-bottom-color: var(--accent); }
.prose ul, .prose ol { padding-left: 1.5em; margin: 0 0 1.25em; }
.prose li { margin-bottom: 0.5em; }
.prose ::selection { background: rgba(204,120,92,0.22); }
```

## 11. Claude 对话 UI 风格（Chat Card）

```html
<div class="chat">
  <div class="message user">
    <p>How do I replicate Claude's design?</p>
  </div>
  <div class="message assistant">
    <p>Start with paper, not pixels. Read <a href="#">the palette</a> first.</p>
  </div>
</div>
```
```css
.chat {
  max-width: 760px; margin: 0 auto;
  display: flex; flex-direction: column; gap: 20px;
}
.message {
  padding: 16px 20px;
  border-radius: 10px;
  font-size: 17px; line-height: 1.6;
}
.message.user {
  background: var(--bg-soft);
  border: 1px solid var(--border);
  align-self: flex-end; max-width: 75%;
  color: var(--ink);
}
.message.assistant {
  background: transparent;
  color: var(--text);
  max-width: 100%;
  font-family: var(--font-body);
}
.message.assistant p { margin: 0 0 0.8em; }
```

## 12. Tag / Badge（小标签）

```html
<span class="badge">Essay</span>
<span class="badge badge-accent">New</span>
<span class="badge badge-subtle">Draft</span>
```
```css
.badge {
  display: inline-flex; align-items: center;
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 13px; font-weight: 500;
  letter-spacing: 0.04em;
  background: var(--bg-soft);
  color: var(--text);
  border: 1px solid var(--border);
}
.badge-accent {
  background: var(--accent-bg);
  color: var(--accent-text);
  border-color: var(--accent-border);
}
.badge-subtle {
  background: transparent;
  color: var(--muted);
  border-color: var(--border);
}
```

## 13. Section Divider（细线分隔）

```html
<hr class="rule-accent">
<hr class="rule-dotted">
```
```css
.rule-accent {
  border: 0; height: 1px;
  background: var(--accent);
  margin: 64px auto;
  width: 48px;   /* 短线更精致 */
}
.rule-dotted {
  border: 0; border-top: 1px dashed var(--border);
  margin: 48px 0;
}
```

## 14. Image + Caption

```html
<figure class="fig">
  <img src="/screenshot.png" alt="…">
  <figcaption>Fig 1 · The paper/ink/rust triptych.</figcaption>
</figure>
```
```css
.fig img {
  width: 100%; display: block;
  border-radius: 8px;
  border: 1px solid var(--border);
}
.fig figcaption {
  margin-top: 12px;
  color: var(--muted);
  font-size: 15px; font-style: italic;
  text-align: center;
}
```

## 15. "Claude star" 标记（可选装饰）

```html
<svg class="claude-mark" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
  <path d="M12 2 L13 9 L20 10 L14 14 L17 21 L12 17 L7 21 L10 14 L4 10 L11 9 Z"/>
</svg>
```
```css
.claude-mark { color: var(--accent); }
```
（简化的六芒星近似，非官方 logo；仅作装饰）

---

**每个 pattern 使用时注意**：
- 遵循 rust 稀缺性原则：一屏 ≤ 5 处 accent
- 层级用字号 + 字重 + 色彩，不用 box-shadow
- 入场动画从 [motion.md](motion.md) 配方取
