# Palette — 扩展色板 (v0.2 · 官方 swatch 对齐)

> **Provenance**: 本文件中的 hex 值于 **2026-04-21** 采样自 `anthropic.com` 与
> `claude.com` 的 `:root` CSS 自定义属性(通过 Chrome DevTools computed styles)。
> Anthropic 不发布官方品牌手册,所有 token 均从公开可见的 `--swatch--*` 变量推导。
> Skill 命名尽可能保留官方语义(`clay` / `ivory` / `slate`),以便未来对照更新。

---

## Light Mode — 完整 Token

### 基础层(ivory / gray ladder)

```css
--bg:              #FAF9F5;  /* 官方 ivory-light / gray-050 · 主纸张 */
--bg-tint-1:       #F5F4ED;  /* 官方 gray-100 · 轻微错开的 section */
--bg-tint-2:       #F0EEE6;  /* 官方 ivory-medium / gray-150 */
--bg-soft:         #F0EEE6;  /* 官方 ivory-medium · 次级面板 */
--bg-elevated:     #E8E6DC;  /* 官方 ivory-dark / gray-200 · 卡片 */
--bg-code:         #F0EEE6;  /* 代码块 — 和 ivory-medium 对齐 */
```

> **v0.1 → v0.2 关键修正**: 主 bg 从 `#F0EEE5` 改到 `#FAF9F5`。官方首页 `<body>` 的
> background-color 是 `#FAF9F5`(ivory-light),`#F0EEE6`(ivory-medium)只用于次级
> section 和卡片的微区分。v0.1 把这两层级搞反了。

### 文字层(slate / gray ladder)

```css
--ink:             #141413;  /* 官方 slate-dark / gray-950 · 14.3:1 on bg */
--ink-soft:        #1F1E1D;  /* 官方 gray-850 */
--text:            #3D3D3A;  /* 官方 slate-medium / gray-700 · 9.8:1 */
--text-soft:       #4D4C48;  /* 官方 gray-650 · 7.9:1 */
--muted:           #5E5D59;  /* 官方 slate-light / gray-600 · 5.9:1 AA ✓ */
--muted-soft:      #73726C;  /* 官方 gray-550 · 4.0:1 (大字/装饰) */
--disabled:        #B0AEA5;  /* 官方 gray-400 / cloud-medium */
```

> **v0.1 → v0.2 修正**: `--text` 从 `#3D3929`(偏黄暖棕)改到 `#3D3D3A`(中性 warm gray);
> `--muted` 从 `#6E6A5F` 加深到 `#5E5D59`。两者都对齐 slate-medium / slate-light。
> 结果:正文对比度从 9.2:1 升到 9.8:1,muted 对比度从 4.6:1 升到 5.9:1,WCAG 更稳。

### 边框层

```css
--border:          #E8E6DC;  /* 官方 gray-200 · 默认 1px */
--border-hover:    #DEDCD1;  /* 官方 gray-250 */
--border-strong:   #D1CFC5;  /* 官方 gray-300 / cloud-light */
--divider:         #E8E6DC;
--border-faded:    rgba(20, 20, 19, 0.10);  /* 官方 slate-faded-10 */
--border-faded-2:  rgba(20, 20, 19, 0.20);  /* 官方 slate-faded-20 */
```

### Accent(clay · 铁锈族)

```css
--accent:          #D97757;  /* 官方 swatch--clay · 主铁锈 */
--accent-hover:    #C96442;  /* 官方 swatch--clay-interactive · 按钮/链接 hover */
--accent-text:     #C6613F;  /* 官方 swatch--accent · 文字用 AA · 5.6:1 */
--accent-text-hover: #B35535;
--accent-soft:     #EBC9B7;  /* 官方 swatch--peach · 背景斑块 */
--accent-softer:   #F0D6C6;
--accent-bg:       rgba(217, 120, 87, 0.08);
--accent-border:   rgba(217, 120, 87, 0.25);
```

