import { showHideToggle } from "./sidebar"


export const checkValid = (value) => {
    if (value === "") {
        return {
            valid: false,
            error: "поле обязательно*"
        };
    }
    return {valid: true};
}

const getInputs = () => {
    const name = document.querySelector("#name")
    const email = document.querySelector("#email")
    const description = document.querySelector("#desc") 
    return [name, email, description]
}

export const checkFormValid = (links) => {
    let bool = true
    links.forEach(input => {
        const result = checkValid(input.value)
        if(!result.valid){
            bool = false
            input.classList.add("input_error")
            input.nextElementSibling.textContent = result.error
        }
    })
    return bool
}

export const addFocusListener = (links) => {
    links.forEach(input => {
        input?.addEventListener('focus', function(e){
            if(e.target.classList.contains('input_error')){
                e.target.classList.remove('input_error')
                e.target.nextElementSibling.textContent = ""
            }
        } )
    })
}
export const cleanForm = (links, submitBtn, message) => {
    submitBtn.classList.remove("order__btn_send")
    submitBtn.textContent = "отправить"
    message.textContent = ""
    links.forEach(input => {
        input.value = ""
        input.nextElementSibling.textContent = ""
        input.classList.remove('input_error')
    })
}
export const handleSubmit = (e, inputs, button, message) => {
    e.preventDefault()
    button.classList.add("order__btn_send")
    button.textContent = "идет отправка..."
    setTimeout(function () {
        if(checkFormValid(inputs)){
            message.textContent = "Ваша заявка успешно отправлена!"
        } else {
           button.classList.remove("order__btn_send")
           button.textContent = "отправить"
        }
    }, 1000);
    
}

export const modalInit = () => {
    const modalOpenBtn = document.querySelector('.decision__btn_width')
    const modalClodeBtn = document.querySelector('.modal__btn-close')
    const form = document.querySelector('.order')
    const links =  getInputs()
    const submitBtn = document.querySelector('.order__btn_width')
    const showingMessage = document.querySelector('.order__success')

    form?.addEventListener('submit', (e) => handleSubmit(e, links, submitBtn, showingMessage))
    modalOpenBtn?.addEventListener('click', () => showHideToggle('modal'))
    modalClodeBtn?.addEventListener('click', () => {
        showHideToggle('modal')
        cleanForm(links, submitBtn, showingMessage)
    })
    addFocusListener(links);
}