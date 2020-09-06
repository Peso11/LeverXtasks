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

/*let testObj = {
  a: 1, 
  'c': 'v',
  sayHi: function(){
    console.log('hi')
  },
  a: {b:1,v:2,s:{
    f:4,4:5
  }}
}
console.log(getObjectCopy(testObj))
*/

















//const copy = object1 => {
//  const newData = Object.keys(object1).reduce(function(obj, key) {
//  if(typeof object1[key] === 'object'){
//    const copy2 = copy(object1[key])
//    obj[key] = copy2;
//    return obj
//  }else{
//    obj[object1[key]] = key;
//    return obj
// }
//}, {});
//return newData
//}
//let object2 = { a:1 , b : 'lol', 'c': 'v', sayHi:function(){console.log(hi)}, testObj: {2:3,'sss': 'fff', testObj: {2:3,'sss': 'fff'}}}
//console.log(copy(object2))