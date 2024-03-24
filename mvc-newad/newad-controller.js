import { handelError, handelSucces, spinnerOff, spinnerOn } from "../utils/eventHandler.js"
import { extractFormValues, nomalizeFormValues } from "../utils/formUtils.js"
import { createAd } from "./newad-model.js"

export const newAdController = (newAdForm) => {
    newAdForm.querySelector('#name').focus()
    goBackButton(newAdForm)
    newAdForm.addEventListener('submit', async (event) => {
        event.preventDefault()
        let dataObj = extractFormValues(newAdForm)
        nomalizeFormValues(dataObj)

        try {
            spinnerOn(newAdForm)
            const response = await createAd(dataObj)
            const data = await response.json()
            handelSucces('Anuncio creado', newAdForm)
            setTimeout(() => {
                window.location = `ad-detail.html?id=${data.id}`
            }, 1200)
        } catch (error) {
            handelError(error, newAdForm)
        } finally {
            spinnerOff(newAdForm)
        }
    })
}


function goBackButton(newAdForm) {
    const backButton = newAdForm.querySelector('.backButton')
    backButton.addEventListener('click', () => {
        window.history.back()
    })
}