// // constructors is uesd to create multiple objects with same structure
// object contructor stars with capital letters

function Student(name, age, rollnum){
    this.name =name;
    this.age = age;
    this.rollnum = rollnum
}
let Student1 =new Student("pavan",12,3);
console.log(Student1);
//
function Person(first,last,age,id,address){
    this.firstName = first;
    this.lastName = last;
    this.age =age;
    this.id = id;
    this.address = address;
}
let person1 = new Person("jone","doe",23,20,"hyderabad");
console.log(person1);
console.log(person1.age);
