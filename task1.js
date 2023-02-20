"use strict";
const deepCopyObject = (obj) => {
  const subClone = {};

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      subClone[key] = [];
      for (let el of obj[key]) {
        subClone[key].push(deepCopyObject(el));
      }
      continue;
    }

    if (obj && typeof obj[key] === "object") {
      subClone[key] = deepCopyObject(obj[key]);
      continue;
    }
    subClone[key] = obj[key];
  }

  return subClone;
};
