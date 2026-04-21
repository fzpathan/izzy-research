/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stripe-inspired academic palette
        navy: {
          950: '#061b31',
          900: '#0d253d',
          800: '#1c1e54',
        },
        brand: {
          purple: '#533afd',
          'purple-hover': '#4434d4',
          'purple-light': '#b9b9f9',
          'purple-soft': '#d6d9fc',
        },
        slate: {
          50:  '#f6f9fc',
          100: '#e8eef5',
          200: '#d0dce9',
          300: '#a3b8cc',
          400: '#64748d',
          500: '#435a70',
          600: '#273951',
        },
        success: {
          DEFAULT: '#15be53',
          dark: '#108c3d',
          light: 'rgba(21,190,83,0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'card':        '0 4px 24px rgba(50,50,93,0.08), 0 1px 4px rgba(0,0,0,0.06)',
        'card-hover':  '0 12px 40px rgba(50,50,93,0.16), 0 4px 12px rgba(0,0,0,0.08)',
        'cta':         '0 8px 28px rgba(83,58,253,0.32)',
      },
      borderRadius: {
        'sm':  '4px',
        'md':  '6px',
        'lg':  '12px',
        'xl':  '16px',
      },
    },
  },
  plugins: [],
}
