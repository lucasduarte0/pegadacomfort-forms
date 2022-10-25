module.exports = {
  publicRuntimeConfig: {
    site: {
      name: 'Next.js + Tailwind CSS template',
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000'
          : 'https://earvinpiamonte-nextjs-tailwindcss-template.vercel.app',
      title: 'Pegada Comfort - Atacado',
      description: '',
      // socialPreview: '/images/preview.png',
    },
  },
  swcMinify: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
