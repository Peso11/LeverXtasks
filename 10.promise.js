function promiseFunc() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, 6000)
  })
}
console.log(promiseFunc())