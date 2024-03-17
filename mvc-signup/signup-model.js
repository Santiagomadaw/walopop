export async function createUser(data) {
    const parsedUser = parseUser(data)
    const response = await fetch('http://localhost:8000/auth/register', {
        method: "POST",
        body: JSON.stringify(parsedUser),
        headers: {
            'Content-type': "application/json"
        }
    });
    if (!response.ok){
        throw new Error ('Se ha producido un error creando en usuario')
    }
}

const parseUser = (data)=>{
    return{
        username : data.email,
        password: data.pass
    }
}