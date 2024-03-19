import { headerController } from "../mvc-header/header-controller.js";
import { notificationController } from "../mvc-notificaions/notifications-controller.js";
import { signupController } from "../mvc-signup/signup-controller.js";

const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('formEvent', (event) => {
    notificationController(signupForm,event.detail)
    event.stopPropagation();
})
signupController(signupForm)


const buttonsContiner = document.querySelector('.navContainer')
headerController(buttonsContiner)
