export function buildDetail(data){
    return `<div class="img-container">
    <img src="${data.photo}" alt="">
</div>
<h2>${data.price} €</h2>
<h2>${data.name}</h2>
<div class="tags-container"></div>
<h4>${data.buysell}</h4>
<p>${data.description}</p>
<button disabled id="removeAdButton">Borrar</button>
<button disabled id="editButton">Editar</button>
<button id="backButton">Volver</button>
`
}

export function buildTags(tag){
    return `<h4>${tag}</h4>`
}

export function buildEditForm(data){
    return`<form id="ad-form">
    <label for="name">Articulo:</label>
    <input type="text" value="${data.name}" name="name" id="name" required>
    <label for="price">price:</label>
    <input type="number" value="${data.price}" name="price" id="price" required>
    <label for="photo">Url foto:</label>
    <input type="text" value="${data.photo}" name="photo" id="photo">
    <label for="tags">Etiquetas:</label>
    <input type="tags" value="${data.tags.join(', ')}" name="tags" id="tags"required>
    <label for="tags">Descripcion:</label>
    <input type="text" value="${data.description}" name="description" id="description" required> 
    <div class="switch-continer">
        <h3>Venta</h3>
        <label class="switch">
            <input type="checkbox" checked="${(data.buysell==='Venta')}" name="buysell" id="buysell">
            <span class="slider round"></span>
        </label> 
        <h3>Compra</h3>
    </div>
    <button type="submit" class="newAdButton">Enviar</button>
    <button type="button" class="cancelButton">Cancelar</button>
</form>`
}