/**
 * Array can be initialized and defined in two ways
 * 1. Array Literal
 * 2. Array Constructor
 */

 //Array Literal Syntax

//  var arr = [elemt0, element1, element2, element3];
//Array declaration and defination
 var names = ['Scott', 'Smith', 'John', 'Biden'];

// Accessing Array

for(let i=0; i<names.length; ++i){
    console.log('Name:', names[i]);
}
console.log('________________ForEach()_____________________');
// Access array elments by using forEach() Method
names.forEach(element=>{
    console.log('Name:', element);
});

console.log('_________________map()____________________');
// Access array elments by using map() Method
names.map(element=>{
    console.log('Name:', element);
});

console.log('_________________filter()____________________');
// Access array elments by using filter() Method
names.filter(element=>{
    console.log('Name:', element);
});