import { sendEvent } from "../utils/eventDispatcher.js";
import { createAd } from "./newad-model.js";

export const newAdController = (newAdForm) => {
    
    goBackButton(newAdForm)
    
    newAdForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData (newAdForm)
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
        try {
            sendEvent('spinnerOn',{},newAdForm)
            const response = await createAd(dataObj)
            const data = await response.json()
            sendEvent('formEvent',
                        {
                            message:'Anuncio creado',
                            type:'success'
                        },
                        newAdForm)
            
            setTimeout(() => {
                window.location = `ad-detail.html?id=${data.id}`;
            }, 1200)
        } catch (error) {
            sendEvent('formEvent',
                        {
                            message:error.message,
                            type:'error'
                        },
                        newAdForm)
        }finally{
            sendEvent('spinnerOff',{},newAdForm)
        }
    })
}


function goBackButton(newAdForm) {
    const backButton = newAdForm.querySelector('.backButton')
    backButton.addEventListener('click', () => { 
        window.history.back() })
}