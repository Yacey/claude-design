---
name: claude-design
description: 复刻 Claude / Anthropic 的视觉设计语言 — 暖米纸张底 + 深墨文字 + 铁锈橙点缀 + 衬线标题 + 中性无衬线正文 + 克制的动效。适用场景：创建像 claude.ai / anthropic.com 一样"文学、思辨、低调克制"的视频合成、着陆页、幻灯片、对话 UI、博客、海报、读物封面。提供完整的 Light/Dark 色板（包括官方 swatch 对齐的 ivory/slate/clay 命名、20 阶 gray ladder、12 个编辑次级 swatch）、Anthropic Serif/Sans/Mono 优先 + Fraunces/Inter fallback 的字体栈、签名级动效曲线（exponential ease-out）、Editorial vs Product 双模式、以及可直接粘贴的 CSS 变量、GSAP defaults 和 DESIGN.md 模板。与 /hyperframes 配合即为视频合成的 Claude 风格。
---

# Claude Design System (v0.2 · 官方 swatch 对齐)

**Paper · Ink · Rust.** 从 Claude / Anthropic 公开产物（claude.com、anthropic.com、Claude Code）的 `:root` CSS 变量与 computed styles 观察抽象而成的设计系统。这不是 Anthropic 官方品牌手册——官方字体（Tiempos / Styrene / Copernicus / Söhne）是付费字体，官方 logo/wordmark 是注册商标，本 skill 不分发这些资产；但色彩、字号、间距、动效、排版关系本身不受知识产权保护，可以自由复制。

## Mental Model（先在脑中建立这张图像，再动手）

想象一篇深思熟虑的散文，印在一张轻微米黄、带极细纹理的厚纸上，偶尔用一支铁锈红钢笔画下标记或注释。**不是**产品落地页，**不是**dashboard，**不是**科技风。

| 对标参考 | 要借鉴的 | 对标反例 | 要避免的 |
|---|---|---|---|
| The New York Times（正文） | 衬线排版、阅读体验、层级 | Stripe | 过度精致的企业 SaaS 感 |
| Kinfolk 杂志 | 留白、摄影式构图、克制 | Linear | 冷峻科技酷炫 |
| Are.na | 内容优先、低 chrome、文献感 | Apple 主页 | 玻璃质感、强光泽 |
| 早期个人博客（Ghost / Medium 初期） | 阅读体验、无干扰 | Vercel 着陆页 | 深黑 + 霓虹梯度 |

**核心哲学**：
- **白纸不是白的，黑字不是黑的** — 纯白和纯黑都会破坏质感
- **留白是材质** — 大量留白不是"没装修完"，是刻意的
- **字体承担视觉重任** — 而不是图形或渐变
- **铁锈橙是节制的** — 整屏最多 3–5 处，每次出现都有意义
- **动效是对读者的尊重** — 快、稳、不打扰

## Editorial vs Product — 两种风格骨架 (v0.2 新增)

v0.2 采样发现：官方其实有两套并行的设计骨架，按内容类型切换。Skill 默认 **Editorial**，但提供 Product 工具类。

| 骨架 | 典型页面 | Body bg | Body font | H1 font | H1 weight | Button Primary |
|---|---|---|---|---|---|---|
| **Editorial** | anthropic.com 首页 / news / essays | `#FAF9F5` | `"Anthropic Serif"` | `"Anthropic Sans"` | **700** | ink 底 `#141413` |
| **Product** | anthropic.com/claude-code / app | `#141413`（dark-first）| `"Anthropic Sans"` | `"Anthropic Sans"` | 400–500 | clay-interactive `#C96442` |

