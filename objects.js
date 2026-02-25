// objectts
let movie = {
    name:"RRR",
    realease: 2021,
    director:"Rajamouli"
}
console.log(movie);
// adding new properties
movie.buget = "200crores"
console.log(movie);
movie.actores = ["NTR","Ramcharan"]
console.log(movie);

// accessing values
console.log(movie.actores[1]);
movie.actores.push("Mahesh babu");
console.log(movie);

// update the values
movie["budget"] = "2500crores";
movie["release"] = 2023;
console.log(movie);

// nested objcts
let student = {
    Name:"pavan",
    rollnum: 23,
    address:{
        city:"hyderabad",
        state:"telangana",

    }
}
console.log(student.address);
console.log(student);
console.log(student.name);
student.address.city = banglure;
console.log(student.address.city);