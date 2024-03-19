import { headerController } from "../mvc-header/header-controller.js"
import { newAdController } from "../mvc-newad/newad-controller.js"

const newAdForm = document.querySelector('#new-ad-form')
newAdController(newAdForm)


const buttonsContiner = document.querySelector('.navContainer')
headerController(buttonsContiner)
