import type { Config } from 'tailwindcss'
// #F6F6F6 - white
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  // TODO configure this properly, see gallery/page and components/navbar
  // safelist: [
  //   { pattern: /(mx|ml|mr)-\[calc\(\(100%-\d+rem\)\*1\/\d+\)\]/, variants: ['responsive', 'hover', 'focus'] },
  //   // Add more patterns and variants as needed
  //   { pattern: /mx-\[calc\(.*\)\]/, variants: ['responsive', 'hover', 'focus'] },
  //   { pattern: /ml-\[calc\(.*\)\]/, variants: ['responsive', 'hover', 'focus'] },
  //   { pattern: /mr-\[calc\(.*\)\]/, variants: ['responsive', 'hover', 'focus'] },
  // ],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fill-gallery': 'repeat(auto-fill, minmax(5vw, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr));'
      },
      gridTemplateColumns: {
        'auto-fill-gallery': 'repeat(auto-fill, minmax(5vw, 1fr))',
      },
      screens: {
        xs: '390px'
      },
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '10xl': ['10rem', {
          lineHeight: '1', // Set the line height to 1
        }],
      },
      colors: {
        gray: {
          0: '#A8A8B4', // 0
          50: '#9A9CA5', // 0.5
          100: '#8B8E96', // 1
          150: '#7D7F86', // 1.5
          200: '#6E7177', // 2
          300: '#525359', // 3
          400: '#35363A', // 4
          500: '#18191C', // 5
          600: '#131416', // 6
          700: '#0E0F11', // 7
          800: '#0A0A0B', // 8
          850: '#070808', // 8.5
          900: '#050506', // 9
          950: '#020303', // 9.5
          1000: '#000000', // 10
        },
        green: {
          0: '#E0F1CF', // 0
          50: '#D1E5BE', // 0.5
          100: '#C2D9AC', // 1
          150: '#B4CC9B', // 1.5
          200: '#A5C08A', // 2
          300: '#87A867', // 3
          400: '#6A8F45', // 4
          500: '#4C7722', // 5
          600: '#3D5F1B', // 6
          700: '#2E4714', // 7
          800: '#1E300E', // 8
          850: '#17240A', // 8.5
          900: '#0F1807', // 9
          950: '#080C03', // 9.5
          1000: '#000000', // 10
        },
        red: {
          0: '#FFFFFF', // 0
          50: '#F5EEED', // 0.5
          100: '#EBDCDB', // 1
          150: '#E1CBC9', // 1.5
          200: '#D7B9B7', // 2
          300: '#C49793', // 3
          400: '#B0746F', // 4
          500: '#9C514B', // 5
          600: '#7D413C', // 6
          700: '#5E312D', // 7
          800: '#3E201E', // 8
          850: '#2F1817', // 8.5
          900: '#1F100F', // 9
          950: '#100808', // 9.5
          1000: '#000000', // 10
        },
        white: '#F6F6F6',
        black: '#232323',
        contact: '#E5E5E5',
        form: '#A8ABB4',
        gold: {
          0: '#FFFFFF', // 0
          50: '#FBF8F4', // 0.5
          100: '#F7F1E9', // 1
          150: '#F4E9DF', // 1.5
          200: '#F0E2D4', // 2
          300: '#E8D4BE', // 3
          400: '#E1C5A9', // 4
          500: '#D9B793', // 5
          600: '#B89979', // 6
          700: '#967C5F', // 7
          800: '#755E46', // 8
          850: '#644F39', // 8.5
          900: '#53412C', // 9
          950: '#43321F', // 9.5
          1000: '#322312', // 10
        }
      },
    },
  },
  plugins: [],
}
export default config
