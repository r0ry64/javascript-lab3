let myArray = ["Chicken","Pizza","Pie",69,420,666];
console.log("My array:",myArray)

let first = myArray[0];
let last = myArray[myArray.length-1];
let middle = myArray[myArray.length/2];
console.log("First element in my array:",first);
console.log("Last element in my array:",last);
console.log("Middle element in my array:",middle);
console.log("The length of my array is:", myArray.length);

myArray.push("Cheeseburger");
console.log("My array after push:", myArray);
myArray.pop();
console.log("My array after pop:", myArray);
myArray.splice(1, 1, "Taco");
console.log("My array after splicing second element:", myArray);

console.log("This is a For Loop iterating through my array:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

const [firstElement,secondElement, ...restOfElements] = myArray;
console.log("First element:", firstElement);
console.log("Second element:", secondElement);
console.log("Rest of the array:", restOfElements);
