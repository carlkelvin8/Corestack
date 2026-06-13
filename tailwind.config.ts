import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary": "#ffffff",
        "tertiary-fixed": "#ffdbcf",
        "on-tertiary": "#ffffff",
        "secondary-fixed-dim": "#b0c9e8",
        "on-surface-variant": "#424656",
        "accent-gold": "#D4AF37",
        "on-secondary-fixed-variant": "#314863",
        "inverse-on-surface": "#eff0fd",
        "on-secondary-fixed": "#011d35",
        "on-tertiary-container": "#fff7f5",
        "on-tertiary-fixed-variant": "#812800",
        "on-secondary-container": "#4b637e",
        "on-error": "#ffffff",
        "primary-container": "#0866ff",
        "surface-bright": "#faf8ff",
        "primary": "#0050cd",
        "on-error-container": "#93000a",
        "surface-gray": "#F0F2F5",
        "surface": "#faf8ff",
        "surface-container": "#ecedfa",
        "success-green": "#42B72A",
        "on-surface": "#191b24",
        "surface-container-lowest": "#ffffff",
        "inverse-surface": "#2e303a",
        "tertiary-fixed-dim": "#ffb59b",
        "on-primary": "#ffffff",
        "inverse-primary": "#b3c5ff",
        "background": "#faf8ff",
        "tertiary": "#a13400",
        "surface-tint": "#0054d7",
        "on-tertiary-fixed": "#380d00",
        "primary-fixed": "#dbe1ff",
        "text-muted": "#65676B",
        "surface-dim": "#d8d9e6",
        "on-background": "#191b24",
        "on-primary-container": "#f9f7ff",
        "secondary-fixed": "#d1e4ff",
        "outline": "#727687",
        "surface-container-highest": "#e1e2ee",
        "tertiary-container": "#cb4400",
        "secondary-container": "#c7dfff",
        "outline-variant": "#c2c6d8",
        "on-primary-fixed-variant": "#003fa5",
        "error": "#ba1a1a",
        "primary-fixed-dim": "#b3c5ff",
        "surface-variant": "#e1e2ee",
        "secondary": "#49607c",
        "surface-container-low": "#f2f3ff",
        "surface-container-high": "#e6e7f4",
        "on-primary-fixed": "#00184a",
        "error-container": "#ffdad6"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1440px",
        "unit": "4px",
        "margin-mobile": "16px",
        "gutter": "24px",
        "margin-desktop": "40px"
      },
      fontFamily: {
        "label-sm": ["var(--font-jetbrains-mono)", "monospace"],
        "body-md": ["var(--font-inter)", "sans-serif"],
        "headline-lg-mobile": ["var(--font-hanken-grotesk)", "sans-serif"],
        "body-lg": ["var(--font-inter)", "sans-serif"],
        "headline-md": ["var(--font-hanken-grotesk)", "sans-serif"],
        "headline-lg": ["var(--font-hanken-grotesk)", "sans-serif"],
        "display-lg": ["var(--font-hanken-grotesk)", "sans-serif"]
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }]
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};

export default config;
