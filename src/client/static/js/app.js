new Router({
  routes: {
    '/main': new Route({
      url: '/main',
      context: 'app',
      default: '/about',
      isParent: true,
      hasScript: true,
      script: '/js/main.js'
    }),
    '/about': new Route({
      url: '/about',
      context: 'main'
    }),
    '/contact': new Route({
      url: '/contact',
      context: 'main',
      hasScript: true,
      script: '/js/contact.js'
    }),
    '/projects': new Route({
      url: '/projects',
      context: 'main'
    }),
    '/resume': new Route({
      url: '/resume',
      context: 'main'
    })
  }
});
