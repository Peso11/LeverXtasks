const callbackfunc = (err,result) => {
  if(err) {
    console.log(err)
  } else {
    console.log(result)
  }
}

function filterNullUndefined(arr,callback){
  let result,error
  setTimeout(() => {
  try {
    result = arr.filter(el => el)
  } catch (e) {
    error = e.message
  }
  callback(error,result)
  },5000)
}


console.log(filterNullUndefined([1,2,3,null], callbackfunc))