export class DomListener {
  constructor($root, listeners = []) {
    this.$root = $root
    this.listeners = listeners
    if (!this.$root) {
      throw new Error('Not root element')
    }
  }
  initListeners() {
    console.log(this.listeners)
  }
  removeListeners() {}
}
