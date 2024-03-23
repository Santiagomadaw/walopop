export const sendEvent = (eventType, data, node) => {
    const event = new CustomEvent(eventType, {
        detail: data
    })
    node.dispatchEvent(event)
}