const ERROR_INDEX =
  "the index cannot be a negative number or a fractional number";
const addElementsToArray =
  (arr, index) =>
  (...elems) => {
    if (Array.isArray(arr)) {
      if (index) {
        if (typeof index === "string") {
          throw Error(ERROR_INDEX);
        }
        if (index < 0 || index % 1 !== 0) {
          throw Error(ERROR_INDEX);
        }
        if (index > arr.length) {
          return [...arr, ...elems];
        }
        const arrCopy = [...arr];
        arrCopy.splice(index, 0, ...elems);
        return arrCopy;
      }
      if (index === 0) {
        const arrCopy = [...arr];
        arrCopy.splice(index, 0, ...elems);
        return arrCopy;
      }

      return [...arr, ...elems];
    }
    throw Error(ERROR_INDEX);
  };
