import { capitalize } from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root
    this.listeners = listeners
    if (!this.$root) {
      throw new Error('Not root element')
    }
  }
  initListeners() {
    this.listeners.forEach(listener => {
      const method = getMethod(this, listener)
      if (method) {
        this.$root.on(listener, method.bind(this))
      } else {
        console.error(`Method for ${listener} listener is not available!!!`)
      }
    })
  }
  removeListeners() {}
}

const getMethod = (context, listener) => {
  const methodName = `on${capitalize(listener)}`
  return context[methodName] || null
}
