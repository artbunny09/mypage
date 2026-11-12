/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0f11',
        surface: '#14171a',
        'surface-hover': '#1a1e22',
        border: 'rgba(255, 255, 255, 0.08)',
        'border-light': 'rgba(255, 255, 255, 0.15)',
        accent: {
          DEFAULT: '#a3e635', // 밝은 연두색 (Lime)
          hover: '#bef264',
          muted: 'rgba(163, 230, 53, 0.12)',
          border: 'rgba(163, 230, 53, 0.28)',
        },
        foreground: '#e2e8f0',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
