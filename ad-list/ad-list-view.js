export function buildAd(ad) {
    return `
    <a class="add" href="ad-detail.html?tweetId=${ad.id}">
    <div class="single-ad">
            <img src="${ad.photo}" alt="">
            <strong class="">${ad.price} €</strong>
            <p class="item">${ad.name}</p>
        </div> 
    </a>
    `
}