console.log("RADHE RADHE");

let lastName = 'yasharth';

let firstName = new String('yasharth');

let message = 'this is me yasharth';

let words = message.split(' '); // SPLIT FUNCTION SPLIT THE WORDS AND IF WE GIVE THE SPACE BETWEEN THE COLUMNS THEN IT WILL SEPARATE THE WHOLE SENTENS'S EACH WORDS.
// NOW WE CAN CHANGE IT TO VARIOUS STRINGS LIKE

let words1 = message.toUpperCase();//toUppercase se string uppercase me change ho jaaegi
console.log(words1);

let words3 = message.toLowerCase();// is se message lowercase me change ho jayenge 
console.log(words3);


let date = new Date();

let date3 = new Date(2005, 1, 07,)
console.log(date3);
console.log(date);


date3.setFullYear(1947);
date3.get;
console.log(date3);

let numbers = [1,4,5,7];

console.log(numbers);

//---------SEARCHING----------------------

console.log(numbers.includes(7));


console.log(numbers.indexOf(4,2));
//---------THESE ABOVE SEARCHING METHODS ARE FOR PRIMITIVE DATA TYPES ------


// NOW FOR REFERENCES ---

let courses = [
    {no:1, name:'yasharth'},
    {no:2, name:'yash'}
];

console.log(courses);
let course = courses.find(course => course.name === 'mukul');



console.log(course);


/* --------REMOVE ELEMENTS ---------------- */

let numbers1 = [1,2,3,4,5,6,7];

numbers1.pop(); //it remove the number from starting

numbers1.shift(); // it remove the number from middle

numbers1.splice(2,1); // it means remove it means remove element which is on 3rd number and 1 denotes that remove only one element 

console.log(numbers1);


//----------------EMPTYING AND ARRAY---------------

let nubers = [1,2,3,4,5];

nubers = [];

console.log(nubers);

//--------COMBINING OF ELEMENTS USING CONCAT------------

let first = [1,2,3];
let second = [4,5,6];

let combined = first.concat(second);

console.log(combined);

//-----slicing------
let f1 = [1,2,3,4,5]

let sliced = combined.slice(2,4); // 2nd index se start hoga and 4th index tk chalega 

console.log(sliced);

//----ITERATING AN ARRAY----------

let arr = [10,20,30,40,50];

for(let value of arr) {
    console.log(value);
}

arr.forEach(function(number){
    console.log(number);
})

//joining aray

let n3 = [5,6,7,8,9];
const joined = n3.join(',');

console.log(joined);

let message5 = 'this is my first message';
let parts = message5.split(' ');
console.log(parts);

let joined1 = parts.join('-')
console.log(joined1) // isse sentense or string ke beech me - sign aajaega


//--SORTING ARRAYS------

let numbersm = [40,30,10,20,34];

numbersm.sort();  // by this the arrat set or sorted in the ordered manner 

console.log(numbersm);

//----FILTERING ARRAYS

let y = [1,2,-1,-6];
let filtered = y.filter(function(value){
    return value >=0
})

console.log(filtered);

//using arrow function

let nh = [4,5,6,-7,-8,-3];
let filtered4 = nh.filter(value => value >= 3);

console.log(nh);


//MAPPING METHOD

let nb = [2,3,4,5];

/* let item = nb.map(function(value){
    return 'student_no' + value;
}) */

    let item = nb.map(value => 'student_no' + value);

console.log(item)








