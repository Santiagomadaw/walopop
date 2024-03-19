import { detailController } from "../mvc-ad-detail/ad-detail-controller.js"
import { headerController } from "../mvc-header/header-controller.js"

const adDetailNode = document.querySelector('.ad-detail')
detailController(adDetailNode)

const buttonsContiner = document.querySelector('.navContainer')
headerController(buttonsContiner)

