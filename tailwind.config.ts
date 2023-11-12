import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
  },
  corePlugins:{
    container: false,
  },
  plugins: [],
}
export default config
