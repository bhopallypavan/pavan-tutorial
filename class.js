function studentEntry (name, grade, age) {
    return {
        name: name,
        grade: grade,
        age: age
    }
};

function homework (name, grade) {
    // logic
    return {
      homeWork: "asdfsadf"
    }
}

class Student {
    name
    grade
    age
    constructor(name, grade, age) {
        this.name = name,
        this.grade = grade;
        this.age = age;
    }

    studentEntry() {
        return {
            'name': this.name,
            'grade': this.grade,
            'age': this.age
        }
    }

    homeWork() {
        //logic
        this.name
        console.log('home work assigned')
        return {
            homeWork: 'fdsafsd'
        }
    }
}

const student = new Student('hari',5,15);

student.homeWork();

// console.log(studentEntry('Pawan',12,21));
// console.log(homework('Pawan',12));