import { showHideToggle } from "./sidebar"


const modalOpenBtn = document.querySelector('.decision__btn_width')
const modalClodeBtn = document.querySelector('.modal__btn-close')
const form = document.querySelector('.order')

const checkValid = (value) => {
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

const checkFormValid = () => {
    const links = getInputs()
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

const addFocusListener = () => {
    const links = getInputs()
    links.forEach(input => {
        input.addEventListener('focus', function(e){
            if(e.target.classList.contains('input_error')){
                e.target.classList.remove('input_error')
                e.target.nextElementSibling.textContent = ""
            }
        } )
    })
}
const cleanForm = () => {
    const links =  getInputs()
    const submitBtn = document.querySelector('.order__btn_width')
    submitBtn.classList.remove("order__btn_send")
    submitBtn.textContent = "отправить"
    document.querySelector('.order__success').textContent = ""
    links.forEach(input => {
        input.value = ""
        input.nextElementSibling.textContent = ""
        input.classList.remove('input_error')
    })
}
const handleSubmit = (e) => {
    e.preventDefault()
    const submitBtn = document.querySelector('.order__btn_width')
    submitBtn.classList.add("order__btn_send")
    submitBtn.textContent = "идет отправка..."
    setTimeout(function () {
        if(checkFormValid()){
            document.querySelector('.order__success').textContent = "Ваша заявка успешно отправлена!"
        } else {
            submitBtn.classList.remove("order__btn_send")
            submitBtn.textContent = "отправить"
        }
    }, 1000);
    
}

export const modalInit = () => {
    form.addEventListener('submit', (e) => handleSubmit(e))
    modalOpenBtn.addEventListener('click', () => showHideToggle('modal'))
    modalClodeBtn.addEventListener('click', () => {
        showHideToggle('modal')
        cleanForm()
    })
    addFocusListener();
}