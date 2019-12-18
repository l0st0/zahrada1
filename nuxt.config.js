import { skyblue } from "color-name";

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "sk",
    },
    title: "Záhradné centrum Huncovce",

    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Všetko pre Vašu záhradu. Záhradné centrum."
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/png",
        href: "/logo.png"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Comfortaa:400,500,600|Lato:300,400|Montserrat:400,500,600|Poiret+One&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss", "@/assets/scss/gallery.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: "~/plugins/vue-lazysizes.client.js"
    },
    {
      src: "~/plugins/gallery.js",
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@bazzite/nuxt-optimized-images",
    "@nuxtjs/style-resources",
    "@nuxtjs/sitemap"
  ],

  sitemap: {
    hostname: "https://zahradnecentrumhuncovce.sk",
    gzip: true,
    routes: []
  },

  styleResources: {
    // your settings here
    scss: ["@/assets/scss/_variables.scss", "@/assets/scss/_animations.scss"]
  },

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ["jpeg", "png", "svg", "webp", "gif"],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: "img-loader",
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ["data-src", "src"];
        vue.transformAssetUrls.source = ["data-srcset", "srcset"];
      }
    }
  },
  router: {
    linkActiveClass: "linkActiveClass",
    linkExactActiveClass: "linkExactActiveClass"
  }
};
