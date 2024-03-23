import { handelError, handelSucces, spinnerOff, spinnerOn } from "../utils/eventHandler.js"
import { loginUser } from "./login-model.js"

export const loginController = (loginFormNode) => {

    loginFormNode.addEventListener('submit', (event) => {
        event.preventDefault()
        const data = loginDataExtract(loginFormNode)
        submitForm(data, loginFormNode)
    })
}
const submitForm = async (data, node) => {
    try {
        spinnerOn(node)
        const jsonWebTokken = await loginUser(data)
        localStorage.setItem('token', jsonWebTokken)
        handelSucces('Login success', node)
        setTimeout(() => {
            window.history.back()
        }, 1200)
    } catch (error) {
        handelError(error, node)
    } finally {
        spinnerOff(node)

    }
}

const loginDataExtract = (form) => {
    const formData = new FormData(form)
    let data = {}
    formData.forEach((value, key) => data[key] = value)
    return data
}