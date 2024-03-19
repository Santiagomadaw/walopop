import { createAd } from "./newad-model.js";

export const newAdController = (newAdForm) => {
    
    goBackButton(newAdForm)
    
    console.log(newAdForm)
    newAdForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData (newAdForm)
        console.log(formData)
        let dataObj = {}
        formData.forEach((value,key) => {
            dataObj[key]=value
        })
        if (!dataObj['photo']){
            dataObj['photo']='https://colegiocei.es/wp-content/uploads/2023/12/producto-sin-imagen.png'
        }
        if (!dataObj['buysell']){
            dataObj['buysell']='Venta'
        }else{
            dataObj['buysell']='Compra'

        }
        console.log('url',dataObj)
        try {
            await createAd(dataObj)
            /* setTimeout(() => {
                window.location = "index.html";
            }, 1200) */
        } catch (error) {
            alert(error)
        }
    })
}


function goBackButton(newAdForm) {
    const backButton = newAdForm.querySelector('.backButton')
    backButton.addEventListener('click', () => { 
        window.history.back() })
}