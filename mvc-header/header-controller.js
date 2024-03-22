import { sendEvent } from "../utils/eventDispatcher.js"
import { buildLoginButtons, buildLogoutButtons } from "./header-view.js"

export const headerController = (header) => {
    const navContainer = header.querySelector('.navContainer')
    const searchBar = header.querySelector('#search')
    console.log(header)
    searchBar.addEventListener('submit', (event)=>{
        event.preventDefault();
        const searchedItems = new FormData(searchBar)
        let data = {}
        let url = 'index.html?'
        searchedItems.forEach((value, key) => data[key] = value)
        console.log()
        const dataArray = data.search.split(' ')
        dataArray.forEach(item => {
            url = url + `name_like=${item}&`;
        });
        url = url.slice(0, -1)
        window.location.href=url
        
        })
    if(isloggedUser()){
        navContainer.innerHTML = buildLoginButtons()
        const logoutButton = navContainer.querySelector('#logout')
        const newAdButton = navContainer.querySelector('#newAd')
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