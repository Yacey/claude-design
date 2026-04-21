# Palette — 扩展色板

## Light Mode — 完整 Token

### 基础层
```css
--bg:              #F0EEE5;  /* 主纸张底 */
--bg-tint-1:       #EEECE3;  /* 略深纸张，区分版块 */
--bg-tint-2:       #F6F4EB;  /* 略浅纸张 */
--bg-soft:         #FAF9F5;  /* 次级面板 */
--bg-elevated:     #FFFFFC;  /* 浮起卡片（罕用） */
--bg-code:         #F5F2EA;  /* 代码块背景 */
```

### 文字层
```css
--ink:             #141413;  /* 标题 · 14.3:1 */
--ink-soft:        #1F1E1C;  /* 次标题 · 12.9:1 */
--text:            #3D3929;  /* 正文 · 9.2:1 */
--text-soft:       #4A4636;  /* 次正文 · 7.8:1 */
--muted:           #6E6A5F;  /* 次要 AA · 4.6:1 */
--muted-soft:      #8A8577;  /* 装饰性 · 3.2:1（非文字） */
--disabled:        #B5B1A5;
```

### 边框层
```css
--border:          #E5E1D8;  /* 默认 1px */
--border-hover:    #D4CFC4;
--border-strong:   #C0BBAE;  /* 刻意强调 */
--divider:         #E0DCD1;  /* 水平分隔线 */
```

### Accent（铁锈族）
```css
--accent:          #CC785C;  /* 装饰 · 非文字 */
--accent-hover:    #B8644A;
--accent-text:     #A84F32;  /* 文字用 AA · 5.1:1 */
--accent-text-hover:#8F3F24;
--accent-soft:     #E8C5A0;  /* 背景斑块 */
--accent-softer:   #F4DDC2;  /* 更淡 */
--accent-bg:       rgba(204,120,92,0.08);  /* 背景着色 */
--accent-border:   rgba(204,120,92,0.25);
```

### Semantic（稀用，保持克制）
```css
--success:         #6B8E3D;  /* 橄榄绿，不是荧光绿 */
--success-bg:      rgba(107,142,61,0.08);
--warning:         #B8864A;  /* 赭黄，不是亮黄 */
--warning-bg:      rgba(184,134,74,0.08);
--danger:          #A84F32;  /* 复用 accent-text，不用正红 */
--danger-bg:       rgba(168,79,50,0.08);
--info:            #5A7A9C;  /* 哑光蓝灰，不是亮蓝 */
--info-bg:         rgba(90,122,156,0.08);
```

### 选区 / 链接 / 高亮
```css
--selection-bg:    rgba(204,120,92,0.22);  /* 文字选中 */
--selection-fg:    #141413;
--link:            #A84F32;
--link-hover:      #8F3F24;
--link-visited:    #7A5A4E;  /* 可选 */
--focus-ring:      rgba(204,120,92,0.5);
--mark-bg:         #F4DDC2;  /* <mark> 高亮 */
```

## Dark Mode — 完整 Token

### 基础层
```css
--bg:              #1A1915;
--bg-tint-1:       #1F1E19;
--bg-tint-2:       #16150F;
--bg-soft:         #262624;
--bg-elevated:     #2D2C29;
--bg-code:         #0F0E0A;  /* 代码比主底更深 */
```

### 文字层
```css
--ink:             #F5F2EA;
--ink-soft:        #E5E0D2;
--text:            #C8C2B4;
--text-soft:       #B0AA9B;
--muted:           #9A9486;
--muted-soft:      #7A7568;
--disabled:        #55514A;
```

### 边框层
```css
--border:          #35332F;
--border-hover:    #44413C;
--border-strong:   #55514A;
--divider:         #3A3834;
```

### Accent（暗底需亮一档）
```css
--accent:          #D97757;
--accent-hover:    #E4896B;
--accent-text:     #E08A6F;  /* 暗底 AA · 5.3:1 on #1A1915 */
--accent-soft:     #4A3428;
--accent-bg:       rgba(217,119,87,0.12);
--accent-border:   rgba(217,119,87,0.3);
```

## 语法高亮色（Claude Code block 风格）

### Light
```css
--syn-bg:          var(--bg-code);         /* #F5F2EA */
--syn-fg:          #3D3929;                /* 默认文字 */
--syn-comment:     #8A8577;                /* 灰棕 */
--syn-keyword:     #A84F32;                /* 铁锈 */
--syn-string:      #6B8E3D;                /* 橄榄绿 */
--syn-number:      #B8864A;                /* 赭黄 */
--syn-function:    #5A7A9C;                /* 哑光蓝 */
--syn-type:        #7A5A4E;                /* 茶棕 */
--syn-punct:       #8A8577;
--syn-tag:         #A84F32;
--syn-attr:        #5A7A9C;
```

### Dark
```css
--syn-bg:          #0F0E0A;
--syn-fg:          #C8C2B4;
--syn-comment:     #7A7568;
--syn-keyword:     #E08A6F;
--syn-string:      #A8C77F;
--syn-number:      #E0B56F;
--syn-function:    #8FB3D0;
--syn-type:        #C89A8A;
```

## 禁用色清单

从不用的色：
- `#FFFFFF` / `#FFF` — 纯白背景
- `#000000` / `#000` — 纯黑文字
- `#3B82F6` — Tailwind/Material 蓝
- `#10B981` — 荧光绿
- `#EF4444` — 正红
- `#F59E0B` — 亮黄
- `#8B5CF6` — 紫色（除非特定插画用）
- 任何 hsl 饱和度 > 70% 的颜色（除 accent 本身）

## 对比度快速参考

所有文字色在 Light `--bg` `#F0EEE5` 上的对比度：

| 色 | 对比度 | AA 正文 (4.5) | AA 大字 (3.0) |
|---|---|---|---|
| `--ink` `#141413` | 14.3:1 | ✓ | ✓ |
| `--text` `#3D3929` | 9.2:1 | ✓ | ✓ |
| `--text-soft` `#4A4636` | 7.8:1 | ✓ | ✓ |
| `--muted` `#6E6A5F` | 4.6:1 | ✓ | ✓ |
| `--muted-soft` `#8A8577` | 3.2:1 | ✗ | ✓（仅大字 / 非文字） |
| `--accent-text` `#A84F32` | 5.1:1 | ✓ | ✓ |
| `--accent` `#CC785C` | 2.8:1 | ✗ | ✗（仅装饰） |

## 使用约束

- `--accent` 在整屏出现 ≤ 5 次
- `--accent-text` 用于文字链接、斜体点题、CTA 文字
- `--accent-soft` 仅用于大面积背景斑块、插图底色
- `--muted-soft` 不承载任何文字信息（它是"装饰线条色"）
