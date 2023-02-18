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
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function (value, index) {
    
  if (index == undefined || index == NaN) {
      index = 0;
  }
  
  if (index < 0) {
      index += this.length;
  }
  
    for (let i = index; i < this.length; i++) {
      if (this[i] == value) {
        return true;
      }
    }
  
    return false;
  };

// INDEXOF //
Array.prototype.myIndexOf = function (value, index) {
  if (index == undefined || index == NaN) {
    index = 0;
}

  for (let i = index; i < this.length; i++) {
    if (this[i] == value) {
      return i;
    }
  }

  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (value, index) {
  if (index == undefined || index == NaN) {
    index = this.length;
}

  if (index < 0) {
    index += this.length;
  }

  for (let i = index; i >= 0; i--) {
    if (this[i] == value) {
      return i;
    }
  }

  return -1;
};

// KEYS //
Object.myKeys = function (object) {
  // Place your code here.
};

// VALUES //
Object.myValues = function (object) {
  // Place your code here.
};
