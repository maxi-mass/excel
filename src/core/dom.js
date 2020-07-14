class Dom {
  constructor(selector) {
    this.$nativeDomElement = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector
  }
  html(html) {
    if (html) {
      this.$nativeDomElement.innerHTML = html
    }
    return this.$nativeDomElement.outerHTML.trim()
  }
  append(node) {
    if (node instanceof Dom) {
      node = node.$nativeDomElement
    }

    this.$nativeDomElement.append(node)
    return this
  }
  on(eventType, callback) {
    this.$nativeDomElement.addEventListener(eventType, callback)
  }
  off(eventType, callback) {
    this.$nativeDomElement.removeEventListener(eventType, callback)
  }
  closest(selector) {
    return $(this.$nativeDomElement.closest(selector))
  }
  getCoordinates() {
    return this.$nativeDomElement.getBoundingClientRect()
  }
  get data() {
    return this.$nativeDomElement.dataset
  }
  findAll(selector) {
    return this.$nativeDomElement.querySelectorAll(selector)
  }
  css(styles = {}) {
    Object.keys(styles)
        .forEach(key => this.$nativeDomElement.style[key] = styles[key])
  }
}

export function $(selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = []) => {
  const el = document.createElement(tagName)
  if (classes.length > 0) {
    el.classList.add(...classes);
  }
  return $(el)
}

