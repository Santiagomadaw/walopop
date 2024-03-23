import { headerController } from "../mvc-header/header-controller.js"
import { loginController } from "../mvc-login/login-controller.js"
import { notificationController } from "../mvc-notificaions/notifications-controller.js"
import { loaderController } from "../mvc-loader/loader-controller.js"

const loginForm = document.querySelector('#login-form')
const { showLoader, hideLoader } = loaderController(loginForm)

loginForm.addEventListener('newevent', (event) => {
    notificationController(loginForm, event.detail)
    event.stopPropagation()
})
loginForm.addEventListener('spinnerOn', (event) => {
    showLoader()
    event.stopPropagation()
})
loginForm.addEventListener('spinnerOff', (event) => {
    hideLoader()
    event.stopPropagation()
})
loginController(loginForm)


const header = document.querySelector('.header')
headerController(header)




