import { notificationController } from "../mvc-notificaions/notifications-controller.js";
import { signupController } from "../mvc-signup/signup-controller.js";

const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('formError', (event) => {
    notificationController(signupForm,event.detail)
    event.stopPropagation();
})
signupController(signupForm)