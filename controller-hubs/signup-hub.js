import { headerController } from "../mvc-header/header-controller.js";
import { notificationController } from "../mvc-notificaions/notifications-controller.js";
import { signupController } from "../mvc-signup/signup-controller.js";
import { loaderController } from "../mvc-loader/loader-controller.js"

const signupForm = document.querySelector('#signup-form')
const { showLoader, hideLoader } = loaderController(signupForm)

signupForm.addEventListener('formEvent', (event) => {
    notificationController(signupForm,event.detail)
    event.stopPropagation();
})

signupForm.addEventListener('spinnerOn', (event) => {
    showLoader()
    event.stopPropagation();
})
signupForm.addEventListener('spinnerOff', (event) => {
    hideLoader()
    event.stopPropagation();
})
signupController(signupForm)


const buttonsContiner = document.querySelector('.navContainer')
headerController(buttonsContiner)
