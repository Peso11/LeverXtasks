function flatAndSort(arr) {
  const flattenArr = arr.reduce((flattenArr, el) => { 
    return Array.isArray(el) ? flattenArr.concat(flatAndSort(el)) : flattenArr.concat(el)
  }, []);
  return flattenArr.sort((a,b) => a - b)
}