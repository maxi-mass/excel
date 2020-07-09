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
      console.log($parent)
      document.onmousemove = e => {
        const delta = e.pageX - coordinates.right
        const value = coordinates.width + delta + 'px'
        $parent.$nativeDomElement.style.width = value
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}
