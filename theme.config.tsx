import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>MPX WIKI</span>,
  project: {
    link: 'https://github.com/MagicPhoenix/mpx-wiki/',
  },
  chat: {
    link: 'https://discord.gg/3Uhq6k7YSg',
  },
  docsRepositoryBase: 'https://github.com/MagicPhoenix/mpx-wiki/tree/main',
  footer: {
    text: 'MPX Wiki @2020-2024',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // here
  },
    head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://nextra.site/og.jpeg'
        : `https://nextra.site/api/og?title=${title}`

    return (
      <>
        <meta
          name="og:title"
          content={title ? title + ' – MPX Wiki' : 'MPX'}
        />
        <link rel="icon" href="/favicon.ico" type="image/ico" />
      </>
    )
  },

}

export default config
