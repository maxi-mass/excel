import { ExcelComponent } from '@core/ExcelComponent'

export class Table extends ExcelComponent {
  className = 'excel__table'
  html = `
    <div class="row">
      <div class="row-info"></div>
      <div class="row-data">
        <div class="column">A</div>
        <div class="column">B</div>
        <div class="column">C</div>
      </div>
    </div>
    <div class="row">
      <div class="row-info">1</div>
      <div class="row-data">
        <div class="cell selected" contenteditable="true" spellcheck="false">
            A1
        </div>
        <div class="cell" contenteditable="true" spellcheck="false">B1</div>
        <div class="cell" contenteditable="true" spellcheck="false">C1</div>
      </div>
    </div>
    <div class="row">
      <div class="row-info">2</div>
      <div class="row-data">
        <div class="cell">A2</div>
        <div class="cell">B2</div>
        <div class="cell">C2</div>
      </div>
    </div>
  `
}