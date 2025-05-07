import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2b9'),
    routes: [
      {
        path: '/docs/next',
        component: ComponentCreator('/docs/next', '617'),
        routes: [
          {
            path: '/docs/next',
            component: ComponentCreator('/docs/next', 'bff'),
            routes: [
              {
                path: '/docs/next/category/cloud-setup',
                component: ComponentCreator('/docs/next/category/cloud-setup', 'c37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/category/configure-your-model',
                component: ComponentCreator('/docs/next/category/configure-your-model', '30b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/category/under-the-hood',
                component: ComponentCreator('/docs/next/category/under-the-hood', 'fea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/cloud-setup/aws',
                component: ComponentCreator('/docs/next/cloud-setup/aws', '6fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/cloud-setup/gcp',
                component: ComponentCreator('/docs/next/cloud-setup/gcp', '140'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/configure/model-yaml',
                component: ComponentCreator('/docs/next/configure/model-yaml', '448'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/configure/under-the-hood/job-json',
                component: ComponentCreator('/docs/next/configure/under-the-hood/job-json', '186'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/getting-started',
                component: ComponentCreator('/docs/next/getting-started', 'dae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/supported',
                component: ComponentCreator('/docs/next/supported', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/next/welcome',
                component: ComponentCreator('/docs/next/welcome', 'ba2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fea'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c97'),
            routes: [
              {
                path: '/docs/category/cloud-setup',
                component: ComponentCreator('/docs/category/cloud-setup', '682'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/configure-your-model',
                component: ComponentCreator('/docs/category/configure-your-model', 'a02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/under-the-hood',
                component: ComponentCreator('/docs/category/under-the-hood', '3d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cloud-setup/aws',
                component: ComponentCreator('/docs/cloud-setup/aws', '6b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/cloud-setup/gcp',
                component: ComponentCreator('/docs/cloud-setup/gcp', '90f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/configure/model-yaml',
                component: ComponentCreator('/docs/configure/model-yaml', '56e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/configure/under-the-hood/job-json',
                component: ComponentCreator('/docs/configure/under-the-hood/job-json', 'fb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started',
                component: ComponentCreator('/docs/getting-started', 'aef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/supported',
                component: ComponentCreator('/docs/supported', '8b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/welcome',
                component: ComponentCreator('/docs/welcome', '257'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
