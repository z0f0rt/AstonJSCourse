"use strict";

const ERROR_INVALID_ARRAY =
  "В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения";

const ERROR_INVALID_FROM =
  "В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом";

const ERROR_INVALID_TO =
  "В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом";

const getNewArray = (arr, from, to) => {
  let newArray = arr.reduce((acc, el) => {
    if (el >= from && el <= to) {
      acc = [...acc, el];
      return acc;
    }
    if (el >= to && el <= from) {
      acc = [...acc, el];
      return acc;
    }
    return acc;
  }, []);
  return newArray;
};

function getInterval(arr, from, to) {
  let result = arr.every((el) => typeof el === "number" && !Number.isNaN(el));
  if (!result) {
    throw Error(ERROR_INVALID_ARRAY);
  }
  if (typeof from !== "number" || Number.isNaN(from)) {
    throw Error(ERROR_INVALID_FROM);
  }
  if (typeof to !== "number" || Number.isNaN(to)) {
    throw Error(ERROR_INVALID_TO);
  }
  let newArray = getNewArray(arr, from, to);
  return newArray;
}

