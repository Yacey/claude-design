# Typography — 字体栈与排版细则 (v0.2 · 官方对齐)

## Anthropic 真正在用的字体

**2026 年的实际状态**: Anthropic 把所有 web 字体**重命名为** `Anthropic Serif` /
`Anthropic Sans` / `Anthropic Mono`,通过自家 CDN 托管为 webfont。底层 glyph 渊源
仍然是 Tiempos / Styrene 家族(Klim + Commercial Type 付费字体),但 CSS 层名字已
是中性自有名。从 computed styles 观察到的真实 `font-family`:

```css
/* anthropic.com */
--_typography---font--display-serif-family: "Anthropic Serif", Georgia, sans-serif;
--_typography---font--display-sans:         "Anthropic Sans",  Arial,   sans-serif;
--_typography---font--detail:               "Anthropic Sans",  Arial,   sans-serif;
--_typography---font--paragraph-text:       "Anthropic Serif", Georgia, sans-serif;
--_typography---font--mono:                 "Anthropic Mono",  Arial,   sans-serif;

/* claude.com */
--_typography---font--primary-family:       "Anthropic Sans",  Arial,   sans-serif;
--_typography---font--secondary-family:     "Anthropic Serif", Georgia, sans-serif;
--_typography---font--mono-family:          "Anthropic Mono",  Arial,   sans-serif;
--_typography---font--logographic-family:   "Noto Sans",       Arial,   sans-serif;
```

**注意**:官方 fallback 链短到极致,只有 **Georgia / Arial / Noto Sans**。因为
Anthropic Serif/Sans/Mono 有 webfont 托管保证,无需长 fallback 链。

### 原版付费字体(知识点备份)

