function fibSeriesToCertainNumber(n) {
  if (n < 1) return `Sorry,enter number bigger then 0`
  let currentNumber = 0, nextNumber = 1, sum
  const fibSeries = []
  while(nextNumber < n){
    fibSeries.push(currentNumber)
    sum = currentNumber + nextNumber
    currentNumber = nextNumber
    nextNumber = sum
  }
  fibSeries.push(currentNumber)
  return fibSeries
}