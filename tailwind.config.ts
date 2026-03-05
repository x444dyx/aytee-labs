import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        panel: 'rgba(255,255,255,0.06)',
        panel2: 'rgba(255,255,255,0.09)',
        text: '#F2F5F8',
        muted: 'rgba(242,245,248,0.68)',
        accent: '#00E5FF'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(0,0,0,0.55)'
      }
    }
  },
  plugins: []
}

export default config
