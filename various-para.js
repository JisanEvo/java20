//  for a given string tell me weather it has been number of charector or not

function evenSozedString(str) {


    const size = str.length;
    console.log(str, size)

    if (size % 2 === 0) {
        console.log(`even size`);
        return true;
    }
    else {
        console.log(`odd size`)
        return false;
    }
}

// evenSozedString(`dhaka`);


// evenSozedString(`pbna`);
function doubleOrTriple(number, double) {

    if (double===true) {
        const result = number * 2;
        return result;
    }
   else{
    const result=number*3;
    return result;
   }

// }

// console.log(doubleOrTriple(5,true))

// console.log(doubleOrTriple(5,false))

function numberOfElements(number){
    const len =number.length;
    // return len;

}
numberOfElements([12,15,14,85,76,14,122,1445,166,58])
console.log(numberOfElements);
function getAge(person){
    const age=person.age;
    console.log(age);
    return age;
}
const boyos=getAge(25)
console.log(boyos);