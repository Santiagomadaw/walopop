export function buildDetail(data){
    return `<div class="img-container">
    <img src="${data.photo}" alt="">
</div>
<h2>${data.price} €</h2>
<h2>${data.name}</h2>
<h4>${data.tags}</h4>
<p>${data.description}</p>
<button disabled id="removeAdButton">Borrar Anuncio</button>
<button id="backButton">Volver atrás</button>
`
}