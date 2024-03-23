import { handelError, spinnerOff, spinnerOn } from "../utils/eventHandler.js";
import { getAds } from "./ad-list-model.js";
import { buildAd, buildNoAd } from "./ad-list-view.js";


export async function adListController(adListContiner, page = 1) {
    const params = window.location.href.split('?')[1]
    const adList =document.createElement('div')
    adList.classList = 'ad-list'
    adListContiner.appendChild(adList)
    try {
        spinnerOn(adListContiner)
        const ads = await getAds(page, params)
        if (ads.length > 0) {
            renderAds(ads, adList)
            if(ads.length >= 10){
            const button = document.createElement('button')
            button.classList='more-ads-button'
            button.innerHTML='Mostrar mas anuncios'
            button.addEventListener('click', async ()=>{
                page++
                const moreAds = await getAds(page, params)
                if (moreAds.length > 0){
                    renderAds(moreAds, adList)
                }
                if(moreAds.length < 10){
                    button.remove()
                }
            })
            adListContiner.appendChild(button)
        }
        } else {
            renderNoAds(adList)
        }
    } catch (error) {
        handelError(error.message,adListContiner)
        setTimeout(() => {
            renderNoAds(adList)
        }, 2000);
    }finally{
        spinnerOff(adListContiner)
    }
}


function renderAds(ads, adList) {
    ads.forEach((ad) => {
        const targetAd = document.createElement('div');
        targetAd.innerHTML = buildAd(ad);
        adList.appendChild(targetAd)
    })
}

function renderNoAds(adList) {
    adList.innerHTML = buildNoAd();
}