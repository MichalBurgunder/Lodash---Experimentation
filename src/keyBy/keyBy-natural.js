const _ = require("lodash");

const bigObject = {
  a: "qwertzu",
  b: "asdfghj",
  c: "yxcvbnm",
  d: "poiuztr",
  e: "lkjhgfd",
  f: "mnbvcxy",
  g: "uz09876",
  h: "1234567",
  i: "qaywsxe",
  j: "edcrfvt",
  k: "zhnujmi",
  l: "olmp678",
  m: "1qa2ws3",
  n: "4rf5tg6",
  o: "6zh7uj8"
};

function keyBy(object, key) {
  for (let n in bigObject) {
    if (bigObject[n] === key) {
      return bigObject[n];
    }
  }
}

console.time();
const value = keyBy(bigObject, "zhnujmi");
console.timeEnd();
