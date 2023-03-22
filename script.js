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
// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    let inventory = arr1;
    arr2.forEach((product) => {
        const match = inventory.findIndex((el) => el[1] === product[1]);
        if (match >= 0) {
            inventory[match][0] = inventory[match][0] + product[0];
        } else if (match === -1) {
            inventory.push(product);
        } else return;
    });

    function Comparator(a, b) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    }
    inventory = inventory.sort(Comparator);
    return inventory;
}

updateInventory(
    [
        [21, 'Bowling Ball'],
        [2, 'Dirty Sock'],
        [1, 'Hair Pin'],
        [5, 'Microphone'],
    ],
    [
        [2, 'Hair Pin'],
        [3, 'Half-Eaten Apple'],
        [67, 'Bowling Ball'],
        [7, 'Toothpaste'],
    ]
);

////////////////////////////////////////////////////////////
// Codepen challenges:  expandable button
const selectBtn = document.querySelector('.button');
const content = document.querySelector('.content');
const arrow = document.querySelector('.arrow');

selectBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    if (content.style.height === 'auto') {
        content.style.height = '0';
        arrow.classList.toggle('flip');
    } else {
        content.style.height = 'auto';
        arrow.classList.toggle('flip');
    }
});

///////////////////////////////////////////////////////////
