/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function (array, transform) {
  let mapped = [];
  for (let e of array) {
    mapped.push(transform(e));
  }
  return mapped;
};

// FILTER //

Array.prototype.myFilter = function (array, check) {
  let mapped = [];
  for (let e of array) {
    if (check(e)) {
      mapped.push(e);
    }
  }
  return mapped;
};

// SOME //
Array.prototype.mySome = function (array, checkSome) {
  for (let e of array) {
    if (checkSome(e)) return true;
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  // Place your code here.
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn) {
  let initial_val = 0;
  let index = 0;
  for (i = 0; i < this.length; i++){
    if (this[i] !== undefined){
      initial_val = this[i];
      index = i;
      break;
    }
  }

  for (i = index; i < this.length; i++){
    initial_val = callbackFn(initial_val, this[i], i, this);
  }

  return initial_val;
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement) {
  // Place your code here.
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement) {
  // Place your code here.
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement) {
  // Place your code here.
};

// KEYS //
Object.myKeys = function (object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function (object) {
  // Place your code here.
};
