/* console.log('lets start todays hustle');
// object create

let rectangle = {
    length: 1,
    breadth: 5,

    draw: function() {
        console.log('drawing something wait');
    }
};
 */

/* ------------------FACTORY FUNCTION------------- */
function createRectangle(length, breadth) {
    return rectangle = {
        length,
        breadth,

        draw () {
            console.log('darwing rectangle');

        }
    };

}

let rectangleObj1 = createRectangle(5,4);
let rectangle2 = createRectangle(6, 7);


/*  --------------CONSTRUCTER FUNCTON---------------- */
function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function() {  /* YE HAI FUNCTION */
        console.log('drawing');
    }
}

/* ----------OBJECT CREATION USING CONSTRUCTER------------- */
let rectangleObject = new Rectangle(8, 9);

rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);





let a = 10;
let b = a;

a++;
console.log(a);
console.log(b);


let = 10;
function inc(l) {
    l++;
}
inc(l);    /*  ISKO BOLTE HAIN FUNCTION NCALL KRNA */

console.log(l);


/*  -----REFENCES CASE ------ */

let k = {value:10};

function inc(k) {
    k.value++;
} 

inc(k);

console.log(k.value);


let rectangale = {
    length: 2,
    breadth: 4
};

// ------FOR-IN LOOP-----

for(let key in rectangale ){

    //KEYS ARE REFLECTED THROUGH KEY VARIABLE.
    //VALUES ARE REFLECTED THROUGH RECTANGALE[KEY]

    console.log(key,rectangale[key]);
}


/*  FOR-OF LOOP ON ITERABLES LIKE ARRAYS */

for(let key of Object.entries(rectangale)) {
    console.log(key);
}


/* 
rectangle.draw;
rectangle.breadth; */




if('color in rectangale') {
    console.log('present');
}

else {
    console.log('absent')
}


//---OBJECT CLONING-----

let src = {
    a:10,
    b:20,
    c:30
};

let dest = {};

for(let key in src) {
    dest[key] = src[key];
}

console.log(dest);

src.a++;

//#2 OBKECT CLONE

let src2 = {
    a:18,
    b:14,
    c:15
}

let dest11 = Object.assign({}, src2);

console.log(dest11);

