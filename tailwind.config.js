/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      // v3
      "tablet": "640px",
      "desktop": "1024px",
      // v2
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1400px',
    },
    container: {
      center: true,
      padding: "2rem"
    },
    extend: {
      colors: {
        // -- v3 Semantic Colors
        'brand-primary': '#FF8800',
        'brand-secondary': '#011A43',

        'accent-red': '#FF0000',
        'accent-venetian-red': '#D30001',
        'accent-salomie': '#FFDC79',
        'accent-sunflower': '#F3B700',
        'accent-olive-drab': '#59981A',
        'accent-carolina-blue': '#2697D3',
        'accent-oxford-blue': '#011A43',

        'txt-primary': '#17171A',
        'txt-secondary': '#5D6071',
        'txt-disabled': '#838796',
        'txt-hyperlink': '#0000FF',

        'txt-primary-dark': '#FFFFFF',
        'txt-secondary-dark': '#CCDAF2',
        'txt-disabled-dark': '#7191C8',
        'txt-hyperlink-dark': '#FFFFFF',

        'framework-border': '#C3C6D3',
        'framework-border-focus': '#989CAD',
        'framework-background-primary': '#FFFFFF',
        'framework-background-secondary': '#F3F5FB',
        'framework-background-tertiary': '#E8EAF4',
        'shadow': 'rgba(23, 23, 26, 0.3)',

        'framework-border-dark': '#335B9D',
        'framework-border-focus-dark': '#5582CC',
        'framework-background-primary-dark': '#011A43',
        'framework-background-secondary-dark': '#09295E',
        'framework-background-tertiary-dark': '#193F7F',
        'shadow-dark': 'rgba(0, 0, 0, 0.3)',

        'status-success': '#2DA665',
        'status-warning': '#DB9E03',
        'status-error': '#E43F07',
        'status-information': '#2ABEEB',

        'status-success-dark': '#7FE3A9',
        'status-warning-dark': '#FFD860',
        'status-error-dark': '#FF7878',
        'status-information-dark': '#6FDCFF',

        // -- Old colors
        // TODO: remove old colors when v3 completes
        amber: "#FF8800",
        "venetian-red": "#D30001",
        sunflower: "#F3B700",
        salomie: "#FFDC79",
        "oxford-blue": "#011A43",
        red: "#FF0000",
        "carolina-blue": "#2697D3",
        "olive-drab": "#59981A",
        "light-orange": "#FFF3E5",

        // background color of buttons
        "primary-disabled": "#FFCF99",
        "secondary-disabled": "#FFE7CC",

        orange: "#FF8800",
        blue: "#011A43",
        black: "#373A4A",
        grey: "#6D7181",
        "light-grey": "#F7F8FC",
        cream: "#FFF3E5",
        gradlight: "#FD8824",
        graddark: "#FFDC79",
        orangepartners: "#FFA033",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-pppangram)"],
        heading: ["var(--font-pppangram)"],
        subheading: ["var(--font-pppangram)"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography")],

};
