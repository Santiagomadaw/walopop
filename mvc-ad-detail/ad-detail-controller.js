import { getAdDetail, getUser, removeAd } from "./ad-detail-model.js"
import { buildDetail } from "./ad-detail-view.js"


export async function detailController(adDetailNode) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    //if(!id) { window.location.href = 'index.html' }
    try {
        const adData = await getAdDetail(id);
        console.log('created',adData.userId)

        const container = adDetailNode.querySelector('.container');
        container.innerHTML = buildDetail(adData);
        goBackButton(adDetailNode)
        handleRemoveAdButton(adDetailNode, adData)
    } catch (error) {

    }
}

function goBackButton(adDetailNode) {
    const backButton = adDetailNode.querySelector('#backButton')
    backButton.addEventListener('click', () => { window.history.back() })
}

async function handleRemoveAdButton(node, data) {
    const token = localStorage.getItem('token');
    const user = await getUser(token);
    console.log('loged',user)
    if (data.userId === user) {
        const removeAdButton = node.querySelector('#removeAdButton')
        removeAdButton.removeAttribute('disabled');
        removeAdButton.addEventListener('click', () => { askRemoveAd(data.id, token) })
    }
}

async function askRemoveAd(id, token){
    if(window.confirm('Seguro que  quieres borrar el anuincio?'))
    try {
        await removeAd(id, token)
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 1200);
    } catch (error) {
        alert(error)
    }
}