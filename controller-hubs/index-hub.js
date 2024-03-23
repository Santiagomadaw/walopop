import { adListController } from "../mvc-ad-list/ad-list-controller.js"
import { headerController } from "../mvc-header/header-controller.js"
import { notificationController } from "../mvc-notificaions/notifications-controller.js"
import { loaderController } from "../mvc-loader/loader-controller.js"

const adListContiner = document.querySelector('.adListContiner')
const { showLoader, hideLoader } = loaderController(adListContiner)
adListContiner.addEventListener('newevent', (event) => {
    notificationController(adListContiner, event.detail)
    event.stopPropagation()
})
adListContiner.addEventListener('spinnerOn', (event) => {
    showLoader()
    event.stopPropagation()
})
adListContiner.addEventListener('spinnerOff', (event) => {
    hideLoader()
    event.stopPropagation()
})
adListController(adListContiner)
const header = document.querySelector('.header')
headerController(header)
