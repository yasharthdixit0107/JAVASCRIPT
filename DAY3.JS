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




