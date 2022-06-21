
const sidebarOpenBtn = document.querySelector(".header__burger")
const sidebarCloseBtn = document.querySelector(".sidebar__btn_close")

export const showHideToggle = (className) => {
    const link = document.querySelector(`.${className}`)
    console.log(link);
    link.classList.toggle(`${className}_show`);
}

export const sidebarInit = () => {
    sidebarOpenBtn.addEventListener('click', () => showHideToggle('sidebar'))
    sidebarCloseBtn.addEventListener('click', () => showHideToggle('sidebar'))
}