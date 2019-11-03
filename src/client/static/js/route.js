Route.prototype = {
  url: null,
  hasScript: false,
  script: null,
  context: null,
  scriptId: '',
  default: '',
  isParent: false,
  constructor(config = {}) {
    this.url = config.url;
    this.hasScript = config.hasScript || false;
    this.script = config.script || null;
    this.context = config.context || 'app';
    this.default = config.default || '';
    this.isParent = config.isParent || false;
  },
  async render() {
    const response = await fetch(this.url);
    const htmlFromResponse = await response.text();
    const renderingContext = document.querySelector(`#${this.context}`);
    renderingContext.innerHTML = htmlFromResponse;
    if (this.default.trim().length > 0) {
      setTimeout(() => {
        location.hash = this.default;
      }, 1000);
    }
  },
  async loadScript() {
    this.scriptId = '';
    const possible = [
      'A', 'B', 'C', 'D', 'E', 'F',
      'G', 'H', 'I', 'J', 'K', 'L',
      'M', 'N', 'O', 'P', 'Q', 'R',
      'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z',
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z',
      '1', '2', '3', '4', '5', '6',
      '7', '8', '9', '0',
      '-', '_', '@', '^'
    ];
    for (let i = 0; i < possible.length; i++) {
      this.scriptId += possible[Math.floor(Math.random() * i)];
    }
    const script = document.createElement('script');
    script.id = this.scriptId;
    script.src = this.script;
    script.defer = true;
    document.body.appendChild(script);
  },
  async unloadScript() {
    const script = document.querySelector(`#${this.scriptId}`);
    script.remove();
    this.scriptId = '';
  }
};

/**
 *
 * @param {*} config
 */
function Route(config = {}) {
  this.constructor(config);
}
