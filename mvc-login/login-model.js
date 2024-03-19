export const loginUser = async (dataForm) =>{
    const url = 'http://localhost:8000/auth/login'
    const data = parseData(dataForm)
    let response
    try {
        response = await fetch(url,{
            method: 'POST',
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        })
        const dataResponse = await response.json()
        if (!response.ok){
            throw new Error(dataResponse.message)

            }
        if(response.ok){
            return dataResponse.accessToken
        }
    } catch (error) {
        throw new Error ('Conection error')
        }
        
    }


const parseData = (dataForm)=>{
    return {
        username: dataForm.email,
        password: dataForm.pass
    }
}