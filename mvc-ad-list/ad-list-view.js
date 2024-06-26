export function buildAd(ad) {
    return `
    <a class="add" href="ad-detail.html?id=${ad.id}">
    <div class="single-ad">
            <img src="${ad.photo}" alt="">
            <strong class="">${ad.price} €</strong>
            <p class="item">${ad.name}</p>
            <p class="buysell">${ad.buysell}</p>
            <p class="description">${ad.description}</p>
        </div> 
    </a>
    `
}

export function buildNoAd() {
    return `
    <div class="no-ad">
            <h1>No se han encontrado anuncios</h1>
        </div> 
    `
}