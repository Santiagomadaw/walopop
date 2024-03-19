import { loaderController } from "../mvc-loader/loader-controller.js";
import { sendEvent } from "../utils/eventDispatcher.js";
import { createUser } from "./signup-model.js";

export function signupController(signupForm) {
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
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
                sendEvent('formEvent',
                    {
                        message: error,
                        type: 'error'
                    },
                    signupForm))
            : newUser(formData, signupForm)
    })
}
async function newUser(data, node) {
    const { showLoader, hideLoader } = loaderController(node)
    try {
        showLoader()
        await createUser(data)
        sendEvent('formEvent',
            {
                message: 'Usuario creado',
                type: 'success'
            },
            node)
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 1200);
    } catch (error) {
        sendEvent('formEvent',
            {
                message: error,
                type: 'error'
            },
            node)
    } finally {
        hideLoader()
    }
}
const dataExtract = (signupForm) => {
    const formData = new FormData(signupForm)
    let data = {}
    formData.forEach((value, key) => data[key] = value)
    return data
}

const mailValidate = (email) => {
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return emailRegExp.test(email)
}

const passValidate = (formData) => {
    return formData.pass === formData.passConfirmation
}