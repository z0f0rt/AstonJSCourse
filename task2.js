"use strict";
const ERROR_INVALID_ARRAY =
  "В функцию getInterval были переданы невалидные параметры. Параметр arr должен содержать только числовые значения";

const ERROR_INVALID_FROM =
  "В функцию getInterval были переданы невалидные параметры. Параметр from должен быть числом";

const ERROR_INVALID_TO =
  "В функцию getInterval были переданы невалидные параметры. Параметр to должен быть числом";

function getInterval(arr, from, to) {
  let result = arr.every((el) => typeof el === "number");
  if (!result) {
    throw Error(ERROR_INVALID_ARRAY);
  }
  if (typeof from !== "number") {
    throw Error(ERROR_INVALID_FROM);
  }
  if (typeof to !== "number") {
    throw Error(ERROR_INVALID_TO);
  }
  if (from < to) {
    let res = arr.reduce((acc, el) => {
      if (el >= from && el <= to) {
        acc = [...acc, el];
        return acc;
      }
      return acc;
    }, []);
    return res;
  }
  let res = arr.reduce((acc, el) => {
    if (el >= to && el <= from) {
      acc = [...acc, el];
      return acc;
    }
    return acc;
  }, []);
  return res;
}
