# Brand Swatches — 编辑次级色板 (v0.2 新增)

> 除了 `clay` / `ink` / `ivory` 三大主色之外,官方 `anthropic.com` 与 `claude.com`
> 还暴露了一组 **编辑/插画用的次级 swatch**,共 12 色,从自然物命名(olive、
> cactus、fig、oat 等)。它们**不是 UI chrome 色**(不做按钮底、不做输入框边),
> 只做:
>
> 1. 插画 / 示意图背景
> 2. 卡片 / 故事模块的色彩区分
> 3. 数据可视化配色
> 4. Tag / Badge 的主题变体
> 5. 视频合成的 section 背景

---

## 完整 swatch 目录

### 两站共享(8 色)

| Name | Hex | 观感 | 可做 text? | AA on `--bg` |
|---|---|---|---|---|
| `clay` | `#D97757` | 铁锈 · 主 accent | 仅大字 | 3.5:1 |
| `olive` | `#788C5D` | 橄榄绿 · 沉静 | 仅大字 | 4.5:1 |
| `cactus` | `#BCD1CA` | 浅仙人掌 · 柔 | ✗ | 1.5:1 |
| `sky` | `#6A9BCC` | 哑光天蓝 | 仅大字 | 3.5:1 |
| `heather` | `#CBCADB` | 欧石楠紫灰 | ✗ | 1.5:1 |
| `fig` | `#C46686` | 无花果粉 | 仅大字 | 3.7:1 |
| `coral` | `#EBCECE` | 珊瑚粉 | ✗ | 1.3:1 |
| `oat` | `#E3DACC` | 燕麦米 | ✗ | 1.2:1 |

### claude.com 专属(3 色)

| Name | Hex | 观感 |
|---|---|---|
| `mineral` | `#629987` | 绿松石 · 深 olive |
| `plum` | `#827DBD` | 李 · 深 heather |
| `peach` | `#EBC9B7` | 桃 · 暖 coral(= `--accent-soft`) |

### anthropic.com 专属(2 色)

| Name | Hex | 观感 |
|---|---|---|
| `kraft` | `#D4A27F` | 牛皮纸 · 暖 oat(= `--warning`) |
| `manilla` | `#EBDBBC` | 马尼拉米(= `--mark-bg`,用作 `<mark>` 高亮) |

---

## 配色 Recipes(6 个推荐组合)

每个 recipe 给出 **3 色搭配 + ink + bg 的 5 色系统**,直接拿来做一整个 landing page / 视频场景 / 海报。

### 1. Kinfolk Warm — 杂志温暖感
```
--bg:     #FAF9F5   ivory-light
--ink:    #141413   slate-dark
--s-1:    #C46686   fig        (section emphasis)
--s-2:    #EBCECE   coral      (large soft bg)
--s-3:    #E3DACC   oat        (subtle blocking)
```
**何时用**: 生活方式 / 饮食 / 家居内容。给封面一个大块 coral,标题橙红色 fig。

### 2. Forest Growth — 植物森林感
```
--bg:     #FAF9F5
--ink:    #141413
--s-1:    #788C5D   olive       (h2, rule color)
--s-2:    #BCD1CA   cactus      (card bg)
--s-3:    #629987   mineral     (accent pop)
```
**何时用**: 成长 / 学习 / 教育 / 环境内容。olive 做 h2,cactus 做卡片,mineral 做图标描边。

### 3. Editorial Dusk — 黄昏叙事
```
--bg:     #FAF9F5
--ink:    #141413
--s-1:    #D97757   clay        (link, italic emphasis)
--s-2:    #D4A27F   kraft       (section divider bg)
--s-3:    #EBDBBC   manilla     (<mark> highlight)
```
**何时用**: 默认 Editorial。anthropic.com 首页基本是这套。

### 4. Paper Blueprint — 蓝图科技感
```
--bg:     #FAF9F5
--ink:    #141413
--s-1:    #6A9BCC   sky         (diagram strokes, links)
--s-2:    #CBCADB   heather     (low-intensity cards)
--s-3:    #827DBD   plum        (accent badges)
```
**何时用**: 技术文档 / 架构图 / data-viz。sky 做线,heather 做块,plum 做点。

### 5. Product Dark — 深墨产品
```
--bg:     #1A1918   gray-900
--ink:    #FAF9F5
--s-1:    #D97757   clay        (primary button accent)
--s-2:    #C96442   clay-interactive (primary button bg)
--s-3:    #30302E   gray-750    (card bg)
```
**何时用**: claude.com 风格的功能页、settings、dashboard。默认 dark。

### 6. Monochrome Ivory — 极简文学
```
--bg:     #FAF9F5
--ink:    #141413
--s-1:    #3D3D3A   slate-medium (body text)
--s-2:    #5E5D59   slate-light  (meta, caption)
--s-3:    #E8E6DC   ivory-dark   (rule, card edge)
```
**何时用**: 禅学 / 诗集 / 长篇个人博客。完全放弃彩色,只靠 5 阶灰度。

---

## Editorial vs Product 配色优先级

### Editorial 模式

1. Body / ink / muted 是 90% 面积
2. `clay` 是唯一 brand accent,每屏 ≤ 5 次
3. **最多**加一个次级 swatch 做大面积 wash(用 `oat` 或 `coral` 或 `manilla`)
4. 禁止 sky / heather / plum 出现在 editorial(它们太"产品感")

### Product 模式

1. gray ladder 是 80% 面积
2. `clay-interactive` 是主 CTA 色
3. 可以用 `sky`、`olive`、`fig` 做 icon / tag / badge 区分
4. 允许一屏 2-3 种 swatch 共存(如 sidebar icons 用不同 swatch 表示类型)

---

## 禁配清单(看到就警告)

- **fig × plum**: 同为粉紫域,相邻摆放显脏
- **olive × kraft**: 同为暖中低饱和,相邻无层次
- **sky × heather**: 同为冷灰蓝,无对比
- **coral × peach × oat**: 三色同时大面积出现会糊成一片(选两个)
- **clay × fig**: 两个暖饱和色抢主角 — 必须一个做小(≤ 5 实例),一个做大(wash)
- **大面积 mineral + 大面积 plum**: 两深饱和色对撞
- **任何 swatch × 纯黑 / 纯白**: 斑块颜色要在 ivory 或 gray 底上,纯色背景会毁掉其"纸上"质感

---

## 使用原则(再强调一次)

1. **整屏不超过 3 种** swatch 组合 — 多了就乱
2. **同色族 tonal 比跨色族撞色好**:`olive + cactus + mineral` 是一个"绿家族",比 `olive + fig + sky` 撞色更 claude 味
3. **饱和度克制**:不要自行调亮任何 swatch 的 HSL S 值,官方给多深就多深
4. **Swatch 不做文字色**:只有 `--accent-text #C6613F` 是 AA 合规文字色,其他 swatch 做文字时会挂 —— 当你想让标题"看起来是 olive 的"时,改用 **`olive` 的衬线下划线 + ink 文字** 替代
5. **Dark mode 下 swatch 亮一档**:大多数次级 swatch 在 gray-900 背景上需要加 10-15% lightness 才清晰。不愿手调时,直接退回 `clay` + gray ladder 组合
