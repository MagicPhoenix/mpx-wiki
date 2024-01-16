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
  head: (
    <>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href={"/favicon.ico"}
      />
    </>
  )
}

export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – MPX Wiki'
    }
  }
}



export default config