具体怎么切换见 [Typography System](#typography-system详见-referencestypographymd) 段。

## Hard Rules（违反即破坏风格）

1. **背景永不纯白**。白天用 `#FAF9F5`（主底 · ivory-light）或 `#F0EEE6`（次级 · ivory-medium），黑夜用 `#1A1918`（gray-900）或 `#262624`（gray-800）。
2. **文字永不纯黑**。标题 `#141413`（slate-dark），正文 `#3D3D3A`（slate-medium），次要 `#5E5D59`（slate-light）。
3. **铁锈橙稀缺出现**。整屏不超过 5 个 `#D97757`（clay）实例。每次出现必须有理由（强调、分隔、行动号召、斜体点题）。文字用 `#C6613F`（accent），按钮 hover 用 `#C96442`（clay-interactive）。
4. **Display 衬线优先但不唯一**。editorial 风格用 `"Anthropic Serif"` / Fraunces / Tiempos / Source Serif 4；product/news 风格允许 h1 换 `"Anthropic Sans"` + weight 700（anthropic.com 首页正是这样）。不用任何带 script / handwritten 味的衬线。
5. **Body 中性无衬线为主**。`"Anthropic Sans"` / Inter / Geist。editorial 长文正文可以用 `"Anthropic Serif"` + 24px 作为"书感"替代。禁用 Roboto / Open Sans / Lato（那是 Material / Bootstrap 味）。
6. **禁用投影**。不用 `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`。用 1px 细边 `#E8E6DC`（ivory-dark）或相邻色块换色。
7. **圆角 4–10px**。禁用 `border-radius: 24px+` / `pill shape`（除非真圆如 dot）。
8. **按钮无渐变**。实填或纯文本 + 下划线。editorial CTA 是 ink 底（`#141413`+ 白字），product CTA 是 clay-interactive 底（`#C96442` + 白字）。
9. **Eyebrow 标签规格固定**：`text-transform: uppercase; letter-spacing: 0.22em; font-size: 20-22px; color: var(--muted); font-weight: 500;`。
10. **数字用等宽**：`font-variant-numeric: tabular-nums`。
11. **斜体是高级强调**。`"Anthropic Serif" italic` 或 Fraunces italic 用于点题，比 bold 更"Claude 味"。引号用中文弯引号 `"…"` / 英文 smart quote `"…"`。
12. **标点密度控制**：用 em-dash（—）代替括号与多余逗号；三点用 `…` 不是 `...`。
13. **动效曲线统一**：`power3.out` / `power4.out` / `expo.out`。禁用 bounce / elastic / back。
14. **动效时长**：入场 0.5–0.9s，微动 0.3–0.5s，转场 0.4s。永不 >1.2s 单条入场。
15. **Stagger 0.10–0.14s**。超过 0.2s 显得迟钝，小于 0.08s 显得浮躁。
16. **(v0.2 新)** 次级 swatch 一屏最多 3 种同色族组合。olive + cactus，或 fig + coral，或 sky + heather —— 不跨色族撞色。

## Color System（完整色板，详见 [references/palette.md](references/palette.md)）

### Light（Paper mode）— Editorial 默认
```css
--bg:          #FAF9F5;  /* 官方 ivory-light / gray-050 · 主纸张 */
--bg-soft:     #F0EEE6;  /* 官方 ivory-medium / gray-150 · 次级面板 */
--bg-elevated: #E8E6DC;  /* 官方 ivory-dark / gray-200 · 卡片 */
--ink:         #141413;  /* 官方 slate-dark / gray-950 · 标题 */
--text:        #3D3D3A;  /* 官方 slate-medium / gray-700 · 正文 */
--muted:       #5E5D59;  /* 官方 slate-light / gray-600 · 次要 (AA) */
--muted-soft:  #73726C;  /* 官方 gray-550 · 装饰线条 (非文字) */
--border:      #E8E6DC;  /* 细边 */
--border-hover:#DEDCD1;
--accent:      #D97757;  /* 官方 swatch--clay · 装饰 */
--accent-hover:#C96442;  /* 官方 swatch--clay-interactive · 按钮 hover */
--accent-text: #C6613F;  /* 官方 swatch--accent · 文字用 (AA) */
--accent-soft: #EBC9B7;  /* 官方 swatch--peach · 背景斑块 */
```

### Dark（Ink mode）— Product 默认
```css
--bg:          #1A1918;  /* 官方 gray-900 · 主底 */
--bg-soft:     #262624;  /* 官方 gray-800 · 次级 */
--bg-elevated: #30302E;  /* 官方 gray-750 */
--ink:         #FAF9F5;  /* 官方 gray-050 · 标题反白 */
--text:        #B0AEA5;  /* 官方 gray-400 / cloud-medium · 正文 */
--muted:       #87867F;  /* 官方 gray-500 / cloud-dark · 次要 (AA) */
--border:      #3D3D3A;  /* 官方 gray-700 */
--accent:      #D97757;  /* clay · dark 下仍用同一 hex */
--accent-text: #E08B6D;  /* 暗底文字用 · AA */
--accent-soft: #4A3428;  /* 深 peach · 暗底斑块 */
```

**WCAG 合规对照**（正文 4.5:1 / 大字 3:1）：
- Light `--text` on `--bg`：**9.8:1** ✓
- Light `--muted` on `--bg`：**5.9:1** ✓
- Light `--accent-text` on `--bg`：**5.6:1** ✓
- Dark `--text` on `--bg`：**7.5:1** ✓
- Dark `--muted` on `--bg`：**4.5:1** ✓（临界）
- 装饰用 `--accent` / `--muted-soft` 不参与文字对比要求

**v0.2 新增**：完整的官方 **gray ladder 20 阶** 和 **12 个次级 brand swatch**（olive / cactus / sky / heather / fig / coral / oat / peach / kraft / manilla / plum / mineral）见 [references/palette.md](references/palette.md) 和 [references/brand-swatches.md](references/brand-swatches.md)。

**禁用色**（Anthropic 从不用）：`#FFFFFF` 纯白背景、`#000000` 纯黑文字、`#3B82F6` Material 蓝、`#10B981` Material 绿、`#EF4444` 正红（用 `#B53333` 官方 danger 替代）、`#F59E0B` 亮黄、任何霓虹色、任何 HSL 饱和度 > 70% 的紫/粉。

## Typography System（详见 [references/typography.md](references/typography.md)）

### 字体栈（官方优先 + 免费 fallback）

| 角色 | 官方名（Anthropic self-host） | 付费原版 | 免费等效（自动 fallback） |
|---|---|---|---|
| Display Serif | **Anthropic Serif** | Copernicus / Tiempos Headline | Fraunces (variable, opsz) |
| Body Serif | **Anthropic Serif** | Tiempos Text | Source Serif 4, Fraunces |
| Sans UI | **Anthropic Sans** | Styrene A/B | Inter, Geist |
| Mono | **Anthropic Mono** | Söhne Mono | JetBrains Mono, Geist Mono |
| CJK | — | — | Noto Sans, PingFang SC, Source Han Sans |

**CSS 变量一键粘贴** — 把官方字体名放首位，让已授权用户直接生效；无授权时自动 fallback 到免费等效：

```css
--font-display: "Anthropic Serif", "Tiempos Headline", "Tiempos Text",
                "Fraunces", "Instrument Serif", "Source Serif 4",
                Georgia, serif;

--font-body:    "Anthropic Sans", "Styrene B", "Styrene A",
                "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
                "PingFang SC", "Source Han Sans SC", "Noto Sans", sans-serif;

--font-mono:    "Anthropic Mono", "Söhne Mono", "JetBrains Mono",
                "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace;
```

### Editorial / Product 两种 H1 配方

```css
/* Editorial h1 — serif 400（默认）*/
.heading-editorial {
  font-family: var(--font-display);
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 0.95;
}

/* Product h1 — sans 700（anthropic.com 首页、news 页用这个）*/
.heading-product {
  font-family: var(--font-body);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
}
```

### 尺寸刻度

```css
/* Display */
--fs-hero:      clamp(96px, 12vw, 240px);   /* 单屏主标题 */
--fs-title:     clamp(56px, 6vw, 120px);    /* 章节标题 */
--fs-subtitle:  clamp(32px, 3vw, 56px);
--fs-lead:      24-32px;                    /* 段首加大段落 */

/* Body */
--fs-body:      20-28px;
--fs-meta:      18-22px;
--fs-label:     14-16px;                    /* eyebrow 用 20-22 */

/* 行高 */
line-height: 0.95;   /* 大于 120px 的 display */
line-height: 1.1;    /* 40-120px */
line-height: 1.5-1.7;/* body */

/* 字距 */
letter-spacing: -0.03em;  /* >80px 大字 */
letter-spacing: -0.02em;  /* 40-80px */
letter-spacing: 0;        /* body */
letter-spacing: 0.22em;   /* eyebrow uppercase */
```

### 排版细节（这些细节决定"像不像 Claude"）
- **斜体点题**：`"Anthropic Serif" italic` 或 Fraunces italic 用于关键词 — 如 `How Claude <em>thinks</em>.`
- **Drop cap**：长文首字母用 display serif 大号下沉 3 行，不要描边
- **数字**：所有 stats/dates/prices 加 `font-variant-numeric: tabular-nums`
- **标点**：em-dash 两侧无空格（英文）或有空格（中文）；禁用 `--` 代替 em-dash
- **引号**：SmartQuotes 强制 — `"`/`"`/`'`/`'`，禁用直引号
- **悬挂标点**：展示型大标题首字符若为引号，用 `text-indent: -0.5em` 让引号悬挂到内容框外
- **Trim**（v0.2 新增）：官方用 `text-trim` 精细控制行盒空白，手动实现参考 [references/typography.md](references/typography.md#trimtrim-top--trim-bottom)

## Motion System（详见 [references/motion.md](references/motion.md)）

### 签名动效曲线
Claude 的动效有明显的"超平滑落地"特征 — 高初速 + 长尾减速。对应：

```js
// GSAP
ease: "expo.out"          // 最签名
ease: "power4.out"        // 稍柔
ease: "power3.out"        // 通用默认

// CSS cubic-bezier 等效
transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);   // expo.out 等效
transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);  // power3.out 等效
```

### 时长与位移规格

| 场景 | 时长 | 曲线 | 位移/变换 |
|---|---|---|---|
| 段落入场 | 0.6s | `power3.out` | `y: 30-40, opacity: 0 → 1` |
| 大标题入场 | 0.9s | `power4.out` | `y: 50-60, opacity: 0 → 1` |
| 副标题入场 | 0.7s | `expo.out` | `y: 30` |
| 列表 stagger | 0.7s, stagger 0.12s | `expo.out` | `y: 40, opacity: 0` |
| Dot / 微元素 | 0.4s | `power2.out` | `scale: 0 → 1` |
| 细线 rule 展开 | 0.6-0.8s | `power3.out` | `scaleX: 0 → 1, origin: left` |
| 场景转场 | 0.4s crossfade | `power2.inOut` | `opacity` |
| Hover 反馈 | 0.2s | `power1.out` | `opacity / color` |

### 禁用
- ❌ `bounce.out` / `elastic.out` / `back.out` — 太玩具
- ❌ `repeat: -1` 无限动画 — 打扰阅读
- ❌ 缩放 > 1.1 或 < 0.9 的入场 — Claude 风格只做细微缩放
- ❌ 旋转入场（除非有明确概念理由）

## Layout & Spacing（详见 [references/patterns.md](references/patterns.md)）

### 空间刻度（8px 基线）
```css
--s-1:  4px;   --s-2:  8px;   --s-3: 12px;   --s-4: 16px;
--s-5: 24px;   --s-6: 32px;   --s-7: 48px;   --s-8: 64px;
--s-9: 96px;   --s-10:128px;  --s-11:160px;  --s-12:200px;
```

### 内容框宽度
- 正文段落：`max-width: 680-720px`（约 66 字符/英文）
- 宽内容（图 + 文）：`max-width: 1080px`
- 全宽展示：`max-width: 1440px`（即便 1920 视口，内容仍收敛）

### 版式原则
1. **单列优先**。多列仅在数据对比或并排插图时使用。
2. **编号章节**：`01 — Design` 左侧小号等宽，主标题右侧或下方。
3. **细线分隔**：1px `--border` 或 1-2px `--accent`。禁用 2px+ 黑色粗线。
4. **内容容器用 padding 而非 absolute positioning**（hyperframes 强制约束；其他场景也建议）。

## Component Patterns（精选，详见 references/patterns.md）

### Eyebrow Label（无处不在）
```html
<div class="eyebrow">
  <span class="eyebrow-rule"></span>
  <span>A Personal Blog</span>
</div>
```
```css
.eyebrow { display:flex; align-items:center; gap:20px;
  color:var(--muted); font-size:22px; letter-spacing:0.22em;
  text-transform:uppercase; font-weight:500; }
.eyebrow-rule { width:88px; height:1px; background:var(--accent); }
```

### Hero 标题组（Editorial）
```html
<h1 class="hero-title">
  How Claude <em>thinks</em>.
</h1>
```
```css
.hero-title { font-family:var(--font-display); font-weight:400;
  font-size:clamp(96px,12vw,240px); line-height:0.95;
  color:var(--ink); letter-spacing:-0.03em; }
.hero-title em { font-style:italic; color:var(--accent-text); }
```

### Hero 标题组（Product / News）
```html
<h1 class="hero-title heading-product">
  AI research and products that put safety at the frontier
</h1>
```
```css
/* 覆盖默认 Editorial 样式 */
.hero-title.heading-product {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: clamp(56px, 6vw, 120px);
  line-height: 1.1;
  letter-spacing: -0.02em;
}
```

### Numbered List（编号章节）
```html
<div class="chapter">
  <span class="chapter-num">01</span>
  <div>
    <h3 class="chapter-title">Design</h3>
    <p class="chapter-meta">视觉与交互</p>
  </div>
</div>
```

### Inline Code / Quote（引文）
- 引文：`border-left: 2px solid var(--accent)`，`padding-left: 24px`，`font-family: var(--font-display) italic`
- 代码：`background: var(--bg-code)`，`border: 1px solid var(--border)`，`font-family: var(--font-mono)`，`padding: 2-4px / 4-6px`

### CTA — 三档（v0.2 语义化）
```css
/* Editorial 主 CTA — ink 底，对齐 anthropic.com */
.cta-editorial {
  background: var(--ink);
  color: var(--bg);
  padding: 14px 28px;
  border-radius: 6px;
  font-family: var(--font-body);
  font-weight: 500;
  transition: background 0.2s var(--ease-expo);
}
.cta-editorial:hover { background: var(--text); }

/* Product 主 CTA — clay 底，对齐 claude.com */
.cta-product {
  background: var(--accent-hover);   /* #C96442 · clay-interactive */
  color: var(--bg);
  padding: 14px 28px;
  border-radius: 6px;
  font-family: var(--font-body);
  font-weight: 500;
}
.cta-product:hover { background: var(--accent); }

/* 文字 CTA — 低调 */
.cta-text {
  color: var(--accent-text);
  border-bottom: 1px solid var(--accent-text);
  padding-bottom: 2px;
}
```

## Voice & Copy（影响文案选择）

设计的文字本身也承载风格：
- **陈述 > 推销**：不说"Powerful AI for everyone"，说"A thoughtful assistant for careful work"
- **小写为主**：section heads 用 sentence case 或 lowercase，除非专有名词
- **用斜体点题**，而不是大写或粗体
- **em-dash 替代括号**：`Claude — built to be helpful, harmless, honest —`
- **避免 "unlock" / "revolutionize" / "game-changing" / "next-gen"** 等营销词

## Integration with /hyperframes

创建 hyperframes 视频合成时，先读本 skill，然后：
1. 把 [assets/DESIGN.template.md](assets/DESIGN.template.md) 复制为项目根目录 `DESIGN.md`
2. 把 [assets/vars.css](assets/vars.css) 内容嵌入 composition 的 `<style>` 顶部
3. 参考 [assets/gsap-defaults.js](assets/gsap-defaults.js) 设置 GSAP 默认值
4. 遵循 `/hyperframes` 的 Visual Identity Gate — 本 skill 可作为 DESIGN.md 的依据

## References（按需加载）

- [references/palette.md](references/palette.md) — 扩展色板：完整 gray ladder 20 阶、slate/ivory 语义、edge cases、选区色、code block 语法高亮、暗黑模式边界
- [references/typography.md](references/typography.md) — 字体栈详解、OpenType 特性、Editorial vs Product 配对规则、trim / oldstyle 数字
- [references/motion.md](references/motion.md) — 动效曲线可视化、各组件专属动效配方、CSS/GSAP 实现
- [references/patterns.md](references/patterns.md) — 组件模式：hero / tags / CTA / quote / card / footer / code block / data stat
- [references/brand-swatches.md](references/brand-swatches.md)（v0.2 新增）— 12 个编辑次级 swatch 的配色 recipe、Editorial vs Product 配色原则

## Ready-to-Paste Assets

- [assets/DESIGN.template.md](assets/DESIGN.template.md) — 即用 DESIGN.md（给 hyperframes 项目）
- [assets/vars.css](assets/vars.css) — CSS 变量全套（Light + Dark + gray ladder + brand swatches）
- [assets/gsap-defaults.js](assets/gsap-defaults.js) — GSAP ease / duration 默认

---

**本 skill 是对 Claude 公开美学的致敬性还原**。Anthropic 实际品牌资产（`"Anthropic Serif/Sans/Mono"` 的 webfont 二进制、官方 illustration style、logo 使用规范）属于其公司所有；本 skill 只记录色彩、字号、间距、动效、CSS 类名关系，不分发任何受知识产权保护的资产。
