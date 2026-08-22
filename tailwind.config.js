/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        ink: {
          50: '#f4f4f2',
          100: '#e8e8e4',
          200: '#cfcfc8',
          300: '#a8a89e',
          400: '#7a7a72',
          500: '#56564f',
          600: '#3a3a35',
          700: '#262622',
          800: '#171714',
          900: '#0d0d0b',
          950: '#070706',
        },
        bone: {
          50: '#fbfaf6',
          100: '#f5f3ea',
          200: '#ece8d9',
          300: '#ddd6bf',
          400: '#c4b898',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'marquee-rev': 'marquee-rev 32s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'blink': 'blink 1.1s steps(2) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
};
