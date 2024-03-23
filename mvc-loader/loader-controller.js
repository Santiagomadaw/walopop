import { buildLoader } from "./loader-view.js"

export function loaderController(node) {
    const spinner = document.createElement('div')
    spinner.classList = 'loaderContiner'
    const showLoader = () => {
        spinner.innerHTML = buildLoader()
        node.appendChild(spinner)
    }
    const hideLoader = () => {
        spinner.remove()
    }
    return {
        showLoader,
        hideLoader
    }

}