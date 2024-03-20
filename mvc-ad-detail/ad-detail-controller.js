import { sendEvent } from "../utils/eventDispatcher.js";
import { getAdDetail, getUser, removeAd } from "./ad-detail-model.js"
import { buildDetail } from "./ad-detail-view.js"


export async function detailController(adDetailNode) {
    sendEvent('spinnerOn',{},adDetailNode)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if(!id) { window.location.href = 'index.html' }
    try {
        const adData = await getAdDetail(id)
        const container = adDetailNode.querySelector('.container');
        container.innerHTML = buildDetail(adData);
        goBackButton(adDetailNode)
        handleRemoveAdButton(adDetailNode, adData)
    } catch (error) {
        sendEvent('detailError',{message:error, type:'error'},adDetailNode)
        setTimeout(() => {
            window.location = "index.html";
        }, 1200)
    }finally{
        sendEvent('spinnerOff',{},adDetailNode)
    }
}

function goBackButton(adDetailNode) {
    const backButton = adDetailNode.querySelector('#backButton')
    backButton.addEventListener('click', () => { window.history.back() })
}

async function handleRemoveAdButton(node, data) {
    const token = localStorage.getItem('token');
    const user = await getUser(token);
    if (data.userId === user) {
        const removeAdButton = node.querySelector('#removeAdButton')
        removeAdButton.removeAttribute('disabled');
        removeAdButton.addEventListener('click',async () => {
            try {
                await askRemoveAd(data.id, token)
                node.innerHTML=''
                sendEvent('detailError',{message:'Anuncio borrado', type:'success'},node)
                setTimeout(() => {
                    window.location.href = 'index.html'
                }, 1200);
            } catch (error) {
                sendEvent('detailError',{message:error, type:'error'},node)
                
            }
        })
    }
}

async function askRemoveAd(id, token){
    if(window.confirm('Seguro que  quieres borrar el anuincio?'))
    try {
        await removeAd(id, token)
        
    } catch (error) {
        throw error
    }
}