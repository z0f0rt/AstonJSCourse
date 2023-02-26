const INV_ARG = "Invalid arguments";
function deleteElementFromArray(arr, elem) {
  if (Array.isArray(arr) && typeof elem === "number") {
    const copyArr = [...arr];
    let index = copyArr.indexOf(elem);
    if (index !== -1) {
      copyArr.splice(index, 1);
      return [...copyArr];
    }
    return copyArr;
  }
  return INV_ARG;
}
