---
name: claude-design
description: 复刻 Claude / Anthropic 的视觉设计语言 — 暖米纸张底 + 深墨文字 + 铁锈橙点缀 + 衬线标题 + 中性无衬线正文 + 克制的动效。适用场景：创建像 claude.ai / anthropic.com 一样"文学、思辨、低调克制"的视频合成、着陆页、幻灯片、对话 UI、博客、海报、读物封面。提供完整的 Light/Dark 色板（含 WCAG 合规变体）、Tiempos/Styrene/Copernicus 的免费字体替代方案（Fraunces / Inter / Source Serif）、签名级动效曲线（exponential ease-out）、版式规则、以及可直接粘贴的 CSS 变量、GSAP defaults 和 DESIGN.md 模板。与 /hyperframes 配合即为视频合成的 Claude 风格。
---

# Claude Design System

**Paper · Ink · Rust.** 从 Claude / Anthropic 公开产物（claude.ai、anthropic.com、Claude Code、Anthropic research 页面）观察抽象而成的设计系统。这不是 Anthropic 官方品牌手册，是一套可复制的"等价风格"——custom fonts（Tiempos / Styrene / Copernicus）是付费字体，这里提供完全免费的等效替代。

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

## Hard Rules（违反即破坏风格）

1. **背景永不纯白**。白天用 `#F0EEE5` 或 `#FAF9F5`，黑夜用 `#1A1915` 或 `#262624`。
2. **文字永不纯黑**。标题 `#141413`（暖偏红），正文 `#3D3929`（深暖棕）。
3. **铁锈橙稀缺出现**。整屏不超过 5 个 `#CC785C` 实例。每次出现必须有理由（强调、分隔、行动号召、斜体点题）。
4. **Display 永远是衬线**。Fraunces / Instrument Serif / Source Serif 4 / Libre Caslon。无例外。
5. **Body 永远是中性无衬线**。Inter / Geist。禁用 Roboto / Open Sans / Lato（那是 Material / Bootstrap 味）。
6. **禁用投影**。不用 `box-shadow: 0 4px 12px rgba(0,0,0,0.1)`。用 1px 细边 `#E5E1D8` 或相邻色块换色。
7. **圆角 4–10px**。禁用 `border-radius: 24px+` / `pill shape`（除非真圆如 dot）。
8. **按钮无渐变**。实填或纯文本 + 下划线。
9. **Eyebrow 标签规格固定**：`text-transform: uppercase; letter-spacing: 0.22em; font-size: 20-22px; color: var(--muted); font-weight: 500;`。
10. **数字用等宽**：`font-variant-numeric: tabular-nums`。
11. **斜体是高级强调**。Fraunces italic 或 Instrument Serif italic 用于点题，比 bold 更"Claude 味"。引号用中文弯引号 `"…"` / 英文 smart quote `"…"`。
12. **标点密度控制**：用 em-dash（—）代替括号与多余逗号；三点用 `…` 不是 `...`。
13. **动效曲线统一**：`power3.out` / `power4.out` / `expo.out`。禁用 bounce / elastic / back。
14. **动效时长**：入场 0.5–0.9s，微动 0.3–0.5s，转场 0.4s。永不 >1.2s 单条入场。
15. **Stagger 0.10–0.14s**。超过 0.2s 显得迟钝，小于 0.08s 显得浮躁。

## Color System（完整色板，详见 [references/palette.md](references/palette.md)）

### Light（Paper mode）— 默认
```css
--bg:          #F0EEE5;  /* 主底 · 米纸 */
--bg-soft:     #FAF9F5;  /* 次级面板 · 米白 */
--bg-elevated: #FFFFFC;  /* 浮起卡片 · 只在非主屏用 */
--ink:         #141413;  /* 标题 · 暖黑 */
--text:        #3D3929;  /* 正文 · 深棕 */
--muted:       #6E6A5F;  /* 次要 · WCAG AA 合规 */
--muted-soft:  #8A8577;  /* 装饰线条 · 非文本 */
--border:      #E5E1D8;  /* 细边 */
--border-hover:#D4CFC4;  /* 边悬停 */
--accent:      #CC785C;  /* 铁锈 · 装饰用 */
--accent-text: #A84F32;  /* 铁锈 · 文字用（AA 合规） */
--accent-soft: #E8C5A0;  /* 暖米桃 · 背景斑块 */
```

### Dark（Ink mode）
```css
--bg:          #1A1915;  /* 主底 · 深墨 */
--bg-soft:     #262624;  /* 次级面板 */
--bg-elevated: #2D2C29;  /* 浮起卡片 */
--ink:         #F5F2EA;  /* 标题 · 暖白 */
--text:        #C8C2B4;  /* 正文 · 米灰 */
--muted:       #9A9486;  /* 次要 · AA 合规 */
--muted-soft:  #7A7568;
--border:      #35332F;
--border-hover:#44413C;
--accent:      #D97757;  /* 铁锈 · 亮一档适配暗底 */
--accent-text: #E08A6F;  /* 暗底文字用 · AA 合规 */
--accent-soft: #4A3428;
```

