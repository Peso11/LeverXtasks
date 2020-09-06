function promiseChainCall(promiseSeries) { 
  return promiseSeries.reduce((promise, next) => {
    return promise.then(next)
  }, Promise.resolve())
}