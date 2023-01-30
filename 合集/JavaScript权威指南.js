/*
 * @Author: try try418@163.com
 * @Date: 2023-01-29 14:57:23
 * @Description:
 */
function not(f) {
  return function (...args) {
    const result = f.apply(this, args);
    return !result;
  };
}

function range(from, to) {
  let r = Object.create(range.methods);
  r.from = from;
  r.to = to;
  return r;
}
range.methods = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  toString() {
    return `(${this.from}...${this.to})`;
  },
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
};

let r = range(1, 3);

function Range(from, to) {
  this.from = from;
  this.to = to;
}
Range.prototype = {
  includes(x) {
    return this.from <= x && x <= this.to;
  },
  toString() {
    return `(${this.from}...${this.to})`;
  },
  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },
};

let r2 = new Range(1, 3);

let F = function () {};
let p = F.prototype;
let c = p.construct;
c === F;

// 任何普通JavaScript函数 (不包括箭头函数、生成器函数和异步函数)都可以用作构造函数，而构造函数调用需要一个prototype属性.
// 为此，每个普通JavaScript函数自动拥有一个prototype属性
// 这个属性的值是一个对象，有一个不可枚举的constructor属性。而这个constructor 属性的值就是该函数对象

let Square = class {
  constructor(x) {
    this.area = x * x;
  }
};

new Square(3).area; // =>9
