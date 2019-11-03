(() => {
  const elements = document.querySelectorAll('#sidebar');
  M.Sidenav.init(elements, {});
  const open = document.querySelector('#btn-sidebar');
  open.addEventListener('click', () => {
    const instance = M.Sidenav.getInstance(
        document.querySelector(`#${open.getAttribute('bound-to')}`)
    );
    instance.open();
  });
})();
