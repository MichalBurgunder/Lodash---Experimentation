const _ = require("lodash");

let prop1 = { a: 5 };
let prop2 = { b: "Some property", d: null };
let prop3 = { a: [2, 3], c: "An amazing String", d: 777 };
let prop4 = { a: 888 };
let prop5 = { a: 999 };

console.time();

const finalProp = _.assign(prop1, prop2, prop3, prop4, prop5);
console.log(finalProp);
// ==> { a: 999, b: 'Some property', d: 777, c: 'An amazing String' }
console.timeEnd();
//
