import { loaderController } from "../mvc-loader/loader-controller.js";
import { createUser } from "./signup-model.js";

export function signupController(signupForm) {
    signupForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        const formData = dataExtract(signupForm)
        let errors = []
        !mailValidate(formData.email) 
            ? errors.push('Formato de email no valido')
            : ''
        !passValidate(formData) 
            ? errors.push('Las contraseñas no coinciden')
            : ''
        errors.length>0 
            ? errors.forEach(error=> alert(error)) 
            : newUser(formData,signupForm)
    })
}
async function newUser(data, node){
    const { showLoader, hideLoader } = loaderController(node)

    try {
        showLoader()
        await createUser(data)
    } catch (error) {
        alert(error)
    }finally{
        hideLoader()
    }
}
const dataExtract =(signupForm)=>{
    const formData = new FormData(signupForm)
    let data = {}
    formData.forEach((value,key) => data[key] = value)
    return data 
}

const mailValidate = (email) => {
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return emailRegExp.test(email)
}

const passValidate = (formData) => {
    return formData.pass === formData.passConfirmation
}