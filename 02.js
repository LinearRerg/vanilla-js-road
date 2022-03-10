/* 'use strict';

let hasDriversLicense =  false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');


'use strict'

function logger() {
    console.log('My name is jonas');
}
// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
console.log(apples, oranges)
const juice = `Juice with ${apples} apples and ${oranges} oranges`
return juice;
}

const appleJuice =  fruitProcessor(5, 0);
console.log(appleJuice)

console.log(fruitProcessor (5,0))


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice)




// function declaration
'use strict'

const age = calcAge1(1950);



function calcAge1 (birthYear){
   return 2037 - birthYear;
    }


console.log(age)

// function expression

const calcAge2 = function (birthYear){
    return 2037 - birthYear;
      }

      const age2 = calcAge1(1950)
      console.log(age, age)
      

// arrow function 
'use strict'


const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstname) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement} years` 
}


console.log(yearsUntilRetirement(1996, 'jonas'));
*/
function cutFruitPieces(fruit){
    return fruit * 4
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice;
    }

    console.log(fruitProcessor(10,3));

