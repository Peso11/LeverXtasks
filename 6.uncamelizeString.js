function uncamelize(str, separator = ' ') {
  let uncamelizedString = str.replace(/[(A-Z)]/g, (char) => {
    return separator + char.toLowerCase()
  })
  return uncamelizedString
}