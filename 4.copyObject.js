function getObjectCopy(orignalObject) {
  const objectCopy = Object.keys(orignalObject).reduce((obj, key) => {
    if(typeof orignalObject[key] === 'object') {
      const innerObjectCopy = getObjectCopy(orignalObject[key])
      obj[key] = innerObjectCopy
      return obj
    } else {
      obj[orignalObject[key]] = key
      return obj
    }
  }, {})
  return objectCopy
}