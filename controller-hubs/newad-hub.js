import { headerController } from "../mvc-header/header-controller.js"
import { loaderController } from "../mvc-loader/loader-controller.js"
import { newAdController } from "../mvc-newad/newad-controller.js"
import { notificationController } from "../mvc-notificaions/notifications-controller.js"

const newAdForm = document.querySelector('.new-ad-contianer')
const { showLoader, hideLoader } = loaderController(newAdForm)
newAdForm.addEventListener('newevent', (event) => {
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
const header = document.querySelector('.header')
headerController(header)
