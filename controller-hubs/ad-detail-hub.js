import { detailController } from "../mvc-ad-detail/ad-detail-controller.js"
import { headerController } from "../mvc-header/header-controller.js"
import { loaderController } from "../mvc-loader/loader-controller.js"
import { notificationController } from "../mvc-notificaions/notifications-controller.js"
const adDetailNode = document.querySelector('.ad-detail')
const { showLoader, hideLoader } = loaderController(adDetailNode)

adDetailNode.addEventListener('newevent', (event) => {
    notificationController(adDetailNode, event.detail)
    event.stopPropagation()
})

adDetailNode.addEventListener('spinnerOn', (event) => {
    showLoader()
    event.stopPropagation()
})
adDetailNode.addEventListener('spinnerOff', (event) => {
    hideLoader()
    event.stopPropagation()
})

detailController(adDetailNode)
const header = document.querySelector('.header')
headerController(header)



