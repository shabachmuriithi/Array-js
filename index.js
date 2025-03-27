//1
const arr1 = [3,7,34,90,12];
const lastElement =arr1[arr1.length - 1];
console.log({lastElement});
const lastElement2 =arr1.at(-1);
console.log({lastElement2});

const arr2 = [true, "gren", "where", 12, 56];
const lastElement3 =arr2[arr2.length-1];
console.log({lastElement3});

//2
const myPets =["Cow", "Bird", "Snake","Dog"];
const myPetsString = myPets.join(", ");
console.log({myPetsString});

//3
const arr3 =[-5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
const sortArr3 = arr3.sort((a,b) => a - b);
console.log({sortArr3});

//4
let arr=  ["boy", "man", "girl",  "school", "girl", "woman"];
let noDuplicates =[...new Set(arr)];
console.log({noDuplicates});

let arrDuplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log({arrDuplicates});

//5
let arr5 = ["the", "way", "x", 4];
let word ="food"
let searchOutcome = arr5.includes(word) ? word : "the search word not found";
console.log({searchOutcome});

//6
const fruits =["apple","cherry","banana","orange","strawberry","mango","kiwi","pear","Avocado","passion"];
let newFruit ="tomato";
let index = 5;
let newFruits =[fruits.slice(0,index) +"," +newFruit + ","+fruits.slice(index)];
console.log({newFruits});