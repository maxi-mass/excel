import { DomListener } from '@core/DomListener'
import { $ } from '@core/dom'

export class ExcelComponent extends DomListener {
  toHtml() {
    const $el = $.create('div', [this.className])
    $el.insertAdjacentHTML('afterbegin', this.html)
    return $el.outerHTML
  }
}
