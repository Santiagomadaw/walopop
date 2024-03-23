export async function getAds(page, params){

    let url = `http://localhost:8000/api/ads?_page=${page}&${params}`
    let ads = []
    try {
        const response =await fetch(url)
        const data = await response.json()
        ads = parseData(data)
        
    } catch (error) {
        throw new Error ('Error al obtener anuncios')
    }
    return ads
}

function parseData(data){
    return data.map(data=>({
        id: data.id,
        name: data.name,
        userId: data.userId,
        price: data.price,
        photo: data.photo,
        tags: data.tags,
        buysell: data.buysell,
        description: data.description
    }))
}