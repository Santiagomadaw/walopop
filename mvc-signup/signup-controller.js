import { sendEvent } from "../utils/eventDispatcher.js"
import { createUser } from "./signup-model.js"

export function signupController(signupForm) {
    signupForm.querySelector('#email').focus()
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const formData = dataExtract(signupForm)
        let errors = []
        !mailValidate(formData.email)
            ? errors.push('Formato de email no valido')
            : ''
        !passValidate(formData)
            ? errors.push('Las contraseñas no coinciden')
            : ''
        errors.length > 0
            ? errors.forEach(error =>
                sendEvent('newevent',
                    {
                        message: error,
                        type: 'error'
                    },
                    signupForm))
            : newUser(formData, signupForm)
    })
}
async function newUser(data, node) {
    try {
        sendEvent('spinnerOn', {}, node)
        await createUser(data)
        sendEvent('newevent',
            {
                message: 'Usuario creado',
                type: 'success'
            },
            node)
        setTimeout(() => {
            window.history.back()
        }, 1200)
    } catch (error) {
        sendEvent('newevent',
            {

                message: error.message,
                type: 'error'
            },
            node)
    } finally {
        sendEvent('spinnerOff', {}, node)
    }
}
const dataExtract = (signupForm) => {
    const formData = new FormData(signupForm)
    let data = {}
    formData.forEach((value, key) => data[key] = value)
    return data
}

const mailValidate = (email) => {
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    return emailRegExp.test(email)
}

const passValidate = (formData) => {
    return formData.pass === formData.passConfirmation
}