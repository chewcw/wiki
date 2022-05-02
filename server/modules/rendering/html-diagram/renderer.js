module.exports = {
  async init($, config) {
    $(`pre.diagram`).each((idx, elm) => {
      $(elm).children('svg').each((sidx, svg) => {
        $(svg).removeAttr('content')
      })
      $(elm).replaceWith($(`<img class="diagram" src="data:image/svg+xml;base64,${$(elm).html()}">`))
    })
  }
}
