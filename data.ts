@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Plus Jakarta Sans", "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Cormorant Garamond", Georgia, serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  
  --color-luxury-dark: #1F2937;
  --color-gold: #C8A97E;
  --color-gold-hover: #bda073;
  --color-luxury-accent: #F4F1EB;
  --color-luxury-bg: #FAFAFA;
  --color-luxury-text: #111111;
  --color-luxury-gray: #71717A;
}

@layer base {
  html {
    scroll-behavior: smooth;
    background-color: var(--color-luxury-bg);
    color: var(--color-luxury-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Selection color */
  ::selection {
    background-color: var(--color-gold);
    color: #ffffff;
  }

  /* Custom high-end scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #d4d4d8;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gold);
  }
}

/* Custom utilities */
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.glass-panel-dark {
  background: rgba(31, 41, 55, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.clip-path-polygon {
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
}

.text-stroke {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  color: transparent;
}
