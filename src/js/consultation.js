import { checkValid } from "./modal";
import { checkFormValid } from "./modal";
import { addFocusListener } from "./modal";
import { handleSubmit } from "./modal";

const getConsultInputs = () => {
    const name = document.querySelector("#name2")
    const email = document.querySelector("#email2")
    return [ name, email ]
} 
export const consaltInit = () => {
    // const modalOpenBtn = document.querySelector('.decision__btn_width')
    // const modalClodeBtn = document.querySelector('.modal__btn-close')
    const form = document.querySelector('.consult__form')
    const links =  getConsultInputs()
    const submitBtn = document.querySelector('.consult__btn_width')
    const showingMessage = document.querySelector('.order__success-message')

    form?.addEventListener('submit', (e) => handleSubmit(e, links, submitBtn, showingMessage))
    // modalOpenBtn?.addEventListener('click', () => showHideToggle('modal'))
    // modalClodeBtn?.addEventListener('click', () => {
    //     showHideToggle('modal')
    //     cleanForm(links, submitBtn, showingMessage)
    // })
    addFocusListener(links);
}