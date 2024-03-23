

export async function createAd(data) {
    const url = "http://localhost:8000/api/ads"
    const token = localStorage.getItem('token')

    const ads = parseData(data)
    let response
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(ads),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        })
        if (!response.ok) {
            const datares = await response.json()
            throw new Error(datares.message)
        }
        return response
    } catch (error) {
        if (error.message) {
            throw new Error('No se pudo crear el anuncio')
        }
    }
}
function parseData(data) {
    return {
        name: data.name,
        price: data.price,
        photo: data.photo,
        tags: data.tags.replace(/,/g, ' ').split(' ').filter(elemento => elemento.trim() !== ""),
        buysell: data.buysell,
        description: data.description
    }
}