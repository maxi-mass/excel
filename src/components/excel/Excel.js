import { $ } from '@core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', ['excel']);
    this.components.forEach(Component =>
      $root.insertAdjacentHTML('beforeend', new Component().toHtml())
    )
    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}
