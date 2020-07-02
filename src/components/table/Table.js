import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'

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
    console.log(event.target.dataset.resize)
  }
}
