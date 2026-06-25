import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary": "var(--color-on-secondary)",
        "tertiary-fixed": "var(--color-tertiary-fixed)",
        "on-tertiary": "var(--color-on-tertiary)",
        "secondary-fixed-dim": "var(--color-secondary-fixed-dim)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "accent-gold": "#D4AF37",
        "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant)",
        "inverse-on-surface": "var(--color-inverse-on-surface)",
        "on-secondary-fixed": "var(--color-on-secondary-fixed)",
        "on-tertiary-container": "var(--color-on-tertiary-container)",
        "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant)",
        "on-secondary-container": "var(--color-on-secondary-container)",
        "on-error": "var(--color-on-error)",
        "primary-container": "var(--color-primary-container)",
        "surface-bright": "var(--color-surface-bright)",
        "primary": "var(--color-primary)",
        "on-error-container": "var(--color-on-error-container)",
        "surface-gray": "var(--color-surface-gray)",
        "surface": "var(--color-surface)",
        "surface-container": "var(--color-surface-container)",
        "success-green": "#42B72A",
        "on-surface": "var(--color-on-surface)",
        "surface-container-lowest": "var(--color-surface-container-lowest)",
        "inverse-surface": "var(--color-inverse-surface)",
        "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim)",
        "on-primary": "var(--color-on-primary)",
        "inverse-primary": "var(--color-inverse-primary)",
        "background": "var(--color-background)",
        "tertiary": "var(--color-tertiary)",
        "surface-tint": "var(--color-surface-tint)",
        "on-tertiary-fixed": "var(--color-on-tertiary-fixed)",
        "primary-fixed": "var(--color-primary-fixed)",
        "text-muted": "#65676B",
        "surface-dim": "var(--color-surface-dim)",
        "on-background": "var(--color-on-background)",
        "on-primary-container": "var(--color-on-primary-container)",
        "secondary-fixed": "var(--color-secondary-fixed)",
        "outline": "var(--color-outline)",
        "surface-container-highest": "var(--color-surface-container-highest)",
        "tertiary-container": "var(--color-tertiary-container)",
        "secondary-container": "var(--color-secondary-container)",
        "outline-variant": "var(--color-outline-variant)",
        "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant)",
        "error": "var(--color-error)",
        "primary-fixed-dim": "var(--color-primary-fixed-dim)",
        "surface-variant": "var(--color-surface-variant)",
        "secondary": "var(--color-secondary)",
        "surface-container-low": "var(--color-surface-container-low)",
        "surface-container-high": "var(--color-surface-container-high)",
        "on-primary-fixed": "var(--color-on-primary-fixed)",
        "error-container": "var(--color-error-container)",
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
