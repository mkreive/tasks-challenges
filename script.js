'use strict';

class Stack {
    constructor() {
        this.arr = [];
    }

    push(item) {
        this.arr.push(item);
        return this.arr.length;
    }

    pop() {
        const poped = this.arr.pop();
        return poped;
    }

    isEmpty() {
        return this.arr.length > 0 ? true : false;
    }

    peek() {
        const lastItem = this.arr.at(-1);
        return lastItem;
    }

    length() {
        return this.arr.length;
    }
}

const stack = new Stack();
stack.isEmpty(); // true
stack.push(1);
stack.push(2);
stack.length(); // 2
stack.push(3);
stack.peek(); // 3
stack.pop(); // 3
stack.isEmpty(); // false

////////////////////////////////////////////////////////////
function isBoolean(value) {
    return typeof value === boolean ? true : false;
}

function isNumber(value) {
    return typeof value === number ? true : false;
}

function isNull(value) {
    return value === null ? true : false;
}

function isString(value) {
    return typeof value === string ? true : false;
}

function isSymbol(value) {
    return typeof value === symbol ? true : false;
}

function isUndefined(value) {
    return typeof value === undefined ? true : false;
}

////////////////////////////////////////////////////////////

function insertionSort(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}

////////////////////////////////////////////////////////////
// isPlainObject(value): Return true if value is a plain object, false otherwise (for arrays, functions, etc).
// A plain object, or what is commonly known as a Plain Old JavaScript Object (POJO) is any object whose prototype is Object.prototype or an object created via Object.create(null).

function isArray(value) {
    return Array.isArray(value);
}

function isFunction(value) {
    return typeof value === 'function' ? true : false;
}

function isObject(value) {
    return typeof value === 'object' && !undefined && !null ? true : false;
}

function isPlainObject(value) {
    throw 'Not implemented!';
}

////////////////////////////////////////////////////////////