> **v0.1 → v0.2 关键修正**: `--accent` 从 `#CC785C` 换到官方 `#D97757`(多一档饱和
> 度与亮度); `--accent-text` 从 `#A84F32` 改到 `#C6613F`; 新增 `--accent-hover` 为
> `#C96442`(= `swatch--clay-interactive`,是 claude.com 按钮 primary 真正的
> background-color)。

### Semantic(全部映射到官方次级 swatch)

```css
--success:         #788C5D;  /* 官方 olive · 橄榄绿,低饱和 */
--success-bg:      rgba(120, 140, 93, 0.10);
--warning:         #D4A27F;  /* 官方 kraft · 牛皮纸赭 */
--warning-bg:      rgba(212, 162, 127, 0.12);
--danger:          #B53333;  /* 官方 error-text (claude.com) · 唯一真正的红 */
--danger-bg:       rgba(181, 51, 51, 0.08);
--info:            #6A9BCC;  /* 官方 sky · 哑光蓝 */
--info-bg:         rgba(106, 155, 204, 0.10);
```

### 选区 / 链接 / 高亮

```css
--selection-bg:    color-mix(in srgb, var(--accent) 50%, transparent);
  /* 官方 claude.com 用的正是 color-mix(in srgb, clay 50%, transparent) */
--focus-ring:      rgba(217, 120, 87, 0.5);
--link:            var(--ink);      /* 官方 link 默认 inherit text color */
--link-hover:      var(--accent-text);
--mark-bg:         var(--swatch-manilla);   /* 马尼拉米 · 柔和高亮 */
```

---

## Dark Mode — 完整 Token

> 重要结构事实:官方 dark mode **不用纯黑**。`anthropic.com/claude-code`
> 产品页 dark body bg 是 `#141413`(gray-950),但 `claude.com` error 页更亮,
> 落在 `gray-900 #1A1918`。我们以 **gray-900 `#1A1918`** 为主 dark bg。

### 基础层

```css
--bg:              #1A1918;  /* 官方 gray-900 · 主底 */
--bg-tint-1:       #1F1E1D;  /* 官方 gray-850 */
--bg-tint-2:       #141413;  /* 官方 gray-950 · 最深 */
--bg-soft:         #262624;  /* 官方 gray-800 · 次级面板 */
--bg-elevated:     #30302E;  /* 官方 gray-750 · 卡片 */
--bg-code:         #141413;  /* 代码用最深 */
```

### 文字层

```css
--ink:             #FAF9F5;  /* 官方 gray-050 · 14.4:1 on bg */
--ink-soft:        #E8E6DC;  /* 官方 gray-200 */
--text:            #B0AEA5;  /* 官方 gray-400 / cloud-medium · 7.5:1 */
--text-soft:       #9C9A92;  /* 官方 gray-450 · 5.9:1 */
--muted:           #87867F;  /* 官方 gray-500 / cloud-dark · 4.5:1 AA ✓ */
--muted-soft:      #73726C;  /* 官方 gray-550 */
--disabled:        #4D4C48;
```

### 边框层

```css
--border:          #3D3D3A;  /* 官方 gray-700 */
--border-hover:    #4D4C48;  /* 官方 gray-650 */
--border-strong:   #5E5D59;  /* 官方 gray-600 */
--divider:         #30302E;
```

### Accent(dark · clay 亮一档)

```css
--accent:          #D97757;  /* 官方 clay · dark 下仍用同一 hex,在 gray-900 上对比足够 */
--accent-hover:    #E08B6D;
--accent-text:     #E08B6D;  /* 官方 dark · 亮 clay 变体 · 5.3:1 AA ✓ */
--accent-text-hover:#F09C82;
--accent-soft:     #4A3428;  /* 深 peach · 暗底斑块 */
--accent-bg:       rgba(217, 120, 87, 0.12);
--accent-border:   rgba(217, 120, 87, 0.30);
```

---

## 官方 Gray Ladder(20 阶)

**这是 `claude.com` 产品端完整的中性色阶**。`anthropic.com` 用语义命名
(slate-dark / slate-medium / slate-light + ivory-light / medium / dark),但语义
命名覆盖的格子在 `claude.com` 20 阶里各有精确位置:

