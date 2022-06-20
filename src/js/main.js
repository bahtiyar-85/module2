
const sidebarOpenBtn = document.querySelector(".header__burger")
const sidebarCloseBtn = document.querySelector(".sidebar__btn_close")

const sidebarToggle = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle("sidebar_show")
}

export const sidebarInit = () => {
    sidebarOpenBtn.addEventListener('click', sidebarToggle)
    sidebarCloseBtn.addEventListener('click', sidebarToggle)
}