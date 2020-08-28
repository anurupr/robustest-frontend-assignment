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
        options[0].ignore.push('tests/**/*')        
        return [options]
      })      
    }    
  }
  