| Token | Hex | anthropic.com 对应 | 常见用途 |
|---|---|---|---|
| `--gray-000` | `#FFFFFF` | `white` | 极罕用 — 纯白 |
| `--gray-050` | `#FAF9F5` | `ivory-light` | **Light 主 bg** |
| `--gray-100` | `#F5F4ED` | — | 交替 section |
| `--gray-150` | `#F0EEE6` | `ivory-medium` | 次级面板、代码底 |
| `--gray-200` | `#E8E6DC` | `ivory-dark` | 卡片底、border |
| `--gray-250` | `#DEDCD1` | — | border hover |
| `--gray-300` | `#D1CFC5` | `cloud-light` | 强边框、装饰线 |
| `--gray-350` | `#C2C0B6` | — | |
| `--gray-400` | `#B0AEA5` | `cloud-medium` | **Dark 主 text** |
| `--gray-450` | `#9C9A92` | — | Dark text-soft |
| `--gray-500` | `#87867F` | `cloud-dark` | Dark muted |
| `--gray-550` | `#73726C` | — | Dark muted-soft |
| `--gray-600` | `#5E5D59` | `slate-light` | **Light muted** |
| `--gray-650` | `#4D4C48` | — | Light text-soft |
| `--gray-700` | `#3D3D3A` | `slate-medium` | **Light 正文** |
| `--gray-750` | `#30302E` | — | Dark border-strong |
| `--gray-800` | `#262624` | — | Dark 次级面板 |
| `--gray-850` | `#1F1E1D` | — | Dark tint-1 |
| `--gray-900` | `#1A1918` | — | **Dark 主 bg** |
| `--gray-950` | `#141413` | `slate-dark` | **标题 / 纯深** |
| `--gray-1000`| `#000000` | — | 极罕用 — 纯黑 |

---

## 次级 Brand Swatches(编辑 / 插画色)

**两站共享**:

| Token | Hex | 观感 | 用途 |
|---|---|---|---|
| `--swatch-olive` | `#788C5D` | 橄榄绿 | success、植物插画、tag |
| `--swatch-cactus` | `#BCD1CA` | 仙人掌浅绿 | soft bg、细分 tag |
| `--swatch-sky` | `#6A9BCC` | 哑光天蓝 | info、链接的柔和替代 |
| `--swatch-heather` | `#CBCADB` | 欧石楠紫 | data-viz、低强度 badge |
| `--swatch-fig` | `#C46686` | 无花果粉 | 点睛强调、danger 的柔替 |
| `--swatch-coral` | `#EBCECE` | 珊瑚粉 | 温暖 bg wash |
| `--swatch-oat` | `#E3DACC` | 燕麦 | 纸感 bg wash |
| `--swatch-clay` | `#D97757` | **= `--accent`** | 主 rust |

**claude.com 专属**:

| Token | Hex | 用途 |
|---|---|---|
| `--swatch-mineral` | `#629987` | 绿松 |
| `--swatch-plum` | `#827DBD` | 李 |
| `--swatch-peach` | `#EBC9B7` | 桃(= `--accent-soft`) |

**anthropic.com 专属**:

| Token | Hex | 用途 |
|---|---|---|
| `--swatch-kraft` | `#D4A27F` | 牛皮纸(= `--warning`) |
| `--swatch-manilla` | `#EBDBBC` | 马尼拉米(= `--mark-bg`) |

### 使用原则

- 这些是**编辑 / 插画色**,不是 UI chrome 色 —— 不要用 `cactus` 做按钮
  背景,用来填充插画背景、给卡片做主题色区分、做数据可视化的配色
- **饱和度一律克制**(HSL S < 45%)—— 没有荧光色
- **色块永远大面积柔和**,避免点状撞色
- **一屏最多出现 3 个 swatch 组合**(否则视觉松散)

---

## 语法高亮色(Claude Code block 风格)

