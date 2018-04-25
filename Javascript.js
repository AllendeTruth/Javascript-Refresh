// Lecture: Variables

// var name = "Nico";
// console.log(name);

// var lastName = "Allende";
// console.log(lastName);

// var age = 100;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);


//Lecture: variables 2

// var name = "Nico";
// var age = 100;

// // console.log(name + age); //type coercion // returns Nico100

// // console.log(age + age); // 200

// var job, isMarried;
// // console.log(job); //undefined

// job = "teacher";
// isMarried = false;

// console.log(name + " is " + age + " years old and a " + job + ". Is he married? " + isMarried +".");
// //variable mutation
// age = "thirty six";
// job = "hustler";

// console.log(name + " is " + age + " years old and a " + job + ". Is he married? " + isMarried +".");


// var lastName = prompt("What is the last name?");
// console.log(lastName);

// alert(name + " is " + age + " years old and a " + job + ". Is he married? " + isMarried +".");


//Lecture: Operators
// var now = 2018
// var birthYear = now-100; //1918




// console.log(birthYear);
// //operator precedence * is higher priortity than -
// var ageMark = 30;
// var ageJohn = 30; 

// ageJohn = ageMark =(3+5)*4-6;
// ageJohn++;

// ageMark *=2
// console.log(ageJohn);
// console.log(`${ageMark} ageMark`);



//Lecture: if/else statments

// var name = "Nico";
// console.log(name);

// // var lastName = "Allende";
// // console.log(lastName);

// var age = 100;
// var isMarried = false;

// if (isMarried){
//     console.log(name + "is married!")
// } else {
//     console.log("hopefully " + name + " will get married soon!")
// }

// // == does type coercion === does not use ===

// if(23=="23"){
//     console.log("print");
// }


// //Lectuer : boolean logic and switch

// var age = 19;

// if(age<20){
//     console.log("J is teenager")
// } else if(age>=20 && age<30){
//     console.log("j is a young man");
// } else {
//     console.log("j is a man")
// };


// //Case switch

// var job = "teacher";

// job = prompt("What does John do?")

// switch (job){
//     case "teacher":
//         console.log("John teaches kids");
//         break;
//     case "driver":
//         console.log("John drives a cab in Lisbon.");
//         break;
//     case "cop":
//         console.log("John helps fight crime.");
//         break;

//     default: 
//         console.log("John does something else.");
        
// }



var heightJ = 100;
var heightM = 110;
var ageJ = 10;
var ageM = 9;
var heightD = 110;
var ageD = 10;

heightJ = prompt("What is John's Height?");
ageJ = prompt("What is John's age?");
heightM = prompt("What is Mike's Height?");
ageM = prompt("What is Mike's age?");
heightD = prompt("What is David's Height?");
ageD = prompt("What is David's age?");

var scoreJ = heightJ +(ageJ*3);
var scoreM = heightM +(ageM*3);
var scoreD = heightD +(ageD*3);

if(scoreJ === scoreM || scoreM === scoreD || scoreJ === scoreD){
    console.log("It's a tie!");
} else if(scoreJ > scoreM && scoreD) {
    console.log("John is the winner!");
} else if (scoreM > scoreJ && scoreD) {
    console.log("Mike is the winner!");
}else {
    console.log("David is the winner!");
}


// console.log(scoreJ +" is John's Score");
// console.log(scoreM +" is Mike's Score");