document.getElementById('demo').innerText = "Web Developement";

// Variales, we use to store the data.
// By using the var , let and const we can declare variables in JavaScript

var x=10; // We can redefine and redeclare 
let y=20; // let variables can not be reclared, we can redefine but can't redeclare
const z=30; //Constant can not be redefined and constants must decared 
            //and defined at the same time

//reddefining variables
x=40;
y=50;
// z=60; can not reassign because of const declaration
var x = 100;
// let y = 200;

console.log('Value of X', x);
console.log('Value of Y', y);
console.log('Value of Z', z);


var number_1 = 100;

{//block started
    console.log('number_1', number_1);
    let number_2 = 200;// let is block scopped so can not access out side of block
    console.log('number_2', number_2);
} // end
console.log('number_1', number_1);
console.log('number_2', number_2);//not defined