import { getAds } from "./ad-list-model.js";
import { buildAd } from "./ad-list-view.js";


export async function adListController(adList) {
    try {
        const ads = await getAds()
        if (ads.length > 0) {
            renderAds(ads, adList)
        } else {
            renderNoAds(adList)
        }
    } catch (error) {

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
    adList.innerHTML = buildNoAds();
}