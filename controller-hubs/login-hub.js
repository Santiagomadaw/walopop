import { headerController } from "../mvc-header/header-controller.js";
import { loginController } from "../mvc-login/login-controller.js";
import { notificationController } from "../mvc-notificaions/notifications-controller.js";

const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('formEvent', (event) => {
    notificationController(loginForm,event.detail)
    event.stopPropagation();
})
loginController(loginForm)


const buttonsContiner = document.querySelector('.navContainer')
headerController(buttonsContiner)

