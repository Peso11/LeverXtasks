function difference(arr1, arr2) {
  const differenceArr = []
  arr1.concat(arr2).flat(Infinity).forEach(num => {
    if(differenceArr.indexOf(num) == -1){
      differenceArr.push(num)
    }
  })
  return differenceArr.sort((a,b) => a - b)
}