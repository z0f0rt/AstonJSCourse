"use strict";

Array.prototype.filterArray = function (cb, thisArg) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};
