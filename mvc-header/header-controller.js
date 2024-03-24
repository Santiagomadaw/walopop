import { handelError } from "../utils/eventHandler.js"
import { getTags } from "./header-model.js"
import { buildLoginButtons, buildLogoutButtons } from "./header-view.js"

export const headerController = async (header) => {

    const navContainer = header.querySelector('.navContainer')
    const searchBar = header.querySelector('#search')
    const searchItem = searchBar.querySelector('#searchItem')
    const tagSelect = header.querySelector('#tagsSelect')
    const optionSelect = header.querySelector('#buysell')

    try {
        const tags = await unqueTags()
        drawTags(tags, tagSelect)
    } catch (error) {
        handelError(error, header)
    }

    fillSeachForm(searchItem, tagSelect, optionSelect)

    searchBar.addEventListener('submit', (event) => {
        event.preventDefault()
        const searchedItems = new FormData(searchBar)
        const url = urlMaker(searchedItems)
        window.location.href = url
    })
    if (isloggedUser()) {
        loggedInConfig(navContainer)
    } else {
        loggedOutConfig(navContainer)
    }
}

const isloggedUser = () => {
    return localStorage.getItem('token')
}

async function unqueTags() {
    const adTags = await getTags()
    let tags = []
    adTags.forEach((tag) => {
        tags = tags.concat(tag[0])
    })
    tags = [...new Set(tags)]
    return tags
}

function drawTags(tags, tagSelect) {
    tags.forEach(tag => {
        const option = document.createElement('option')
        option.textContent = tag
        option.setAttribute('value', `${tag}`)
        option.setAttribute('id', `${tag}`)
        tagSelect.appendChild(option)
    })

}

function fillSeachForm(searchItem, tagSelect, optionSelect) {
    const params = new URLSearchParams(window.location.search)
    const selectedTag = params.get('tags_like')
    const selectedOption = params.get('buysell_like')
    const namesArray = params.getAll('name_like')
    const names = namesArray.join(' ')
    searchItem.setAttribute('value', names)
    if (selectedTag) {
        const selected = tagSelect.querySelector(`#${selectedTag}`)
        selected.setAttribute("selected", "")
    }
    if (selectedOption) {
        console.log(selectedOption)
        console.log(optionSelect)
        const selected = optionSelect.querySelector(`#${selectedOption}`)
        selected.setAttribute("selected", "")
    }
}

function urlMaker(searchedItems) {
    let data = {}
    let url = 'index.html?'
    searchedItems.forEach((value, key) => data[key] = value)

    const dataArray = data.search.split(' ')
    dataArray.forEach(item => {
        if (item) {
            url = url + `name_like=${item}&`
        }
    })
    if (data.tags) {
        url = url + `tags_like=${data.tags}&`
    }
    if (data.buysell) {
        url = url + `buysell_like=${data.buysell}&`
    }
    url = url.slice(0, -1)
    return url
}

function loggedInConfig(navContainer) {
    navContainer.innerHTML = buildLoginButtons()
    const logoutButton = navContainer.querySelector('#logout')
    const newAdButton = navContainer.querySelector('#newAd')
    newAdButton.addEventListener('click', () => {
        window.location.href = 'newad.html'
    })
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token')
        window.location.href = 'index.html'
    })
}
function loggedOutConfig(navContainer) {
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