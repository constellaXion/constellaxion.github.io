import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Constellaxion CLI",
  tagline: "Build, Deploy, and Serve LLMs to your private cloud with Ease",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://constellaxion.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "constellaXion", // Usually your GitHub org/user name.
  projectName: "constellaxion.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/constellaXion/constellaxion.github.io/tree/main/`,
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: `https://github.com/constellaXion/constellaxion.github.io/tree/main/`,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "",
        src: "img/icon.svg",
      },
      items: [
        // {
        //   type: "docSidebar",
        //   sidebarId: "tutorialSidebar",
        //   position: "left",
        //   label: "Docs",
        // },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/constellaXion/constellaXion-cli",
          label: "GitHub",
          position: "right",
        },
        {
          type: "docsVersionDropdown",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/constellaXion/constellaXion-cli",
            },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "HQ",
              href: "https://constellaxion.ai",
            },
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: "YOUR_APP_ID",

    //   // Public API key: it is safe to commit it
    //   apiKey: "YOUR_SEARCH_API_KEY",

    //   indexName: "YOUR_INDEX_NAME",

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: "external\\.com|domain\\.com",

    //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //   replaceSearchResultPathname: {
    //     from: "/docs/", // or as RegExp: /\/docs\//
    //     to: "/",
    //   },

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: "search",

    //   // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
    //   insights: false,

    //   //... other Algolia params
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
