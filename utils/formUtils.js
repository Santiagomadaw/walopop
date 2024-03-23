
export function nomalizeFormValues(dataObj){
    if (!dataObj['photo']) {
        dataObj['photo'] = 'https://colegiocei.es/wp-content/uploads/2023/12/producto-sin-imagen.png'
    }
    if (!dataObj['buysell']) {
        dataObj['buysell'] = 'Venta'
    } else {
        dataObj['buysell'] = 'Compra'
    }
}

export function extractFormValues(node) {
    const adForm = node.querySelector('#ad-form')
    const formData = new FormData(adForm)
    let dataObj = {}
    formData.forEach((value, key) => {
        dataObj[key] = value
    })
    return dataObj
}