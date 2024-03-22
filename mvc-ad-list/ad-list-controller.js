import { sendEvent } from "../utils/eventDispatcher.js";
import { getAds } from "./ad-list-model.js";
import { buildAd, buildNoAd } from "./ad-list-view.js";


export async function adListController(adListContiner, page = 1) {
    const params = window.location.href.split('?')

    const adList =document.createElement('div')
    adList.classList = 'ad-list'
    adListContiner.appendChild(adList)
    try {
        console.log('lanzo spinner')
        sendEvent('spinnerOn',{},adListContiner)
        
        const ads = await getAds(page, params[1])
        if (ads.length > 0) {
            renderAds(ads, adList)
            if(ads.length >= 10){
            const button = document.createElement('button')
            button.classList='more-ads-button'
            button.innerHTML='Mostrar mas anuncios'
            button.addEventListener('click', async ()=>{
                page = page +1
                const moreAds = await getAds(page, params[1])
                console.log(moreAds)
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
        sendEvent(' adLoaderError',
                    {
                        message:error,
                        type:'error'
                    }
                    , adListContiner)
        setTimeout(() => {
            renderNoAds(adList)
        }, 4000);
    }finally{
        console.log('paro spinner')
        sendEvent('spinnerOff',{},adListContiner)
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