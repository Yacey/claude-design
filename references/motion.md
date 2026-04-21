# Motion — 动效系统

## 签名曲线

Claude 的动效有一个非常明确的"超平滑落地"特征 — 高初速 + 长尾减速 + 无过冲。这是 **exponential ease-out** 家族。

```
速度 ▲
    │╱╲
    │  ╲__
    │     ╲__
    │        ╲___
    │            ╲___
    │                ╲___ 0
    └─────────────────────▶ 时间
    快速启动    平滑减速     近乎完全停止再停止
```

### GSAP 中的等效

```js
"expo.out"     // 最签名 —— 4^x decay, 用于关键入场
"power4.out"   // 稍柔一点 —— x^4 decay
"power3.out"   // 通用默认 —— x^3 decay
"power2.out"   // 微元素、小动效
"power1.out"   // hover 反馈
```

### CSS cubic-bezier 等效

```css
/* 签名曲线 —— 接近 expo.out */
--ease-expo:  cubic-bezier(0.16, 1, 0.3, 1);
--ease-quart: cubic-bezier(0.23, 1, 0.32, 1);  /* power4.out */
--ease-cubic: cubic-bezier(0.33, 1, 0.68, 1);  /* power3.out */
--ease-quad:  cubic-bezier(0.39, 1, 0.74, 1);  /* power2.out */
--ease-in-out:cubic-bezier(0.65, 0, 0.35, 1);  /* 双向 */
```

### 禁用的曲线

- `bounce.out` / `elastic.out` — 过于玩具化
- `back.out(1.7+)` — 过冲感不 Claude
- `linear` — 机械感
- 任何 `ease-in`（单向加速）作为入场 — 反直觉

## Duration 规格（黄金标准）

| 场景 | 时长 | 曲线 |
|---|---|---|
| 大标题入场 | 0.9s | `expo.out` / `power4.out` |
| 段落入场 | 0.6s | `power3.out` |
| 列表项入场 | 0.7s（stagger 0.12s） | `expo.out` |
| 装饰元素（dot, rule） | 0.4–0.6s | `power2.out` / `power3.out` |
| 细线展开 | 0.6–0.8s | `power3.out` |
| 场景转场（crossfade） | 0.4s | `power2.inOut` |
| Hover 反馈 | 0.15–0.2s | `power1.out` |
| Focus ring | 0.15s | `power1.out` |
| 按钮 press | 0.1s down / 0.15s up | `power2.out` |
| Modal 出现 | 0.3s bg + 0.5s panel | `power3.out` |
| Modal 消失 | 0.2s | `power2.in` |
| 页面切换 | 0.5s | `expo.inOut` |

**时长上限**：单条入场 ≤ 1.2s（再长观众失去耐心）。
**时长下限**：≥ 0.25s（再短显得抽搐）。hover 可以 0.15s。

## 位移幅度

Claude 美学的入场位移**很小**——克制的物理感。

```
y 轴（上下入场）
  大标题（>120px 字号）：40–60px
  中标题（56–120px）：    30–50px
  正文段落：              20–35px
  Label / meta：          15–20px
  细微元素：              8–12px

x 轴（左右入场，罕用）
  仅用于 eyebrow rule 从左滑出、tag 从侧面入：20–40px

opacity：
  始终搭配 0 → 1

scale：
  入场：0.92 → 1（dot / icon）
  退场（仅末尾）：1 → 1.08（轻微放大 + 淡出）
  禁用 0 → 1 的 scale 入场（太卡通）
  
rotate：禁用（除非有明确概念，如"翻牌"场景）
```

## Stagger（交错入场）

```js
stagger: 0.10-0.14    // Claude 默认区间
stagger: 0.08         // 快节奏、数据密集
stagger: 0.16-0.20    // 庄重、慢节奏展示（用得很少）
```

**超过 0.2s 会感觉"迟钝、等待"**。**少于 0.08s 会感觉"浮躁、群体动"**。

## 动效配方（按组件）

### Eyebrow Row（标签 + 横线）
```js
tl.from(".eyebrow-rule", { scaleX: 0, duration: 0.6, ease: "power3.out" }, 0.15);
tl.from(".eyebrow-text", { x: -20, opacity: 0, duration: 0.5, ease: "power2.out" }, 0.3);
```

### Hero Title 三段式
```js
tl.from(".hero-title", { y: 60, opacity: 0, duration: 0.9, ease: "power4.out" }, 0.3);
tl.from(".hero-sub",   { y: 30, opacity: 0, duration: 0.7, ease: "expo.out" },  0.75);
tl.from(".hero-meta",  { y: 15, opacity: 0, duration: 0.5, ease: "power2.out" }, 1.1);
```

### 列表 Stagger
```js
tl.from(".chapter-row", {
  y: 40,
  opacity: 0,
  duration: 0.7,
  ease: "expo.out",
  stagger: 0.12,
}, 0.4);
```

### 细线展开（signature move）
```js
tl.from(".divider", {
  scaleX: 0,
  duration: 0.8,
  ease: "power3.out",
  transformOrigin: "left center",
}, 0.6);
```

### 场景交叉淡化（0.4s）
```js
tl.to("#scene-1",   { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 3.0);
tl.from("#scene-2", { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 3.0);
```

### 末尾淡出（唯一允许的 exit）
```js
tl.to("#scene-last > *", { opacity: 0, y: -15, duration: 0.5, stagger: 0.05, ease: "power2.in" }, duration - 0.7);
```

### 箭头微摆（持续点缀）
```js
tl.to(".cta .arrow", {
  x: 10, duration: 0.8, ease: "power1.inOut",
  yoyo: true, repeat: 3,   // 有限次，不用 -1
}, 2.0);
```

### Drop Cap Flourish（罕用，杂志感）
```js
tl.from(".drop-cap", {
  scale: 0.92, rotation: -4, opacity: 0,
  duration: 0.8, ease: "expo.out",
  transformOrigin: "left bottom",
}, 0.2);
```

## 整屏动效节奏（Scene Choreography）

10 秒单场景典型节奏：
```
0.0s ─┬──────────────────────────────────────── 开始
0.15 │  eyebrow rule 展开
0.30 │  eyebrow text 入
0.40 │  hero title 入 (0.9s)
0.75 │  hero sub 入 (0.7s)
1.10 │  meta 入 (0.5s)
1.60s ──────────────────────────────────────── 全部就位
       │
       │  [静止呼吸 1.5–2s]
       │
3.00s │  场景转场起
3.40s │  场景 2 入场开始
...
```

### 呼吸留白原则

每组入场完成后，应留 **1–2 秒静止时间** 让观众消化。连续不停的动效 = 焦虑。Claude 节奏的精髓在"动完之后等一下"。

## Reduce Motion 支持（Web 场景）

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

GSAP：
```js
if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.globalTimeline.timeScale(100);  // 或直接设置默认 duration: 0.01
}
```

## Anti-Patterns（反面教材）

- 视差滚动（parallax）到处用 — Claude 不用
- 鼠标跟随发光球 — 太玩
- 文字逐字打字机效果（caret 闪烁）— 太技术 demo
- 粒子背景 — 太 2016
- 滚动缩放到 100% 再释放 — 太 Apple
- 元素无限旋转 logo / 图标 — 禁用 `repeat: -1`
