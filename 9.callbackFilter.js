function filterNullUndefined(arr, callback){
  let result,error
  setTimeout(() => {
  try {
    result = arr.filter(el => {
      return el!== null && el!== undefined
    })
  } catch (e) {
    error = e.message
  }
  callback(error, result)
  },5000)
}

function callbackfunc(err, result) {
  if(err) {
    console.log(err)
  } else {
    console.log(result)
  }
}