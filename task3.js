"use strict";
const createLiker = () => {
  let value = 0;
  return {
    like() {
      value++;
      return this;
    },
    dislike() {
      value--;
      return this;
    },
    val() {
      return value;
    },
  };
};
