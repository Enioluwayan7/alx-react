// Import Immutable.js
import { List } from 'immutable';

/**
 * Converts an array into an immutable List.
 * @param {Array} array - The array to convert.
 * @returns {List} An immutable List representation of the array.
 */
export function getListObject(array) {
    return List(array);
}

/**
 * Appends a string to an immutable List.
 * @param {List} list - The immutable List to modify.
 * @param {string} element - The string to append to the list.
 * @returns {List} A new immutable List with the appended element.
 */
export function addElementToList(list, element) {
    return list.push(element);
}

// Example usage:
const myArray = ['a', 'b', 'c'];
const myList = getListObject(myArray);
console.log(myList); // Output: List [ 'a', 'b', 'c' ]

const updatedList = addElementToList(myList, 'd');
console.log(updatedList); // Output: List [ 'a', 'b', 'c', 'd' ]
