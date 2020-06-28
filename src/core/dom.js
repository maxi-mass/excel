class Dom {}

export function $() {
  return new Dom()
}

$.create = (tagName, classes = []) => {
  const el = document.createElement(tagName)
  if (classes.length > 0) {
    el.classList.add(...classes);
  }
  return el
}
