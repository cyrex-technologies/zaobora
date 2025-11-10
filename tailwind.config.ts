import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'services-pattern': "url('/img/service/tree-background.png')",
      },
      animation: {
        'ping': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;