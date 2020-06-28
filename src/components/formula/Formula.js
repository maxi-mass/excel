import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  className = 'excel__formula'
  html = `
    <div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>  
  `
}
