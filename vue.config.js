// vue.config.js
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin')
const Visualizer = require('webpack-visualizer-plugin');
const supportedLocales = ['en']

module.exports = {
    productionSourceMap: false,
    configureWebpack: config => {
      config.performance = { hints: false }   
    },
    chainWebpack: config => {  
      
      config.plugin('context-replacement')
      .use(ContextReplacementPlugin, [/date\-fns[\/\\]/, new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]`)])

      config.plugin('visualizer')
      .use(Visualizer, [{ filename: 'stats.html'}])

      config.plugin('copy').tap(([options]) => {
        console.log('options', options);
        options[0].ignore.push('tests/**/*')
        console.log('options', options);
        return [options]
      })
      // .tap(args => {
      //   console.log('args', args)
      //   args[0].template = '/Users/username/proj/app/templates/index.html'
      //   return args
      // })
    },
    //  plugins: [
    //   /* config.plugin('context-replacement') */
    //   new ContextReplacementPlugin(
    //     /date\-fns[\/\\]/,
    //     new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]`)
    //   )
    //  ]
  }
  