**WCAG 合规对照**（正文 4.5:1 / 大字 3:1）：
- Light `--text` on `--bg`：**9.2:1** ✓
- Light `--muted` on `--bg`：**4.6:1** ✓
- Light `--accent-text` on `--bg`：**5.1:1** ✓
- 装饰用 `--accent` / `--muted-soft` 不参与文字对比要求

禁用色（Anthropic 从不用）：`#FFFFFF` 纯白背景、`#000000` 纯黑文字、`#3B82F6` Material 蓝、`#10B981` Material 绿、任何霓虹色、任何饱和度 >70% 的紫/粉。

## Typography System（详见 [references/typography.md](references/typography.md)）

### 字体栈（免费替代）

| 角色 | Anthropic 原生（付费） | 免费替代（推荐） | Google Fonts 备选 |
|---|---|---|---|
| Display Serif | Copernicus / Tiempos Headline | **Fraunces** (variable, opsz) | Instrument Serif, Source Serif 4 |
| Body Serif | Tiempos Text | **Source Serif 4** | Lora, Fraunces @opsz=14 |
| Sans UI | Styrene A/B | **Inter** | Geist, DM Sans |
| Mono | Söhne Mono | **JetBrains Mono** | Geist Mono, IBM Plex Mono |

**默认配对**：Fraunces（display）+ Inter（body/UI）。95% 场景够用。

### 尺寸刻度

```css
/* Display serif */
--fs-hero:      clamp(96px, 12vw, 240px);   /* 单屏主标题 */
--fs-title:     clamp(56px, 6vw, 120px);    /* 章节标题 */
--fs-subtitle:  clamp(32px, 3vw, 56px);
--fs-lead:      24-32px;                    /* 段首加大段落 */

/* Body sans */
--fs-body:      20-28px;
--fs-meta:      18-22px;
--fs-label:     14-16px;                    /* eyebrow 用 20-22 */

/* 行高 */
line-height: 0.95;   /* 大于 120px 的 display */
line-height: 1.15;   /* 40-120px */
line-height: 1.5-1.7;/* body */

/* 字距 */
letter-spacing: -0.03em;  /* >80px 大字 */
letter-spacing: -0.02em;  /* 40-80px */
letter-spacing: 0;        /* body */
letter-spacing: 0.22em;   /* eyebrow uppercase */
```

### 排版细节（这些细节决定"像不像 Claude"）
- **斜体点题**：`Fraunces italic` 用于关键词 — 如 `How Claude <em>thinks</em>.`
- **Drop cap**：长文首字母用 Fraunces 大号下沉 3 行，不要描边
- **数字**：所有 stats/dates/prices 加 `font-variant-numeric: tabular-nums`
- **标点**：em-dash 两侧无空格（英文）或有空格（中文）；禁用 `--` 代替 em-dash
- **引号**：SmartQuotes 强制 — `"`/`"`/`'`/`'`，禁用直引号 `"` `'`
- **悬挂标点**：展示型大标题首字符若为引号，用 `text-indent: -0.5em` 让引号悬挂到内容框外

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

### Hero 标题组
```html
<h1 class="hero-title">
  How Claude <em>thinks</em>.
</h1>
```
```css
.hero-title { font-family:"Fraunces",serif; font-weight:400;
  font-size:clamp(96px,12vw,240px); line-height:0.95;
  color:var(--ink); letter-spacing:-0.03em; }
.hero-title em { font-style:italic; color:var(--accent-text); }
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
- 引文：`border-left: 2px solid var(--accent)`，`padding-left: 24px`，`font-family: Fraunces italic`
- 代码：`background: var(--bg-soft)`，`border: 1px solid var(--border)`，`font-family: "JetBrains Mono"`，`padding: 2-4px / 4-6px`

### CTA（低调优于炫目）
```css
.cta-primary {
  background: var(--accent);   /* 或 --ink 也很 Claude */
  color: var(--bg);
  padding: 14px 28px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 17px;
  transition: opacity 0.2s cubic-bezier(0.16,1,0.3,1);
}
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

- [references/palette.md](references/palette.md) — 扩展色板：边缘情况、选区色、code block 语法高亮、暗黑模式边界
- [references/typography.md](references/typography.md) — 字体栈详解、OpenType 特性、pairing 规则、排版 do/don't
- [references/motion.md](references/motion.md) — 动效曲线可视化、各组件专属动效配方、CSS/GSAP 实现
- [references/patterns.md](references/patterns.md) — 组件模式：hero / tags / CTA / quote / card / footer / code block / data stat

## Ready-to-Paste Assets

- [assets/DESIGN.template.md](assets/DESIGN.template.md) — 即用 DESIGN.md（给 hyperframes 项目）
- [assets/vars.css](assets/vars.css) — CSS 变量全套（Light + Dark）
- [assets/gsap-defaults.js](assets/gsap-defaults.js) — GSAP ease / duration 默认

---

**本 skill 是对 Claude 公开美学的致敬性还原**。Anthropic 实际品牌资产（custom fonts、official illustration style、logo 使用规范）属于其公司所有，本资料不提供、不建议直接商用其 logo。
