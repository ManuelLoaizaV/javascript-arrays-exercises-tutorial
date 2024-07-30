const arr = [45,67,87,23,5,32,60];
const reversedArray = [];
for (let i = 0; i < arr.length; i++) {
    reversedArray.push(arr[arr.length - 1 - i]);
}

console.log(reversedArray);