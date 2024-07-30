let myNumbers = [23,234,345,4356234,243,43,56,2];

function myFunction(value) {
    return 3 * value;
}

const newArray = myNumbers.map(myFunction);

console.log(newArray);
