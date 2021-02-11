/** 
 * Object is a non-primitive dataType. The only difference between
 * variable and objects, objects can old multiple values in terms of 
 * properties and methods.
 * 
 * Objct properties: Properties can hold values of premitive data types, 
 * non-premitive data types, and methods are the functions.
 * 
 * 
 * In javaScript, an object can be created in two ways
 * 1. Object literal // var obj {key1: value1, key2: value}
 * 2. Object constructor 
*/

var obj = {}; //object literal
 obj = {
    name: 'Sirisha'
 };

 // To access the javaScript object property
 // We can get or set values of an object properties using dot 
 // notation or backet

 var person = {
     firstName: "James",
     lastName: "Bond",
     age: 25,
     getFullName: function (){
         return this.firstName+' '+this.lastName
     }
 }

 console.log('firstName:', person.firstName);// James
 console.log('lastName:', person.lastName);
 console.log('age:', person.age);
 let fullName1 = person.getFullName();// James Bond

 console.log('fullName1:', fullName1);

 person.firstName = 'Scott'; // We change the value
 console.log('firstName:', person.firstName);// Scott

 let fullName = person.getFullName();

 console.log('fullName:', fullName); // Scott Bond



