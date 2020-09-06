function uncamelize(str, separator = ' '){
  let uncamelizedString = str.replace(/[(A-Z)]/g, (char) => {
    return separator + char.toLowerCase()
  })
  return uncamelizedString
}
//console.log(uncamelize('helloWorldHi')); console.log(uncamelize('helloGuysHi','-')); console.log(uncamelize('helloWorld','_'));