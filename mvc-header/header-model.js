export async function getTags(){

    let url = `http://localhost:8000/api/ads`
    let tags = []
    try {
        const response =await fetch(url)
        const data = await response.json()
        tags = extractTags(data)
    } catch (error) {
        throw new Error ('Error al obtener tags')
    }

    return tags
}
function extractTags(ads){
    return ads.map(ad => ([
        ad.tags
    ]))
}