function myCollection(collection) {
  return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}
function myEach(collection, callback) {
  const newCollection = myCollection(collection);
  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
  }
  return collection;
}
function myMap(collection, callback) {
  const newCollection = myCollection(collection);
  const newArr = [];
  for (let i= 0; i< newCollection.length; i++) {
    newArr.push(callback(newCollection[i]));
  }
  return newArr;
}
const myReduce = function(collection, callback, acc) {
  let newCollection = standardizeInput(collection);

  if (!acc) {
    acc = newCollection[0];
    newCollection = newCollection.slice(1);
  }
  const len = newCollection.length;
  for (let i = 0; i < len; i++) {
    acc = callback(acc, newCollection[i], newCollection);
  }
  return acc;
}
const myFind = function(collection, predicate) {
  const newCollection = standardizeInput(collection);
  for (let i = 0; i< newCollection.length; i++) {
    if (predicate(newCollection[i])) return newCollection[i];
  }
  return undefined;
}
const myFilter = function(collection, predicate) {
  const newCollection = standardizeInput(collection);
  const newArr = [];
  for (let idx = 0; idx < newCollection.length; idx++) {
    if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
  }
  return newArr;
}
const mySize = function(collection) {
  const newCollection = standardizeInput(collection);
  return newCollection.length;
}

const myFirst = function(arr, stop=false) {
  return (stop) ? arr.slice(0, stop) : arr[0];
}
const myLast = function(arr, start=false) {
  return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
}
const mySortBy = function(arr, callback) {
  const newArr = [...arr];
  return newArr.sort(function(a, b) {
    if (callback(a) > callback(b)) {
      return 1;
    } else if (callback(b) > callback(a)) {
      return -1;
    } else {
      return 0;
    }  }) }