import { sendEvent } from "../utils/eventDispatcher.js"

export function handelError(error, node) {
    sendEvent('newevent', { message: error, type: 'error' }, node)

}
export function handelSucces(message, node) {
    sendEvent('newevent', { message: message, type: 'success' }, node)
}
export function spinnerOn(node) {
    sendEvent('spinnerOn', {}, node)
}
export function spinnerOff(node) {
    sendEvent('spinnerOff', {}, node)
}