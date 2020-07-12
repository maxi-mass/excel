import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { $ } from '@/core/dom'

export class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    });
  }
  static className = 'excel__table'
  toHtml() {
    return createTable(40)
  }
  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $target = $(event.target)
      const $parent = $target.closest('[data-type="resizable"]')
      const coordinates = $parent.getCoordinates()
      const type = $target.data.resize

      const col = $parent.data.col
      const cells = this.$root.findAll(`[data-col="${col}"]`)

      document.onmousemove = e => {
        if (type === 'col') {
          const delta = e.pageX - coordinates.right
          const value = coordinates.width + delta
          cells.forEach(el => el.style.width = value + 'px')
        } else {
          const delta = e.pageY - coordinates.bottom
          const value = coordinates.height + delta
          $parent.$nativeDomElement.style.height = value + 'px'
        }
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
