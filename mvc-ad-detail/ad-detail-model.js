export async function getAdDetail(adId) {
    const url = `http://localhost:8000/api/ads/${adId}`
    try {
        const response = await fetch(url);
        if (response.ok){
        const data = await response.json();
        const ad = parseAd(data)
        
        return ad
        }else{
            throw new Error('No se encuentra el anuncio')
        }
    } catch (error) {
        if (error.message){
            
        }
        throw new Error('Error accediendo al base de datos')
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
        const user = parseUser(data)
        return user.userId
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
        throw new Error(error.message)
    }

}

const parseAd = (data) =>{
    return{
        id: data.id,
        name: data.name,
        userId: data.userId,
        price: data.price,
        photo: data.photo,
        tags: data.tags,
        buysell: data.buysell,
        description: data.description
    }
}
const parseUser = (data) => {
    return{
        userId: data.id
    }
}