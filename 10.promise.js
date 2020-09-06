const func = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve()
    }, 6000)
  })
}