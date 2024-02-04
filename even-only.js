//******
// ***create function that will return only the even numbers
//return the sum of even numbers
// */

// function evenNumberOnly(numbers) {

//     const evens = [];

//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             console.log(number)
//             evens.push(number)
//         }
//     }
//     return evens;
// }
// const number = [1, 5, 7, 9, 12, 15, 17, , 24, 48, 19, 25, 50]

// const evens = evenNumberOnly(number);
// console.log(`evens number are:`,evens);


function sumOfEvenNumber(number) {

    let sum = 0;

    for (const num of number) {


        if (num % 2 === 0) {
            console.log(num);
            sum = sum + num;
        }


    }

 return sum;

}

const numbers = [12, 24, 48, 96, 15, 65]
const sum=sumOfEvenNumber(numbers);
// console.log(sum);
console.log(`sum of the even number`,sum)