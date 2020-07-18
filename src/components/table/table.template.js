const LETTER_CODES = {
  A: 65,
  Z: 90
}
const toChar = (_, ix) => String.fromCharCode(LETTER_CODES.A + ix)
const toCol = (el, ix) =>
  `<div class="column" data-type="resizable" data-col="${ix}">${el}
      <div class="col-resize" data-resize="col"></div>
   </div>`
const toCell = (_, colIx) =>
  `<div class="cell"
        contenteditable="true"
        spellcheck="false"
        data-col="${colIx}">
    </div>`

function createRow(content, number = '') {
  const resizer = number
    ? `<div class="row-resize" data-resize="row"></div>`
    : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info" >${number}
        ${resizer}
      </div>
      <div class="row-data">${content}</div>
    </div>  
  `
}

export function createTable(rowsCount) {
  const colsCount = LETTER_CODES.Z - LETTER_CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toCol)
      .join('')

  rows.push(createRow(cols))
  for (let i = 1; i<=rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(cells, i))
  }
  return rows.join('')
}
