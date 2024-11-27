import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "向导",
  description: "Guide",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '引导', link: '/markdown-examples' },
      { text: 'API', link: '/test'}
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      { 
        text: 'Section Title B',
        items: [
          { 
            text: 'Item C', 
            items: [
              {
              text: '132',
              link: '/test' 
              },
            ]
          },
          { text: 'Item D', link: '/test' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/jdbewl' }
    ]
  }
})
