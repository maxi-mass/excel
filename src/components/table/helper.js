import { $ } from '@core/dom'

export const mousemove = ($root, e) => {
  if (e.target.dataset.resize) {
    const $resizer = $(e.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coordinates = $parent.getCoordinates()
    const type = $resizer.data.resize

    const col = $parent.data.col
    const cells = $root.findAll(`[data-col="${col}"]`)
    let value
    document.onmousemove = e => {
      if (type === 'col') {
        const delta = e.pageX - coordinates.right + 4
        value = coordinates.width + delta
        $resizer.css({ right: -delta + 'px' })
      } else {
        const delta = e.clientY - coordinates.bottom + 4
        value = coordinates.height + delta
        $resizer.css({ bottom: -delta + 'px' })
      }
    }

    document.onmouseup = () => {
      if (type === 'col') {
        cells.forEach(el => $(el).css({ width: value + 'px' }))
        $resizer.css({ right: null })
      } else {
        $parent.css({ height: value + 'px' })
        $resizer.css({ bottom: null })
      }
      document.onmouseup = null
      document.onmousemove = null
    }
  }
}
