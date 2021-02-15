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
let dupNames = names.forEach(
    function(element, index){
     console.log('element', element, index);
     return element;
     /* if(index==2){
        names.push(10); //['Scott', 'Smith', 'John', 'Biden', 10]
        names.splice(2, 1);//array.splice(index, 1) ['Scott', 'Smith', 'Biden', 10]
     } */
    }
);

console.log('dupNames', dupNames);
// console.log('names', names);
console.log('_________________map()____________________');
// Access array elments by using map() Method
let ages = [12, 26, 56, 18, 7, 10, 11, 20];
let dupliCateNames = ages.map(element=>element % 2==0
    /* if(index==2){
        names.push(10); //['Scott', 'Smith', 'John', 'Biden', 10]
        names.splice(2, 1);//array.splice(index, 1) ['Scott', 'Smith', 'Biden', 10]
     } */
      
);
console.log('dupliCateNames', dupliCateNames);
console.log('ages', ages);

let age = [12, 26, 56, 18, 7, 10, 11, 20];
age.length = 4;
console.log('_________________filter()____________________');
// Access array elments by using filter() Method
let dupliName = age.filter(ele=>ele % 2==0);
console.log('dupliName', dupliName);
console.log('age', age);