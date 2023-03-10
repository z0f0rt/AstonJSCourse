"use strict";
const deepCopyObject = (obj) => {
  if (Array.isArray(obj)) {
    const array = [];
    for (let el of obj) {
      array.push(deepCopyObject(el));
    }
    return array;
  }

  if (obj && typeof obj[key] === "object" && obj !== null) {
    const object = {};
    for (let key in obj) {
      object[key] = deepCopyObject(obj[key]);
    }
    return object;
  }
  return obj;
};