import { getAds } from "./ad-list-model.js";
import { buildAd } from "./ad-list-view.js";


export async function adListController(adList) {
    try {
        const ads = await getAds()
        if (ads.length > 0) {
            console.log('hola')
            renderAds(ads, adList)
        } else {
            renderNoAds(adList)
        }
    } catch (error) {

    }
}



function renderAds(ads, adList) {
    console.log(ads.length)
    console.log(adList)
    ads.forEach((ad) => {
        console.log(ad)
        const targetAd = document.createElement('div');
        console.log(buildAd(ad))
        targetAd.innerHTML = buildAd(ad);
        adList.appendChild(targetAd)
    })
}

function renderNoAds(adList) {
    adList.innerHTML = buildNoAds();
}