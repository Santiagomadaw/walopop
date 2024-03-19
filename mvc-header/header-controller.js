import { buildLoginButtons, buildLogoutButtons } from "./header-view.js"

export const headerController = (navContainer) => {
    if(isloggedUser()){
        navContainer.innerHTML = buildLoginButtons()
        const logoutButton = navContainer.querySelector('#logout')
        const newAdButton = navContainer.querySelector('#newAd')
        console.log(navContainer)
        newAdButton.addEventListener('click', () => {
            window.location.href = 'newad.html'
        })
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('token')
            headerController(navContainer)
        })
    }else{
        navContainer.innerHTML = buildLogoutButtons()
        const loginButton = navContainer.querySelector('#login')
        const signupButton = navContainer.querySelector('#signup')
        loginButton.addEventListener('click', () => {
            window.location.href = 'login.html'
        })
        signupButton.addEventListener('click', () => {
            window.location.href = 'signup.html'
        })
    }


}

const isloggedUser = () => {
    return localStorage.getItem('token')
}