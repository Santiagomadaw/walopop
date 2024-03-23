import { handelError, handelSucces, spinnerOff, spinnerOn } from "../utils/eventHandler.js"
import { extractFormValues, nomalizeFormValues } from "../utils/formUtils.js"
import { editAd, getAdDetail, getUser, removeAd } from "./ad-detail-model.js"
import { buildDetail, buildEditForm, buildTags } from "./ad-detail-view.js"


export async function detailController(adDetailNode) {
    spinnerOn(adDetailNode)
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')
    if (!id) { window.location.href = 'index.html' }
    try {
        const adData = await getAdDetail(id)
        drawAdDetail(adData, adDetailNode)
        backButton(adDetailNode)
    } catch (error) {
        handelError(error, adDetailNode)
        setTimeout(() => {
            window.location = "index.html"
        }, 1200)
    } finally {
        spinnerOff(adDetailNode)
    }
}

function cancelButton(node, editorFormContainer) {
    const cancelButton = node.querySelector('.cancelButton')
    cancelButton.addEventListener('click', () => {
        editorFormContainer.innerHTML = ''
        detailController(node)
    })
}

function backButton(node) {
    const backButton = node.querySelector('#backButton')
    backButton.addEventListener('click', () => {
        window.history.back()
    })
}
async function handleEditButton(node, data) {
    const editorFormContainer = node.querySelector('.editor-modal')
    const token = localStorage.getItem('token')
    const user = await getUser(token)
    let showedForm = false
    if (data.userId === user) {
        const editButton = node.querySelector('#editButton')
        editButton.removeAttribute('disabled')
        editButton.addEventListener('click', async () => {
            if (!showedForm) {
                editorFormContainer.innerHTML = buildEditForm(data)
                cancelButton(node, editorFormContainer)
                showedForm = !showedForm
            } else {
                editorFormContainer.innerHTML = ''
                showedForm = !showedForm
            }
            editorFormContainer.addEventListener('submit', async (event) => {
                event.preventDefault()
                spinnerOn(node)
                try {
                    let dataObj = extractFormValues(editorFormContainer)
                    nomalizeFormValues(dataObj)
                    await editAd(data.id, dataObj)
                    handelSucces('Anuncio Editado', node)
                    editorFormContainer.innerHTML = ''
                    showedForm = !showedForm
                    detailController(node)
                } catch (error) {
                    handelError(error, node)
                } finally {
                    spinnerOff(node)
                }
            })
        })
    }
}

async function handleRemoveAdButton(node, data) {
    const token = localStorage.getItem('token')

    const user = await getUser(token)
    if (data.userId === user) {
        const removeAdButton = node.querySelector('#removeAdButton')
        removeAdButton.removeAttribute('disabled')
        removeAdButton.addEventListener('click', async () => {
            try {
                await deleteAd(data.id, token, node)
            } catch (error) {
                handelError(error, node)
            }

        })
    }
}

async function deleteAd(id, token, node) {
    spinnerOn(node)
    if (window.confirm('Seguro que  quieres borrar el anuincio?'))
        try {
            await removeAd(id, token)
            node.innerHTML = ''
            handelSucces('Anuncio Borrado', node)
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 1200)
        } catch (error) {
            handelError(error, node)
        } finally {
            spinnerOff(node)
        }
}
function drawAdDetail(adData, adDetailNode) {
    const container = adDetailNode.querySelector('.container')
    container.innerHTML = buildDetail(adData)
    const tagsContiner = container.querySelector('.tags-container')
    adData.tags.forEach((tag) => {
        const newTag = document.createElement('a')
        newTag.innerText = tag
        newTag.setAttribute('href', `index.html?tags_like=${tag}`)
        tagsContiner.appendChild(newTag)
    })
    handleRemoveAdButton(adDetailNode, adData)
    handleEditButton(adDetailNode, adData)
}

