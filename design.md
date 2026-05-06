## 🎨 DESIGN SYSTEM (extracted from live site)
 
### Color Palette — extracted values
 
```
Background primary (darkest):    #0E0701   ← near-black warm brown
Background secondary:            #1A0E05   ← rich dark espresso
Background card / section alt:   #231407   ← dark chocolate
Background elevated:             #2E1B0A   ← warmer brown for cards
Surface overlay (glassmorphism): rgba(26,14,5,0.85)
 
Gold primary (main accent):      #C9A84C   ← warm champagne gold
Gold light (hover / glow):       #E2C47A   ← lighter gold
Gold dark (pressed state):       #A8872E   ← deep gold
Gold muted (borders/dividers):   rgba(201,168,76,0.25)
 
Text primary:                    #FDF6EC   ← warm cream white
Text secondary:                  #C4A882   ← muted beige/tan
Text muted:                      #7A6248   ← dark warm gray
Text on gold button:             #0E0701   ← near black
 
Border subtle:                   rgba(201,168,76,0.15)
Border active:                   rgba(201,168,76,0.5)
 
Error / destructive:             #D64545
Success:                         #4A9C6D
```
 
### Typography
 
```
Display / Hero headings:    'Cormorant Garamond', Georgia, serif
                            weight: 300–700, italic variants used for elegance
 
Section headings (H2–H3):  'Cormorant Garamond', serif, weight 600
UI / Body text:             'Jost', sans-serif, weight 300–500
Labels / Caps / Tags:       'Jost', sans-serif, weight 500, letter-spacing: 0.15em
Decorative script accents:  'Great Vibes', cursive (for "New From Salé Sucré" etc.)
Numbers / Stats:            'Cormorant Garamond', weight 700, size very large
 
Font sizes:
  --fs-hero:    clamp(48px, 7vw, 88px)
  --fs-h1:      clamp(36px, 5vw, 64px)
  --fs-h2:      clamp(28px, 4vw, 48px)
  --fs-h3:      clamp(22px, 3vw, 32px)
  --fs-body:    clamp(14px, 1.5vw, 17px)
  --fs-label:   12–13px uppercase
  --fs-stat:    clamp(48px, 6vw, 80px)
```
 
### Spacing Scale
 
```
--space-xs:   8px
--space-sm:   16px
--space-md:   24px
--space-lg:   48px
--space-xl:   80px
--space-2xl:  120px
--space-3xl:  160px
 
Section padding (desktop):  120px vertical
Section padding (tablet):   80px vertical
Section padding (mobile):   48px vertical
 
Content max-width: 1280px, centered, px-6 gutter
```
 
### Border Radius
 
```
--radius-sm:   6px
--radius-md:   10px
--radius-lg:   16px
--radius-xl:   24px
--radius-full: 9999px
```
 
### Shadows & Effects
 
```
Card shadow:    0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(201,168,76,0.08)
Gold glow:      0 0 24px rgba(201,168,76,0.3)
Button shadow:  0 4px 16px rgba(201,168,76,0.25)
Overlay:        linear-gradient(to bottom, rgba(14,7,1,0) 0%, rgba(14,7,1,0.85) 100%)
```
 
---
 
## 📄 globals.css — PASTE THIS EXACTLY


                                                ///// VERY IMPORTANT /////////

////////////////----------DONT USE SAME PURE CSS CODE THIS IS JUST HOW TO UNDERSTAND DESGIN SYSTEM APPLY THIS CODE IN DESIGN WITH TAIWINDCSS 4 & NEXTJS 16 IN THE COMPONENTS CODE ---------//////////////////////////

 

 
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Jost:wght@300;400;500;600&family=Great+Vibes&display=swap');
 
