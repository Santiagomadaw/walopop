import { adListController } from "../mvc-ad-list/ad-list-controller.js"
import { notificationController } from "../mvc-notificaions/notifications-controller.js"

const adList = document.querySelector('.ad-list')
adListController(adList)



adList.addEventListener('adLoaderError', (event) => {
    notificationController(adList,event.detail)
    event.stopPropagation();
})