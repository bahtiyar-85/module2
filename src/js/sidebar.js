
const sidebarOpenBtn = document.querySelector(".header__burger")
const sidebarCloseBtn = document.querySelector(".sidebar__btn_close")
const linkClose = document.querySelector(".sidebar__link_close")

export const showHideToggle = (className) => {
    const link = document.querySelector(`.${className}`)
    link.classList.toggle(`${className}_show`);
}

const addBoldStyle = (number) => {
    const links = document.querySelectorAll(".header__list-item")
    const sidebarLinks = document.querySelectorAll(".sidebar__link")
    links.forEach((item, index )=> {
        if(number === index) {
            item.classList.add("header__list-item_bold")
            sidebarLinks[index].classList.add("header__list-item_bold")
        } else {
            item.classList.remove("header__list-item_bold")
            sidebarLinks[index].classList.remove("header__list-item_bold")
        }
    })
}

const location = () => {
    const location = window.location.href
    if(location.includes("index.html")){
        addBoldStyle(0)
    } else if(location.includes("startup.html")){
        addBoldStyle(1)
    }   else if(location.includes("trening.html")){
        addBoldStyle(2)
    }
}
export const sidebarInit = () => {
    sidebarOpenBtn.addEventListener('click', () => showHideToggle('sidebar'))
    sidebarCloseBtn.addEventListener('click', () => showHideToggle('sidebar'))
    linkClose.addEventListener('click', () => showHideToggle('sidebar'))
    location()
}