/* ── 1. CSS CUSTOM PROPERTIES ── */
:root {
  /* Background scale */
  --bg-base:        #0E0701;
  --bg-deep:        #1A0E05;
  --bg-card:        #231407;
  --bg-elevated:    #2E1B0A;
  --bg-overlay:     rgba(26, 14, 5, 0.88);
 
  /* Gold accent scale */
  --gold:           #C9A84C;
  --gold-light:     #E2C47A;
  --gold-dark:      #A8872E;
  --gold-muted:     rgba(201, 168, 76, 0.25);
  --gold-subtle:    rgba(201, 168, 76, 0.12);
  --gold-border:    rgba(201, 168, 76, 0.30);
 
  /* Text scale */
  --text-primary:   #FDF6EC;
  --text-secondary: #C4A882;
  --text-muted:     #7A6248;
  --text-on-gold:   #0E0701;
 
  /* Semantic colors */
  --border-subtle:  rgba(201, 168, 76, 0.15);
  --border-active:  rgba(201, 168, 76, 0.55);
  --error:          #D64545;
  --success:        #4A9C6D;
 
  /* Typography */
  --font-display:   'Cormorant Garamond', Georgia, serif;
  --font-body:      'Jost', system-ui, sans-serif;
  --font-script:    'Great Vibes', cursive;
 
  /* Font sizes — fluid */
  --fs-hero:        clamp(3rem, 7vw, 5.5rem);
  --fs-h1:          clamp(2.25rem, 5vw, 4rem);
  --fs-h2:          clamp(1.75rem, 4vw, 3rem);
  --fs-h3:          clamp(1.375rem, 2.5vw, 2rem);
  --fs-h4:          clamp(1.125rem, 1.8vw, 1.5rem);
  --fs-body:        clamp(0.875rem, 1.4vw, 1.0625rem);
  --fs-small:       0.8125rem;
  --fs-label:       0.75rem;
  --fs-stat:        clamp(3rem, 6vw, 5rem);
  --fs-script:      clamp(1.5rem, 3vw, 2.5rem);
 
  /* Font weights */
  --fw-light:  300;
  --fw-normal: 400;
  --fw-medium: 500;
  --fw-semi:   600;
  --fw-bold:   700;
 
  /* Letter spacing */
  --ls-tight:  -0.02em;
  --ls-normal: 0em;
  --ls-wide:   0.08em;
  --ls-wider:  0.15em;
  --ls-widest: 0.25em;
 
  /* Line heights */
  --lh-tight:  1.1;
  --lh-snug:   1.25;
  --lh-normal: 1.5;
  --lh-loose:  1.75;
 
  /* Spacing */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  20px;
  --space-6:  24px;
  --space-8:  32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;
  --space-30: 120px;
  --space-40: 160px;
 
  /* Section rhythm */
  --section-py:       var(--space-30);
  --section-py-md:    var(--space-20);
  --section-py-sm:    var(--space-12);
 
  /* Border radius */
  --radius-xs:   4px;
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-2xl:  32px;
  --radius-full: 9999px;
 
  /* Shadows */
  --shadow-card:   0 4px 24px rgba(0,0,0,0.45), 0 1px 0 rgba(201,168,76,0.07);
  --shadow-hover:  0 8px 40px rgba(0,0,0,0.55), 0 0 0 1px rgba(201,168,76,0.2);
  --shadow-gold:   0 0 28px rgba(201,168,76,0.35);
  --shadow-btn:    0 4px 16px rgba(201,168,76,0.3);
 
  /* Gradients */
  --gradient-gold:     linear-gradient(135deg, #E2C47A 0%, #C9A84C 50%, #A8872E 100%);
  --gradient-dark:     linear-gradient(180deg, transparent 0%, var(--bg-base) 100%);
  --gradient-overlay:  linear-gradient(180deg, rgba(14,7,1,0) 0%, rgba(14,7,1,0.9) 100%);
  --gradient-hero:     linear-gradient(135deg, rgba(14,7,1,0.7) 0%, rgba(14,7,1,0.3) 100%);
  --gradient-card:     linear-gradient(180deg, rgba(46,27,10,0) 0%, rgba(14,7,1,0.95) 100%);
 
  /* Transitions */
  --ease-smooth:  cubic-bezier(0.25, 0.46, 0.45, 0.94);
  --ease-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-in:      cubic-bezier(0.4, 0, 1, 1);
  --ease-out:     cubic-bezier(0, 0, 0.2, 1);
  --t-fast:       150ms;
  --t-base:       250ms;
  --t-slow:       400ms;
  --t-slower:     600ms;
 
  /* Layout */
  --container-max: 1280px;
  --container-px:  clamp(16px, 4vw, 40px);
  --nav-height:    72px;
  --nav-height-sm: 60px;
}
 
/* ── 2. RESET & BASE ── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
 
html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}
 
body {
  background-color: var(--bg-base);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: var(--fs-body);
  font-weight: var(--fw-light);
  line-height: var(--lh-normal);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
 
img, video {
  max-width: 100%;
  display: block;
}
 
a {
  color: inherit;
  text-decoration: none;
}
 
ul, ol {
  list-style: none;
}
 
button {
  cursor: pointer;
  border: none;
  background: none;
  font-family: inherit;
}
 
input, textarea, select {
  font-family: inherit;
  font-size: inherit;
}
 
/* ── 3. TYPOGRAPHY UTILITIES ── */
.font-display { font-family: var(--font-display); }
.font-body    { font-family: var(--font-body); }
.font-script  { font-family: var(--font-script); }
 
.text-hero    { font-size: var(--fs-hero); line-height: var(--lh-tight); font-family: var(--font-display); font-weight: var(--fw-light); }
.text-h1      { font-size: var(--fs-h1);   line-height: var(--lh-tight); font-family: var(--font-display); font-weight: var(--fw-semi); }
.text-h2      { font-size: var(--fs-h2);   line-height: var(--lh-snug);  font-family: var(--font-display); font-weight: var(--fw-semi); }
.text-h3      { font-size: var(--fs-h3);   line-height: var(--lh-snug);  font-family: var(--font-display); font-weight: var(--fw-semi); }
.text-h4      { font-size: var(--fs-h4);   line-height: var(--lh-snug);  font-family: var(--font-display); }
.text-body    { font-size: var(--fs-body);  line-height: var(--lh-loose); }
.text-label   { font-size: var(--fs-label); letter-spacing: var(--ls-widest); text-transform: uppercase; font-weight: var(--fw-medium); }
.text-script  { font-family: var(--font-script); font-size: var(--fs-script); font-weight: var(--fw-normal); }
.text-stat    { font-family: var(--font-display); font-size: var(--fs-stat); font-weight: var(--fw-bold); line-height: 1; }
 
.text-gold    { color: var(--gold); }
.text-cream   { color: var(--text-primary); }
.text-muted   { color: var(--text-secondary); }
.italic       { font-style: italic; }
 
/* ── 4. LAYOUT UTILITIES ── */
.container {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-px);
}
 
