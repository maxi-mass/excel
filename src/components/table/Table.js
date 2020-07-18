import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { mousemove } from '@/components/table/helper'

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
    mousemove(this.$root, event)
  }
}
