"use strict";
let getUniqArray = (arr) => {
  if (Array.isArray(arr)) {
    const isArrayOfNumbers = (arr) => {
      let result = arr.every(
        (el) => typeof el === "number" && !Number.isNaN(el)
      );
      return result;
    };
    let result = isArrayOfNumbers(arr);
    if (result) {
      const uniqCollection = arr.reduce((acc, el) => {
        if (acc.includes(el)) {
          return acc;
        }
        return [...acc, el];
      }, []);
      return uniqCollection;
    }
    throw new Error(
      "В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел"
    );
  }
};

