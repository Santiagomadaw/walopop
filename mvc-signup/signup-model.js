export async function createUser(data) {
    try {
        const parsedUser = parseUser(data)
        const url = 'http://localhost:8000/auth/register'
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(parsedUser),
            headers: {
                'Content-type': "application/json"
            }
        });
        if (!response.ok){
            throw new Error ('Se ha producido un error creando en usuario')
        }
        
    } catch (error) {
            throw new Error (error.message)
        
    }
}

const parseUser = (data)=>{
    return{
        username: data.email,
        password: data.pass
    }
}