export async function getAdDetail(adId) {
    const url = `http://localhost:8000/api/ads/${adId}`
    let data
    try {
        const response = await fetch(url);
        data = await response.json();
        return data
    } catch (error) {
        throw new Error('Error obteniendo tweet')
    }

}

export async function getUser(token) {
    const url = 'http://localhost:8000/auth/me'
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        return data.id
    } catch (error) {
        throw new Error('Error datos del usuario')
    }
}

export async function removeAd(id, token) {
    const url = `http://localhost:8000/api/ads/${id}`
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const data = await response.json()
            throw new Error(data.message);
        }
    } catch (error) {
        throw new Error('Error eliminado anuncio')
    }

}