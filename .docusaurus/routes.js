import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/constellaxion.github.io/__docusaurus/debug',
    component: ComponentCreator('/constellaxion.github.io/__docusaurus/debug', '2c6'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/__docusaurus/debug/config',
    component: ComponentCreator('/constellaxion.github.io/__docusaurus/debug/config', 'f6e'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/__docusaurus/debug/content',
    component: ComponentCreator('/constellaxion.github.io/__docusaurus/debug/content', 'bd1'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/__docusaurus/debug/globalData',
    component: ComponentCreator('/constellaxion.github.io/__docusaurus/debug/globalData', '2f4'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/__docusaurus/debug/metadata',
    component: ComponentCreator('/constellaxion.github.io/__docusaurus/debug/metadata', '1ee'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/__docusaurus/debug/registry',
    component: ComponentCreator('/constellaxion.github.io/__docusaurus/debug/registry', 'b03'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/__docusaurus/debug/routes',
    component: ComponentCreator('/constellaxion.github.io/__docusaurus/debug/routes', '0c4'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog',
    component: ComponentCreator('/constellaxion.github.io/blog', '7fa'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/archive',
    component: ComponentCreator('/constellaxion.github.io/blog/archive', '0ce'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/authors',
    component: ComponentCreator('/constellaxion.github.io/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/constellaxion.github.io/blog/authors/all-sebastien-lorber-articles', 'd7a'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/authors/yangshun',
    component: ComponentCreator('/constellaxion.github.io/blog/authors/yangshun', '043'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/first-blog-post',
    component: ComponentCreator('/constellaxion.github.io/blog/first-blog-post', '8dc'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/long-blog-post',
    component: ComponentCreator('/constellaxion.github.io/blog/long-blog-post', '809'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/mdx-blog-post',
    component: ComponentCreator('/constellaxion.github.io/blog/mdx-blog-post', '40b'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/tags',
    component: ComponentCreator('/constellaxion.github.io/blog/tags', 'be7'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/tags/docusaurus',
    component: ComponentCreator('/constellaxion.github.io/blog/tags/docusaurus', 'd2a'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/tags/facebook',
    component: ComponentCreator('/constellaxion.github.io/blog/tags/facebook', 'f0c'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/tags/hello',
    component: ComponentCreator('/constellaxion.github.io/blog/tags/hello', '944'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/tags/hola',
    component: ComponentCreator('/constellaxion.github.io/blog/tags/hola', '26e'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/blog/welcome',
    component: ComponentCreator('/constellaxion.github.io/blog/welcome', '198'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/markdown-page',
    component: ComponentCreator('/constellaxion.github.io/markdown-page', '8d4'),
    exact: true
  },
  {
    path: '/constellaxion.github.io/docs',
    component: ComponentCreator('/constellaxion.github.io/docs', '189'),
    routes: [
      {
        path: '/constellaxion.github.io/docs/next',
        component: ComponentCreator('/constellaxion.github.io/docs/next', '89a'),
        routes: [
          {
            path: '/constellaxion.github.io/docs/next',
            component: ComponentCreator('/constellaxion.github.io/docs/next', 'f31'),
            routes: [
              {
                path: '/constellaxion.github.io/docs/next/category/cloud-setup',
                component: ComponentCreator('/constellaxion.github.io/docs/next/category/cloud-setup', '10c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/next/category/configure-your-model',
                component: ComponentCreator('/constellaxion.github.io/docs/next/category/configure-your-model', 'a86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/next/category/under-the-hood',
                component: ComponentCreator('/constellaxion.github.io/docs/next/category/under-the-hood', '344'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/next/cloud-setup/aws',
                component: ComponentCreator('/constellaxion.github.io/docs/next/cloud-setup/aws', 'e10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/next/cloud-setup/gcp',
                component: ComponentCreator('/constellaxion.github.io/docs/next/cloud-setup/gcp', 'aa4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/next/configure/model-yaml',
                component: ComponentCreator('/constellaxion.github.io/docs/next/configure/model-yaml', 'c63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/next/configure/under-the-hood/job-json',
                component: ComponentCreator('/constellaxion.github.io/docs/next/configure/under-the-hood/job-json', '9c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/next/getting-started',
                component: ComponentCreator('/constellaxion.github.io/docs/next/getting-started', 'f5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/next/supported',
                component: ComponentCreator('/constellaxion.github.io/docs/next/supported', '3fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/next/welcome',
                component: ComponentCreator('/constellaxion.github.io/docs/next/welcome', 'b43'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/constellaxion.github.io/docs',
        component: ComponentCreator('/constellaxion.github.io/docs', 'a96'),
        routes: [
          {
            path: '/constellaxion.github.io/docs',
            component: ComponentCreator('/constellaxion.github.io/docs', 'a46'),
            routes: [
              {
                path: '/constellaxion.github.io/docs/category/cloud-setup',
                component: ComponentCreator('/constellaxion.github.io/docs/category/cloud-setup', '5de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/category/configure-your-model',
                component: ComponentCreator('/constellaxion.github.io/docs/category/configure-your-model', 'b5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/category/under-the-hood',
                component: ComponentCreator('/constellaxion.github.io/docs/category/under-the-hood', '68f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/cloud-setup/aws',
                component: ComponentCreator('/constellaxion.github.io/docs/cloud-setup/aws', 'c9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/cloud-setup/gcp',
                component: ComponentCreator('/constellaxion.github.io/docs/cloud-setup/gcp', '782'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/configure/model-yaml',
                component: ComponentCreator('/constellaxion.github.io/docs/configure/model-yaml', '55f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/configure/under-the-hood/job-json',
                component: ComponentCreator('/constellaxion.github.io/docs/configure/under-the-hood/job-json', 'ab7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/getting-started',
                component: ComponentCreator('/constellaxion.github.io/docs/getting-started', '3f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/supported',
                component: ComponentCreator('/constellaxion.github.io/docs/supported', 'b5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/constellaxion.github.io/docs/welcome',
                component: ComponentCreator('/constellaxion.github.io/docs/welcome', '4c1'),
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
    path: '/constellaxion.github.io/',
    component: ComponentCreator('/constellaxion.github.io/', '0d5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