| 原版 | 付费来源 | 推测对应的 Anthropic 自名 |
|---|---|---|
| Copernicus | [Klim Type Foundry](https://klim.co.nz) | Anthropic Serif(大号 display 分支) |
| Tiempos Headline / Text | [Klim Type Foundry](https://klim.co.nz) | Anthropic Serif(body 分支) |
| Styrene A / B | [Commercial Type](https://commercialtype.com) | Anthropic Sans |
| Söhne / Söhne Mono | [Klim Type Foundry](https://klim.co.nz) | Anthropic Mono |

---

## Skill 推荐的字体栈(三层降级)

**设计**:第 1 位是官方字体名,已授权 / 已 self-host 用户直接生效;第 2-3 位是
付费字体 fallback;第 4 位起是**免费等效**,覆盖绝大多数免自配场景。

```css
--font-display:    "Anthropic Serif", "Tiempos Headline", "Tiempos Text",
                   "Fraunces", "Instrument Serif", "Source Serif 4",
                   Georgia, serif;

--font-body:       "Anthropic Sans", "Styrene B", "Styrene A",
                   "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
                   "PingFang SC", "Source Han Sans SC", "Noto Sans", sans-serif;

--font-mono:       "Anthropic Mono", "Söhne Mono", "JetBrains Mono",
                   "Geist Mono", ui-monospace, "SF Mono", Menlo, monospace;

--font-logographic:"Noto Sans", "PingFang SC", "Source Han Sans SC",
                   "Microsoft YaHei", sans-serif;   /* CJK */
```

> **为何 Fraunces / Inter** 作为免费等效最优:
> - **Fraunces**: variable font 支持 `opsz`(optical size),大号时字形更有雕刻感,
>   与 Copernicus/Tiempos 的光学尺寸切换相似。Italic 尤其接近 Tiempos italic。
> - **Inter**: 几何性强,x-height 略高,中性而不冷漠 —— 和 Styrene 的现代 Grotesk
>   气质最接近。Geist / DM Sans 是更现代的备选。

### 如果只需免费字体

```html
<link rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">
```

### 替代组合

| 风格偏向 | Display | Body |
|---|---|---|
| 最忠实复刻 | Fraunces(opsz=144, weight=400-700) | Inter |
| 更杂志感 | Instrument Serif | Inter |
| 更书籍感 | Source Serif 4 | IBM Plex Sans |
| 更博客感 | Lora | Inter |
| 更学术感 | Libre Caslon Display | Source Sans 3 |

**禁用组合**:Roboto / Open Sans / Lato / Raleway / Poppins / Nunito — 它们是
Material / Bootstrap / 免费模板标配,一眼跳戏。

---

## Editorial vs Product — 两种字体使用范式

这是 v0.2 的关键发现。官方对不同页面用不同的 body/h1 字体角色:

### Editorial(品牌叙事页:首页、essays、news)

- **Body = Serif**(`"Anthropic Serif"`)
- **H1 = Sans**(`"Anthropic Sans"`),`weight: 700`
- **Lead paragraph = Serif, 24-28px**
- 节奏:标题重、正文衬线,读起来像 NYT / Kinfolk

```css
.editorial body { font-family: var(--font-display); font-size: 20px; line-height: 1.4; }
.editorial h1   { font-family: var(--font-body);    font-weight: 700; letter-spacing: -0.02em; }
```

### Product(功能页 / 产品 / 文档:Claude Code page、settings)

- **Body = Sans**(`"Anthropic Sans"`)
- **H1 = Sans**(`"Anthropic Sans"`),`weight: 400` 或 `500`
- 可 light 可 dark(产品页经常 dark-first)
- 节奏:全局 sans、轻盈、信息密度高

```css
.product body { font-family: var(--font-body); font-size: 17px; line-height: 1.6; }
.product h1   { font-family: var(--font-body); font-weight: 500; letter-spacing: -0.01em; }
```

### Hybrid(推荐给 skill 的默认)

Skill 默认走 **Editorial body + Product H1 兼容**:body 用 sans(兼容性好),
headings 用 serif(claude 味)。想做 claude-code 功能页时切 `.heading-product`
class 强制换成 sans h1。

---

## Font Sizing Scale(和 anthropic.com 对齐)

官方 `display-*` / `body-*` 用 `clamp()` 做响应式。我们提供固定 px 变量 + 响应式
helper 二选一。

```css
--fs-12: 12px;   /* 小号 label */
--fs-14: 14px;   /* caption · 官方 detail-s */
--fs-16: 16px;   /* 默认最小 · 官方 paragraph-xs / detail-m */
--fs-18: 18px;   /* 官方 paragraph-s / detail-l */
--fs-20: 20px;   /* 官方 body 默认 · paragraph-m */
--fs-24: 24px;   /* 官方 paragraph-l / lead */
--fs-32: 32px;   /* 官方 display-m */
--fs-42: 42px;
--fs-48: 48px;   /* 官方 display-l */
--fs-56: 56px;   /* anthropic.com h1 实测 · display-xl */
--fs-72: 72px;   /* 官方 display-xxl */
--fs-96: 96px;   /* 官方 display-xxxl */
--fs-120: 120px; /* hero 下限 */
--fs-160: 160px;
--fs-200: 200px; /* hero 上限 */
--fs-240: 240px; /* 超大 display(罕用) */
```

**视频合成**(1920×1080)常用:hero 160-240px,subtitle 32-40px,body 24-28px,
meta 20-22px。

**Web 响应式**:
```css
font-size: clamp(2.125rem, 2vw + 1rem, 3.25rem);   /* h1 官方 clamp 写法简化 */
```

---

## Weight 使用

```
300  Light       — 官方 primary-light,罕用
400  Regular     — editorial body / serif h1 / UI 默认
500  Medium      — eyebrow, label, meta, product h1, 强调
600  Semibold    — 按钮,紧凑强调
700  Bold        — editorial h1(sans heavy)· 官方 display-sans-bold
```

**v0.1 → v0.2 更新**: 官方 editorial h1 是 **sans + weight 700**(如
`anthropic.com` 首页 "AI research..." h1 就是 `font-weight: 700`),不是 serif +
weight 400。我们在 `vars.css` 提供 `.heading-editorial`(serif 400) 与
`.heading-product`(sans 700) 两种 utility class。默认 h1 仍然是 serif 400(杂志
感),需要 news/product 风格时加 `.heading-product` class。

---

## Line Height & Letter Spacing

```css
/* Display ≥ 120px */
line-height: 0.92 - 0.98;
letter-spacing: -0.03em;

/* Title 56 - 120px */
line-height: 1.05 - 1.1;       /* 官方 line-height--1-05 / line-height--1-1 */
letter-spacing: -0.02em;       /* 官方 letter-spacing--0-02em */

/* Subtitle 32 - 56px */
line-height: 1.2 - 1.3;        /* 官方 line-height--1-3 */
letter-spacing: -0.015em;

/* Body */
line-height: 1.5 - 1.7;        /* 官方 line-height--1-4 / 1-5 / 1-6 */
letter-spacing: 0;             /* 官方 letter-spacing--0em */

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

---

## OpenType Features(签名细节)

```css
body {
  font-feature-settings:
    "kern" 1,      /* 紧排 */
    "liga" 1,      /* 连字 */
    "calt" 1;      /* 上下文替换 */
  font-optical-sizing: auto;
}

.numeric-column {
  font-variant-numeric: tabular-nums lining-nums;
}

.body-copy {
  font-variant-numeric: oldstyle-nums proportional-nums;
  /* 文中数字用旧式数字,与衬线正文更和谐 */
}

.display-title {
  font-feature-settings: "ss01" 1, "ss02" 1;  /* Fraunces stylistic sets */
}
```

### Trim(trim-top / trim-bottom)

**v0.2 新增发现**:官方用 `text-trim-top` / `text-trim-bottom` 精细控制行盒
上下的"光学空白"以让标题紧贴其他元素。对应 CSS 是 `text-edge` 属性(部分浏览器
支持),或手动 margin 负值补偿。

```css
.display-title {
  margin-block-start: -0.48em;    /* 官方 display-serif-trim-top: .48em */
  margin-block-end:   -0.30em;    /* 官方 display-serif-trim-bottom: .3em */
}
.body-text {
  margin-block-start: -0.44em;    /* 官方 paragraph-trim-top: .44em */
  margin-block-end:   -0.27em;    /* 官方 paragraph-trim-bottom: .27em */
}
```

日常很少需要手动 trim,了解存在即可。

---

## 排版 Do / Don't

### Do
- 段落间距用 `margin-bottom: 1em`(基于当前字号),不用固定 px
- 首行缩进:仅在**连续散文**中用 `text-indent: 1.5em`,其他不用
- 悬挂标点:首字符为引号时 `text-indent: -0.5em`
- drop cap:`::first-letter { float: left; font-size: 4em; line-height: 0.85; margin-right: 8px; font-family: var(--font-display); color: var(--accent-text); }`
- 斜体点题:`<em>` 永远真斜体(不是 `font-style: oblique`)
- 中文正文:`font-family: var(--font-body)` 已包含 PingFang SC / Noto Sans fallback
- 中文标题:`font-family: var(--font-display)` 需要先加 "Noto Serif SC" 或 "Source Han Serif" fallback
- 引号强制 smart:`quotes: "\201C" "\201D" "\2018" "\2019";`

### Don't
- 禁用 `text-transform: uppercase` 于正文
- 禁用 `font-weight: 800 / 900` —— 过重非 Claude
- 禁用下划线于正文(仅 hover 显示链接下划线)
- 禁用 `letter-spacing` > 0.05em 于非 uppercase 文字
- 禁用 `text-align: justify` —— 英文正文左对齐,允许 rag
- 禁用混合字重过多(一屏不超过 3 种 weight)
- 禁用 HTML `<br>` 在段落中强制换行(除非展示型大标题每词一行)

---

## 中文适配

Anthropic 用 `"Noto Sans"` 作为 logographic family 的首选 —— 不是中文字体,但
Noto Sans 有 CJK 扩展(`Noto Sans CJK SC`),覆盖得足够用。

```css
.zh-body {
  font-family: var(--font-body);        /* 已含 PingFang SC / Source Han Sans / Noto Sans */
  line-height: 1.75;                    /* 比英文更宽松 */
  letter-spacing: 0.02em;               /* 轻微加宽可读性 */
}
.zh-display {
  font-family: var(--font-display),
               "Noto Serif SC", "Source Han Serif SC", serif;
  line-height: 1.1;
  letter-spacing: -0.01em;              /* 中文收紧不如英文多 */
}
```

**中英文之间**:用 CSS 或 pangu.js 自动插入细空格。

---

## 字体加载优化

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Fraunces:...">
<link rel="stylesheet" href="..." media="print" onload="this.media='all'">
<style>
  body { font-family: var(--font-body); font-size-adjust: 0.545; }
</style>
```

**Hyperframes 场景**:编译器会嵌入字体,不需要 `<link>`。
