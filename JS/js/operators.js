/** 
 * In JavaScript , an operator is a special seymbol used to perform 
 * operstions on operands(values and variables) 
 * 
 * For example 2 + 3 (2 and 3 are the operands and + is the operator)
 * 
 * Types of operators
 * 1. Assignment Operators
 * 2. Arithmetic operators
 * 3. Comparison operators
 * 4. Logical operators
 * 5. Bitwise operators
 * 6. String Operators
 * 7. Others Operators(Ternary, Spread etc.)
 * */

/** 1. Assignment Operators
 * Assignment operators used to assign values to variables, Fro example
 * const x = 5;
 * 
 */


 //= assignment
 let a=7; 
 console.log('a assignment', a); //7

 //+= addition assignment

a += 5; // a = a + 5

console.log('addition assignment:', a); //12

// -= Subtraction Assignment

a -= 10; // a = a-10;

console.log('Subtraction Assignment:', a); // 2

// *= Multiplication Assignment

a *= 10; // a = a * 10

console.log('Multiplication Assignment:', a); // 20

// /= Division Assignment

a /= 2; // a = a / 2;

console.log('Division Assignment:', a); // 10

// %= Remainder Assignment

//a %= 1; // a = a % 3;

console.log('Remainder Assignment:', a); // 1

// **= Exponential Assignment

a **= 2; // a = a**2; 
console.log('Exponential Assignment:', a);


/** 
 * Arithmetic Operators: Arithmetic operators are used to perform 
 * Arithmetic calculaions
 * like const number = 3 + 5;
 * here , the + operator is used to add two operands 3 and 5.
 * 
 * 1. Addition
 * 2. Subtraction
 * 3. Multiplication
 * 4. Division 
 * 5. Remainder
 * 6. Increment
 * 7. Decrement
 * 8. Exponentiation
 * 
*/

/**
 * Logical Operators: To perform the logical operations and return a boolean 
 * value, either or false
 * 
 * 1. Logical AND (&&)
 * 2. Logical OR (||)
 * 3. Logical NOT (!)
 *  
 * */ 

 let aBool = true;
 console.log('a', !aBool);

 let x= true;
 let y = false;

 console.log('AND', x && y);
 console.log('AND', y || x);

/** 
 * Ternary Operator(:?)
 * 
 * */

let u = 10, v=20;

let c = u > v ? u : v; // 20
let d = u < v ? u : v; // 20
console.log('c', c); // 20
console.log('d', d);

/** 
 *  Spread Operator (...)
 * It expands the array into individual elements. So it can be used to expand
 * the array in a places where zero or more elements are expected.
 * */ 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
// let arr3 = arr1.concat(arr2);
console.log('arr', arr3);

const user1 = {
    name: 'Jen',
    age: 22
}
const user2 = {
    name: 'Jen',
    location: 'Pune'
}

const mergedUser = {...user1, ...user2} // {name: 'Jen', age: 22, name: 'Jen', location: 'Pune'}
console.log('mergedUser', mergedUser);