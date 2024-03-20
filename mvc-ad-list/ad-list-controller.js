import { sendEvent } from "../utils/eventDispatcher.js";
import { getAds } from "./ad-list-model.js";
import { buildAd, buildNoAd } from "./ad-list-view.js";


export async function adListController(adList) {
    
    try {
        sendEvent('spinnerOn',{},adList)
        const ads = await getAds()
        if (ads.length > 0) {
            renderAds(ads, adList)
        } else {
            renderNoAds(adList)
        }
    } catch (error) {
        sendEvent('adLoaderError', {message:error, type:'error'}, adList)
        setTimeout(() => {
            renderNoAds(adList)
        }, 4000);
    }finally{
        sendEvent('spinnerOff',{},adList)
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