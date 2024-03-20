import { sendEvent } from "../utils/eventDispatcher.js";
import { loginUser } from "./login-model.js";

export const loginController = (loginFormNode) => {

    loginFormNode.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = loginDataExtract(loginFormNode)
        submitForm(data, loginFormNode)
    })
}
const submitForm = async (data, node) => {
    try {
        sendEvent('spinnerOn',{},node)
        const jsonWebTokken = await loginUser(data)
        localStorage.setItem('token', jsonWebTokken)
        sendEvent('formEvent',
            {
                message: 'Login success',
                type: 'success'
            },
            node)
            
            setTimeout(() => {
                window.history.back()
            }, 1200);
    } catch (error) {
        sendEvent('formEvent',
            {
                message: error,
                type: 'error'
            },
            node)
    } finally {
        sendEvent('spinnerOff',{},node)

    }
}

const loginDataExtract = (form) => {
    const formData = new FormData(form)
    let data = {}
    formData.forEach((value, key) => data[key] = value)
    return data
}