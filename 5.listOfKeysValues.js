function listOfKeysValues(object) {
  return Object.keys(object).map(key => [key, object[key]])
  //return Object.entries(object)
}
