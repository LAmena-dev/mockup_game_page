const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', name: 'homePage', component: () => import('src/pages/IndexPage.vue') },
      { path: 'race', name: 'racePage', component: () => import('src/pages/RacePage.vue') },
      { path: 'story', name: 'storyPage', component: () => import('src/pages/StoryPage.vue') },
      { path: 'dev', name: 'devPage', component: () => import('src/pages/DevPage.vue') },
      { path: 'links', name: 'linksPage', component: () => import('src/pages/LinksPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
