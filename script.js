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
// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// function permAlone(str) {
//     let regex = /(.)\1+/;
//     const arr = str.split('');
//     const permutations = [];

//     if (str.match(regex) !== null && str.match(regex)[0] === str) {
//         return 0;
//     }

//     arr.forEach((letter, n) => {
//         let temp = arr.map((n) => n);
//         temp.splice(n, 1);
//         temp = [letter, ...temp];

//         for (let i = 0; i < arr.length; i++) {
//             let nextLetter = temp[i + 1];
//             permutations.push(temp.toString().replaceAll(',', ''));
//             temp[i] = nextLetter;
//             if (nextLetter) temp[i + 1] = letter;
//         }
//     });

//     const filtered = permutations.filter(function (string) {
//         return !string.match(regex);
//     });

//     return filtered.length;
// }

// console.log(permAlone('aab'));
// console.log(permAlone('aabb'));
// permAlone('aab');

//////////////////////////////////////////////////////////////
// Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

// function pairwise(arr, arg) {
//     const newArr = arr.map((n) => n);
//     let indexSum = 0;

//     newArr.forEach((element, i) => {
//         const index = i;
//         newArr[i] = NaN;
//         console.log(newArr);
//         for (let i = 0; i < newArr.length; i++) {
//             const sum = element + newArr[i + 1];
//             if (sum === arg) {
//                 indexSum = indexSum + (index + (i + 1));
//                 newArr[i + 1] = NaN;
//                 return;
//             }
//         }
//     });
//     return indexSum;
// }

// pairwise([1, 4, 2, 3, 0, 5], 7);
// // pairwise([1, 3, 2, 4], 4);
// // pairwise([1, 1, 1], 2);

//////////////////////////////////////////////////////////////////
// Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
// bubbleSort should not use the built-in .sort() method.

// function bubbleSort(array) {
//     const sortingArr = array.map((n) => n);
//     let i = 0;

//     while (i < sortingArr.length) {
//         let temp = '';

//         for (let i = 0; i < sortingArr.length; i++) {
//             temp = sortingArr[i];

//             if (sortingArr[i] > sortingArr[i + 1]) {
//                 sortingArr[i] = sortingArr[i + 1];
//                 sortingArr[i + 1] = temp;
//             }
//         }
//         i++;
//     }

//     return sortingArr;
// }

// bubbleSort([4, 2, 8, 1]);
// bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

////////////////////////////////////////////////////////////////////
// Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

// function selectionSort(array) {
//     let sortedArr = array.map((x) => x);

//     for (let i = 0; i < sortedArr.length; i++) {
//         const temp = sortedArr[i];
//         let smallest = sortedArr[i];
//         let position = i;

//         for (let a = i; a < sortedArr.length; a++) {
//             if (sortedArr[a] < smallest) {
//                 smallest = sortedArr[a];
//                 position = a;
//             }
//         }
//         sortedArr[i] = smallest;
//         sortedArr[position] = temp;
//     }

//     return sortedArr;
// }

// selectionSort([3, 7, 1, 5, 2]);
// selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);

////////////////////////////////////////////////////////////////////
// Instructions: Write a function insertionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

// function insertionSort(array) {
//     let sortedArr = [];

//     array.forEach((number) => {
//         if (sortedArr.length === 0) {
//             sortedArr.push(number);
//             return;
//         } else {
//             for (let i = 0; i < sortedArr.length; i++) {
//                 if (number < sortedArr[i]) {
//                     sortedArr.splice(i, 0, number);
//                     return;
//                 }
//                 if (number > sortedArr[i] && !sortedArr[i + 1]) {
//                     sortedArr.push(number);
//                     return;
//                 }
//             }
//         }
//     });

//     return sortedArr;
// }

// insertionSort([5, 3, 6, 10, 8, 2]);

////////////////////////////////////////////////////////////////////
// Instructions: Write a function quickSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    } else {
        const pivot = array[0];
        const less = [];
        const greater = [];

        for (let i = 1; i < array.length; i++) {
            if (array[i] <= pivot) {
                less.push(array[i]);
            } else {
                greater.push(array[i]);
            }
        }

        return [...quickSort(less), pivot, ...quickSort(greater)];
    }
}

quickSort([22, 4, 6, 2]);

////////////////////////////////////////////////////////////////////
