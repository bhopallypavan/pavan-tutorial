// creating arrays

let  students = ["pavan","shiva","tharun"];
console.log(students);
console.log(students[2]);
console.log(students[0]);
// updating arry
students[3] = "prasad";
console.log(students[2]);

//push method//
students.push("pavan kumar");
console.log(students);
//pop method
students.pop();
console.log(students);
//shift method
//removes one element from the start an array//
students.shift();
console.log(students);
//unshift method
//adds one or more elements to the start of an array
students.unshift("pavan sarkar");
console.log(students);
//adding multiple elements using unshift
students.unshift("ravi","ramu","rajesh");
console.log(students);

//splice methos 
//is used to add, remove or replace elements in any position
students.splice(1,1);
console.log(students);








