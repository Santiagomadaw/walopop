import { headerController } from "../mvc-header/header-controller.js"
import { loaderController } from "../mvc-loader/loader-controller.js"
import { newAdController } from "../mvc-newad/newad-controller.js"
import { notificationController } from "../mvc-notificaions/notifications-controller.js"

const newAdForm = document.querySelector('#new-ad-form')
const { showLoader, hideLoader } = loaderController(newAdForm)
newAdForm.addEventListener('formEvent', (event) => {
    notificationController(newAdForm,event.detail)
    event.stopPropagation();
})
newAdForm.addEventListener('spinnerOn', (event) => {
    showLoader()
    event.stopPropagation();
})
newAdForm.addEventListener('spinnerOff', (event) => {
    hideLoader()
    event.stopPropagation();
})
newAdController(newAdForm)
const buttonsContiner = document.querySelector('.navContainer')
headerController(buttonsContiner)
