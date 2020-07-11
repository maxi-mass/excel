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
    return createTable()
  }
  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $target = $(event.target)
      const $parent = $target.closest('[data-type="resizable"]')
      const coordinates = $parent.getCoordinates()
      const col = $parent.data.col
      const cells = this.$root.findAll(`[data-col="${col}"]`)

      document.onmousemove = e => {
        const delta = e.pageX - coordinates.right
        const value = coordinates.width + delta + 'px'
        cells.forEach(el => el.style.width = value)
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
