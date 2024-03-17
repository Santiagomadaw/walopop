import { adListController } from "../mvc-ad-list/ad-list-controller.js"
import { loaderController } from "../mvc-loader/loader-controller.js"



const adList = document.querySelector('.ad-list')
adListController(adList)