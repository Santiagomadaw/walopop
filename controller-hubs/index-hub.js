import { adListController } from "../mvc-ad-list/ad-list-controller.js"
import { headerController } from "../mvc-header/header-controller.js"
import { notificationController } from "../mvc-notificaions/notifications-controller.js"
import { loaderController } from "../mvc-loader/loader-controller.js"

const adList = document.querySelector('.ad-list')
const { showLoader, hideLoader } = loaderController(adList)
adList.addEventListener('adLoaderError', (event) => {
    notificationController(adList,event.detail)
    event.stopPropagation();
})
adList.addEventListener('spinnerOn', (event) => {
    showLoader()
    event.stopPropagation();
})
adList.addEventListener('spinnerOff', (event) => {
    hideLoader()
    event.stopPropagation();
})
adListController(adList)
const buttonsContiner = document.querySelector('.navContainer')
headerController(buttonsContiner)
