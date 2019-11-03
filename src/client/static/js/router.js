Router.prototype = {
  routes: {},
  default: '/main',
  constructor(config = {}) {
    this.routes = config.routes;
    this.watchHashChange();
    this.navigateToDefault();
  },
  watchHashChange() {
    window.addEventListener('hashchange', (event) => {
      const newRoute = this.routes[event.newURL.split('#')[1]];
      const oldRoute = this.routes[event.oldURL.split('#')[1]];
      if (oldRoute && oldRoute.hasScript && !oldRoute.isParent) {
        oldRoute.unloadScript();
      }
      if (newRoute.hasScript) {
        setTimeout(() => newRoute.loadScript(), 1000);
      }
      newRoute.render();
    });
  },
  navigateToDefault() {
    location.hash = this.default;
  }
};

/**
 *
 * @param {*} config
 */
function Router(config = {}) {
  this.constructor(config);
}
