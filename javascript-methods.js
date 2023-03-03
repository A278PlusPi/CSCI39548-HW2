/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function (callbackFn) {
  let mapped = [];
  for (let i = 0; i < this.length; i++) {
    mapped.push(callbackFn(this[i], i, this));
  }
  return mapped;
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
  let mapped = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      mapped.push(e);
      mapped.push(this[i]);
    }
  }
  return mapped;
};

// SOME //
Array.prototype.mySome = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
  for (let i = 0; i < this.length; i++){
    if (this[i] === undefined){
      continue; //go to next iteratation if value is undefined
    }
    if (callbackFn(this[i], i, this) === false){
      return false; 
      //function should immediately end and return false
    }
  }
  return true; //if no problem after loop, then return true
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

  for (i = index+1; i < this.length; i++){
    initial_val = callbackFn(initial_val, this[i], i, this);
  }

  return initial_val;
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
//the following section implemented by Kasaf Shah
// KEYS //
Object.myKeys = function (object) {
  let keys=[]; 
  let i=0;
  for(let key in object){
    keys[i] = key; 
    i++; 
  }
  return keys; 
};

// VALUES //
Object.myValues = function (object) {
  let values=[]; 
  let i=0; 
  for(let value in object){
    values[i] = object[value]; 
    i++; 
  }
  return values; 
  
};
