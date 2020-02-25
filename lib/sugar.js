// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  return Object.keys(object).length;
}
//define a count of keys, starting from 0 

// loop through such key using a for in the loop

// add 1 to the count of keys each time 

// return the count of key 

// let count = 0;
//for (let key in object) {
//count++;
//return count;
/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  const values = Object.values(object); // gives an array of values 
  return Math.min(...values);
}
//let smallest;
//for (let i = 0; i < values.length; i++) {
//if (smallest === undefined || values[i] < smallest) {
//smallest = values[i];
//}
//}
//return smallest;
//}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  const values = Object.values(object);
  return Math.max(...values);
}
//let biggest;
//for (let i = 0; i < values.length; i++) {
//if (biggest === undefined || values[i] > biggest) {
//biggest = values[i];
// }
//}
//return biggest;
//}
/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  const values = Object.assign({}, object);
  return values;
}
// const value ={};
//for (let key in object)
//values[key] = object[key];
//return values;
/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  const values = Object.values(object); 
  if ("key" in Object) {

    {
      return values
    }
  }
}

// Not sure what to do here 
// const key = Object.key(object); {
// for (let key in object); {
// if (Object.get(Object.keys) === Object.keys) {
// return true
//}
//else false
//}
// let constant identify value with respect to object
//loop through the object 
//if statement should say if the object and key recieved 

// 
/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) { }

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) { }

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) { }

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) { }

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) { }

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) { }

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) { }

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;