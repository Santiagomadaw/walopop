export function buildDetail(data){
    return `<div class="img-container">
    <img src="${data.photo}" alt="">
</div>
<h2>${data.price} €</h2>
<h2>${data.name}</h2>
<div class="tags-container"></div>
<h4>${data.buysell}</h4>
<p>${data.description}</p>
<button disabled id="removeAdButton">Borrar Anuncio</button>
<button id="backButton">Volver atrás</button>
`
}

export function buildTags(tag){
    console.log(tag)
    return `<h4>${tag}</h4>`
}