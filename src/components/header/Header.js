import { ExcelComponent } from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  static className = 'excel__header'
  constructor($root) {
    super($root, {
      listeners: ['click']
    });
  }
  toHtml() {
    return `
      <input type="text" class="input" value="New table" />
      <div>
          <div class="button">
              <i class="material-icons">delete</i>
          </div>
          <div class="button">
              <i class="material-icons">exit_to_app</i>
          </div>
      </div>
  `
  }
  onClick(event) {
    console.log(this.$root)
  }
}
