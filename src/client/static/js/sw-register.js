(async () => {
  if (navigator.serviceWorker) {
    const registration = await navigator.serviceWorker.register('/js/sw.js', {scope: '/'});
    console.log(registration);
  }
})();
