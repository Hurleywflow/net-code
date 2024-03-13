/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const defaultTheme = require('tailwindcss/defaultTheme')

import type { Config } from 'tailwindcss'
const svgToDataUri = require('mini-svg-data-uri')

const colors = require('tailwindcss/colors')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')
const { nextui } = require('@nextui-org/react')
const plugin = require('tailwindcss/plugin')

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  safelist: ['animate-ripple'],
  theme: {
    screens: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      width: {
        // biome-ignore lint/style/useTemplate: <explanation>
        'square-diagonal': (Math.sqrt(2) * 100).toFixed(2) + '%',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        shine: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        // TODO: add more below
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%,-40%) scale(1)',
          },
        },
        // background clip text
        slowpan: {
          '0%': { backgroundPosition: 'top left' },
          '100%': { backgroundPosition: 'bottom right' },
        },
        //meteor effect hero section
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-1000px)',
            opacity: '0',
          },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ripple: {
          '50%': {
            transform: 'scale(var(--scale, 1.25))',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shine: 'shine 8s ease-in-out infinite',
        // TODO: add more below
        slidein: 'slidein 1s ease var(--slidein-delay, 0) forwards',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        //background clip text
        slowpan: 'slowpan 30s alternate ease-in-out infinite',
        //meteor effect hero section
        'meteor-effect': 'meteor 5s linear infinite',
        spin: '1s linear infinite',
        // contact section
        ripple:
          'ripple var(--duration, 1.5s) ease calc(var(--i, 0) * 0.1s) infinite',
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
    addVariablesForColors,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    ({ matchUtilities, theme }: any) => {
      matchUtilities(
        {
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          'bg-grid': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          'bg-grid-small': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`,
            )}")`,
          }),
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          'bg-dot': (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`,
            )}")`,
          }),
        },
        {
          values: flattenColorPalette(theme('backgroundColor')),
          type: 'color',
        },
      )
    },
    nextui(),
    // biome-ignore lint/complexity/useArrowFunction: <explanation>
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    plugin(({ matchUtilities, theme }: { matchUtilities: any; theme: any }) => {
      matchUtilities(
        {
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          'text-shadow': (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
    // contact section ripple effect
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    plugin(({ addComponents, theme }: { addComponents: any; theme: any }) => {
      addComponents({
        '.ripple': {
          '--size':
            'calc(var(--baseSize, 80px) + var(--sizeStep, 64px) * var(--i, 0))',
          width: 'var(--size)',
          height: 'var(--size)',
          opacity:
            'calc(var(--baseOpacity, 0.25) - var(--opacityStep, 0.05) * var(--i, 0))',
          animation: theme('animation.ripple'),
        },
      })
    }),
  ],
} satisfies Config

export default config

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'))
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  )

  addBase({
    ':root': newVars,
  })
}
