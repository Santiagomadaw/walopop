import { adListController } from "../mvc-ad-list/ad-list-controller.js"
import { headerController } from "../mvc-header/header-controller.js"
import { notificationController } from "../mvc-notificaions/notifications-controller.js"
import { loaderController } from "../mvc-loader/loader-controller.js"

const adListContiner = document.querySelector('.adListContiner')
const { showLoader, hideLoader } = loaderController(adListContiner)
adListContiner.addEventListener('adLoaderError', (event) => {
    notificationController(adListContiner,event.detail)
    event.stopPropagation();
})
adListContiner.addEventListener('spinnerOn', (event) => {
    console.log('tengo lanzo spinner')
    showLoader()
    event.stopPropagation();
})
adListContiner.addEventListener('spinnerOff', (event) => {
    console.log('tengo lanzo spinner')
    hideLoader()
    event.stopPropagation();
})
adListController(adListContiner)
const header = document.querySelector('.header')
headerController(header)
