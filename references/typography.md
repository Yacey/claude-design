# Typography — 字体栈与排版细则

## Anthropic 真正在用的字体（专有）

| 字体 | 角色 | 授权 |
|---|---|---|
| **Copernicus** | 大号 display serif | 付费 · https://klim.co.nz |
| **Tiempos Headline / Text** | 中号 display 与 body serif | 付费 · https://klim.co.nz |
| **Styrene A / B** | UI sans（主要用 Styrene B） | 付费 · https://commercialtype.com |
| **Söhne** | 部分 UI / Mono | 付费 · https://klim.co.nz |

若已授权：直接用这些字体能 100% 还原官方观感。

## 免费等效替代

### 推荐默认：**Fraunces + Inter**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600;700&display=swap">
```
```css
--font-display: "Fraunces", "Instrument Serif", Georgia, serif;
--font-body:    "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
--font-mono:    "JetBrains Mono", "Geist Mono", ui-monospace, monospace;
```

**为何 Fraunces**：variable font 支持 `opsz`（optical size），大号时字形更雕刻感，小号时更清晰 — 与 Copernicus 的光学调整相似。Italic 尤其像 Tiempos italic。

**为何 Inter**：几何性强，x-height 略高，在小号时清晰，与 Styrene 的"中性而非冷漠"气质接近。Geist 是更现代的选择。

### 替代组合

| 风格偏向 | Display | Body |
|---|---|---|
| 最忠实复刻 | Fraunces（opsz=144, weight=400） | Inter |
| 更杂志感 | Instrument Serif | Inter |
| 更书籍感 | Source Serif 4 | IBM Plex Sans |
| 更纯文字博客 | Lora | Inter |
| 更严肃学术 | Libre Caslon Display | Source Sans 3 |

**禁用组合**：Roboto / Open Sans / Lato / Raleway / Poppins — 它们是 Material / Bootstrap / 免费模板标配，一眼跳戏。

## Font Sizing Scale（模块化比例 1.333 — 四度音阶）

```css
--fs-12: 12px;   /* 小号 label, badge */
--fs-14: 14px;   /* tooltip, caption */
--fs-16: 16px;   /* 默认最小可读 */
--fs-18: 18px;   /* meta text */
--fs-20: 20px;   /* eyebrow */
--fs-24: 24px;   /* body lead */
--fs-32: 32px;   /* subtitle */
--fs-42: 42px;   /* h3 */
--fs-56: 56px;   /* h2 */
--fs-72: 72px;
--fs-96: 96px;   /* h1 min */
--fs-120:120px;  /* hero */
--fs-160:160px;
--fs-200:200px;  /* display */
--fs-240:240px;  /* mega display */
```

视频合成（1920×1080）常用：hero 160–240px，subtitle 32–40px，body 24–28px，meta 20–22px。
Web 响应式：用 `clamp(min, fluid, max)`。

## Weight 使用

```
400 Regular — 默认 body, display title 首选（Fraunces 400 已有分量）
500 Medium  — eyebrow, label, meta（Inter）
600 Semibold — 强调、按钮、subtitle
700 Bold    — 用于极少数情境；优先用 italic 代替 bold
```

Claude 风格里，**加粗不是主要强调手段**。用斜体、大小对比、色彩（accent-text）来做层级。

## Line Height & Letter Spacing

```css
/* Display ≥120px */
line-height: 0.92-0.98;
letter-spacing: -0.03em;

/* Title 56-120px */
line-height: 1.05-1.1;
letter-spacing: -0.02em;

/* Subtitle 32-56px */
line-height: 1.2-1.3;
letter-spacing: -0.015em;

/* Body */
line-height: 1.5-1.7;
letter-spacing: 0;

/* UI Label */
line-height: 1.2;
letter-spacing: 0.01em;

/* Eyebrow (uppercase) */
line-height: 1;
letter-spacing: 0.22em;

/* Mono */
line-height: 1.5;
letter-spacing: 0;
```

## OpenType Features（签名细节）

```css
body {
  font-feature-settings:
    "kern" 1,      /* 紧排 */
    "liga" 1,      /* 连字 */
    "calt" 1;      /* 上下文替换 */
  font-optical-sizing: auto;  /* variable font 光学尺寸 */
}

.numeric-column {
  font-variant-numeric: tabular-nums lining-nums;
}

.body-copy {
  font-variant-numeric: oldstyle-nums proportional-nums;
  /* 文中数字用旧式数字，与衬线正文更和谐 */
}

.display-title {
  font-feature-settings: "ss01" 1, "ss02" 1;  /* Fraunces stylistic sets */
}
```

## 排版 Do / Don't

### Do
- 段落间距用 `margin-bottom: 1em`（基于当前字号），不用固定 px
- 首行缩进：仅在**连续散文**中使用 `text-indent: 1.5em`，其他不用
- 悬挂标点：首字符为引号时 `text-indent: -0.5em`
- drop cap：`::first-letter { float: left; font-size: 4em; line-height: 0.85; margin-right: 8px; font-family: var(--font-display); color: var(--accent-text); }`
- 斜体点题：`<em>` 永远真斜体（不是 `font-style: oblique`）
- 中文正文：`font-family: "Inter", "PingFang SC", "Source Han Sans", sans-serif; line-height: 1.7;`
- 中文标题：`font-family: "Fraunces", "Noto Serif SC", "Source Han Serif", serif;`
- 引号强制 smart：`quotes: "\201C" "\201D" "\2018" "\2019";` + `<q>` 自动应用

### Don't
- 禁用 `text-transform: uppercase` 于正文
- 禁用 `font-weight: 800 / 900` — 过重非 Claude
- 禁用下划线于正文（仅 hover 显示链接下划线）
- 禁用 `letter-spacing` > 0.05em 于非 uppercase 文字
- 禁用 `text-align: justify` — 英文正文通常 left-align，允许 rag
- 禁用混合字重过多（一屏不超过 3 种 weight）
- 禁用 HTML `<br>` 在段落中强制换行（除非展示型大标题每词一行）

## 中文适配补充

Anthropic 原生无中文字体方案。参考组合：
- **Serif display 中文**：`"Noto Serif SC"` 或 `"Source Han Serif SC"`（思源宋体）+ Fraunces 英文 fallback
- **Sans body 中文**：`"PingFang SC"`（macOS）/ `"Microsoft YaHei"`（Windows）/ `"Source Han Sans SC"` + Inter 英文 fallback
- **中文行高** 调到 1.7–1.8（比英文更宽松）
- **中文字距** `letter-spacing: 0.03em`（轻微加宽可读性）
- **中英文之间**：用 CSS 或 pangu.js 自动插入细空格

```css
.zh-body {
  font-family: "Inter", "PingFang SC", "Source Han Sans SC", sans-serif;
  line-height: 1.75;
  letter-spacing: 0.02em;
}
.zh-display {
  font-family: "Fraunces", "Noto Serif SC", "Source Han Serif SC", serif;
  line-height: 1.1;
  letter-spacing: -0.01em;  /* 中文收紧不如英文多 */
}
```

## 字体加载优化

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Fraunces:...">
<link rel="stylesheet" href="..." media="print" onload="this.media='all'">
<style>
  /* FOIT 防护：系统字体作为 fallback 维度匹配 */
  body { font-family: "Inter", -apple-system, sans-serif; font-size-adjust: 0.545; }
</style>
```

**hyperframes 场景**：编译器会嵌入字体，不需要 `<link>`。
