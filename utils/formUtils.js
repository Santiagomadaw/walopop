
export function nomalizeFormValues(dataObj){
    if (!dataObj['photo']) {
        dataObj['photo'] = './img/producto-sin-imagen.png'
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