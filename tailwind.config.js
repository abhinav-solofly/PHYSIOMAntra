/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // slate-200
        input: 'var(--color-input)', // white
        ring: 'var(--color-ring)', // medical-blue-700
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // slate-800
        surface: 'var(--color-surface)', // gray-100
        primary: {
          DEFAULT: 'var(--color-primary)', // medical-blue-700
          foreground: 'var(--color-primary-foreground)' // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // healing-teal-500
          foreground: 'var(--color-secondary-foreground)' // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)' // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)' // slate-500
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // warm-orange-500
          foreground: 'var(--color-accent-foreground)' // white
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)' // slate-800
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)' // slate-800
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-600
          foreground: 'var(--color-success-foreground)' // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // yellow-500
          foreground: 'var(--color-warning-foreground)' // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)' // white
        },
        // Brand specific colors
        'trust-builder': 'var(--color-trust-builder)', // green-600
        'conversion-accent': 'var(--color-conversion-accent)', // orange-600
        'text-secondary': 'var(--color-text-secondary)', // gray-500
        'healing-teal': 'var(--color-healing-teal)' // teal-600
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif']
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', fontWeight: '600' }], // 48px
        'headline': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }], // 36px
        'subheadline': ['1.5rem', { lineHeight: '1.3', fontWeight: '500' }], // 24px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }] // 12px
      },
      spacing: {
        'golden-sm': 'var(--golden-ratio-sm)', // 13px
        'golden-md': 'var(--golden-ratio-md)', // 21px
        'golden-lg': 'var(--golden-ratio-lg)', // 34px
        'golden-xl': 'var(--golden-ratio-xl)', // 55px
        'breathing': 'var(--breathing-space)' // 1rem
      },
      borderRadius: {
        'healing': '8px',
        'soft': '12px'
      },
      boxShadow: {
        'healing': '0 4px 20px rgba(43, 90, 135, 0.08)',
        'soft': '0 2px 8px rgba(43, 90, 135, 0.08)',
        'glow': '0 0 20px rgba(43, 90, 135, 0.15)',
        'success': '0 4px 20px rgba(39, 174, 96, 0.15)'
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'morph-healing': 'morphPainToProgress 2.5s ease-out forwards',
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      transitionTimingFunction: {
        'healing': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      backdropBlur: {
        'healing': '8px'
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '100',
        'tooltip': '110'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ],
}