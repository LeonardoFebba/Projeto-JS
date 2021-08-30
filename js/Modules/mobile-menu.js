export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu() {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
  }

  menuButton.addEventListener('click', openMenu);
}
