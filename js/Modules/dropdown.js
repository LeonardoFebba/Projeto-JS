export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropdownMenus.forEach((item) => {
    ['touchsatar', 'click'].forEach((userEvent) => {
      item.addEventListener(userEvent, handleClick);
    });
  });

  function outsideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {
      events.forEach((userEvent) => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
      element.setAttribute(outside, '');
    }
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach((userEvent) => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });

        callback();
      }
    }
  }
}
