import { buildNotification } from "./notifications-view.js";

export function  notificationController(node, detail) {
    const notificationContainer = document.createElement(`div`)
    node.appendChild(notificationContainer)
    notificationContainer.innerHTML = buildNotification(detail.message)
    notificationContainer.classList.add('notification', detail.type)
    setTimeout(() => {
        notificationContainer.remove()
    }, 2000);
    
}
