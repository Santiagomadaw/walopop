export async function getAds(){
    const url = 'http://localhost:8000/api/ads'
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