export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Formester | HTML Form Backend & Form Builder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'og:title', 
        name: 'og:title', 
        content: 'Formester | HTML Form Backend & Form Builder' 
      },
      { 
        hid: 'twitter:title', 
        name: 'twitter:title', 
        content: 'Formester | HTML Form Backend & Form Builder' 
      },
      { 
        hid: 'og:site_name', 
        name: 'og:site_name', 
        content: 'Formester | HTML Form Backend & Form Builder' 
      },
      { 
        hid: 'apple-mobile-web-app-title', 
        name: 'apple-mobile-web-app-title', 
        content: 'Formester' 
      },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'Form solution for your business that is easy to use. Formester provides an interactive drag and drop builder to create amazing survey forms.' 
      },
      { 
        hid: 'og:description', 
        name: 'og:description', 
        content: 'Form solution for your business that is easy to use. Formester provides an interactive drag and drop builder to create amazing survey forms.' 
      },
      { 
        hid: 'twitter:description', 
        name: 'twitter:description', 
        content: 'Form solution for your business that is easy to use. Formester provides an interactive drag and drop builder to create amazing survey forms.' 
      },
      { 
        name: 'twitter:site', 
        content: '_formester_' 
      },
      { 
        name: 'robots', 
        content: 'index, follow' 
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    // Custom Javascript
    script: [
      {
        src: '/bootstrap.min.js',
        defer: true,
        async: true
      },
    ],
  },

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  sitemap: {
    hostname: 'https://formester.com',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/main.css',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/jsonld'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-99986844-1'
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
