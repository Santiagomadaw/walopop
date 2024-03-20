

export async function createAd(data) {
    const url = "http://localhost:8000/api/ads"
    const token = localStorage.getItem('token')

    let response
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }

        })
        if (!response.ok) {
            const datares = await response.json()
            throw new Error(datares.message);
        }
        return response
    } catch (error) {
        if (error.message) {
            throw new Error ('No se pudo crear el anuncio')
        }
    }
}