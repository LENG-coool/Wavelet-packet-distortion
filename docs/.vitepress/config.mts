import { defineConfig } from 'vitepress'
import katex from 'markdown-it-katex'

export default defineConfig({
  base: '/',
  title: 'Wavelet packet distortion',
  lang: 'zh-CN',

  locales: {
    root: { 
      label: '简体中文', 
      lang: 'zh-CN', 
      link: '/', 
      themeConfig: {

      }
    }, 
    en: { 
      label: 'English', 
      lang: 'en-US', 
      link: '/en/', 
      themeConfig: {

      }
    },
    it: { 
      label: 'Italiano', 
      lang: 'it-IT', 
      link: '/it/', 
      themeConfig: {

      }
    },
    ru: { 
      label: 'Русский', 
      lang: 'ru-RU', 
      link: '/ru/', 
      themeConfig: {

      }
    }
  },

  themeConfig: {
    logoLink: '#',                  
    socialLinks: [{ icon: 'github', link: 'https://github.com/LENG-coool/Wavelet packet distortion' }],
  }
})