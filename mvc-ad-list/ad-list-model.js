export async function getAds(page){
    const url = `http://localhost:8000/api/ads?_page=${page}`
    let ads = []
    try {
        const response =await fetch(url)
        const data = await response.json()
        ads = data
        
    } catch (error) {
        throw new Error ('Error al obtener anuncios')
    }
    return ads


}