.section {
  padding-block: var(--section-py);
}
 
/* ── 5. COMPONENT BASE STYLES ── */
 
/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: 14px 36px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  transition: all var(--t-base) var(--ease-smooth);
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
 
.btn-gold {
  background: var(--gradient-gold);
  color: var(--text-on-gold);
  box-shadow: var(--shadow-btn);
}
.btn-gold:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: var(--shadow-gold);
}
.btn-gold:active { transform: translateY(0) scale(0.99); }
 
.btn-outline {
  background: transparent;
  color: var(--gold);
  border: 1px solid var(--gold-border);
}
.btn-outline:hover {
  background: var(--gold-subtle);
  border-color: var(--gold);
  transform: translateY(-2px);
}
 
.btn-ghost {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
}
.btn-ghost:hover {
  border-color: var(--gold-border);
  color: var(--gold-light);
}
 
/* Cards */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--t-base) var(--ease-smooth);
  box-shadow: var(--shadow-card);
}
.card:hover {
  border-color: var(--gold-border);
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}
.card-img {
  overflow: hidden;
  aspect-ratio: 4/3;
}
.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--t-slow) var(--ease-smooth);
}
.card:hover .card-img img { transform: scale(1.06); }
.card-body { padding: var(--space-6); }
 
/* Gold divider line */
.gold-rule {
  width: 60px;
  height: 1px;
  background: var(--gradient-gold);
  margin-block: var(--space-4);
}
.gold-rule-center { margin-inline: auto; }
 
