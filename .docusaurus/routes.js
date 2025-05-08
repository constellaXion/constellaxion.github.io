import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '9a1'),
    routes: [
      {
        path: '/next',
        component: ComponentCreator('/next', 'c8c'),
        routes: [
          {
            path: '/next',
            component: ComponentCreator('/next', '731'),
            routes: [
              {
                path: '/next/category/cloud-setup',
                component: ComponentCreator('/next/category/cloud-setup', '1ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/category/configure-your-model',
                component: ComponentCreator('/next/category/configure-your-model', 'ad1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/category/under-the-hood',
                component: ComponentCreator('/next/category/under-the-hood', '163'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/cloud-setup/aws',
                component: ComponentCreator('/next/cloud-setup/aws', '1df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/cloud-setup/gcp',
                component: ComponentCreator('/next/cloud-setup/gcp', '5d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/configure/model-yaml',
                component: ComponentCreator('/next/configure/model-yaml', '507'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/configure/under-the-hood/job-json',
                component: ComponentCreator('/next/configure/under-the-hood/job-json', '0eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/getting-started',
                component: ComponentCreator('/next/getting-started', '959'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/supported',
                component: ComponentCreator('/next/supported', '6eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/next/welcome',
                component: ComponentCreator('/next/welcome', '684'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/',
        component: ComponentCreator('/', 'aaf'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '85a'),
            routes: [
              {
                path: '/category/cloud-setup',
                component: ComponentCreator('/category/cloud-setup', '602'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/configure-your-model',
                component: ComponentCreator('/category/configure-your-model', '0b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/under-the-hood',
                component: ComponentCreator('/category/under-the-hood', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cloud-setup/aws',
                component: ComponentCreator('/cloud-setup/aws', 'f48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/cloud-setup/gcp',
                component: ComponentCreator('/cloud-setup/gcp', '285'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/configure/model-yaml',
                component: ComponentCreator('/configure/model-yaml', 'fa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/configure/under-the-hood/job-json',
                component: ComponentCreator('/configure/under-the-hood/job-json', '7e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/getting-started',
                component: ComponentCreator('/getting-started', 'c22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/supported',
                component: ComponentCreator('/supported', '876'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/welcome',
                component: ComponentCreator('/welcome', 'e40'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