### Light
```css
--syn-bg:          var(--bg-code);         /* #F0EEE6 */
--syn-fg:          var(--text);            /* #3D3D3A */
--syn-comment:     var(--muted-soft);      /* #73726C */
--syn-keyword:     var(--accent-text);     /* #C6613F */
--syn-string:      var(--success);         /* #788C5D · olive */
--syn-number:      var(--warning);         /* #D4A27F · kraft */
--syn-function:    var(--info);            /* #6A9BCC · sky */
--syn-type:        #7A5A4E;                /* 茶棕 · 推导 */
--syn-punct:       var(--muted);
--syn-tag:         var(--accent-text);
--syn-attr:        var(--info);
```

### Dark
```css
--syn-bg:          #141413;
--syn-fg:          #B0AEA5;
--syn-comment:     #73726C;
--syn-keyword:     #E08B6D;
--syn-string:      #A8C77F;
--syn-number:      #E0B56F;
--syn-function:    #8FB3D0;
--syn-type:        #C89A8A;
```

---

## 禁用色清单

Anthropic 从不使用的色 —— 用了就破坏风格:

| ❌ 色 | 理由 |
|---|---|
| `#FFFFFF` 主 bg | 官方永远用 `#FAF9F5` 起底 |
| `#000000` 主文字 | 官方永远用 `#141413` 起点 |
| `#3B82F6`(Material blue)| 用 `--swatch-sky #6A9BCC` 代替 |
| `#10B981`(Material green)| 用 `--swatch-olive #788C5D` 代替 |
| `#EF4444`(正红)| 用 `--danger #B53333` 代替(官方唯一红值) |
| `#F59E0B`(亮黄)| 用 `--swatch-kraft #D4A27F` 代替 |
| `#8B5CF6`(紫色饱和)| 用 `--swatch-heather #CBCADB` 或 `plum #827DBD` 代替 |
| 任何 HSL 饱和度 > 70% | 官方最高饱和度是 clay ≈ S 58% |
| `linear-gradient` 的霓虹渐变 | 官方完全不用梯度作为装饰 |

---

## 对比度快速参考(Light,所有文字色 on `--bg #FAF9F5`)

| 色 | 对比度 | AA 正文 (4.5) | AA 大字 (3.0) |
|---|---|---|---|
| `--ink` `#141413` | **14.3:1** | ✓ | ✓ |
| `--ink-soft` `#1F1E1D` | 12.8:1 | ✓ | ✓ |
| `--text` `#3D3D3A` | **9.8:1** | ✓ | ✓ |
| `--text-soft` `#4D4C48` | 7.9:1 | ✓ | ✓ |
| `--muted` `#5E5D59` | **5.9:1** | ✓ | ✓ |
| `--muted-soft` `#73726C` | 4.0:1 | ✗ | ✓(大字 / 非文字) |
| `--accent-text` `#C6613F` | **5.6:1** | ✓ | ✓ |
| `--accent` `#D97757` | 3.5:1 | ✗ | ✓(装饰 / 大字) |
| `--danger` `#B53333` | 6.1:1 | ✓ | ✓ |
| `--success` `#788C5D` | 4.5:1 | ✓(临界)| ✓ |
| `--info` `#6A9BCC` | 3.5:1 | ✗ | ✓ |

---

## 使用约束

- `--accent` 在整屏出现 **≤ 5 次**(铁锈稀缺性)
- `--accent-text` 用于文字链接、斜体点题、按钮文字
- `--accent-soft` / `--swatch-peach` 仅用于大面积背景斑块、插图底色
- `--muted-soft` / `--gray-550` 不承载任何**文字信息**(装饰 / 线条色)
- 次级 brand swatches **整屏最多 3 种组合**,一组用于 fig + coral 配对,或
  olive + cactus 配对,或 sky + heather 配对 —— 保持**同色族 tonal variation**
  而不是**跨色族撞色**
- Dark mode 的 `--accent` hex 可以和 Light 完全相同(`#D97757` 在
  `gray-900` 上对比度是 4.9:1,AA 大字合格),不需要专门加亮一档
