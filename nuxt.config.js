export default {
  buildModules: ['@nuxt/typescript-build'],
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  }
}