/* Section label (eyebrow text) */
.section-label {
  display: inline-block;
  font-size: var(--fs-label);
  font-family: var(--font-body);
  font-weight: var(--fw-medium);
  letter-spacing: var(--ls-widest);
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: var(--space-4);
}
 
/* Inputs */
.input {
  width: 100%;
  background: var(--bg-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  padding: 14px 18px;
  font-family: var(--font-body);
  font-size: var(--fs-body);
  transition: border-color var(--t-fast) var(--ease-smooth);
  outline: none;
}
.input::placeholder { color: var(--text-muted); }
.input:focus { border-color: var(--gold-border); box-shadow: 0 0 0 3px var(--gold-subtle); }
 
textarea.input { resize: vertical; min-height: 120px; }
 
/* Badge / Tag */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 14px;
  border-radius: var(--radius-full);
  font-size: 11px;
  font-weight: var(--fw-medium);
  letter-spacing: var(--ls-wide);
  text-transform: uppercase;
}
.badge-gold { background: var(--gold-subtle); color: var(--gold); border: 1px solid var(--gold-muted); }
.badge-new  { background: var(--gradient-gold); color: var(--text-on-gold); }
 
/* Stat block */
.stat-number {
  font-family: var(--font-display);
  font-size: var(--fs-stat);
  font-weight: var(--fw-bold);
  color: var(--gold);
  line-height: 1;
}
.stat-label {
  font-size: var(--fs-small);
  letter-spacing: var(--ls-wider);
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-top: var(--space-2);
}
 
/* Skeleton loading */
.skeleton {
  background: linear-gradient(90deg, var(--bg-card) 25%, var(--bg-elevated) 50%, var(--bg-card) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
 
/* Fade-in on scroll */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity var(--t-slower) var(--ease-out), transform var(--t-slower) var(--ease-out);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
 
/* ── 6. NAVIGATION STYLES ── */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  background: var(--bg-overlay);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
  transition: background var(--t-base) var(--ease-smooth);
}
.nav.scrolled {
  background: rgba(14,7,1,0.97);
  border-bottom-color: var(--gold-muted);
}
 
.nav-link {
  font-size: var(--fs-small);
  font-weight: var(--fw-medium);
  letter-spacing: var(--ls-wide);
  text-transform: uppercase;
  color: var(--text-secondary);
  transition: color var(--t-fast);
  position: relative;
  padding-block: 4px;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gold);
  transition: width var(--t-base) var(--ease-smooth);
}
.nav-link:hover,
.nav-link.active { color: var(--gold); }
.nav-link:hover::after,
.nav-link.active::after { width: 100%; }
 
/* ── 7. SECTION BACKGROUNDS ── */
.bg-base     { background-color: var(--bg-base); }
.bg-deep     { background-color: var(--bg-deep); }
.bg-card     { background-color: var(--bg-card); }
.bg-elevated { background-color: var(--bg-elevated); }
 
/* ── 8. RESPONSIVE BREAKPOINTS ── */
@media (max-width: 1023px) {
  :root {
    --section-py: var(--section-py-md);
    --nav-height: var(--nav-height-sm);
  }
}
@media (max-width: 767px) {
  :root {
    --section-py: var(--section-py-sm);
  }
  .btn { padding: 12px 28px; }
}
 
/* ── 9. SCROLLBAR ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg-base); }
::-webkit-scrollbar-thumb { background: var(--gold-muted); border-radius: var(--radius-full); }
::-webkit-scrollbar-thumb:hover { background: var(--gold-dark); }
 
/* ── 10. SELECTION ── */
::selection {
  background: var(--gold-muted);
  color: var(--text-primary);
}
 
/* ── 11. FOCUS (accessibility) ── */
:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
```
 